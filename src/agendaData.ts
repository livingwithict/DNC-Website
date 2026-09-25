export interface Person {
  name: string;
  photo?: string;
}

export type AgendaCategory =
  | "Governance"
  | "Climate"
  | "PublicServices"
  | "DataAI"
  | "Economy"
  | "Leadership";

export interface AgendaItem {
  time: string;
  title: string;
  subtitle?: string;
  description?: string;
  category: AgendaCategory;
  session: string;
  room?: string;
  speakers?: Person[];
  panelists?: Person[];
  moderators?: Person[];
  sessionChairs?: Person[];
}

export const getSessionSlug = (session: string) =>
  session.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const SESSION_THEMES: Record<string, string> = {
  "01 | Governance & Resilience": "Architecting the Digital Foundation",
  "02 | Digital Public Services": "The Gateway for Disaster Response",
  "03 | AI Sovereignty & Data": "Intelligence for a Resilient Nation",
  "04 | The Digital Economy Engine": "Prosperity through Sustainable Innovation",
  "05 | Leadership Dialogue": "Digital Roadmap to 2027",
};

export const AGENDA_DATA: AgendaItem[] = [
  // SESSION 1: GOVERNANCE & RESILIENCE (Inauguration Panel 01, incl. Climate & Disaster context)
  {
    time: "9:00 AM",
    title: "Welcome and DNC Highlights",
    category: "Governance",
    session: "01 | Governance & Resilience",
    speakers: [
      { name: "Ms. Sugarika KC (Host)", photo: "/images/speakers/Sugarika KC.jpg" },
      { name: "Mr. Razan Lamsal, Chairperson, IFN", photo: "/images/speakers/Razan Lamsal.jpg" },
    ],
  },
  {
    time: "9:15 AM",
    title: "Digital Nepal: The Journey",
    subtitle: "Video Documentary",
    category: "Governance",
    session: "01 | Governance & Resilience",
  },
  {
    time: "9:20 AM",
    title: "Welcome Remarks",
    category: "Governance",
    session: "01 | Governance & Resilience",
    speakers: [{ name: "Prof. Dr. Manish Pokharel, Former Dean, Kathmandu University (Patron, IFN)", photo: "/images/speakers/Prof. Dr. Manish Pokharel.jpg" }],
  },
  {
    time: "9:25 AM",
    title: "Context Setting",
    subtitle: "Data From Disaster: Nepal's 2026 Flash Floods: Capturing Human Experiences, Tracing Digital Footprints, Building a Resilient Future",
    category: "Governance",
    session: "01 | Governance & Resilience",
    speakers: [{ name: "Mr. Niraj Bhusal, Computer Officer, Ministry of Finance, GoN", photo: "/images/speakers/Niraj-Bhusal.jpg" }],
  },
  {
    time: "9:35 AM",
    title: "Keynote I",
    subtitle: "Building Digital Resilience: Driving Digital Governance, Transformation, and Economic Success",
    category: "Governance",
    session: "01 | Governance & Resilience",
    speakers: [{ name: "Mr. Julien Chevillard, Deputy Resident Representative, UNDP Nepal", photo: "/images/speakers/Julien-Chevillard.jpg" }],
  },
  {
    time: "9:50 AM",
    title: "Digital Spark I",
    subtitle: "TingTing",
    category: "Governance",
    session: "01 | Governance & Resilience",
    speakers: [
      { name: "Ms. Anjelika Sah, VP of Engineering at Prixa", photo: "/images/speakers/Anjelika-Sah.jpg" },
    ],
  },
  {
    time: "10:10 AM",
    title: "Industry Prospective",
    subtitle: "Redefining the Governance, Data, and the Digital Economy for Digital Resilience",
    category: "Governance",
    session: "01 | Governance & Resilience",
    speakers: [{ name: "Mr. Deepen Chapagain, President, NAS-IT", photo: "/images/speakers/Deepen-Chapagain.jpg" }],
  },
  {
    time: "10:30 AM",
    title: "Thematic Panel I",
    subtitle: "Building the Foundations for Resilient Digital Governance",
    category: "Governance",
    session: "01 | Governance & Resilience",
    moderators: [{ name: "Mr. Hempal Shrestha, LegalTech & Knowledge Management Specialist, IFN", photo: "/images/speakers/Hempal Shrestha.jpg" }],
    panelists: [
      { name: "Hon. Dharma Raj KC, Member, House of Representative", photo: "/images/speakers/Dharma Raj KC.png" },
      { name: "Ms. Parbati Sunuwar, Secretary, NARMIN (Chairperson, Phikkal Rural Municipality)", photo: "/images/speakers/parbati.jpeg" },
      { name: "Dr. Dharam Raj Uprety, Chief Executive Officer (CEO), NDRRMA, GoN", photo: "/images/speakers/Dharma Raj Uprety.jpg" },
      { name: "Ms. Prabha Bogati, Deputy Mayor, Bidur Municipality, Nepal", photo: "/images/speakers/parbha.jpeg" },
      { name: "Mr. Subhash Dhakal, Joint Secretary, Information Technology and Digital Governance Office GoN (ITDGO)", photo: "/images/speakers/Subhash Dhakal.jpg" },
      { name: "Mr. Manohar Bhattarai, ICT Expert, Former Vice Chairperson, HLCIT", photo: "/images/speakers/Manohar K Bhattarai.jpg" },
    ],
  },
  {
    time: "11:35 AM",
    title: "Lightning Talk",
    subtitle: "Building Digital Resilience for Climate & Disaster",
    category: "Climate",
    session: "01 | Governance & Resilience",
    speakers: [{ name: "Mr. Basanta Raj Shrestha, AI Enthusiast and Former Director of Strategic Cooperation, ICIMOD", photo: "/images/speakers/Basanta-Raj-Shrestha.jpg" }],
  },
  {
    time: "11:45 AM",
    title: "Guests' Remarks",
    subtitle: "3 mins each",
    category: "Governance",
    session: "01 | Governance & Resilience",
    speakers: [
      { name: "Mr. Sunil KC, President, NICCI", photo: "/images/speakers/Sunil KC.jpg" },
      { name: "Embassy  / SAARC" },
      { name: "Mr. Anjan Shrestha, President, FNCCI", photo: "/images/speakers/Anjan Shrestha.jpeg" },
      { name: "Mr. Guru Prasad Poudel, Spokesperson, Nepal Rastra Bank (NRB)", photo: "/images/speakers/Guru-Prasad-Poudel.jpg" },
      { name: "Mr. Arjun Ghimire, Chairman, Nepal Telecommunications Authority (NTA)", photo: "/images/speakers/Arjun Ghimire.jpeg" },
    ],
  },
  {
    time: "12:00 PM",
    title: "Keynote II",
    subtitle: "Accelerating the Digital Governance and Public Service Reforms",
    category: "Governance",
    session: "01 | Governance & Resilience",
    speakers: [{ name: "Mr. Sudeep Dhakal, Advisor for Policy, Administration, and Good Governance to the Rt. Hon. PM Balendra Shah", photo: "/images/speakers/Sudeep Dhakal.jpg" }],
  },
  {
    time: "12:15 PM",
    title: "Chief Guest Remarks",
    category: "Governance",
    session: "01 | Governance & Resilience",
    speakers: [{ name: "Hon. Dr. Bikram Timalsina, Minister, Ministry of Information & Communication, GoN", photo: "/images/speakers/Bikram Timalsina.jpg" }],
  },
  {
    time: "12:25 PM",
    title: "Vote of Thanks",
    category: "Governance",
    session: "01 | Governance & Resilience",
    speakers: [{ name: "Mr. Ganesh Shah, Former Minister, Ministry of Science Technology & Environment", photo: "/images/speakers/Ganesh Shah.jpg" }],
  },

  // SESSION 2: DIGITAL PUBLIC SERVICES (Thematic Panel 02)
  {
    time: "1:15 PM",
    title: "Digital Spark II",
    subtitle: "Code X School | Third Factor.AI | Nagarik App",
    category: "PublicServices",
    session: "02 | Digital Public Services",
    speakers: [
      { name: "Mr. Saroj Bhattarai, Executive Director, CodeX", photo: "/images/speakers/Saroj Bhattarai.jpg" },
      { name: "Mr. Sojan Prajapati, CBO at Prixa", photo: "/images/speakers/Sojan-Prajapati.jpg" },
      { name: "Mr. Chudamani Dhungana, IT Director, ITDGO", photo: "/images/speakers/Chudamani Dhungana.jpeg" },
    ],
  },
  {
    time: "1:30 PM",
    title: "Lightning Talk",
    subtitle: "From Silos to Seamless Services: Data Exchange and Government Architecture",
    category: "PublicServices",
    session: "02 | Digital Public Services",
    speakers: [{ name: "Mr. Manoj Ghimire, Founder, RARA Labs", photo: "/images/speakers/Manoj Ghimire.jpg" }],
  },
  {
    time: "1:45 PM",
    title: "Thematic Panel II",
    subtitle: "Paradigms of Data Governance: Can Nagarik App Become Nepal's Digital Gateway and Disaster Alert Hub?",
    category: "PublicServices",
    session: "02 | Digital Public Services",
    moderators: [{ name: "Mr. Ananda Raj Khanal, Chairperson, Nepal Digital Leads", photo: "/images/speakers/Ananda Raj Khanal.jpg" }],
    panelists: [
      { name: "Hon. Arvind Sah, Member, House of Representative", photo: "/images/speakers/Arvind Sah.jpg" },
      { name: "Dr. Archana Shrestha, DG, Nepal Meteorological Department, GoN", photo: "/images/speakers/Archana Shrestha.jpeg" },
      { name: "Mr. Ram Datta Bhatta, Joint Secretary, Information Technology and Digital Governance Office GoN (ITDGO)", photo: "/images/speakers/Ram-Datta-Bhatta.jpg" },
      { name: "Mr. Santosh Sigdel, Executive Director, Digital Rights Nepal", photo: "/images/speakers/Santosh Sigdel.jpg" },
      { name: "Mr. Bikash Nahata, Executive Director, One Point Financial Services", photo: "/images/speakers/Bikash-Nahata.jpeg" },
    ],
  },

  // SESSION 3: AI SOVEREIGNTY & DATA (Thematic Panel 03)
  {
    time: "3:00 PM",
    title: "Digital Spark III",
    subtitle: "KATA HO | NAS-IT - IID | Digital Sovereignty & Data Governance in School Education",
    category: "DataAI",
    session: "03 | AI Sovereignty & Data",
    speakers: [
      { name: "Mr. Ram Prasad Rimal, Chairman, Addressgraph Nepal Pvt. Ltd.", photo: "/images/speakers/Ram Prasad Rimal.jpeg" },
      { name: "Dr. Bhoj Raj Ghimire, Acting Dean, Nepal Open University (NoU)", photo: "/images/speakers/Dr. Bhoj Raj Ghimire.jpeg" },
      { name: "Mr. Sambedan Koirala, IEMIS Expert, ASI Samartha, UK Aid | Adam Smith International", photo: "/images/speakers/Sambedan-Koirala.jpg" },
    ],
  },
  {
    time: "3:15 PM",
    title: "Keynote III",
    subtitle: "DPI and Ethical AI in Governance: Leveraging Frontier Tech as a Strategic Enabler",
    category: "DataAI",
    session: "03 | AI Sovereignty & Data",
    speakers: [{ name: "Prof. Dr. Bal Krishna Bal, Dean, School of Engineering, Kathmandu University (KU)", photo: "/images/speakers/Bal Krishna Bal.png" }],
  },
  {
    time: "3:30 PM",
    title: "Thematic Panel III",
    subtitle: "Building Nepal's AI Sovereignty: Infrastructure, Data, Governance",
    category: "DataAI",
    session: "03 | AI Sovereignty & Data",
    moderators: [{ name: "Dr. Bhoj Raj Ghimire, Acting Dean, Nepal Open University (NoU)", photo: "/images/speakers/Dr. Bhoj Raj Ghimire.jpeg" }],
    sessionChairs: [{ name: "Prof. Dr. Sudan Jha, Hon. Member, National Planning Commission (NPC)", photo: "/images/speakers/Sudan Jha.jpg" }],
    panelists: [
      { name: "Hon. Dr. Lekhjung Thapa, Member, House of Representative", photo: "/images/speakers/Lekhjung-Thapa.jpg" },
      { name: "Mr. Adesh Khadka, Joint Secretary (IT), Office of the Prime Minister & Council of Ministers (OPMCM)", photo: "/images/speakers/Adesh Khadka.png" },
      { name: "Mr. Sanjaya Poudel, Chief Advisor, Hon Minister Mahabir Pun, Ministry of Science Technology & Innovation (MoSTI)", photo: "/images/speakers/Sanjaya Poudel.png" },
      { name: "Mr. Sambedan Koirala, IEMIS Expert, ASI Samartha, UK Aid | Adam Smith International", photo: "/images/speakers/Sambedan-Koirala.jpg" },
      { name: "Dr. Rosha Pokharel, AI Director, Country Manager, CloudFactory", photo: "/images/speakers/Dr. Rosha Pokharel.webp" },
    ],
  },

  // SESSION 4: THE DIGITAL ECONOMY ENGINE (Thematic Panel 04)
  {
    time: "5:00 PM",
    title: "Digital Spark IV",
    subtitle: "Sociair E-commerce | Lipi One | Everest Cloud",
    category: "Economy",
    session: "04 | The Digital Economy Engine",
    speakers: [
      { name: "Dikshya Giri, Sociair Business Development Officer", photo: "/images/speakers/Ramp.jpg" },
      { name: "Mr. Abhi Shrestha, Co-Founder & CTO", photo: "/images/speakers/Ramp.jpg" },
      { name: "Mr. Sudan Dhakal", photo: "/images/speakers/Ramp.jpg" },
    ],
  },
  {
    time: "5:15 PM",
    title: "Keynote IV",
    subtitle: "Digital Innovation for a Prosperous and Resilient Economy",
    category: "Economy",
    session: "04 | The Digital Economy Engine",
    speakers: [{ name: "Mr. Bal Krishna Joshi, Founder, Xuno | ThamelRemit", photo: "/images/speakers/Bal-Krishna-Joshi.png" }],
  },
  {
    time: "5:30 PM",
    title: "Strategic Overview",
    subtitle: "Virtual Presentation",
    category: "Economy",
    session: "04 | The Digital Economy Engine",
    speakers: [{ name: "Ms. Tahani Iqbal, Digital Development Specialist, ADB", photo: "/images/speakers/Tahani Iqbal.jpeg" }],
  },
  {
    time: "5:45 PM",
    title: "Thematic Panel IV",
    subtitle: "Unlocking Digital Nepal: Advancing Digital Transparency, Innovation and Digital Economy",
    category: "Economy",
    session: "04 | The Digital Economy Engine",
    moderators: [{ name: "Mr. Vivek Rana, Digital Enterprise Architect (Patron, IFN)", photo: "/images/speakers/Vivek Rana.jpg" }],
    sessionChairs: [{ name: "Dr. Ghanshyam Upadhyaya, Secretary, Ministry of Finance (MoF)", photo: "/images/speakers/Ghanshyam Upadhyaya.jpeg" }],
    panelists: [
      { name: "Ms. Yanki Ukyab, Chief Executive Officer, Investment Board Nepal (IBN)", photo: "/images/speakers/Yanki Ukyab.jpeg" },
      { name: "Ms. Tahani Iqbal, Digital Development Specialist, ADB (Virtual)", photo: "/images/speakers/Tahani Iqbal.jpeg" },
      { name: "Mr. S. Amer Ahmed, Operations Manager, WorldBank", photo: "/images/speakers/S Amer Ahmed.jpeg" },
      { name: "Maneet Dhungel, Senior Fellow, IIDS", photo: "/images/speakers/Maneet Dhungel.jpg" },
    ],
  },
  {
    time: "6:45 PM",
    title: "Digital Spark V",
    subtitle: "Ancoda Lab | Sky IT",
    category: "Economy",
    session: "04 | The Digital Economy Engine",
    speakers: [
      { name: "Mr. Suryodaya Bikram Shahi, CAIS, Founder", photo: "/images/speakers/Suryodaya Bikram Shahi.jpeg" },
      { name: "Mr. Suman Lal Pradhan, CEO, SkyIT", photo: "/images/speakers/Suman Lal Pradhan.jpeg" },
    ],
  },

  // SESSION 5: LEADERSHIP DIALOGUE (Power Samvad)
  {
    time: "7:00 PM",
    title: "Guest's Remarks",
    subtitle: "Accelerating Digital Industry, Innovation and Investment",
    category: "Leadership",
    session: "05 | Leadership Dialogue",
  },
  {
    time: "7:10 PM",
    title: "Closing Chief Guest's Remarks",
    subtitle: "Building Digital Resilience: Unlocking Nepal's Tech Industry & Startup Potential",
    category: "Leadership",
    session: "05 | Leadership Dialogue",
    speakers: [{ name: "Hon. Jagadish Kharel, Former Minister and Spokesperson, Rastriya Swatantra Party | Member, House of Representative", photo: "/images/speakers/jagadish kharel.jpg" }],
  },
  /* {
    time: "Time TBC",
    title: "Digital Leadership Dialogue",
    subtitle: "Shaping Digital Nepal: Vision, Leadership & Transformation",
    category: "Leadership",
    session: "05 | Leadership Dialogue",
    moderators: [{ name: "Ms. Ruchi Pandey" }],
    speakers: [{ name: "Hon. Finance Minister (tbc)" }],
  }, */
  {
    time: "7:00 PM",
    title: "Token of Appreciation and Group Photo",
    subtitle: "Patrons and Organizing Team.",
    category: "Leadership",
    session: "05 | Leadership Dialogue",
  },
  {
    time: "7:15 PM",
    title: "Vote of Thanks",
    category: "Leadership",
    session: "05 | Leadership Dialogue",
    speakers: [{ name: "Prof. Dr. Subarna Shakya, Director, IT Innovation Center, TU", photo: "/images/speakers/Subarna Shakya.jpg" }],
  },
];
