export interface StagePresenter {
  name: string;
  presenter?: string;
  presenterPhoto?: string;
  website?: string;
  bio: string;
  logo?: string;
}

export interface StallExhibitor {
  name: string;
  website?: string;
  bio: string;
  logo?: string;
}

const PARTNER_LOGO = "/images/partners/";
const SPEAKER_PHOTO = "/images/speakers/";
const SHOWCASE_LOGO = "/images/showcase/";

export const STAGE_PRESENTERS: StagePresenter[] = [
  {
    name: "TingTing",
    presenter: "Ms. Anjelika Sah, VP of Engineering at Prixa Technologies",
    presenterPhoto: `${SPEAKER_PHOTO}Anjelika-Sah.jpg`,
    website: "www.tingting.io",
    logo: `${SHOWCASE_LOGO}TingTing - A Prixa Company (H).png`,
    bio: "TingTing is an AI-powered business communication suite designed to help growing organizations maintain personalized customer connections at scale. Powered by RIRI, a locally developed AI voice and messaging engine that delivers natural tone and emotion, the platform unifies multiple engagement channels into a single ecosystem. Its product suite spans high-throughput SMS delivery with TingTing Text, omnichannel message management across WhatsApp, social media, and email via TingTing Omni, and automated voice outreach with TingTing Call Broadcast. Additionally, it provides 24/7 autonomous support using TingTing Agents, interactive phone surveys through TingTing Forms, and a complete, secure call center platform featuring AI transcription, sentiment analysis, and IVR routing with TingTing Connect.",
  },
  {
    name: "ThirdFactor",
    presenter: "Mr. Sojan Prajapati, CBO, Prixa",
    presenterPhoto: `${SPEAKER_PHOTO}Sojan-Prajapati.jpg`,
    website: "thirdfactor.ai",
    logo: `${SHOWCASE_LOGO}Thirdfactor - A Prixa Company (H).png`,
    bio: "Third Factor AI, a Prixa Company, is an AI-native identity and trust infrastructure platform designed to help organizations build and maintain continuous digital trust with their customers. The platform consolidates identity verification, fraud prevention, cybersecurity, and regulatory compliance into a single solution. It supports secure onboarding through document, NFC, business, and live video checks, while leveraging AI to detect deepfakes, forged documents, impersonation, and camera injection attacks. Built for regulated and enterprise sectors like banking, fintech, insurance, telecom, and government, Third Factor AI automates KYC and AML workflows—including sanctions screening, watchlist monitoring, and audit trails—via REST APIs and webhooks to shift organizations from one-time identity checks to ongoing risk management.",
  },
  {
    name: "CodeX (Neema)",
    presenter: "Mr. Saroj Bhattarai, CodeX",
    presenterPhoto: `${SPEAKER_PHOTO}Saroj Bhattarai.jpg`,
    website: "skillsupglobal.com",
    logo: `${SHOWCASE_LOGO}CodeXSchool.png`,
    bio: "CodeXSchool is a unique program initiated by skillsup global developed specially to bring hands-on coding, AI and Robotics practices directly into the classroom that aligns with school curricula. It is prepared by combining structures lesson plans, interactive software, hardware kits and teacher guidance to ensure seamless integration into the academic year of the school.",
  },
  {
    name: "KatoHo Addressgraph Pvt. Ltd.",
    presenter: "Mr. Ram Prasad Rimal, Chairman, Addressgraph Nepal Pvt. Ltd.",
    presenterPhoto: `${SPEAKER_PHOTO}Ram Prasad Rimal.jpeg`,
    website: "kataho.app",
    logo: `${SHOWCASE_LOGO}KATA ho.png`,
    bio: "Kataho is a digital addressing platform developed by Addressgraph Nepal, designed to make location identification and sharing simpler. By creating a modern digital approach to addressing, Kataho helps individuals and businesses communicate precise locations more conveniently through technology.",
  },
  {
    name: "Lipi One",
    presenter: "Mr. Abhi Shrestha",
    presenterPhoto: `${SPEAKER_PHOTO}Ramp.jpg`,
    logo: `${SHOWCASE_LOGO}Lipi-One-Official-Logo.png`,
    bio: "Lipi One is building a real-time contextual language engine that helps technology understand natural language—across voice and text—beyond transcription or translation. By capturing intent, meaning, and context, Lipi One helps frontier models respond and act more reliably—starting with underrepresented languages and built for global use.",
  },
  {
    name: "NAASAX",
    website: "naasasecurities.com.np",
    logo: `${SHOWCASE_LOGO}NAASA.png`,
    bio: "Naasa Securities (Broker No. 58) is a leading SEBON-licensed brokerage in Durbarmarg, Kathmandu. Founded in 2007, it offers NEPSE trading, depository services, and its proprietary Naasa X platform. Consistently capturing a high market share volume, Naasa is a prominent player in Nepal's capital market.",
  },
  {
    name: "Sociair",
    presenter: "Dikshya Giri, Business Development Officer, Sociair",
    presenterPhoto: `${SPEAKER_PHOTO}Ramp.jpg`,
    website: "sociair.com",
    logo: `${SHOWCASE_LOGO}sociairlogo.png`,
    bio: "Sociair is an AI-powered customer engagement and business operations technology platform, helping organizations connect with customers, centralize relationships, automate operations, and turn data into smarter decisions through one connected ecosystem. Its integrated solutions include Sociair Connect, Sociair Commerce, Sociair One, Sociair SMS, and Sociair AI, covering customer engagement, CRM, commerce, business operations, messaging, automation, analytics, and AI-powered intelligence. Build in Nepal. Compete globally.",
  },
  {
    name: "Ancoda Labs: Building Sovereign AI for the Real World",
    presenter: "Suryodaya Bikram Shahi, CAIS, Founder",
    presenterPhoto: `${SPEAKER_PHOTO}Suryodaya Bikram Shahi.jpeg`,
    website: "ancodalabs.com",
    logo: `${SHOWCASE_LOGO}Ancoda.png`,
    bio: "Ancoda Labs researches and deploys AI systems designed to understand and operate within real-world environments. We bring intelligence into the workflows where work actually happens, grounding AI in verified operational data and building systems that are useful, reliable, and aligned with the people and institutions they serve.",
  },
  {
    name: "UK AID | ASI",
    presenter: "Mr. Sambedan Koirala, IEMIS Expert - ASI Samartha, UK Aid | Adam Smith International",
    presenterPhoto: `${SPEAKER_PHOTO}Sambedan-Koirala.jpg`,
    logo: `${SHOWCASE_LOGO}UK-AID-ASI.png`,
    bio: "Adam Smith International (ASI) is a global advisory firm partnering with international donors like UK Aid (FCDO) to deliver economic growth and governance programs in Nepal. ASI drives sustainable development by improving the investment climate, strengthening rural market systems, and building resilience across vulnerable communities.",
  },
  {
    name: "Sky IT",
    presenter: "Mr. Suman Lal Pradhan, CEO, SkyIT",
    presenterPhoto: `${SPEAKER_PHOTO}Suman Lal Pradhan.jpeg`,
    website: "skyit.skybroadband.com.np",
    logo: `${SHOWCASE_LOGO}sky-IT.png`,
    bio: "Sky IT, Nepal's first ISP driven MSP provides technology and digital solutions supporting businesses in their evolving IT and connectivity requirements. Through its technology-focused services, Sky IT aims to help organizations improve operational efficiency, strengthen digital infrastructure and adopt solutions suited to modern business environments.",
  },
  {
    name: "Nagarik App",
    presenter: "Mr. Chudamani Dhungana, IT Director, ITDGO",
    presenterPhoto: `${SPEAKER_PHOTO}Chudamani Dhungana.jpeg`,
    website: "https://nagarikapp.gov.np/",
    logo: `${SHOWCASE_LOGO}Nagarik App.png`,
    bio: "Nagarik App is an official Government of Nepal mobile application designed to centralize and digitize public service delivery. It allows citizens to securely access digital legal IDs—including citizenship, passports, and driving licenses—pay utility bills and vehicle taxes, track police clearance reports, and manage government services seamlessly from their smartphones.",
  },
  {
    name: "Everest Cloud",
    presenter: "Mr. Sudan Dhakal",
    website: "https://everestcloud.com.np/",
    logo: `${SHOWCASE_LOGO}everest-cloud.jpeg`,
    bio: "EverestCloud, powered by Digital Network Solution, is Nepal's first Nutanix-verified sovereign enterprise cloud. It delivers secure compute, storage, networking, NVIDIA GPUs, and disaster recovery services across three local availability zones in Kathmandu, Lalitpur, and Butwal, ensuring that customer data never leaves the country. Built on enterprise-grade Cisco hardware and the Nutanix cloud stack, the platform allows organizations to launch high-performance cloud servers in minutes. It features an intuitive self-service portal, automated backups, cross-zone replication, and robust security tools including stateful firewalls and S3-compatible object storage. Fully operated by an ISO 9001 and ISO/IEC 27001 certified provider with extensive experience serving Nepal's banks and government agencies, EverestCloud enables businesses to manage dedicated or multi-tenant private cloud resources while paying directly in Nepali rupees with local engineering support.",
  },
  {
    name: "IID (NAS-IT)",
    logo: `${PARTNER_LOGO}NAS-IT Vertical - Color.png`,
    bio: "The Industry Integrated Degree (IID) initiative, led by NAS-IT with support from the Swiss Agency for Development and Cooperation (SDC) and Swisscontact, bridges academia and tech industry needs in Nepal. Implemented alongside academic partners like Nepal Open University, it offers industry-aligned ICT curricula and practical learning pathways to equip students with real-world skills in AI, software development, cybersecurity, and cloud engineering.",
  },
];

