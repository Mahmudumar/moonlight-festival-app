
import React, { useState } from 'react';
import { faqItems } from '../constants';
const ChevronDownIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const FaqItem= ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b-2 border-gray-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4 px-2"
            >
                <span className="text-lg font-semibold text-brand-primary">{item.question}</span>
                <ChevronDownIcon className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="p-4 text-gray-300 bg-gray-800 rounded-b-md">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};


const FaqPage= () => {
    return (
        <div className="max-w-3xl mx-auto font-serif">
            <h1 className="text-4xl font-bold text-center text-brand-primary mb-8">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqItems.map((item, index) => (
                    <FaqItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default FaqPage;

// Coded by Umar Mahmud Ahmad with junior dev support from Gemini & ChatGPT 
