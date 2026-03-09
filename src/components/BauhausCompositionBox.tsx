import profileImage from "@/assets/profile.jpg";

const BauhausCompositionBox = () => {
  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96">
      {/* Red Block - Top Left */}
      <div className="absolute top-6 left-6 w-32 h-24 bg-bauhaus-red border-4 border-foreground z-10" />
      
      {/* Yellow Block - Bottom Right */}
      <div className="absolute bottom-6 right-6 w-40 h-32 bg-bauhaus-yellow border-4 border-foreground z-10" />
      
      {/* Profile Image Oval */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-48 h-64 rounded-full overflow-hidden border-4 border-foreground bg-bauhaus-white shadow-bauhaus">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Black Circle - Top Right */}
      <div className="absolute top-4 right-8 w-8 h-8 bg-foreground rounded-full z-30" />
      
      {/* White Square - Bottom Left */}
      <div className="absolute bottom-8 left-12 w-6 h-6 bg-bauhaus-white border-4 border-foreground z-30" />
    </div>
  );
};

export default BauhausCompositionBox;