export const STALL_EXHIBITORS: StallExhibitor[] = [
  {
    name: "TingTing",
    website: "www.tingting.io",
    logo: `${SHOWCASE_LOGO}TingTing - A Prixa Company (H).png`,
    bio: "TingTing is an AI-powered business communication suite designed to help growing organizations maintain personalized customer connections at scale, unifying SMS, WhatsApp, social media, email, and voice outreach into one ecosystem powered by its locally developed AI engine, RIRI.",
  },
  {
    name: "ThirdFactor",
    website: "thirdfactor.ai",
    logo: `${SHOWCASE_LOGO}Thirdfactor - A Prixa Company (H).png`,
    bio: "Third Factor AI, a Prixa Company, is an AI-native identity and trust infrastructure platform consolidating identity verification, fraud prevention, cybersecurity, and regulatory compliance into a single solution for regulated and enterprise sectors.",
  },
  {
    name: "Fonepay",
    website: "fonepay.com",
    logo: `${SHOWCASE_LOGO}fonepay.png`,
    bio: "Fonepay is Nepal's largest payment network licensed and regulated by Nepal Rastra Bank as a Payment System Operator (PSO), connecting BFIs, digital wallets, consumers, and merchants in an interoperable payments network.",
  },
  {
    name: "Ncell Business",
    website: "ncell.com.np/en/business",
    logo: `${SHOWCASE_LOGO}Ncell Business Logo JPG.jpg`,
    bio: "Ncell Business serves as an enterprise technology and connectivity partner for businesses across Nepal, providing integrated solutions spanning mobility, connectivity, ICT, cloud, cybersecurity, and digital transformation.",
  },
  {
    name: "Sociair Commerce",
    website: "sociair.com",
    logo: `${SHOWCASE_LOGO}sociairlogo.png`,
    bio: "Sociair is an AI-powered customer engagement and business operations technology platform helping organizations connect with customers, centralize relationships, automate operations, and turn data into smarter decisions.",
  },
  {
    name: "Sky IT",
    website: "skyit.skybroadband.com.np",
    logo: `${SHOWCASE_LOGO}sky-IT.png`,
    bio: "Sky IT, Nepal's first ISP driven MSP, provides technology and digital solutions supporting businesses in their evolving IT and connectivity requirements.",
  },
  {
    name: "NAASAX",
    website: "naasasecurities.com.np",
    logo: `${SHOWCASE_LOGO}NAASA.png`,
    bio: "NAASA Securities is a SEBON-licensed stock brokerage company and Stock Broker No. 58 in Nepal, providing stock brokerage, depository, and margin trading services through technology-driven tools.",
  },
  {
    name: "DataWorld",
    website: "https://dataworld.com.np/",
    logo: `${SHOWCASE_LOGO}dataworld.jpeg`,
    bio: "Data World is Nepal's largest carrier-neutral data center, delivering mission-critical, secure, scalable, and AI-ready infrastructure with 11+ edge sites and the first TIA-942 Rated-3 Design Certification in Nepal.",
  },
  {
    name: "KatoHo Addressgraph Pvt. Ltd.",
    website: "kataho.app",
    logo: `${SHOWCASE_LOGO}KATA ho.png`,
    bio: "Kataho is a digital addressing platform developed by Addressgraph Nepal, designed to make location identification and sharing simpler for individuals and businesses.",
  },
  {
    name: "CodeX (Neema)",
    website: "skillsupglobal.com",
    logo: `${SHOWCASE_LOGO}CodeXSchool.png`,
    bio: "CodeXSchool is a unique program initiated by skillsup global bringing hands-on coding, AI, and Robotics practices directly into the classroom, aligned with school curricula.",
  },
  {
    name: "Nepal Telecom",
    website: "https://www.ntc.net.np/",
    logo: `${SHOWCASE_LOGO}NTC.png`,
    bio: "Nepal Telecom (NTC), Nepal's premier state-owned telecommunications provider, offers nationwide connectivity through fixed-line, mobile, landline, and digital television services, and has introduced Wi-Fi 6 routers across its FTTH service line.",
  },
  {
    name: "DishHome Internet",
    website: "dishhome.com.np/internet",
    logo: `${SHOWCASE_LOGO}dishhome-internet-red.png`,
    bio: "DishHome Internet provides high-speed broadband connectivity for homes and businesses across Nepal, supporting streaming, gaming, work, learning, and connected devices.",
  },
  {
    name: "Data Hub",
    website: "https://datahub.com.np/",
    logo: `${SHOWCASE_LOGO}data-hub.png`,
    bio: "DataHub is Nepal's pioneer carrier-neutral data center and cloud service provider, operating two ISO/IEC 27001 certified, PCI DSS compliant Tier-III standard data centers in Kathmandu and Butwal.",
  },
  {
    name: "Aura - AI Receptionist (Sunway)",
    website: "http://sunway.edu.np/",
    logo: `${SHOWCASE_LOGO}Sunway-Creating-AI-Leaders-Logo.png`,
    bio: "AURA (Autonomous Utility Reception Assistant) is a physical AI receptionist assisting visitors with university admission queries through natural voice interaction in English, Devanagari Nepali, and Romanized Nepali.",
  },
  {
    name: "Resecurity",
    website: "resecurity.com",
    logo: `${SHOWCASE_LOGO}Rsecuity_1.png`,
    bio: "Resecurity is a global cybersecurity company specializing in threat intelligence, digital identity protection, endpoint security, and digital risk management for enterprises and government organizations.",
  },
  {
    name: "Sudo ERP",
    website: "https://sudoerp.com/",
    logo: `${SHOWCASE_LOGO}sudo_logo_with_out_bg.png`,
    bio: "SudoERP is an all-in-one business management platform bringing HR, payroll, asset, procurement, project, and client management along with internal communication and analytics into one integrated platform.",
  },
  {
    name: "Samparka Digital",
    website: "samparka.co",
    logo: `${SHOWCASE_LOGO}Samparka.png`,
    bio: "Samparka Digital Loyalty is an AI-powered post-purchase retention system that helps businesses turn every transaction into a long-term customer relationship, built for restaurants, cafes, hospitality, retail, and salons.",
  },
  {
    name: "Slash Plus",
    website: "https://slashplus.com.np/",
    logo: `${SHOWCASE_LOGO}Slash-Logo-TM.png`,
    bio: "Slash Plus Pvt. Ltd. is a Nepal-based technology company driving digital transformation across public transportation, mobility, advertising, and smart infrastructure since 2015.",
  },
  {
    name: "Nagarik App",
    website: "https://nagarikapp.gov.np/",
    logo: `${SHOWCASE_LOGO}Nagarik App.png`,
    bio: "Nagarik App is a landmark mobile application launched by the Government of Nepal to consolidate and deliver essential public services through a single, paperless, queue-free digital platform.",
  },
  {
    name: "Ancoda Labs: Building Sovereign AI for the Real World",
    website: "ancodalabs.com",
    logo: `${SHOWCASE_LOGO}Ancoda.png`,
    bio: "Ancoda Labs researches and deploys AI systems designed to understand and operate within real-world environments, grounding AI in verified operational data.",
  },
  {
    name: "Mach24 Orbitals",
    website: "https://mach24orbitals.space/",
    logo: `${SHOWCASE_LOGO}Mach24.png`,
    bio: "Mach24 Orbitals is an aerospace company developing launch vehicles powered by hybrid propulsion technology for the growing small satellite market, designing, manufacturing, and testing hybrid rocket engines in-house.",
  },
  {
    name: "Nepal Association of the Blind (NAB)",
    website: "https://nabnepal.org/",
    logo: `${SHOWCASE_LOGO}NAB Logo.png`,
    bio: "The Nepal Association of the Blind (NAB), established in 1993, is a national representative organization working \"By the Blind, For the Blind\", focused on advocacy, capacity building, education, and inclusive opportunities.",
  },
  {
    name: "Sakshi",
    logo: `${SHOWCASE_LOGO}Sakshi.png`,
    bio: "Sakshi is a heritage conservation technology project based in Nepal. Its free mobile application helps visitors to heritage sites capture dated, precisely positioned photographs and file condition reports that heritage authorities can use to monitor these places between formal inspections. Conceived and built by Team Everest, four students from Chitwan, Nepal, it won first place at the LumbiniX 2026 national hackathon.",
  },
  {
    name: "ONEBNPL-Fintara",
    website: "https://www.onebnpl.shop/",
    logo: `${SHOWCASE_LOGO}OnebnplLogo1.png`,
    bio: "ONEBNPL is a digital Buy Now, Pay Later (BNPL) platform developed by Fintara Solutions enabling eligible credit cardholders to purchase products and services through flexible 0% interest EMI plans at participating merchants.",
  },
  {
    name: "Everest Cloud",
    website: "https://everestcloud.com.np/",
    logo: `${SHOWCASE_LOGO}everest-cloud.jpeg`,
    bio: "EverestCloud, powered by Digital Network Solution, is Nepal's first Nutanix-verified sovereign enterprise cloud delivering secure compute, storage, networking, NVIDIA GPUs, and disaster recovery across three local availability zones.",
  },
  {
    name: "CrimsonTech",
    website: "https://crimsontech.io/",
    logo: `${SHOWCASE_LOGO}Crimson_logo-no_bg.png`,
    bio: "CrimsonTech provides comprehensive, cost-effective, and scalable AI-enabled machine vision software solutions for manufacturers, machine builders, and system integrators, serving clients across Nepal, India, Bangladesh, and Sri Lanka.",
  },
];
