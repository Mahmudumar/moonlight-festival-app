// coded by Umar Mahmud Ahmad
export const festivals = [
  {
    id: 1,
    name: "Diwali",
    country: "India",
    religion: "Hinduism",
    month: "October",
    description: "The festival of lights, symbolizing the spiritual victory of light over darkness, good over evil, and knowledge over ignorance.",
    history: "Diwali is celebrated to honor the return of Lord Rama, his wife Sita, and his brother Lakshmana from a 14-year exile and his victory over the demon king Ravana.",
    images: ["https://picsum.photos/seed/diwali1/800/600", "https://picsum.photos/seed/diwali2/800/600", "https://picsum.photos/seed/diwali3/800/600"],
  },
  {
    id: 2,
    name: "Hanami",
    country: "Japan",
    religion: "Cultural",
    month: "April",
    description: "The Japanese traditional custom of enjoying the transient beauty of cherry blossoms (sakura).",
    history: "The practice of hanami is many centuries old. The custom is said to have started during the Nara period (710–794) when it was ume blossoms that people admired in the beginning.",
    images: ["https://picsum.photos/seed/hanami1/800/600", "https://picsum.photos/seed/hanami2/800/600", "https://picsum.photos/seed/hanami3/800/600"],
  },
  {
    id: 3,
    name: "Day of the Dead",
    country: "Mexico",
    religion: "Cultural",
    month: "November",
    description: "A multi-day holiday that involves family and friends gathering to pay respects and to remember friends and family members who have died.",
    history: "The holiday has its roots in indigenous observances dating back hundreds of years and to an Aztec festival dedicated to the goddess Mictecacihuatl.",
    images: ["https://picsum.photos/seed/dotd1/800/600", "https://picsum.photos/seed/dotd2/800/600", "https://picsum.photos/seed/dotd3/800/600"],
  },
  {
    id: 4,
    name: "Oktoberfest",
    country: "Germany",
    religion: "Cultural",
    month: "September",
    description: "The world's largest Volksfest, featuring a beer festival and a travelling funfair. It is held annually in Munich, Bavaria, Germany.",
    history: "Oktoberfest began as a celebration of the marriage of Crown Prince Ludwig of Bavaria and Princess Therese of Saxony-Hildburghausen in 1810.",
    images: ["https://picsum.photos/seed/oktoberfest1/800/600", "https://picsum.photos/seed/oktoberfest2/800/600", "https://picsum.photos/seed/oktoberfest3/800/600"],
  },
  {
    id: 5,
    name: "Christmas",
    country: "Worldwide",
    religion: "Christianity",
    month: "December",
    description: "An annual festival commemorating the birth of Jesus Christ, observed primarily on December 25.",
    history: "The celebration of Christmas has evolved over two millennia and incorporates many pre-Christian, pagan traditions into the festivities.",
    images: ["https://picsum.photos/seed/christmas1/800/600", "https://picsum.photos/seed/christmas2/800/600", "https://picsum.photos/seed/christmas3/800/600"],
  },
  {
    id: 6,
    name: "Eid al-Fitr",
    country: "Worldwide",
    religion: "Islam",
    month: "Varies",
    description: "The earlier of the two official holidays celebrated within Islam. The religious holiday is celebrated by Muslims worldwide because it marks the end of the month-long dawn-to-sunset fasting of Ramadan.",
    history: "Eid al-Fitr was originated by the Islamic prophet Muhammad. Certain traditions state that it was initiated in Medina after the migration of Muhammad from Mecca.",
    images: ["https://picsum.photos/seed/eid1/800/600", "https://picsum.photos/seed/eid2/800/600", "https://picsum.photos/seed/eid3/800/600"],
  },
];

export const faqItems = [
    {
        question: "How can my group participate in a festival?",
        answer: "You can contact us through the form on our 'About & Contact' page with details about your group. We are always looking for new talents to showcase and will get back to you with participation details for relevant festivals."
    },
    {
        question: "Are the festivals free to attend?",
        answer: "Most of the festivals we organize in collaboration with municipalities are free and open to the public. Some specific events or workshops during a festival might have an entry fee. Please check the details of each festival."
    },
    {
        question: "How do you select the festivals featured on the website?",
        answer: "We feature festivals that we directly organize or have a long-standing partnership with. Our goal is to highlight events that promote cultural exchange and understanding, with a focus on tradition and artistic creativity."
    },
    {
        question: "Can I volunteer for Moonlight Events?",
        answer: "Absolutely! We often have opportunities for volunteers. Please send us an email expressing your interest, and we'll let you know about upcoming opportunities."
    }
];

export const ALL_RELIGIONS = "All Religions";
export const ALL_MONTHS = "All Months";
export const religions = [ALL_RELIGIONS, ...new Set(festivals.map(f => f.religion))];
export const months = [ALL_MONTHS, ...new Set(festivals.map(f => f.month))];
