import React from "react";

const skills = {
  "AI/ML & NLP": [
    "Transformers", "Hugging Face", "OpenAI API", "Gemini Flash", "TensorFlow", "PyTorch", "Scikit-learn", "PEFT", "Prompting", "GNN", "SMILES", "ECFP", "NLP", "DeepSpeech", "EasyOCR", "Tesseract", "OpenCV"
  ],
  "Web Development": [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "Flask", "Django", "Node.js", "Express.js", "REST API"
  ],
  "Databases": [
    "PostgreSQL", "MongoDB", "Firebase", "SQLite"
  ],
  "Cloud & DevOps": [
    "GCP", "Vertex AI", "GenAI SDK", "Model Garden", "AWS", "Amplify", "Cognito", "S3", "Docker", "Render", "Git", "Postman"
  ]
};

const dotColors = [
  "bg-ai-success",
  "bg-ai-glow",
  "bg-ai-secondary",
  "bg-ai-warning"
];

const SkillsSection = () => (
  <section id="skills" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent font-pacifico">
          Technical Expertise
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, skillList], idx) => (
          <div key={category}>
            <h4 className="font-semibold text-foreground mb-4">{category}</h4>
            <ul className="space-y-2">
              {skillList.map((skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${dotColors[idx]}`}></span>
                  <span className="text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection; 