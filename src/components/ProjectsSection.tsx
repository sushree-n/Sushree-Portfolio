import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Drug Discovery Using Deep Learning",
      description: "A multimodal deep learning framework that fuses graph topology, chemical language, substructure patterns, and 3D molecular descriptors to accurately predict key drug-likeness properties (logP, logD, logS). Integrated with an LLM for automatic scientific report generation and deployed via a fullstack Flask-React web app.",
      technologies: ["Graph Neural Networks", "LLMs", "Flask", "React", "Python", "PyTorch", "DeepChem", "DeepSeek"],
      liveUrl:  "https://drugdiscoveryusingdl-1.onrender.com",
      githubUrl: "https://github.com/sushree-n/DrugDiscoveryUsingDL",
      image: "🧪"
    },
    {
      title: "Audio Adversarial Attacks and Defence",
      description: "Designed and implemented a complete audio adversarial attack system that transcribes input using DeepSpeech ASR, applies iterative psychoacoustic perturbations via CTC Loss and Gradient Descent to manipulate transcriptions toward target text while remaining imperceptible to human ears, and deployed the solution through a user-friendly Flask web app with AMR and MP3 encoding defenses for robust evaluation.",
      technologies: ["DeepSpeech ASR", "Flask", "Neural Networks", "Gradient Descent", "CTC Loss", "AMR", "MP3"],
      liveUrl: "https://ijirt.org/article?manuscript=159389",
      githubUrl: "https://github.com/sushree-n/audio-adversarial-attack-and-defense",
      image: "🎤"
    },
    {
      title: "QuizzBee - AI-Powered Study Assistant ",
      description: "AI-driven web app that converts lecture transcripts into personalized quizzes using four transformer models: DeBERTa, RoBERTa, FLAN-T5, and T5-QG.",
      technologies: ["React", "Django", "Hugging Face", "Transformers", "NLP"],
      liveUrl: "#",
      githubUrl: "https://github.com/sushree-n/Jottling",
      image: "📚"
    },
    {
      title: "Alphabet Doodle Recognition",
      description: "An interactive deep learning web app that recognizes handwritten English alphabets drawn on a canvas. Built using a custom-trained ResNet18 model and deployed with Flask.",
      technologies: ["ResNet18", "EMNIST", "Flask", "HTML", "CSS", "JavaScript", "Hugging Face Spaces"],
      liveUrl: "https://huggingface.co/spaces/sushreen/AlphabetDoodleRecognition ",
      githubUrl: "https://github.com/sushree-n/AlphabetDoodleRecognition",
      image: "🖊️"
    },
    {
      title: "BuffaLingo",
      description: "BuffaLingo is an exciting word association game based on Buffalo, New York. The AI evaluates your answers with sarcasm, humor, and, of course, Buffalonian pride! Whether it's wings, snow, or Zubaz, BuffaLingo will judge your responses in the most Buffalo way possible.",
      technologies: ["Mistral 7B", "LLM", "Python", "Flask", "Typescript", "React", "Tailwind CSS"],
      liveUrl: "https://buffalingo-frontend.onrender.com",
      githubUrl: "https://github.com/sushree-n/buffalingo",
      image: "🐃"
    },
    {
      title: "OCR for Regional Languages",
      description: "Created an OCR web app with Django and EasyOCR for Indian languages, integrating OpenCV, Pytesseract, and Translation APIs, boosting text recognition efficiency by nearly 30% compared to previously used methods. Designed a user-friendly HTML/CSS interface allowing image input, text detection for English translation, and a Text-to-Speech (TTS) feature aiding the visually impaired.",
      technologies: ["Django", "EasyOCR", "OpenCV", "Pytesseract", "Translation APIs", "HTML/CSS", "TTS"],
      liveUrl: "#",
      githubUrl: "https://github.com/sushree-n/OCR-for-Regional-Languages",
      image: "🌐"
    },
    {
      title: "O-Zone: An Air Quality Monitoring System",
      description: "O-zone is an IoT-based project designed to monitor the Air Quality Index (AQI) levels of the surrounding areas and provide alerts for smoke detection. The project is built using Arduino UNO, NodeMCU, a bidirectional bus, and three sensors – DHT11, MQ2, and MQ135. It aims to enhance environmental awareness and promote healthier living by providing real-time air quality data.",
      technologies: ["Arduino UNO", "NodeMCU", "MQ2", "MQ135", "DHT11", "Firebase", "C++"],
      liveUrl: "#",
      githubUrl: "https://github.com/sushree-n/Ozone-Air-Quality-Monitoring-System",
      image: "🌍"
    },
    {
      title: "Krushak - An App for Farmers",
      description: "Built Krushak, an Android application designed for farmers in Maharashtra, featuring a Java backend, Firebase integration, and a user-friendly UI to provide curated government schemes, crop recommendations, and financial tools like a profit calculator and event manager to support informed agricultural decisions.",
      technologies: ["Android Studio", "Java", "XML", "Firebase", "Google APIs"],
      liveUrl: "#",
      githubUrl: "https://github.com/sushree-n/Krushak-An-app-for-farmers",
      image: "🌾"
    },
    {
      title: "Foodle - A Food Recommendation Chatbot",
      description: "Developed a fuzzy logic–based food recommendation chatbot using Python, trained on survey data from 200+ users with advanced NLP preprocessing and 99% model accuracy, featuring a custom-built UI and recipe retrieval for an interactive and accessible user experience.",
      technologies: ["Python", "Fuzzy Logic", "Turtle", "NLP (stemming, lemmatization)", "Pandas", "NumPy", "Web Scraping"],
      liveUrl: "#",
      githubUrl: "#",
      image: "🍔"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent font-pacifico">
            My Amazing Projects ✨
          </h2>
          <p className="text-xl text-muted-foreground">
            Here are some of the cool things I've built!
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-2">
                  <Card className="group h-full bg-gradient-card border border-ai-glow/20 hover:border-ai-glow/40 transition-all duration-300 hover:shadow-glow">
                    <CardHeader>
                      <div className="text-6xl mb-4 text-center">{project.image}</div>
                      <CardTitle className="text-xl font-semibold text-center">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      {project.technologies && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-ai-glow/10 text-ai-glow border-ai-glow/30">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <div className="flex gap-2 pt-4">
                        <Button 
                          variant="playful-primary" 
                          size="sm" 
                          className={`flex-1${['Foodle', 'Krushak', 'O-Zone', 'OCR for Regional Languages', 'QuizzBee'].some(title => project.title.includes(title)) ? ' opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                          asChild
                          {...(['Foodle', 'Krushak', 'O-Zone', 'OCR for Regional Languages', 'QuizzBee'].some(title => project.title.includes(title)) ? { tabIndex: -1, 'aria-disabled': true } : {})}
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {project.title.includes('Audio Adversarial Attacks and Defence') ? 'Read Published Paper' : 'Live Demo'}
                          </a>
                        </Button>
                        <Button 
                          variant="playful-ghost" 
                          size="sm" 
                          className={`flex-1${project.title.includes('Foodle') ? ' opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                          asChild
                          {...(project.title.includes('Foodle') ? { tabIndex: -1, 'aria-disabled': true } : {})}
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;