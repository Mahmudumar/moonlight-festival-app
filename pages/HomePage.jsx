// Coded by Umar Mahmud Ahmad with junior dev support from Gemini & ChatGPT

import React, { useState, useEffect, useMemo } from 'react';
import { jsPDF } from "jspdf"; 
import { loadData, ALL_RELIGIONS, ALL_MONTHS } from '../constants';

const DownloadIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "me-2"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const CloseIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || ""} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const FestivalModal = ({ festival, onClose }) => {
    if (!festival) return null;

    const handleDownload = () => {
        const doc = new jsPDF();
        const title = `Historic Importance of ${festival.name}`;
        const history = festival.history;
        const description = festival.description;

        doc.setFont("Helvetica", "bold");
        doc.setFontSize(16);
        doc.text(title, 10, 20);

        doc.setFont("Helvetica", "normal");
        doc.setFontSize(12);

        let y = 30; // initial y-axis

        const splitHistory = doc.splitTextToSize(history, 180);
        doc.text("History:", 10, y);
        y += 10;
        doc.text(splitHistory, 10, y);
        y += splitHistory.length * 7;

        const splitDescription = doc.splitTextToSize(description, 180);
        doc.text("Description:", 10, y);
        y += 10;
        doc.text(splitDescription, 10, y);

        doc.save(`${festival.name}_details.pdf`);
    };

    return (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }} onClick={onClose}>
            <div className="modal-dialog modal-lg modal-dialog-centered" onClick={e => e.stopPropagation()}>
                <div className="modal-content bg-dark text-white">
                    <div className="modal-header border-0">
                        <h5 className="modal-title">{festival.name}</h5>
                        <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={onClose}></button>
                    </div>
                    {festival.images && festival.images[0] ? (
                        <img src={festival.images[0]} alt={festival.name} className="img-fluid rounded-top" style={{ maxHeight: '300px', objectFit: 'cover' }} />
                    ) : (
                        <div className="d-flex align-items-center justify-content-center bg-secondary" style={{ height: '300px' }}>
                            No Image
                        </div>
                    )}
                    <div className="modal-body">
                        <p><strong>Country:</strong> {festival.country}</p>
                        <p><strong>Religion:</strong> {festival.religion}</p>
                        <p><strong>Month:</strong> {festival.month}</p>
                        <p><strong>Description:</strong> {festival.description}</p>
                        <p><strong>History:</strong> {festival.history}</p>
                        <div className="row g-2 my-3">
                            {festival.images.filter(img => img && img.trim() !== '').map((img, index) => (
                                <div className="col-4" key={index}>
                                    <img src={img} alt={`${festival.name} - ${index + 1}`} className="img-fluid rounded" />
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center" onClick={handleDownload}>
                            <DownloadIcon />
                            Download Details (PDF)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FestivalCard = ({ festival, onSelect }) => (
    <div className="card bg-dark text-white h-100">
        {festival.images && festival.images[0] ? (
            <img src={festival.images[0]} className="card-img-top" alt={festival.name} style={{ height: '200px', objectFit: 'cover' }} />
        ) : (
            <div className="d-flex align-items-center justify-content-center bg-secondary" style={{ height: '200px' }}>
                No Image
            </div>
        )}
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{festival.name}</h5>
            <p className="card-text small">{festival.country} • {festival.religion}</p>
            <p className="card-text flex-grow-1">{festival.description}</p>
            <button onClick={() => onSelect(festival)} className="btn btn-warning mt-3">Learn More</button>
        </div>
    </div>
);

const HomePage = () => {
    const [festivals, setFestivals] = useState([]);
    const [religions, setReligions] = useState([]);
    const [months, setMonths] = useState([]);
    const [faqItems, setFaqItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [religionFilter, setReligionFilter] = useState(ALL_RELIGIONS);
    const [monthFilter, setMonthFilter] = useState(ALL_MONTHS);
    const [selectedFestival, setSelectedFestival] = useState(null);

    useEffect(() => {
        const getInitialData = async () => {
            setLoading(true);
            setError(null);
            try {
                const { festivals: loadedFestivals, faqItems: loadedFaqItems } = await loadData();
                const cleanedFestivals = loadedFestivals.map(f => ({
                    ...f,
                    images: f.images.filter(img => img && img.trim() !== '')
                }));
                setFestivals(cleanedFestivals);
                setFaqItems(loadedFaqItems);
                const religionSet = new Set(cleanedFestivals.map(f => f.religion));
                const monthSet = new Set(cleanedFestivals.map(f => f.month));
                setReligions([ALL_RELIGIONS, ...religionSet]);
                setMonths([ALL_MONTHS, ...monthSet]);
            } catch (err) {
                setError('Failed to load festival data. Please try again.');
                console.error("Error in HomePage useEffect:", err);
            } finally {
                setLoading(false);
            }
        };
        getInitialData();
    }, []);

    const filteredFestivals = useMemo(() => {
        return festivals.filter(festival => {
            const religionMatch = religionFilter === ALL_RELIGIONS || festival.religion === religionFilter;
            const monthMatch = monthFilter === ALL_MONTHS || festival.month === monthFilter;
            return religionMatch && monthMatch;
        });
    }, [festivals, religionFilter, monthFilter]);

    return (
        <div>
            <div className="bg-dark p-4 rounded mb-4">
                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="religion-filter" className="form-label text-light">Filter by Religion</label>
                        <select id="religion-filter" value={religionFilter} onChange={e => setReligionFilter(e.target.value)} className="form-select bg-secondary text-white">
                            {religions.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="month-filter" className="form-label text-light">Filter by Month</label>
                        <select id="month-filter" value={monthFilter} onChange={e => setMonthFilter(e.target.value)} className="form-select bg-secondary text-white">
                            {months.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <div className="row g-4">
                {loading ? (
                    <p className="text-center text-muted">Loading festivals...</p>
                ) : error ? (
                    <p className="text-center text-danger">{error}</p>
                ) : filteredFestivals.length > 0 ? (
                    filteredFestivals.map(festival => (
                        <div className="col-md-6 col-lg-4" key={festival.id}>
                            <FestivalCard festival={festival} onSelect={setSelectedFestival} />
                        </div>
                    ))
                ) : (
                    <p className="text-center text-muted">No festivals match the current filters.</p>
                )}
            </div>
            <FestivalModal festival={selectedFestival} onClose={() => setSelectedFestival(null)} />
        </div>
    );
};

export default HomePage;
