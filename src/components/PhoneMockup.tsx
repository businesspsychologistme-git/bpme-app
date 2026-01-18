import appScreenshot from "@/assets/app-screenshot.png";

const PhoneMockup = () => {
  return (
    <div className="relative animate-float">
      {/* Glow behind phone */}
      <div className="absolute inset-0 blur-3xl bg-primary/20 scale-75 rounded-full" />
      
      {/* Phone frame */}
      <div className="relative w-[280px] md:w-[320px] lg:w-[360px]">
        {/* Phone outer frame */}
        <div className="relative rounded-[3rem] bg-gradient-to-b from-gray-700 to-gray-900 p-2 shadow-float">
          {/* Phone inner bezel */}
          <div className="rounded-[2.5rem] bg-black p-1 overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
            
            {/* Screen content */}
            <div className="relative rounded-[2.25rem] overflow-hidden bg-background aspect-[9/19.5]">
              <img 
                src={appScreenshot}
                alt="BPME App Interface"
                className="w-full h-full object-cover"
              />
              
              {/* Screen shine overlay */}
              <div className="absolute inset-0 phone-shine pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div 
          className="absolute -top-6 -right-8 glass-card px-4 py-3 rounded-2xl animate-float"
          style={{ animationDelay: '1s' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary text-sm">✓</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Verified</p>
              <p className="text-sm font-semibold">Expert</p>
            </div>
          </div>
        </div>
        
        <div 
          className="absolute -bottom-4 -left-10 glass-card px-4 py-3 rounded-2xl animate-float"
          style={{ animationDelay: '2s' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
              <span className="text-secondary text-sm">★</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Rating</p>
              <p className="text-sm font-semibold">4.9/5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
