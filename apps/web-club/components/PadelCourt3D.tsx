'use client';

export default function PadelCourt3D() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden opacity-20">
      <div className="relative w-[1000px] h-[700px] transform-gpu" style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}>
        {/* 3D Padel Court Container */}
        <div className="absolute inset-0 transform-style-preserve-3d animate-rotate-slow" style={{ transform: 'rotateX(15deg) translateZ(-300px)' }}>
          {/* Court Floor - Blue Surface */}
          <div className="absolute w-full h-full" style={{ transform: 'rotateX(90deg) translateZ(0px)' }}>
            {/* Court base surface */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700/30 via-blue-600/25 to-blue-800/30 rounded-sm">
              {/* Texture overlay */}
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 2px,
                  rgba(255,255,255,0.03) 2px,
                  rgba(255,255,255,0.03) 4px
                )`
              }}></div>
            </div>
            
            {/* Court Lines */}
            <div className="absolute inset-0">
              {/* Service lines */}
              <div className="absolute top-[30%] left-[5%] right-[5%] h-[3px] bg-white/80 shadow-sm"></div>
              <div className="absolute bottom-[30%] left-[5%] right-[5%] h-[3px] bg-white/80 shadow-sm"></div>
              
              {/* Center service line */}
              <div className="absolute top-[30%] bottom-[30%] left-1/2 w-[3px] bg-white/80 transform -translate-x-1/2 shadow-sm"></div>
              
              {/* Side lines */}
              <div className="absolute top-[5%] bottom-[5%] left-[5%] w-[3px] bg-white/80 shadow-sm"></div>
              <div className="absolute top-[5%] bottom-[5%] right-[5%] w-[3px] bg-white/80 shadow-sm"></div>
              
              {/* Back lines */}
              <div className="absolute top-[5%] left-[5%] right-[5%] h-[3px] bg-white/80 shadow-sm"></div>
              <div className="absolute bottom-[5%] left-[5%] right-[5%] h-[3px] bg-white/80 shadow-sm"></div>
            </div>
          </div>
          
          {/* Back Glass Wall */}
          <div className="absolute w-full" style={{ 
            height: '300px',
            transform: 'translateZ(-350px)',
            transformOrigin: 'bottom'
          }}>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-300/10 via-blue-200/5 to-transparent backdrop-blur-sm border-2 border-blue-200/20 rounded-t-lg">
              {/* Glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
              {/* Glass grid pattern */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 100px,
                    rgba(255,255,255,0.05) 100px,
                    rgba(255,255,255,0.05) 102px
                  ),
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 100px,
                    rgba(255,255,255,0.05) 100px,
                    rgba(255,255,255,0.05) 102px
                  )
                `
              }}></div>
            </div>
          </div>
          
          {/* Front Glass Wall - Lower height */}
          <div className="absolute w-full bottom-0" style={{ 
            height: '200px',
            transform: 'translateZ(350px)',
            transformOrigin: 'bottom'
          }}>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-300/8 via-blue-200/4 to-transparent backdrop-blur-sm border-2 border-blue-200/15 rounded-t-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent"></div>
            </div>
          </div>
          
          {/* Left Glass Wall */}
          <div className="absolute left-0" style={{ 
            width: '700px',
            height: '300px',
            transform: 'rotateY(90deg) translateZ(-500px) translateX(-350px)',
            transformOrigin: 'right'
          }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300/8 via-blue-200/4 to-transparent backdrop-blur-sm border-2 border-blue-200/15">
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent"></div>
              {/* Metal frame sections */}
              <div className="absolute top-0 bottom-0 left-[33%] w-[2px] bg-gray-600/50"></div>
              <div className="absolute top-0 bottom-0 left-[66%] w-[2px] bg-gray-600/50"></div>
            </div>
          </div>
          
          {/* Right Glass Wall */}
          <div className="absolute right-0" style={{ 
            width: '700px',
            height: '300px',
            transform: 'rotateY(90deg) translateZ(500px) translateX(350px)',
            transformOrigin: 'left'
          }}>
            <div className="absolute inset-0 bg-gradient-to-l from-blue-300/8 via-blue-200/4 to-transparent backdrop-blur-sm border-2 border-blue-200/15">
              <div className="absolute inset-0 bg-gradient-to-bl from-white/8 via-transparent to-transparent"></div>
              {/* Metal frame sections */}
              <div className="absolute top-0 bottom-0 right-[33%] w-[2px] bg-gray-600/50"></div>
              <div className="absolute top-0 bottom-0 right-[66%] w-[2px] bg-gray-600/50"></div>
            </div>
          </div>
          
          {/* Net */}
          <div className="absolute left-0 right-0" style={{ 
            top: '50%',
            transform: 'translateY(-50%) translateZ(50px)',
            height: '90px'
          }}>
            {/* Net posts */}
            <div className="absolute left-[5%] top-0 bottom-0 w-[4px] bg-gray-600 shadow-lg" style={{ transform: 'translateZ(10px)' }}></div>
            <div className="absolute right-[5%] top-0 bottom-0 w-[4px] bg-gray-600 shadow-lg" style={{ transform: 'translateZ(10px)' }}></div>
            
            {/* Net mesh */}
            <div className="absolute inset-0 mx-[5%]"
                 style={{
                   background: 'rgba(255,255,255,0.15)',
                   backgroundImage: `
                     repeating-linear-gradient(
                       90deg,
                       transparent,
                       transparent 8px,
                       rgba(255,255,255,0.3) 8px,
                       rgba(255,255,255,0.3) 9px
                     ),
                     repeating-linear-gradient(
                       0deg,
                       transparent,
                       transparent 8px,
                       rgba(255,255,255,0.3) 8px,
                       rgba(255,255,255,0.3) 9px
                     )
                   `,
                   boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                 }}
            ></div>
          </div>
          
          {/* Lighting and Shadow Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Court lighting spots */}
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-gradient-radial from-yellow-200/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute top-0 right-1/4 w-48 h-48 bg-gradient-radial from-yellow-200/10 to-transparent rounded-full blur-2xl"></div>
            
            {/* Ambient blue glow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
            
            {/* Court shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" style={{ transform: 'translateZ(-5px)' }}></div>
          </div>
        </div>
      </div>
      
      {/* Ambient Particles - Dust effect */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${15 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}