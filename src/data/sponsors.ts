export interface SponsorGroup {
  title: string;
  sponsors: { name: string; logoUrl?: string; url?: string }[];
}

export const SPONSOR_GROUPS: SponsorGroup[] = [
  {
    title: "Organized by",
    sponsors: [{ name: "ICT Foundation Nepal", logoUrl: "/images/partners/ifn.png", url: "https://ictfoundation.org.np" }],
  },
  {
    title: "Acknowledged by",
    sponsors: [
      { name: "MoSTI (Ministry of Science, Technology and Innovation)", logoUrl: "/images/partners/MosTI.png", url: "https://mosti.gov.np/" },
      { name: "ITDGO", logoUrl: "/images/partners/ITDGO.png", url: "https://itdgo.gov.np/" },
      { name: "NTA", logoUrl: "/images/partners/nta-logo.png", url: "https://www.nta.gov.np/" },
    ],
  },
  {
    title: "In Association with",
    sponsors: [
      { name: "TingTing", logoUrl: "/images/partners/TingTing Logo (1).png", url: "https://www.tingting.io/" },
      { name: "ThirdFactor", logoUrl: "/images/partners/thirdfactor-logo.png", url: "https://thirdfactor.ai/" },
    ],
  },
  {
    title: "Powered by",
    sponsors: [
      { name: "SastoTickets", logoUrl: "/images/partners/Sasto Tickets Filled.png", url: "https://sastotickets.com/" },
      { name: "fonepay", logoUrl: "/images/partners/fonepay_payments_fatafat.png", url: "https://fonepay.com/" },
    ],
  },
  { title: "Connected by", sponsors: [{ name: "Ncell Business", logoUrl: "/images/partners/Ncell Business Logo JPG.jpg", url: "https://www.ncell.com.np/en/business" }] },
  {
    title: "Ecosystem Partner",
    sponsors: [
      { name: "NASIT", logoUrl: "/images/partners/NAS-IT Vertical - Color.png", url: "https://nasit.org.np/" },
      { name: "Nepal Chamber of Commerce", logoUrl: "/images/partners/ncc.png", url: "https://www.nepalchamber.org/" },
      { name: "NICCI", logoUrl: "/images/partners/NICCI.png", url: "https://www.nicci.org/" },
      { name: "CAN Federation", logoUrl: "/images/partners/can.png", url: "https://www.can.org.np/" },
      { name: "Fintech Alliance", logoUrl: "/images/partners/FinTech Alliance Nepal.png", url: "https://www.fintechnepal.org/" },
      { name: "Robotics Association of Nepal", logoUrl: "/images/partners/RAN.jpeg", url: "https://www.ran.org.np/" },
      { name: "AI Association", logoUrl: "/images/partners/AIAN.jpg", url: "https://aiassociationnepal.org/" },
      { name: "WIIT", logoUrl: "/images/partners/Wiit.png", url: "https://wiit.org.np/" },
    ],
  },
  {
    title: "Session Partner",
    sponsors: [
      { name: "UK Aid | Adam Smith International", logoUrl: "/images/partners/UK-AID-ASI.png", url: "https://adamsmithinternational.com/" },
    ],
  },
  { title: "E-Commerce Partner", sponsors: [{ name: "Sociair Commerce", logoUrl: "/images/partners/sociairlogo.svg", url: "https://sociair.com/" }] },
  { title: "MSP Partner", sponsors: [{ name: "Sky IT", logoUrl: "/images/partners/skyit.jpg", url: "https://skyit.skybroadband.com.np/" }] },
  { title: "Stock Brokerage Partner", sponsors: [{ name: "NASA Securities", logoUrl: "/images/partners/nasax.png", url: "https://naasasecurities.com.np/" }] },
  { title: "Digital Infra Partner", sponsors: [{ name: "Data World", logoUrl: "/images/partners/dataworld.jpeg", url: "https://dataworld.com.np/" }] },
  { title: "Digital Address Partner", sponsors: [{ name: "KATAHO Digital Address", logoUrl: "/images/partners/KATA ho.png", url: "https://kataho.app/" }] },
  { title: "Digital Education Partner", sponsors: [{ name: "Code x School", logoUrl: "/images/partners/CodeXSchool.png", url: "https://neemaeducation.com/" }] },
  {
    title: "Supporting Partner",
    sponsors: [
      { name: "Nepal Telecom", logoUrl: "/images/partners/NTC.png", url: "https://www.ntc.net.np/" },
      { name: "Dishhome Internet", logoUrl: "/images/partners/dishhome-internet-red.png", url: "https://dishhome.com.np/" },
      { name: "Datahub (YetiCloud)", logoUrl: "/images/partners/data-hub.png", url: "https://datahub.com.np/" },
      { name: "Mavorion System", logoUrl: "/images/partners/mavorian-Logo_Only-600x138.png", url: "https://mavorion.com/" },
      { name: "Onepoint Financial Services", logoUrl: "/images/partners/Onepoint.png", url: "https://myonepoint.com/" },
      { name: "Everest Cloud", logoUrl: "/images/partners/everest-cloud.jpeg", url: "https://everestcloud.com.np/" },
      { name: "Dynamic Technosoft", logoUrl: "/images/partners/DYNAMIC-TECHNOSOFT-LOGO-UPDATED.png", url: "https://www.dynamic.net.np/" },
      { name: "Sunya ek", logoUrl: "/images/partners/sunyaek.png", url: "https://www.sunyaek.org/" },
      { name: "Rara Labs", logoUrl: "/images/partners/RARALabs.jpeg", url: "https://raralabs.com/" },
      { name: "Big Tech", logoUrl: "/images/partners/bigtech.jpeg", url: "" },
      { name: "Aaha Nepal", logoUrl: "/images/partners/AahaNepal_Logo_Nepali.png", url: "https://aahanepal.com/" },
      { name: "Barcode", logoUrl: "/images/partners/bar_code_logo.jpg", url: "https://www.barcodenepal.com/" },
      { name: "Upaharharu", logoUrl: "/images/partners/Upaharharu.jpg", url: "https://upaharharu.com/" },
    ],
  },
  { title: "AI Education Partner", sponsors: [{ name: "Sunway College", logoUrl: "/images/partners/Sunway-Creating-AI-Leaders-Logo.png", url: "https://sunway.edu.np/" }] },
  { title: "Cyber Security Partner", sponsors: [{ name: "Resecurity", logoUrl: "/images/partners/Rsecuity_1.png", url: "https://www.resecurity.com" }] },
  { title: "Outreach Partner", sponsors: [{ name: "Areta Public Relation", logoUrl: "/images/partners/Areta Public Relations.jpeg", url: "https://www.aretapr.com/" }] },
  { title: "Logistic Partner", sponsors: [{ name: "Pick and Drop", logoUrl: "/images/partners/Pick&Drop_Logo.png", url: "https://pickndropnepal.com/" }] },
  {
    title: "Event Partner",
    sponsors: [
      { name: "Global Spark", logoUrl: "/images/partners/Global Spark.png", url: "https://www.globalspark.com.np/" },
      { name: "Pioneer Event Management", logoUrl: "/images/partners/Poineer.jpg", url: "https://www.facebook.com/p/Pioneer-Event-Management-and-Media-Network-Pvt-Ltd-61568252237389/" },
    ],
  },
];
