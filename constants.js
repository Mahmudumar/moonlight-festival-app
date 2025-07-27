// coded by Umar Mahmud Ahmad
// content by Jethro

// constants.js
export const ALL_RELIGIONS = "All Religions";
export const ALL_MONTHS = "All Months";

// This function will return the loaded data
export async function loadData() {
    // ... (your existing async loadData logic)
    try {
        const festivalsResponse = await fetch('./test_data/festivals.json');
        if (!festivalsResponse.ok) throw new Error(`HTTP error! status: ${festivalsResponse.status}`);
        const festivalsData = await festivalsResponse.json();

        const faqResponse = await fetch('./test_data/faq.json');
        if (!faqResponse.ok) throw new Error(`HTTP error! status: ${faqResponse.status}`);
        const faqData = await faqResponse.json();

        // Return the loaded data
        return { festivals: festivalsData, faqItems: faqData };

    } catch (error) {
        console.error('Error loading data:', error);
        // In a real app, you might want to throw or return an error state
        throw error; // Re-throw to be caught by the component
    }
}