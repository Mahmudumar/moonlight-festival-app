// Coded by Umar Mahmud Ahmad with junior dev support from Gemini & ChatGPT

import React, { useState, useEffect, useMemo } from 'react';
import { jsPDF } from "jspdf"; 
import { loadData, ALL_RELIGIONS, ALL_MONTHS } from '../constants';

const DownloadIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5 mr-2"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const CloseIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-in" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                    <CloseIcon />
                </button>
                {/* Ensure festival.images[0] exists before using it */}
                {festival.images && festival.images[0] ? (
                     <img src={festival.images[0]} alt={festival.name} className="w-full h-64 object-cover rounded-t-lg" />
                ) : (
                    <div className="w-full h-64 bg-gray-700 flex items-center justify-center text-gray-500 rounded-t-lg">
                        No Image
                    </div>
                )}
                <div className="p-6">
                    <h2 className="text-3xl font-bold font-serif text-brand-primary mb-2">{festival.name}</h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <span><strong>Country:</strong> {festival.country}</span>
                        <span><strong>Religion:</strong> {festival.religion}</span>
                        <span><strong>Month:</strong> {festival.month}</span>
                    </div>
                    <div className="space-y-4 text-light-text">
                        <p><strong className="text-gray-300">Description:</strong> {festival.description}</p>
                        <p><strong className="text-gray-300">Historic Importance:</strong> {festival.history}</p>
                    </div>
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                        {/* Filter out empty image strings here too, for the modal's gallery */}
                        {festival.images.filter(img => img && img.trim() !== '').map((img, index) => (
                            <img key={index} src={img} alt={`${festival.name} - ${index + 1}`} className="w-full h-32 object-cover rounded-md shadow-md" />
                        ))}
                    </div>
                    <button onClick={handleDownload} className="mt-4 w-full flex items-center justify-center bg-brand-secondary hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                        <DownloadIcon />
                        Download Details (PDF)
                    </button>
                </div>
            </div>
        </div>
    );
};

const FestivalCard = ({ festival, onSelect }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        {/* Ensure festival.images[0] exists before using it */}
        {festival.images && festival.images[0] ? (
            <img className="w-full h-48 object-cover" src={festival.images[0]} alt={festival.name} />
        ) : (
            <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-500">
                No Image
            </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold font-serif text-xl mb-2 text-brand-primary">{festival.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{festival.country} &bull; {festival.religion}</p>
            <p className="text-gray-300 text-base flex-grow">{festival.description}</p>
            <button onClick={() => onSelect(festival)} className="mt-4 w-full bg-brand-primary hover:bg-amber-500 text-gray-900 font-bold py-2 px-4 rounded transition-colors duration-300">
                Learn More
            </button>
        </div>
    </div>
);

const HomePage = () => {
    const [festivals, setFestivals] = useState([]); // Manage festivals as state
    const [religions, setReligions] = useState([]); // Manage religions as state
    const [months, setMonths] = useState([]);     // Manage months as state
    const [faqItems, setFaqItems] = useState([]);   // Manage faqItems as state
    const [loading, setLoading] = useState(true); // Add a loading state
    const [error, setError] = useState(null);     // Add an error state

    const [religionFilter, setReligionFilter] = useState(ALL_RELIGIONS);
    const [monthFilter, setMonthFilter] = useState(ALL_MONTHS);
    const [selectedFestival, setSelectedFestival] = useState(null);

    // Use useEffect to load data when the component mounts
    useEffect(() => {
        const getInitialData = async () => {
            setLoading(true); // Start loading
            setError(null);   // Clear previous errors
            try {
                const { festivals: loadedFestivals, faqItems: loadedFaqItems } = await loadData();

                // Clean up empty image strings from festivals right after loading
                const cleanedFestivals = loadedFestivals.map(f => ({
                    ...f,
                    images: f.images.filter(img => img && img.trim() !== '')
                }));

                setFestivals(cleanedFestivals);
                setFaqItems(loadedFaqItems);

                // Generate filter options after data is loaded
                const religionSet = new Set(cleanedFestivals.map(f => f.religion)); // Use cleanedFestivals
                const monthSet = new Set(cleanedFestivals.map(f => f.month));       // Use cleanedFestivals
                setReligions([ALL_RELIGIONS, ...religionSet]);
                setMonths([ALL_MONTHS, ...monthSet]);

            } catch (err) {
                setError('Failed to load festival data. Please try again.'); // Set user-friendly error
                console.error("Error in HomePage useEffect:", err);
            } finally {
                setLoading(false); // End loading, whether success or fail
            }
        };
        getInitialData();
    }, []); // Empty dependency array means this runs once when component mounts

    const filteredFestivals = useMemo(() => {
        return festivals.filter(festival => {
            const religionMatch = religionFilter === ALL_RELIGIONS || festival.religion === religionFilter;
            const monthMatch = monthFilter === ALL_MONTHS || festival.month === monthFilter;
            return religionMatch && monthMatch;
        });
    }, [festivals, religionFilter, monthFilter]);

    return (
        <div>
            {/* Your filter dropdowns remain the same */}
            <div className="bg-gray-800 p-4 rounded-lg mb-8 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="religion-filter" className="block text-sm font-medium text-gray-300 mb-1">Filter by Religion</label>
                        <select id="religion-filter" value={religionFilter} onChange={e => setReligionFilter(e.target.value)} className="w-full bg-gray-700 text-white border-gray-600 rounded-md p-2 focus:ring-brand-primary focus:border-brand-primary">
                            {religions.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="month-filter" className="block text-sm font-medium text-gray-300 mb-1">Filter by Month</label>
                        <select id="month-filter" value={monthFilter} onChange={e => setMonthFilter(e.target.value)} className="w-full bg-gray-700 text-white border-gray-600 rounded-md p-2 focus:ring-brand-primary focus:border-brand-primary">
                            {months.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {loading ? (
                    <p className="col-span-full text-center text-gray-400">Loading festivals...</p>
                ) : error ? (
                    <p className="col-span-full text-center text-red-400">{error}</p>
                ) : filteredFestivals.length > 0 ? (
                    filteredFestivals.map(festival => (
                        <FestivalCard key={festival.id} festival={festival} onSelect={setSelectedFestival} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-400">No festivals match the current filters.</p>
                )}
            </div>

            {/* This line is now fine because FestivalModal is defined above */}
            <FestivalModal festival={selectedFestival} onClose={() => setSelectedFestival(null)} />
        </div>
    );
};

export default HomePage;