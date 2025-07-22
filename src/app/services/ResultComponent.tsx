import React from "react";
import Image from "next/image";

const ResultComponent: React.FC = () => {
  const leftColumnPoints = [
    "Higher quality leads and purchases",
    "Increased ROAS (Return on Ad Spend)",
    "Clear insight into where your marketing money is going"
  ];

  const rightColumnPoints = [
    "Scalable, sustainable paid growth",
    "Better audience targeting and lower acquisition costs",
  ];

  return (
    <div className="relative w-full" style={{ height: "290px" }}>
      {/* Background Image */}
      <Image 
        src="/result.png" 
        alt="Results Background" 
        fill
        className="object-cover"
        style={{ 
          border: 'none', 
          outline: 'none', 
          boxShadow: 'none',
          margin: 0,
          padding: 0,
          display: 'block'
        }}
        priority 
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-12">
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">
          Results You Can Expect
        </h2>
        
        {/* Two Column Grid - constrain content width but not background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* Left Column */}
          <div className="space-y-3">
            {leftColumnPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white text-sm md:text-base leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          
          {/* Right Column */}
          <div className="space-y-3">
            {rightColumnPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white text-sm md:text-base leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultComponent; 