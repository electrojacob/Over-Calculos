import React from "react";

interface CardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    actionText?: string;
    onClick?: () => void;
    className?: string;
}

export default function Card({ title, description, icon, actionText, onClick, className = "" }: CardProps) {
    return (
        <div className={`bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow d flex flex-col h-full ${className}`}>
            {icon && <div className="text-olive-500 mb-4 bg-olive-50 w-12 h-12 rounded-lg flex items-center justify-center">{icon}</div>}
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 flex-grow mb-6">{description}</p>

            {actionText && (
                <div
                    onClick={onClick}
                    className="text-olive-600 font-medium hover:text-olive-700 transition-colors flex items-center gap-2 group w-fit mt-auto"
                >
                    {actionText}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:translate-x-1 transition-transform"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </div>
            )}
        </div>
    );
}
