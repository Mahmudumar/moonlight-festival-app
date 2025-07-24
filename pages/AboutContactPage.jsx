
import React, { useState } from 'react';

const AboutContactPage= () => {
    const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFeedback(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to a server.
        console.log('Feedback submitted:', feedback);
        setSubmitted(true);
        setFeedback({ name: '', email: '', message: '' });
    };

    return (
        <div className="space-y-12 max-w-4xl mx-auto font-serif">
            {/* About Us Section */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-brand-primary mb-4">About Moonlight Events</h1>
                <p className="text-lg text-gray-300 mb-4">
                    MOONLIGHT EVENTS organizes festivals around the world in collaboration with municipalities and local city associations. Our main goal is to spread information about local festivals, discover new talents, and support their creativity.
                </p>
                <p className="text-gray-400">
                    We believe festivals strengthen young people's understanding of other cultures, develop tolerant attitudes towards cultural differences, and foster respect for ethnic characteristics and unique forms of artistic realization. We are dedicated to encouraging academic, professional, and cultural exchange between groups.
                </p>
            </div>

            {/* Contact Us Section */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-brand-primary mb-4">Contact Information</h1>
                <div className="space-y-3 text-lg text-gray-300">
                    <p><strong>Email:</strong> <a href="mailto:info@moonlightevents.com" className="text-brand-secondary hover:underline">info@moonlightevents.com</a></p>
                    <p><strong>Address:</strong> 123 Festival Lane, Celebration City, 12345</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                </div>
            </div>

            {/* Feedback Section */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-brand-primary mb-4">Leave a Feedback</h1>
                {submitted ? (
                    <div className="text-center p-4 bg-green-900 text-green-200 rounded-md">
                        <p className="font-bold">Thank you for your feedback!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                            <input type="text" name="name" id="name" value={feedback.name} onChange={handleInputChange} required className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-brand-primary focus:border-brand-primary" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                            <input type="email" name="email" id="email" value={feedback.email} onChange={handleInputChange} required className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-brand-primary focus:border-brand-primary" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                            <textarea name="message" id="message" rows={4} value={feedback.message} onChange={handleInputChange} required className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-brand-primary focus:border-brand-primary"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-brand-secondary hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                            Submit Feedback
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AboutContactPage;

// Coded by Umar Mahmud Ahmad with junior dev support from Gemini & ChatGPT 
