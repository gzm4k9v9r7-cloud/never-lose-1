/**
 * Industry configuration used by the marketing site's "Who It's For" section
 * and by the onboarding wizard (Phase 2) to pick default qualification
 * questions per industry. Adding a new industry means adding an entry here —
 * no other file needs to change.
 */

export interface Industry {
  id: string;
  label: string;
  icon: string; // lucide-react icon name
  exampleLead: string;
  sampleQuestions: string[];
}

export const industries: Industry[] = [
  {
    id: "event-venues",
    label: "Function Facilities & Event Venues",
    icon: "PartyPopper",
    exampleLead: "“I'm looking for a venue for my daughter's quinceañera next June.”",
    sampleQuestions: [
      "What date are you considering?",
      "What type of event is it?",
      "Approximately how many guests?",
      "Would you like to schedule a tour?",
    ],
  },
  {
    id: "plumbing",
    label: "Plumbers",
    icon: "Wrench",
    exampleLead: "“I have a leak under my kitchen sink, can someone come today?”",
    sampleQuestions: [
      "What's the issue you're experiencing?",
      "Is this an emergency?",
      "What's your service address?",
      "What times work for a visit?",
    ],
  },
  {
    id: "hvac",
    label: "HVAC Companies",
    icon: "Thermometer",
    exampleLead: "“My AC stopped working and it's 95 degrees.”",
    sampleQuestions: [
      "Is this a repair or a new install?",
      "What type of system do you have?",
      "How urgent is this?",
      "What's the best time for a technician?",
    ],
  },
  {
    id: "electrical",
    label: "Electricians",
    icon: "Zap",
    exampleLead: "“I need an outlet installed in my garage.”",
    sampleQuestions: [
      "What's the electrical work you need done?",
      "Is this a residential or commercial property?",
      "What's your address?",
      "When would you like it done?",
    ],
  },
  {
    id: "roofing",
    label: "Roofers",
    icon: "Home",
    exampleLead: "“I think I have storm damage, can I get an inspection?”",
    sampleQuestions: [
      "What type of roofing issue are you having?",
      "Do you have insurance involved?",
      "What's your property address?",
      "When can we schedule an inspection?",
    ],
  },
  {
    id: "contractors",
    label: "General Contractors",
    icon: "HardHat",
    exampleLead: "“We want to remodel our kitchen, what's the process?”",
    sampleQuestions: [
      "What type of project is this?",
      "What's your estimated budget range?",
      "What's your timeline?",
      "Would you like a consultation?",
    ],
  },
  {
    id: "cleaning",
    label: "Cleaning Companies",
    icon: "Sparkles",
    exampleLead: "“Do you do recurring cleanings for a 3-bedroom house?”",
    sampleQuestions: [
      "One-time or recurring service?",
      "How many bedrooms/bathrooms?",
      "What's your address?",
      "What day works best?",
    ],
  },
  {
    id: "landscaping",
    label: "Landscapers",
    icon: "Trees",
    exampleLead: "“I need my backyard redesigned before summer.”",
    sampleQuestions: [
      "What kind of landscaping work are you interested in?",
      "What's the size of the property?",
      "What's your timeline?",
      "Would you like an on-site estimate?",
    ],
  },
  {
    id: "painting",
    label: "Painters",
    icon: "PaintRoller",
    exampleLead: "“Looking for a quote to paint the exterior of my house.”",
    sampleQuestions: [
      "Interior or exterior?",
      "Approximate square footage?",
      "What's your address?",
      "When would you like the work done?",
    ],
  },
  {
    id: "salon-spa",
    label: "Salons & Spas",
    icon: "Scissors",
    exampleLead: "“Do you have any openings for a haircut this weekend?”",
    sampleQuestions: [
      "What service are you interested in?",
      "Do you have a preferred stylist?",
      "What days/times work for you?",
    ],
  },
  {
    id: "auto-service",
    label: "Auto Service",
    icon: "Car",
    exampleLead: "“My check engine light is on, can I bring it in?”",
    sampleQuestions: [
      "What's the issue with your vehicle?",
      "Make, model and year?",
      "When can you bring it in?",
    ],
  },
  {
    id: "photography",
    label: "Photographers",
    icon: "Camera",
    exampleLead: "“We're getting married in the fall, are you available?”",
    sampleQuestions: [
      "What type of shoot is this?",
      "What's the date?",
      "Approximately how many people/hours?",
      "Would you like to schedule a consultation?",
    ],
  },
  {
    id: "dj-events",
    label: "DJs & Event Professionals",
    icon: "Music",
    exampleLead: "“Looking for a DJ for a corporate holiday party.”",
    sampleQuestions: [
      "What type of event?",
      "What's the date and location?",
      "Approximately how many guests?",
      "What's your estimated budget?",
    ],
  },
];
