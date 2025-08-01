'use client';

export default function PadelCourt3D() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      <div className="relative w-[600px] h-[400px] transform-gpu perspective-1000">
        {/* 3D Padel Court Container */}
        <div className="absolute inset-0 transform-style-preserve-3d animate-rotate-slow">
          {/* Court Floor */}
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm transform rotateX-60 border-2 border-blue-400/30">
            {/* Court Lines */}
            <div className="absolute inset-0">
              {/* Service lines */}
              <div className="absolute top-[25%] left-0 right-0 h-[2px] bg-white/40"></div>
              <div className="absolute bottom-[25%] left-0 right-0 h-[2px] bg-white/40"></div>
              
              {/* Center line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white/40 transform -translate-x-1/2"></div>
              
              {/* Side lines */}
              <div className="absolute top-0 bottom-0 left-[10%] w-[2px] bg-white/30"></div>
              <div className="absolute top-0 bottom-0 right-[10%] w-[2px] bg-white/30"></div>
            </div>
          </div>
          
          {/* Back Glass Wall */}
          <div className="absolute w-full h-[200px] bg-gradient-to-t from-blue-400/10 to-transparent backdrop-blur-md transform rotateX-90 translateZ-100 border border-blue-300/20">
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent"></div>
          </div>
          
          {/* Front Glass Wall */}
          <div className="absolute w-full h-[200px] bottom-0 bg-gradient-to-b from-blue-400/10 to-transparent backdrop-blur-md transform rotateX-90 translateZ-100 translateY-200 border border-blue-300/20">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
          </div>
          
          {/* Left Glass Wall */}
          <div className="absolute left-0 h-full w-[200px] bg-gradient-to-r from-blue-400/10 to-transparent backdrop-blur-md transform rotateY-90 translateZ-100 border border-blue-300/20">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
          </div>
          
          {/* Right Glass Wall */}
          <div className="absolute right-0 h-full w-[200px] bg-gradient-to-l from-blue-400/10 to-transparent backdrop-blur-md transform rotateY-90 translateZ-100 translateX-200 border border-blue-300/20">
            <div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent"></div>
          </div>
          
          {/* Net */}
          <div className="absolute top-1/2 left-0 right-0 h-[100px] transform -translate-y-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-transparent"
                 style={{
                   backgroundImage: `repeating-linear-gradient(
                     90deg,
                     transparent,
                     transparent 10px,
                     rgba(255,255,255,0.1) 10px,
                     rgba(255,255,255,0.1) 12px
                   ), repeating-linear-gradient(
                     0deg,
                     transparent,
                     transparent 10px,
                     rgba(255,255,255,0.1) 10px,
                     rgba(255,255,255,0.1) 12px
                   )`
                 }}
            ></div>
          </div>
          
          {/* Glow Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}