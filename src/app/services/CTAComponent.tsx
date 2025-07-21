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
    <div className={`py-8 ${bgColor}`}>
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>{title}</h2>
        <p className={`text-lg mb-8 ${textColor}`}>
          {description}
        </p>
        <Link
          href="/contact"
          className={`inline-block ${buttonBgColor} ${buttonTextColor} px-8 py-3 rounded-lg font-semibold ${buttonHoverBgColor} transition-colors duration-300`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default CTAComponent; 