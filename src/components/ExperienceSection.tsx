import { Briefcase, Calendar, MapPin, Code, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Relate CX",
      role: "AI Engineer Intern",
      period: "May 2025 – Present",
      type: "Internship",
      location: "Buffalo, New York",
      technologies: [
        "Google Cloud Platform",
        "Vertex AI",
        "Model Garden",
        "Matching Engine",
        "GenAI SDK",
        "Batch APIs",
        "Prompt Gallery",
        "PEFT",
        "Prompt Engineering",
        "Python"
      ],
      description: "Developed a multi-label classification system using LLMs for job type prediction in the HVAC, Electric, and Plumbing industries.",
      achievements: [
        "Fine-tuned Gemini Flash LLM for classification tasks using PEFT (Parameter-Efficient Fine-Tuning), enabling targeted prediction of job types across 200+ HVAC, Electric, and Plumbing companies.",
        "Designed and tested advanced prompting techniques including zero-shot, few-shot, and chain-of-thought reasoning to improve LLM performance on noisy call summaries and service data.",
        "Evaluated and benchmarked multiple strategies RAG, PEFT, embedding-based retrieval to determine the most scalable approach for dynamic job type classification.",
        "Engineered custom prompts and classification schemas to enable LLMs to perform multi-label classification on real-world, unstructured industry data.",
        "Preprocessed and cleaned large-scale, heterogenous datasets with over 40,000+ records across trade-specific domains; automated pipeline development improved system scalability and accuracy.",
        "Leveraged GCP's Vertex AI, Prompt Gallery, Model Garden, GenAI SDK, and Batch APIs for model training, prompt iteration, and inference deployment."
      ],
      metrics: {}
    },
    {
      company: "M2P Fintech",
      role: "Software Developer",
      type: "Full-time",
      period: "Jan 2024 - July 2024",
      location: "Mumbai, India",
      description: "Played an integral role as part of Core Banking Solution team at M2P Fintech, optimizing code for CBS turing software across 70+ co-operative banks in India, ensuring compliance with RBI and NPCI standards.",
      achievements: [
        "Utilized Java Spring for backend and Node.js/Express.js for frontend, developing new features, fixing bugs, and improving system performance.",
        "Collaborated with cross-functional teams like KYC, Payments and ISO to ensure timely delivery of requirements."
      ],
      technologies: ["Java Spring", "Node.js", "Express.js", "SQL", "Postman", "JIRA", "Grafana"],
      metrics: {}
    },
    {
      company: "Quantiphi Analytics",
      role: "Platform Engineer Intern",
      type: "Internship",
      period: "July 2023 - Jan 2024",
      location: "Mumbai, India",
      description: "Analyzed and implemented cloud-based solutions, primarily focusing on AWS and GCP platforms.",
      achievements: [
        "Designed an efficient workflow, integrating security and privacy features, and optimizing costs using various AWS services such as Cognito, API Gateway, DynamoDB, S3, Amplify, Sagemaker, among others."
      ],
      technologies: ["AWS", "GCP", "Cognito", "API Gateway", "DynamoDB", "S3", "Amplify", "Sagemaker"],
      metrics: {}
    },
    {
      company: "BSG IT SOFT Pvt. Ltd.",
      role: "Software Developer Intern",
      type: "Internship",
      period: "June 2022 - July 2022",
      location: "Mumbai, India",
      description: "Developed a robust facial recognition API using Python, empowering secure and efficient facial recognition technology for a client, and enhanced secure authentication by 56%.",
      achievements: [
        "Programmed Flask, OpenCV, and face_recognition for backend and built a user-friendly frontend with React JS.",
        "Tested reliability using Postman.",
        "Improved code efficiency with image cropping and blurriness checks, achieving 94.2% accuracy."
      ],
      technologies: ["Python", "Flask", "OpenCV", "face_recognition", "React JS", "Postman"],
      metrics: {}
    },
    {
      company: "CMP Infotech",
      role: "AI Intern",
      type: "Internship",
      period: "December 2021 - January 2022",
      location: "Mumbai, India",
      description: "Created a 'Food Recommendation Chatbot' hosted on Microsoft Azure.",
      achievements: [
        "Led the project collecting user food preferences for personalized recommendations.",
        "Gained deep Azure Bot Services insights for conversational AI.",
        "Applied NLP and AI to create a bot suggesting dishes based on preferences and time constraints.",
        "Handled edge cases for reliability. Improved efficiency with a streamlined pipeline by 43.6%."
      ],
      technologies: ["Azure Bot Services", "NLP", "AI"],
      metrics: {}
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent font-pacifico">
            My Work Journey 💼
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's where I've been building cool stuff and making magic happen!
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ai-glow via-ai-secondary to-ai-success hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-8 w-4 h-4 rounded-full bg-gradient-primary border-4 border-background hidden md:block animate-pulse"></div>
                <Card className="ml-0 md:ml-16 p-10 bg-gradient-card border-ai-glow/20 hover:border-ai-glow/40 transition-all duration-300 hover:shadow-glow group">
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:animate-pulse">
                        <Briefcase className="w-6 h-6 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-ai-glow">{exp.role}</h3>
                          <Badge variant="outline" className="border-ai-secondary text-ai-secondary">
                            {exp.type}
                          </Badge>
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{exp.company}</h4>
                        <div className="flex flex-wrap gap-3 mb-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-base">{exp.description}</p>
                    <hr className="border-ai-glow/10 mb-4" />
                    {/* Key Achievements */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-ai-success" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-ai-success mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Technologies */}
                    <div className="mt-4">
                      <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Code className="w-4 h-4 text-ai-glow" />
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-ai-glow/10 text-ai-glow border-ai-glow/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Card className="mt-16 p-8 bg-gradient-card border-ai-glow/20">
            <h3 className="text-2xl font-bold text-ai-glow mb-6 text-center">Technical Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">AI/ML & NLP</h4>
                <ul className="space-y-2">
                  {["Transformers", "Hugging Face", "OpenAI API", "Gemini Flash", "TensorFlow", "PyTorch", "Scikit-learn", "PEFT", "Prompting", "GNN", "NLP", "PyTesseract", "OpenCV"].map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-ai-success"></span>
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Web Development</h4>
                <ul className="space-y-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "Flask", "Django", "Node.js", "Express.js", "REST API"].map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-ai-glow"></span>
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Databases</h4>
                <ul className="space-y-2">
                  {["PostgreSQL", "MongoDB", "Firebase", "SQLite", "MySQL"].map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-ai-secondary"></span>
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Cloud & DevOps</h4>
                <ul className="space-y-2">
                  {["GCP", "Vertex AI", "GenAI SDK", "Model Garden", "AWS", "Amplify", "Cognito", "S3", "Docker", "Render", "Git", "Postman"].map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-ai-warning"></span>
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;