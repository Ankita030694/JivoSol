import React from "react";
import Link from "next/link";

interface CTAComponentProps {
  title: string;
  description: string;
  buttonText?: string;
  bgColor?: string;
  textColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  buttonHoverBgColor?: string;
}

const CTAComponent: React.FC<CTAComponentProps> = ({
  title,
  description,
  buttonText = "Book a discovery call",
  bgColor = "bg-[#0a5c35]",
  textColor = "text-white",
  buttonBgColor = "bg-white",
  buttonTextColor = "text-[#0a5c35]",
  buttonHoverBgColor = "hover:bg-gray-100"
}) => {
  return (
    <div className={`py-8 sm:py-12 ${bgColor}`}>
      <div className="max-w-4xl mx-auto text-center px-4 xxl:px-8">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${textColor}`}>{title}</h2>
        <p className={`text-sm sm:text-base md:text-lg mb-6 sm:mb-8 ${textColor}`}>
          {description}
        </p>
        <Link
          href="/contact"
          className={`inline-block ${buttonBgColor} ${buttonTextColor} px-2 sm:px-2 py-1 sm:py-2 rounded-xl font-semibold text-sm sm:text-base ${buttonHoverBgColor} transition-colors duration-300`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default CTAComponent; 