import { ProjectData } from '@/common/types';

const project3Data: ProjectData = {
  id: 3,
  title: "AI-Powered Educational Assistants: Expanding Dentistry Support with RAG-Based Chatbots at Ivodent",
  description: "Deploying two AI chatbots to enhance student engagement and dental education at Ivodent using Retrieval-Augmented Generation.",
  fullDescription: "This project introduces two Retrieval-Augmented Generation (RAG) chatbots designed for Ivodent, a higher education institute in Albania. One chatbot supports current and prospective students with academic and administrative inquiries, while the second offers in-depth, curriculum-based answers in dental technology. Ongoing development is expanding the system to cover the full field of dentistry—including visual explanations and professional-level content—making it a valuable tool not only for students but also for practicing dental professionals. Both systems are built in close collaboration with academic staff to ensure alignment with educational standards and real-world applicability.",
  image: "/ivodent.svg",
  tags: ["AI in Education", "Natural Language Processing", "Retrieval-Augmented Generation", "Higher Education Innovation"],
  category: "Scientific",
  date: "2025-05-08",
  status: "Delivered",
  collaborators: ["Fatjon Hallkaj", "Jeta Lica", "Altin Mele"],
  methodology: "We developed two RAG-based chatbots by collecting relevant documents from the institution: administrative and academic content for the general student assistant, and program literature for the dental technology chatbot. These texts were processed through document chunking and embedded into a vector database. A Retrieval-Augmented Generation (RAG) architecture powered by GoogleAI was used to retrieve relevant content and generate context-aware responses. The system was deployed on the institution’s website through an interface accessible to students.",
  results: "Initial deployment has shown promising engagement. The student chatbot effectively addresses routine inquiries, while the dental technology chatbot provides accurate theoretical support. User feedback has been largely positive, indicating improved access to information. We are currently collecting detailed usage data and user feedback to conduct a systematic study and formally present the performance and impact of the system.",
  isFeatured: true,
  nextSteps: "Future development will focus on expanding the knowledge base of both chatbots to include multimedia resources such as annotated video lectures, self-assessment tools like quizzes, and image-based answers for enhanced explanations. A key goal is to broaden the scope of the dental technology chatbot to cover the full field of dentistry, making it a valuable tool not only for students but also for dental professionals. This expansion will be carried out in close collaboration with academic staff to ensure content accuracy and educational relevance.",
  externalLink: "https://ivodent.edu.al/"
};

export default project3Data;