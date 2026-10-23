import './style.css';

(function(){
'use strict';

/* ============================================================
   1. CURSOR — terracotta dot that follows (snappy, light trail)
   ============================================================ */
const cursor = document.getElementById('cursor');
let mx = window.innerWidth/2, my = window.innerHeight/2;
let cxp = mx, cyp = my;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function followCursor(){
  cxp += (mx - cxp) * 0.35;   // light follow — present but low latency
  cyp += (my - cyp) * 0.35;
  cursor.style.transform = 'translate(' + cxp + 'px,' + cyp + 'px) translate(-50%,-50%)';
  requestAnimationFrame(followCursor);
})();
document.querySelectorAll('[data-card]').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('card-hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('card-hover'));
});

/* ============================================================
   2. TOPOGRAPHIC WAVE FIELD (reusable for hero + contact)
   - Cursor acts as a wave source; ripples travel across the
     whole background. Displacement is clamped to ~1 inch.
   - Origin = raw pointer position => zero latency.
   ============================================================ */
function seededRand(seed){
  let s = seed;
  return function(){ s = (s*1664525 + 1013904223) & 0xffffffff; return (s>>>0)/0xffffffff; };
}

/* Classic Perlin noise — gives the organic "terrain" that the
   contour lines are traced from (like a real elevation map). */
function makePerlin(seed){
  const rnd = seededRand(seed);
  const perm = new Uint8Array(512);
  const p = [];
  for(let i=0;i<256;i++) p[i]=i;
  for(let i=255;i>0;i--){ const j=Math.floor(rnd()*(i+1)); const t=p[i]; p[i]=p[j]; p[j]=t; }
  for(let i=0;i<512;i++) perm[i]=p[i&255];
  const fade=t=>t*t*t*(t*(t*6-15)+10);
  const lerp=(a,b,t)=>a+(b-a)*t;
  function grad(h,x,y){ const g=h&3; const u=g<2?x:y; const v=g<2?y:x; return ((g&1)?-u:u)+((g&2)?-v:v); }
  return function(x,y){
    const X=Math.floor(x)&255, Y=Math.floor(y)&255;
    const xf=x-Math.floor(x), yf=y-Math.floor(y);
    const u=fade(xf), v=fade(yf);
    const aa=perm[perm[X]+Y], ab=perm[perm[X]+Y+1], ba=perm[perm[X+1]+Y], bb=perm[perm[X+1]+Y+1];
    const x1=lerp(grad(aa,xf,yf),   grad(ba,xf-1,yf),   u);
    const x2=lerp(grad(ab,xf,yf-1), grad(bb,xf-1,yf-1), u);
    return lerp(x1,x2,v); // ~ -1 .. 1
  };
}

/* Build topographic contours via marching squares over an fbm field.
   Returns two flat segment arrays [x1,y1,x2,y2, ...] — base + accent. */
/* Join loose marching-squares segments into continuous polylines so they
   can be drawn as smooth bezier paths (geometric vertices, organic curves). */
function stitch(segs){
  const nodes = new Map();
  const kf = (x,y)=> (Math.round(x*8)) + '_' + (Math.round(y*8));
  function nk(x,y){ const k=kf(x,y); if(!nodes.has(k)) nodes.set(k,{x,y,nbrs:[]}); return k; }
  const used = new Set();
  const ek = (a,b)=> a<b ? a+'|'+b : b+'|'+a;
  for(const s of segs){
    const ka=nk(s[0],s[1]), kb=nk(s[2],s[3]);
    if(ka===kb) continue;
    nodes.get(ka).nbrs.push(kb);
    nodes.get(kb).nbrs.push(ka);
  }
  const keys=[...nodes.keys()];
  const polys=[];
  function walk(start){
    const line=[]; let cur=start;
    while(true){
      const n=nodes.get(cur);
      line.push(n.x,n.y);
      let nxt=null;
      for(const nb of n.nbrs){ if(!used.has(ek(cur,nb))){ nxt=nb; break; } }
      if(nxt===null) break;
      used.add(ek(cur,nxt));
      cur=nxt;
      if(cur===start){ const s=nodes.get(cur); line.push(s.x,s.y); break; }
    }
    return line;
  }
  const open = k => nodes.get(k).nbrs.some(nb=>!used.has(ek(k,nb)));
  // open contours first (endpoints), then remaining closed loops
  for(const k of keys){ if(nodes.get(k).nbrs.length===1 && open(k)){ const l=walk(k); if(l.length>=4) polys.push(l); } }
  for(const k of keys){ if(open(k)){ const l=walk(k); if(l.length>=4) polys.push(l); } }
  return polys;
}

