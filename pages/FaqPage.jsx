// Coded by Umar Mahmud Ahmad with junior dev support from Gemini & ChatGPT 

import React, { useState, useEffect } from 'react';
import { loadData } from '../constants';

const ChevronDownIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "bi bi-chevron-down"} fill="currentColor" viewBox="0 0 16 16" width="20px">
        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
);

const FaqItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-bottom border-secondary">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-100 btn d-flex justify-content-between align-items-center text-start py-3 px-2 bg-transparent border-0"
            >
                <span className="fs-5 fw-semibold text-primary">{item.question}</span>
                <ChevronDownIcon className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`collapse ${isOpen ? 'show' : ''}`}>
                <div className="bg-dark text-white p-3 rounded-bottom">
                    {item.answer}
                </div>
            </div>
        </div>
    );
};

const FaqPage = () => {
    const [faqItems, setFaqItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFaqData = async () => {
            setLoading(true);
            setError(null);
            try {
                const { faqItems: loadedFaqItems } = await loadData();
                setFaqItems(loadedFaqItems);
            } catch (err) {
                console.error("Error loading FAQ data:", err);
                setError("Failed to load FAQs. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        getFaqData();
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4 text-primary">Frequently Asked Questions</h1>
            <div className="accordion" id="faqAccordion">
                {loading ? (
                    <p className="text-center text-muted">Loading FAQs...</p>
                ) : error ? (
                    <p className="text-center text-danger">{error}</p>
                ) : faqItems.length > 0 ? (
                    faqItems.map((item, index) => (
                        <FaqItem key={index} item={item} />
                    ))
                ) : (
                    <p className="text-center text-muted">No FAQs available at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default FaqPage;
