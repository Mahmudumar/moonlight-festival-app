// coded by Umar Mahmud Ahmad
// content by Jethro
export const festivals = [
  {
    id: 1,
    name: "Diwali",
    country: "India",
    religion: "Hinduism",
    month: "October",
    description: "some descrip",
    history: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo obcaecati, esse libero consequuntur qui quasi? Laboriosam quas dolorum necessitatibus corrupti.",
    images: ["", "", ""],
  },
  {
    id: 2,
    name: "Hanami",
    country: "Japan",
    religion: "Cultural",
    month: "April",
    description: "some descrip",
    history: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo obcaecati, esse libero consequuntur qui quasi? Laboriosam quas dolorum necessitatibus corrupti.",
    images: ["", "", ""],
  },
  {
    id: 3,
    name: "Day of the Dead",
    country: "Mexico",
    religion: "Cultural",
    month: "November",
    description: "some descrip",
    history: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo obcaecati, esse libero consequuntur qui quasi? Laboriosam quas dolorum necessitatibus corrupti.",
    images: ["", "", ""],
  },
  {
    id: 4,
    name: "Oktoberfest",
    country: "Germany",
    religion: "Cultural",
    month: "September",
    description: "some descrip",
    history: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo obcaecati, esse libero consequuntur qui quasi? Laboriosam quas dolorum necessitatibus corrupti.",
    images: ["", "", ""],
  },
  {
    id: 5,
    name: "Christmas",
    country: "Worldwide",
    religion: "Christianity",
    month: "December",
    description: "some descrip",
    history: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo obcaecati, esse libero consequuntur qui quasi? Laboriosam quas dolorum necessitatibus corrupti.",
    images: ["", "", ""],
  },
  {
    id: 6,
    name: "",
    country: "Worldwide",
    religion: "",
    month: "Varies",
    description: "some descrip",
    history: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo obcaecati, esse libero consequuntur qui quasi? Laboriosam quas dolorum necessitatibus corrupti.",
    images: ["", "", ""],
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