function buildContours(W, H){
  const noise = makePerlin(1337);
  const SCALE = 0.00105;             // larger, more sprawling landforms (survey-map scale)
  function fbm(x,y){
    let v=0, amp=0.5, f=1;
    for(let o=0;o<4;o++){ v += noise(x*f, y*f)*amp; amp*=0.5; f*=2; }
    return v;
  }

  const cell = 30;                   // grid resolution (px) — fine for smooth flowing curves
  const cols = Math.ceil(W/cell)+1;
  const rows = Math.ceil(H/cell)+1;

  const val = new Float32Array((cols+1)*(rows+1));
  const idx = (i,j)=> j*(cols+1)+i;
  for(let j=0;j<=rows;j++)
    for(let i=0;i<=cols;i++)
      val[idx(i,j)] = fbm(i*cell*SCALE, j*cell*SCALE);

  // moderately-spaced levels => open, sprawling contours (not packed rings)
  const levels = [];
  for(let L=-0.66; L<=0.66; L+=0.062) levels.push(+L.toFixed(3));

  const it = (lv,a,b)=> Math.abs(a-b)<1e-6 ? 0.5 : (lv-a)/(b-a);
  const lines = [];

  levels.forEach((lv, li) => {
    const accent = (li % 5 === 2);     // sparse terracotta contours winding through
    const segs = [];
    for(let j=0;j<rows;j++){
      for(let i=0;i<cols;i++){
        const x0=i*cell, y0=j*cell, x1=x0+cell, y1=y0+cell;
        const tl=val[idx(i,j)],   tr=val[idx(i+1,j)],
              br=val[idx(i+1,j+1)], bl=val[idx(i,j+1)];
        let c=0;
        if(tl>lv)c|=8; if(tr>lv)c|=4; if(br>lv)c|=2; if(bl>lv)c|=1;
        if(c===0||c===15) continue;
        const T=[x0+it(lv,tl,tr)*cell, y0];
        const R=[x1, y0+it(lv,tr,br)*cell];
        const B=[x0+it(lv,bl,br)*cell, y1];
        const Lf=[x0, y0+it(lv,tl,bl)*cell];
        const seg=(p,q)=>segs.push([p[0],p[1],q[0],q[1]]);
        switch(c){
          case 1:  seg(Lf,B); break;
          case 2:  seg(B,R);  break;
          case 3:  seg(Lf,R); break;
          case 4:  seg(T,R);  break;
          case 5:  seg(T,R); seg(Lf,B); break;
          case 6:  seg(T,B);  break;
          case 7:  seg(T,Lf); break;
          case 8:  seg(T,Lf); break;
          case 9:  seg(T,B);  break;
          case 10: seg(T,Lf); seg(R,B); break;
          case 11: seg(T,R);  break;
          case 12: seg(Lf,R); break;
          case 13: seg(B,R);  break;
          case 14: seg(Lf,B); break;
        }
      }
    }
    const polys = stitch(segs);
    for(const p of polys) lines.push({ pts:p, accent });
  });

  return { lines, cell, cols, rows };
}

