import React from "react";
import Image from "next/image";

interface ResultComponentProps {
  serviceType?: 'brand-identity' | 'performance-marketing' | 'content-creation' | 'video-animation' | 'web-development' | 'social-media';
}

const ResultComponent: React.FC<ResultComponentProps> = ({ serviceType = 'performance-marketing' }) => {
  // Service-specific results content
  const getServiceResults = () => {
    switch (serviceType) {
      case 'brand-identity':
        return {
          leftColumnPoints: [
            "Strong, memorable brand recognition",
            "Consistent visual identity across all touchpoints",
            "Professional credibility and trust building"
          ],
          rightColumnPoints: [
            "Differentiated market positioning",
            "Increased customer loyalty and retention"
          ]
        };
      
      case 'performance-marketing':
        return {
          leftColumnPoints: [
            "Higher quality leads and purchases",
            "Increased ROAS (Return on Ad Spend)",
            "Clear insight into where your marketing money is going"
          ],
          rightColumnPoints: [
            "Scalable, sustainable paid growth",
            "Better audience targeting and lower acquisition costs"
          ]
        };
      
      case 'content-creation':
        return {
          leftColumnPoints: [
            "Professional, high-quality visual assets",
            "Consistent brand storytelling across platforms",
            "Increased engagement and social media reach"
          ],
          rightColumnPoints: [
            "Improved brand perception and credibility",
            "Higher conversion rates from visual content"
          ]
        };
      
      case 'video-animation':
        return {
          leftColumnPoints: [
            "Higher engagement rates and viewer retention",
            "Improved brand message comprehension",
            "Increased social media shares and virality"
          ],
          rightColumnPoints: [
            "Better conversion rates from video content",
            "Enhanced storytelling and emotional connection"
          ]
        };
      
      case 'web-development':
        return {
          leftColumnPoints: [
            "Improved search engine rankings and visibility",
            "Faster website performance and user experience",
            "Higher conversion rates and lead generation"
          ],
          rightColumnPoints: [
            "Mobile-responsive design for all devices",
            "Scalable website architecture for business growth"
          ]
        };
      
      case 'social-media':
        return {
          leftColumnPoints: [
            "Increased brand awareness and reach",
            "Higher engagement rates and community building",
            "Consistent brand voice and messaging"
          ],
          rightColumnPoints: [
            "Improved customer relationships and loyalty",
            "Better ROI from social media investments"
          ]
        };
      
      default:
        return {
          leftColumnPoints: [
            "Higher quality leads and purchases",
            "Increased ROAS (Return on Ad Spend)",
            "Clear insight into where your marketing money is going"
          ],
          rightColumnPoints: [
            "Scalable, sustainable paid growth",
            "Better audience targeting and lower acquisition costs"
          ]
        };
    }
  };

  const { leftColumnPoints, rightColumnPoints } = getServiceResults();

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
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-8 md:p-12">
        {/* Heading */}
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
          Results You Can Expect
        </h2>
        
        {/* Two Column Grid - constrain content width but not background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl w-full">
          {/* Left Column */}
          <div className="space-y-3 sm:space-y-4">
            {leftColumnPoints.map((point, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <p className="text-white text-sm sm:text-base leading-relaxed text-center md:text-left">{point}</p>
              </div>
            ))}
          </div>
          
          {/* Right Column */}
          <div className="space-y-3 sm:space-y-4">
            {rightColumnPoints.map((point, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <p className="text-white text-sm sm:text-base leading-relaxed text-center md:text-left">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultComponent; 