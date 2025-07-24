// Coded by Umar Mahmud Ahmad with junior dev support from Gemini & ChatGPT 

import React from 'react';
import { festivals } from '../constants';

const GalleryPage= () => {
    const allImages = festivals.flatMap(f => f.images.map(img => ({ src: img, name: f.name })));

    return (
        <div className="font-serif">
            <h1 className="text-4xl font-bold text-brand-primary mb-8 text-center">Festival Gallery</h1>
            <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                A visual journey through the vibrant colors, emotions, and traditions of festivals from around the globe.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allImages.map((image, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                        <img 
                            src={image.src} 
                            alt={image.name} 
                            className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-4">
                            <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                {image.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
