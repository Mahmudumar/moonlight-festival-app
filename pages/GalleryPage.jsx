// Coded by Umar Mahmud Ahmad with junior dev support from Gemini & ChatGPT 

import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { loadData } from '../constants'; // Only import loadData now

const GalleryPage = () => {
    const [festivals, setFestivals] = useState([]); // State to hold loaded festivals
    const [loading, setLoading] = useState(true);   // State for loading status
    const [error, setError] = useState(null);       // State for error messages

    // Use useEffect to load data when the component mounts
    useEffect(() => {
        const getGalleryData = async () => {
            setLoading(true);
            setError(null);
            try {
                // Call loadData, which now returns the fetched data
                const { festivals: loadedFestivals } = await loadData();

                // Filter out empty image strings right here to prevent broken image icons
                const cleanedFestivals = loadedFestivals.map(f => ({
                    ...f,
                    images: f.images.filter(img => img && img.trim() !== '') // Keep only non-empty, non-whitespace image paths
                }));

                setFestivals(cleanedFestivals); // Update state with loaded and cleaned data
            } catch (err) {
                console.error("Error loading gallery data:", err);
                setError("Failed to load images. Please try again later."); // User-friendly error
            } finally {
                setLoading(false); // Done loading (success or failure)
            }
        };

        getGalleryData();
    }, []); // Empty dependency array means this runs once on mount

    // Only map images from festivals once they are loaded
    const allImages = festivals.flatMap(f => f.images.map(img => ({ src: img, name: f.name })));

    return (
        <div className="font-serif">
            <h1 className="text-4xl font-bold text-brand-primary mb-8 text-center">Festival Gallery</h1>
            <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                A visual journey through the vibrant colors, emotions, and traditions of festivals from around the globe.
            </p>

            {/* Conditional rendering based on loading/error state */}
            {loading ? (
                <p className="text-center text-gray-400">Loading gallery images...</p>
            ) : error ? (
                <p className="text-center text-red-400">{error}</p>
            ) : allImages.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {allImages.map((image, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                            {/* Check if image.src exists before rendering img tag to prevent broken icons */}
                            {image.src ? (
                                <img
                                    src={image.src}
                                    alt={image.name}
                                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                />
                            ) : (
                                <div className="w-full h-56 bg-gray-700 flex items-center justify-center text-gray-500">
                                    No Image
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-4">
                                <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    {image.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="col-span-full text-center text-gray-400">No images available for the gallery.</p>
            )}
        </div>
    );
};

export default GalleryPage;