import './style.css';

(function(){
'use strict';

/* ============================================================
   0. TECH ICON MAP — Simple Icons CDN slugs for common techs.
   Values the map can't resolve render as a terracotta dot.
   ============================================================ */
const ICON_SLUGS = {
  // languages
  'typescript':'typescript','javascript':'javascript','javascript (es6+)':'javascript',
  'python':'python','java':'openjdk','html5':'html5','sass':'sass',
  'sql':'postgresql','sql (postgresql)':'postgresql',
  // frontend
  'react':'react','react / next.js':'react','angular':'angular','next.js':'nextdotjs',
  'rxjs':'reactivex','shadcn/ui':'shadcnui','figma':'figma','three.js':'threedotjs',
  'redux':'redux','vite':'vite','tailwindcss':'tailwindcss',
  // backend
  'node.js':'nodedotjs','express':'express','spring boot':'springboot',
  'graphql':'graphql',
  // data / cloud
  'postgresql':'postgresql','postgresql (relational)':'postgresql','mysql':'mysql',
  'docker':'docker','github actions':'githubactions','git':'git','postman':'postman',
  // auth / testing
  'jwt':'jsonwebtokens','jwt authentication':'jsonwebtokens',
  'jest':'jest',
  // third party
  'clerk':'clerk'
};
// Inline SVG marks for techs that aren't on simpleicons (AWS) or whose
// simpleicons form reads oddly next to the brand (CSS3 shield). Kept
// monochrome in `currentColor` so they match the ink tone of the rest.
const ICON_INLINE = {
  // AWS — the Amazon smile under a wordmark, simplified. Monochrome so it
  // sits with the other brand marks instead of popping orange.
  'aws': `<svg class="ico ico-inline" viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor"><path d="M6.76 10.46c0 .32.03.58.1.77.07.19.17.4.3.63.05.07.07.14.07.21 0 .09-.06.19-.18.28l-.6.4a.45.45 0 0 1-.25.08c-.1 0-.19-.05-.28-.14a2.9 2.9 0 0 1-.33-.44 7.1 7.1 0 0 1-.29-.56c-.73.85-1.65 1.28-2.75 1.28-.78 0-1.4-.22-1.86-.67-.46-.44-.69-1.04-.69-1.78 0-.79.28-1.43.84-1.91.56-.48 1.3-.72 2.24-.72.31 0 .63.03.97.08.34.05.69.13 1.06.22v-.68c0-.71-.15-1.2-.44-1.49-.3-.29-.8-.43-1.52-.43-.33 0-.66.04-1.01.12-.35.08-.68.18-1 .3-.15.07-.26.11-.33.13-.07.02-.12.03-.16.03-.14 0-.21-.1-.21-.3v-.47c0-.16.02-.28.07-.35.05-.07.14-.14.28-.21.33-.17.72-.31 1.18-.42.46-.11.95-.17 1.47-.17 1.12 0 1.94.25 2.47.76.52.5.78 1.27.78 2.3v3.02ZM3.7 11.59c.31 0 .62-.05.95-.16.33-.11.63-.31.88-.57.15-.17.26-.37.32-.59.06-.22.09-.49.09-.8v-.39c-.27-.07-.56-.12-.86-.16a7.3 7.3 0 0 0-.88-.05c-.63 0-1.09.12-1.4.37-.31.25-.46.6-.46 1.07 0 .44.11.76.34.98.22.22.56.33 1.02.33Zm6.07.82c-.17 0-.29-.03-.37-.1-.07-.06-.14-.19-.19-.37L7.4 5.03a1.67 1.67 0 0 1-.07-.38c0-.15.07-.23.22-.23h.95c.19 0 .32.03.39.1.07.06.13.19.18.37l1.3 5.15 1.21-5.15c.05-.19.11-.31.18-.37.07-.07.21-.1.4-.1h.78c.18 0 .32.03.39.1.07.06.13.19.18.37l1.22 5.21 1.34-5.21c.05-.19.12-.31.18-.37.07-.07.2-.1.39-.1h.9c.15 0 .23.08.23.23 0 .05-.01.1-.02.15-.01.06-.03.14-.07.25l-1.88 6.9c-.05.19-.11.31-.19.37-.08.06-.21.1-.37.1h-.84c-.18 0-.32-.03-.4-.1-.07-.07-.13-.19-.18-.38l-1.2-5.02-1.19 5.02c-.05.19-.11.31-.18.38-.08.07-.22.1-.4.1Zm9.72.27c-.5 0-1-.06-1.48-.17-.48-.12-.85-.25-1.11-.39-.16-.09-.27-.19-.31-.28a.74.74 0 0 1-.06-.28v-.49c0-.2.08-.3.23-.3.06 0 .12.01.18.03.06.02.15.06.25.1.33.14.69.26 1.07.33.39.07.76.11 1.14.11.6 0 1.07-.11 1.39-.32.33-.21.5-.52.5-.91 0-.27-.09-.49-.26-.68-.17-.18-.5-.35-.97-.5l-1.39-.43c-.7-.22-1.22-.54-1.54-.97a2.27 2.27 0 0 1-.49-1.37c0-.4.08-.75.26-1.05.17-.3.4-.57.69-.78.29-.21.62-.37 1-.49.38-.11.78-.17 1.19-.17.21 0 .42.01.63.04.21.03.41.07.6.11.19.05.37.1.54.16.17.06.3.12.4.18.14.08.24.16.3.25.06.08.09.19.09.33v.46c0 .2-.08.3-.22.3-.08 0-.2-.04-.37-.11a4.5 4.5 0 0 0-1.9-.39c-.55 0-.98.09-1.28.28-.3.19-.44.47-.44.86 0 .27.1.49.28.68.19.19.55.37 1.05.52l1.36.43c.69.22 1.19.52 1.49.91.3.39.44.84.44 1.33 0 .4-.08.77-.25 1.09-.17.33-.4.6-.69.83-.29.23-.64.4-1.05.51-.43.13-.87.19-1.36.19Z"/><path d="M20.8 15.35c-2.3 1.7-5.65 2.6-8.52 2.6a15.4 15.4 0 0 1-10.42-3.98c-.21-.19-.02-.46.24-.31a20.8 20.8 0 0 0 10.42 2.76 20.8 20.8 0 0 0 7.96-1.63c.4-.17.74.27.32.56Z"/><path d="M21.75 14.26c-.3-.37-1.95-.17-2.69-.09-.22.03-.26-.17-.06-.3 1.32-.93 3.49-.66 3.74-.35.26.32-.07 2.49-1.3 3.53-.19.16-.37.07-.29-.14.28-.7.9-2.27.6-2.65Z"/></svg>`,
  // CSS3 shield — the simpleicons CSS3 slug collides visually with Sass in
  // the current chip set; a small outlined shield reads better.
  'css3': `<svg class="ico ico-inline" viewBox="0 0 24 24" aria-hidden="true" width="14" height="14" fill="currentColor"><path d="M3.95 1.5L5.64 20.44 11.98 22.5l6.37-2.07L20.05 1.5H3.95zm12.49 5.3H9.27l.17 2h6.82l-.54 6.05-3.73 1.04-3.72-1.04-.26-2.86h1.83l.13 1.5 2.02.55 2.03-.55.22-2.37H8.22l-.5-5.65h8.87l-.15 1.33z"/></svg>`,
};

const ICON_INK = '191713';   // ink color for CDN-tinted SVGs
function keyFor(label){ return label.toLowerCase().trim().replace(/\s+/g,' '); }
function iconMarkup(label, slugOverride){
  if(slugOverride){
    return `<img class="ico" src="https://cdn.simpleicons.org/${slugOverride}/${ICON_INK}" alt="" width="14" height="14" loading="lazy">`;
  }
  const key = keyFor(label);
  // AWS SageMaker and plain CSS3/SASS key through to the inline AWS/CSS3 marks
  const inlineKey = key === 'aws sagemaker' ? 'aws' :
                    key === 'css3 / sass'   ? 'css3' :
                    key;
  if(ICON_INLINE[inlineKey]) return ICON_INLINE[inlineKey];
  const slug = ICON_SLUGS[key];
  return slug
    ? `<img class="ico" src="https://cdn.simpleicons.org/${slug}/${ICON_INK}" alt="" width="14" height="14" loading="lazy">`
    : `<span class="ico-dot" aria-hidden="true"></span>`;
}
// After paint: decorate every project tag and skill chip with its icon.
function decorateExisting(){
  document.querySelectorAll('.tags span, .skl-chips li').forEach(el => {
    if(el.dataset.iconed) return;
    el.dataset.iconed = '1';
    el.insertAdjacentHTML('afterbegin', iconMarkup(el.textContent));
  });
}
document.addEventListener('DOMContentLoaded', decorateExisting);
decorateExisting();

/* Nav: toggle a .scrolled class once we've left the hero so the paper
   backdrop sits a bit more opaque while scrolling through content. */
(function navScroll(){
  const nav = document.querySelector('nav');
  if(!nav) return;
  let last = null;
  function update(){
    const scrolled = window.scrollY > 40;
    if(scrolled !== last){ nav.classList.toggle('scrolled', scrolled); last = scrolled; }
  }
  window.addEventListener('scroll', update, {passive:true});
  update();
})();

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

function createTopo(canvas, host, palette, opts){
  // opts.source: { w, h, base:[[x,y,...], ...], accent:[[x,y,...], ...] }
  //   Pre-generated polyline data in source-image coordinates. The canvas
  //   draws them "cover-scaled" to fill the host and runs the same spring
  //   field so cursor interaction still works on the real contours.
  // Omit opts to use the procedural Perlin fallback (used by the contact bg).
  const ctx = canvas.getContext('2d');
  let lines = [];                           // [{pts:Float32Array, accent}] in canvas px
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

  // Project pre-generated source-space polylines into canvas pixels using
  // CSS "cover" math — fills the host, cropping overflow equally on each side.
  function scaleSource(source, W, H){
    const scale = Math.max(W / source.w, H / source.h);
    const ox_ = (W - source.w * scale) / 2;
    const oy_ = (H - source.h * scale) / 2;
    const scaled = (arrs, accent) => arrs.map(a => {
      const out = new Float32Array(a.length);
      for(let i=0; i<a.length; i+=2){
        out[i]   = a[i]   * scale + ox_;
        out[i+1] = a[i+1] * scale + oy_;
      }
      return { pts: out, accent };
    });
    return [...scaled(source.base, false), ...scaled(source.accent, true)];
  }

  function resize(){
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    if(opts && opts.source){
      lines = scaleSource(opts.source, canvas.width, canvas.height);
      cell = 32;
      gw = Math.ceil(canvas.width  / cell) + 1;
      gh = Math.ceil(canvas.height / cell) + 1;
    } else {
      const c = buildContours(canvas.width, canvas.height);
      lines = c.lines;
      cell = c.cell; gw = c.cols + 1; gh = c.rows + 1;
    }
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

/* Hero + Contact both run the same cursor-driven displacement field, but each
   pulls its own pre-generated SRTM snapshot. Hero gets Central California
   (coast + Sierra), Contact gets Southern California (Mojave / Death Valley)
   so the two feel like different places rather than a reprise. */
async function loadTopo(canvas, host, palette, url, {svg} = {}){
  if(!canvas || !host) return;
  try{
    const r = await fetch(url, {cache:'force-cache'});
    if(!r.ok) throw new Error(url + ' ' + r.status);
    const data = await r.json();
    createTopo(canvas, host, palette, { source: data });
    canvas.classList.add('ready');
    if(svg) svg.classList.add('handed-off');
  } catch(err){
    // Fall back to the procedural Perlin field, which still looks fine.
    console.warn('[topo] falling back for', url, err);
    createTopo(canvas, host, palette);
    canvas.classList.add('ready');
  }
}

// Vite prefixes BASE_URL to the build output. Keeping fetch URLs relative to it
// means the JSONs load correctly whether hosted at '/' or '/surabhi-portfolio/'.
const BASE_URL = import.meta.env.BASE_URL || '/';
const heroHost = document.getElementById('hero');
loadTopo(
  document.getElementById('topo-hero'),
  heroHost,
  { accent:'rgba(224,72,26,0.55)', base:'rgba(25,23,19,0.18)' },
  BASE_URL + 'california-contours.json',
  { svg: heroHost && heroHost.querySelector('.topo-ca img') }
);

loadTopo(
  document.getElementById('topo-contact'),
  document.getElementById('contact'),
  { accent:'rgba(224,72,26,0.6)', base:'rgba(239,233,223,0.22)' },
  BASE_URL + 'california-contours-south.json'
);

/* ============================================================
   3. MARQUEE — Surabhi's skills, constant right-to-left drift.
      Independent of page scroll (always its own natural speed).
   ============================================================ */
// Curated marquee. Per-item `slug` overrides the usual icon lookup — used so
// Agentic AI picks up the Anthropic mark here without affecting the Skills
// section (where it stays a dot by request).
const MARQUEE_ITEMS = [
  {label:'AWS'},
  {label:'Docker', emphasis:true},
  {label:'TypeScript'},
  {label:'JavaScript'},
  {label:'Postgres', slug:'postgresql'},
  {label:'Three.js', emphasis:true},
  {label:'Agentic AI', slug:'anthropic'},
  {label:'Figma'},
  {label:'Node.js', emphasis:true},
  {label:'Angular'},
  {label:'React'},
];
const track = document.getElementById('marquee-track');
[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].forEach(item => {
  const s = document.createElement('span');
  // When a slug override is supplied, feed iconMarkup via a known-good label.
  const iconLabel = item.slug ? (item.slug === 'anthropic' ? '__anthropic__' : item.label) : item.label;
  const inner = iconMarkup(iconLabel, item.slug) + item.label;
  s.innerHTML = item.emphasis ? `<em>${inner}</em>` : inner;
  track.appendChild(s);
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
  const el = document.getElementById('clock');
  if(!el) return;
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    hour: '2-digit', minute: '2-digit', hour12: false
  }).formatToParts(new Date());
  const h = parts.find(p => p.type === 'hour')?.value || '00';
  const m = parts.find(p => p.type === 'minute')?.value || '00';
  el.textContent = h + ' : ' + m;
  const tzEl = document.querySelector('.nav-tz');
  if(tzEl){
    const tzName = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles', timeZoneName: 'short'
    }).formatToParts(new Date()).find(p => p.type === 'timeZoneName')?.value;
    if(tzName) tzEl.textContent = tzName;    // auto PST / PDT
  }
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
const sectionIds = ['about','education','experience','work','skills','contact'];

/* Live favicon: a tiny topographic ring with a terracotta dot that orbits
   around the center as you move through sections. The icon is re-generated
   as an inline SVG data URL every time the current section changes. */
const faviconLink = document.querySelector('link[rel="icon"]');
function faviconFor(sectionIndex){
  const n = Math.max(1, sectionIds.length);
  // -90° so section 1 points up (12 o'clock); then clockwise around.
  const angle = (sectionIndex / n) * 360 - 90;
  const rad = angle * Math.PI / 180;
  const cx = 16, cy = 16, orbit = 12;
  const dx = (cx + orbit * Math.cos(rad)).toFixed(1);
  const dy = (cy + orbit * Math.sin(rad)).toFixed(1);
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>` +
      `<rect width='32' height='32' rx='5' fill='#efe9df'/>` +
      `<circle cx='16' cy='16' r='12.5' fill='none' stroke='#19171326' stroke-width='.9'/>` +
      `<circle cx='16' cy='16' r='9.5'  fill='none' stroke='#1917134a' stroke-width='.9'/>` +
      `<circle cx='16' cy='16' r='6.5'  fill='none' stroke='#19171370' stroke-width='.9'/>` +
      `<circle cx='16' cy='16' r='3.5'  fill='none' stroke='#e0481a' stroke-width='1.3'/>` +
      `<circle cx='${dx}' cy='${dy}' r='2.4' fill='#e0481a'/>` +
    `</svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}
function setFavicon(sectionIndex){
  if(!faviconLink) return;
  faviconLink.href = faviconFor(sectionIndex);
}

/* Scroll-spy: track which section occupies the most of the viewport and
   (a) highlight its nav link, (b) silently sync the URL hash via
   history.replaceState (no scroll jump, no history entry per scroll). */
const visibility = new Map();
let currentId = null;
const navIO = new IntersectionObserver(entries => {
  entries.forEach(e => visibility.set(e.target.id, e.intersectionRatio));
  // Pick the section with the largest visible slice right now.
  let bestId = currentId, bestRatio = 0;
  for(const id of sectionIds){
    const r = visibility.get(id) || 0;
    if(r > bestRatio){ bestRatio = r; bestId = id; }
  }
  if(bestRatio < 0.15) return;        // nobody really visible yet (e.g. hero on top)
  if(bestId === currentId) return;
  currentId = bestId;
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + bestId));
  // Only touch the hash when it actually differs — avoids pushing identical
  // entries while sitting on a section.
  if(location.hash !== '#' + bestId){
    history.replaceState(null, '', '#' + bestId);
  }
  setFavicon(sectionIds.indexOf(bestId));
}, {
  // Multiple thresholds so we re-evaluate often while scrolling.
  threshold:[0, .15, .3, .5, .7, 1],
  // Shift the trigger line below the fixed nav bar.
  rootMargin:'-72px 0px -20% 0px',
});
sectionIds.forEach(id => {
  const el = document.getElementById(id); if(el) navIO.observe(el);
});

