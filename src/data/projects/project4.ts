import { ProjectData } from '@/common/types';

const project4Data: ProjectData = {
  id: 4,

  slug: "medikons",

  title: "Medikons — Preventive Health, Made Personal",

  description:
    "A digital preventive-health platform that helps people organize their medical information, understand laboratory results, and monitor changes in their health over time.",

  fullDescription:
    "Medical information is often fragmented across laboratories, clinics, documents, and healthcare systems. Medikons brings this information together in a secure personal health record designed initially for Albanian-speaking communities. Users can upload laboratory reports as PDFs or photos, convert them into structured health data, receive clear explanations of their results, and follow relevant indicators over time. The platform supports health literacy and more informed conversations with healthcare professionals, without replacing clinical judgment or providing a medical diagnosis.",

  image: "/MEDIKONS.svg",

  tags: [
    "Digital Health",
    "Preventive Health",
    "Personal Health Records",
    "AI",
    "Interoperability"
  ],

  category: "Community",

  date: "2024-10-31",

  status: "Active",

  collaborators: [
    "Paulina Lushaku",
    "Jeta Lica"
  ],

  features:
    "Medikons combines AI-assisted document processing with a longitudinal personal health record. The platform can extract structured information from laboratory reports, explain medical terminology in accessible language, highlight changes across multiple tests, and help users prepare questions for healthcare professionals. Its architecture is being developed around internationally recognized healthcare standards, including HL7 FHIR, LOINC, and ICD-10, to support future interoperability with laboratories, clinics, and other healthcare systems.",

  impact:
    "Medikons helps reduce the informational and language barriers that prevent people from understanding and using their own health data. Its first MVP was tested by 114 users, with more than 90% reporting that the service was useful. The project has also received a validation grant to support its continued development and real-world testing. The long-term objective is to strengthen preventive healthcare by helping individuals recognize relevant changes earlier, maintain better-organized health records, and communicate more effectively with healthcare professionals.",

  futureEnhancements:
    "The next development phase includes secure individual and caregiver profiles, longitudinal health dashboards, improved laboratory-report extraction, and stronger privacy and consent controls. Medikons also plans to pilot integrations with clinics and laboratories, expand its specialist-guidance functions, and progressively enter additional markets, beginning with Albania and Kosovo before broader European expansion.",

  isFeatured: true,

  externalLink: ""
};

export default project4Data;
