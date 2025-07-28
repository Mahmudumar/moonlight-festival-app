// Coded by Umar Mahmud Ahmad with junior dev support from Gemini & ChatGPT 

import React, { useState, useEffect } from 'react';
import { loadData } from '../constants';

const GalleryPage = () => {
    const [festivals, setFestivals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getGalleryData = async () => {
            setLoading(true);
            setError(null);
            try {
                const { festivals: loadedFestivals } = await loadData();
                const cleanedFestivals = loadedFestivals.map(f => ({
                    ...f,
                    images: f.images.filter(img => img && img.trim() !== '')
                }));
                setFestivals(cleanedFestivals);
            } catch (err) {
                console.error("Error loading gallery data:", err);
                setError("Failed to load images. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        getGalleryData();
    }, []);

    const allImages = festivals.flatMap(f => f.images.map(img => ({ src: img, name: f.name })));

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Festival Gallery</h1>
            <p className="text-center text-muted mb-5">
                A visual journey through the vibrant colors, emotions, and traditions of festivals from around the globe.
            </p>

            {loading ? (
                <p className="text-center text-muted">Loading gallery images...</p>
            ) : error ? (
                <p className="text-center text-danger">{error}</p>
            ) : allImages.length > 0 ? (
                <div className="row g-4">
                    {allImages.map((image, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-3">
                            {image.src ? (
                                <div className="card bg-dark text-white">
                                    <img
                                        src={image.src}
                                        alt={image.name}
                                        className="card-img-top"
                                        style={{ height: '14rem', objectFit: 'cover' }}
                                    />
                                    <div className="card-img-overlay d-flex align-items-end p-2 bg-dark bg-opacity-50">
                                        <p className="card-text fw-bold mb-0">{image.name}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="d-flex align-items-center justify-content-center bg-secondary text-white" style={{ height: '14rem' }}>
                                    No Image
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-muted">No images available for the gallery.</p>
            )}
        </div>
    );
};

export default GalleryPage;