/* ============================================================
   7. AMBIENT MUSIC — real audio file (public/ambient.mp3), looped quietly.
      Browsers refuse to autoplay with sound, so we start muted and the first
      gesture (or an explicit button click) unmutes. State is persisted in
      localStorage. Volume ramps for a soft fade, not a pop.
   ============================================================ */
(function ambientMusic(){
  const btn   = document.querySelector('.audio-toggle');
  const audio = document.getElementById('ambient-audio');
  if(!btn || !audio) return;

  const LS_KEY   = 'sc-audio-muted';
  const TARGET_V = 0.42;   // comfortable background volume for this track

  // Default: muted. Users opt in; nobody wants autoplay surprises.
  const prefersMuted = (() => {
    try { return localStorage.getItem(LS_KEY) !== 'false'; }
    catch(e){ return true; }
  })();
  let unmuted = !prefersMuted;
  let gestureBound = false;

  audio.loop = true;
  audio.volume = 0;

  // Smoothly ramp volume between the current value and `target` over ~duration.
  let rampTimer = null;
  function rampTo(target, duration){
    if(rampTimer){ clearInterval(rampTimer); rampTimer = null; }
    const start = audio.volume;
    const t0 = performance.now();
    const dur = duration || 1200;
    rampTimer = setInterval(() => {
      const t = Math.min(1, (performance.now() - t0) / dur);
      audio.volume = start + (target - start) * t;
      if(t >= 1){ clearInterval(rampTimer); rampTimer = null; audio.volume = target; }
    }, 30);
  }

  function paint(){
    btn.dataset.state = unmuted ? 'on' : 'muted';
    btn.setAttribute('aria-pressed', unmuted ? 'true' : 'false');
    btn.setAttribute('aria-label', unmuted ? 'Mute background music' : 'Play background music');
  }

  async function play(){
    try { await audio.play(); } catch(e){ /* blocked until next gesture */ }
  }

  async function toggle(){
    unmuted = !unmuted;
    try { localStorage.setItem(LS_KEY, String(!unmuted)); } catch(e){}
    if(unmuted){
      await play();
      rampTo(TARGET_V, 1400);
    } else {
      rampTo(0, 900);
      // Pause once the fade is done so the browser doesn't keep decoding.
      setTimeout(() => { if(!unmuted) audio.pause(); }, 1000);
    }
    paint();
  }

  btn.addEventListener('click', toggle);
  paint();

  // If the user previously had music unmuted, start it on the first gesture.
  function bindFirstGesture(){
    if(gestureBound) return; gestureBound = true;
    const start = async () => {
      if(!unmuted) return;
      await play();
      rampTo(TARGET_V, 2000);
      ['click','keydown','touchstart'].forEach(ev =>
        window.removeEventListener(ev, start));
    };
    ['click','keydown','touchstart'].forEach(ev =>
      window.addEventListener(ev, start, {once:true, passive:true}));
  }
  if(unmuted) bindFirstGesture();
})();

})();