function createTopo(canvas, host, palette){
  const ctx = canvas.getContext('2d');
  let lines = [];                           // [{pts:[x,y,...], accent}]
  let cell = 32, gw = 0, gh = 0;            // vertex-grid dims of the spring field
  let ox, oy, vx, vy;                        // per-vertex offset + velocity (springs)
  let pointerX = -9999, pointerY = -9999;    // raw pointer (zero latency)
  let visible = true;

  /* Magnetic repulsion + spring field:
     - cursor repels vertices across a WIDE radius (no travelling ripple),
     - a spring pulls every vertex back to its base coordinate with damping,
       so distorted ridges snap cleanly back when the cursor leaves. */
  const STIFF = 0.06;   // spring stiffness (snap-back)
  const DAMP  = 0.84;   // velocity damping (responsive, still elastic)
  const PUSH  = 2.7;    // magnetic repulsion strength
  const MAXD  = 44;     // max vertex displacement (px)
  let   R     = 340;    // influence radius — set in resize to ~28% of canvas area
  let   R2    = R*R;

  function resize(){
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const c = buildContours(canvas.width, canvas.height);
    lines = c.lines;
    cell = c.cell; gw = c.cols + 1; gh = c.rows + 1;
    const n = gw * gh;
    ox = new Float32Array(n); oy = new Float32Array(n);
    vx = new Float32Array(n); vy = new Float32Array(n);
    // radius covering ~28% of the canvas area: pi*R^2 = 0.28*W*H
    R = Math.sqrt(0.28 * canvas.width * canvas.height / Math.PI);
    R2 = R*R;
  }

  host.addEventListener('mousemove', e => {
    const rect = host.getBoundingClientRect();
    pointerX = e.clientX - rect.left;
    pointerY = e.clientY - rect.top;
  });
  host.addEventListener('mouseleave', () => { pointerX = -9999; pointerY = -9999; });

  // integrate one step of the repulsion + spring field
  function physics(){
    const hasP = pointerX > -9000;
    for(let j=0;j<gh;j++){
      const wy = j*cell;
      for(let i=0;i<gw;i++){
        const k = j*gw + i;
        let fx = -STIFF*ox[k];            // spring toward base coordinate
        let fy = -STIFF*oy[k];
        if(hasP){
          const dx = i*cell - pointerX, dy = wy - pointerY;
          const d2 = dx*dx + dy*dy;
          if(d2 < R2 && d2 > 1e-6){
            const dist = Math.sqrt(d2);
            const t = 1 - dist/R;
            const fall = t*t*(3-2*t);       // smoothstep — wide, cohesive field
            const mag = PUSH * fall;
            fx += (dx/dist)*mag;            // pure repulsion: push away from cursor
            fy += (dy/dist)*mag;
          }
        }
        let nvx = (vx[k] + fx) * DAMP;
        let nvy = (vy[k] + fy) * DAMP;
        vx[k] = nvx; vy[k] = nvy;
        let nox = ox[k] + nvx, noy = oy[k] + nvy;
        if(nox> MAXD)nox= MAXD; else if(nox<-MAXD)nox=-MAXD;
        if(noy> MAXD)noy= MAXD; else if(noy<-MAXD)noy=-MAXD;
        ox[k] = nox; oy[k] = noy;
      }
    }
  }

  // bilinear sample of the offset field at a pixel position
  const SAMP = [0,0];
  function sample(x,y){
    let gx = x/cell, gy = y/cell;
    let i0 = Math.floor(gx), j0 = Math.floor(gy);
    let fx = gx-i0, fy = gy-j0;
    if(i0<0){i0=0;fx=0;} if(j0<0){j0=0;fy=0;}
    if(i0>gw-2){i0=gw-2;fx=1;} if(j0>gh-2){j0=gh-2;fy=1;}
    const a=j0*gw+i0, b=a+1, c=a+gw, d=c+1;
    const x0=ox[a]+(ox[b]-ox[a])*fx, x1=ox[c]+(ox[d]-ox[c])*fx;
    const y0=oy[a]+(oy[b]-oy[a])*fx, y1=oy[c]+(oy[d]-oy[c])*fx;
    SAMP[0]=x0+(x1-x0)*fy; SAMP[1]=y0+(y1-y0)*fy;
  }

  // draw polylines as smooth quadratic paths through displaced vertices
  // (vertices = geometric control points; midpoints = smooth transitions)
  function strokeLines(accentPass, color, width){
    ctx.beginPath();
    for(const L of lines){
      if(L.accent !== accentPass) continue;
      const p = L.pts, n = p.length/2;
      if(n < 2) continue;
      sample(p[0],p[1]); let x0=p[0]+SAMP[0], y0=p[1]+SAMP[1];
      ctx.moveTo(x0,y0);
      if(n === 2){ sample(p[2],p[3]); ctx.lineTo(p[2]+SAMP[0],p[3]+SAMP[1]); continue; }
      for(let i=1;i<n-1;i++){
        sample(p[i*2],   p[i*2+1]);   const cx=p[i*2]  +SAMP[0], cy=p[i*2+1]+SAMP[1];
        sample(p[i*2+2], p[i*2+3]);   const nx=p[i*2+2]+SAMP[0], ny=p[i*2+3]+SAMP[1];
        ctx.quadraticCurveTo(cx, cy, (cx+nx)/2, (cy+ny)/2);
      }
      const li=(n-1)*2; sample(p[li],p[li+1]);
      ctx.lineTo(p[li]+SAMP[0], p[li+1]+SAMP[1]);
    }
    ctx.strokeStyle=color; ctx.lineWidth=width; ctx.stroke();
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.lineJoin='round'; ctx.lineCap='round';
    strokeLines(false, palette.base,   0.8);   // dense hair-line ridges
    strokeLines(true,  palette.accent, 1.15);  // structural accent boundaries
  }

  function frame(){
    if(visible){ physics(); draw(); }
    requestAnimationFrame(frame);
  }

  if('IntersectionObserver' in window){
    new IntersectionObserver(es => { es.forEach(e => { visible = e.isIntersecting; }); },
      {threshold:0.01}).observe(host);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(frame);
}

createTopo(
  document.getElementById('topo-hero'),
  document.getElementById('hero'),
  { accent:'rgba(224,72,26,0.55)', base:'rgba(25,23,19,0.13)' }   // --accent / --hair
);
createTopo(
  document.getElementById('topo-contact'),
  document.getElementById('contact'),
  { accent:'rgba(224,72,26,0.55)', base:'rgba(239,233,223,0.13)' }
);

/* ============================================================
   3. MARQUEE — Surabhi's skills, constant right-to-left drift.
      Independent of page scroll (always its own natural speed).
   ============================================================ */
const MARQUEE_ITEMS = [
  'TypeScript','<em>React / Next.js</em>','Angular',
  'Node.js','<em>Python</em>','GraphQL',
  'AWS','<em>Docker</em>','PostgreSQL',
  'Three.js','<em>RAG & Agentic AI</em>','REST APIs',
  'CI/CD','<em>UI / UX</em>','Figma',
];
const track = document.getElementById('marquee-track');
[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].forEach(t => {
  const s = document.createElement('span'); s.innerHTML = t; track.appendChild(s);
});

let marqueeX = 0;
const MARQUEE_SPEED = 0.9;    // constant natural drift (px/frame), right -> left

(function marqueeFrame(){
  marqueeX -= MARQUEE_SPEED;                 // steady, scroll-independent
  const setW = track.scrollWidth / 3;
  if(marqueeX < -setW) marqueeX += setW;
  track.style.transform = 'translateX(' + marqueeX + 'px)';
  requestAnimationFrame(marqueeFrame);
})();

/* ============================================================
   4. CLOCK
   ============================================================ */
function tick(){
  const now = new Date();
  const jst = new Date(now.getTime() + now.getTimezoneOffset()*60000 + 9*3600000);
  const el = document.getElementById('clock');
  if(el) el.textContent = String(jst.getHours()).padStart(2,'0') + ' : ' + String(jst.getMinutes()).padStart(2,'0');
}
tick(); setInterval(tick, 20000);

/* ============================================================
   5. LOADER
   ============================================================ */
const pct = document.getElementById('pct');
const loader = document.getElementById('loader');
let v = 0;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function finish(){
  loader.classList.add('done');
  document.body.classList.remove('locked');
  document.body.classList.add('ready');
  setTimeout(() => loader.remove(), 1100);
}
if(reduce){ pct.textContent = '100'; setTimeout(finish, 200); }
else{
  const iv = setInterval(() => {
    v += Math.floor(Math.random()*9)+3;
    if(v >= 100){ v=100; pct.textContent=v; clearInterval(iv); setTimeout(finish, 420); }
    else pct.textContent = v;
  }, 90);
}

/* ============================================================
   6. SCROLL REVEAL + ACTIVE NAV
   ============================================================ */
const io = new IntersectionObserver(es => {
  es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:.16, rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const navLinks = [...document.querySelectorAll('.nav-links a')];
const navIO = new IntersectionObserver(es => {
  es.forEach(e => {
    if(e.isIntersecting){
      navLinks.forEach(l => l.classList.remove('active'));
      const m = navLinks.find(l => l.getAttribute('href') === '#' + e.target.id);
      if(m) m.classList.add('active');
    }
  });
}, {threshold:.4});
['work','about','services','contact'].forEach(id => {
  const el = document.getElementById(id); if(el) navIO.observe(el);
});

})();
