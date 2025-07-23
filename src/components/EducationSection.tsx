import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const EducationSection = () => {
  const education = [
    {
      school: "University at Buffalo, The State University of New York",
      degree: "Masters of Science in Computer Science and Engineering, AI/ML Specialization",
      location: "Buffalo, New York",
      date: "Expected Dec 2025",
      gpa: "3.78/4",
      achievements: [
        "Participated in the 'AI for Good' Hackathon at UB and created QuizzBee. Presented it to a panel of AI researchers and industry professionals; recognized for applying LLMs to enhance personalized, accessible learning tools.",
        "Participated in UB CSE Demo Days Fall 2025 as a part of Deep Learning Course, presented our work on 'Drug Discovery Using Deep Learning' to a distinguished panel of judges."
      ]
    },
    {
      school: "Xavier Institute of Engineering, Mumbai University",
      degree: "Bachelor in Engineering (Computer Engineering)",
      location: "Mumbai, India",
      date: "July 2019 - May 2023",
      gpa: "9.44/10",
      achievements: [
        "Semester Topper in Semesters 2, 3 and 4.",
        "Secured 2nd position in Mini Project Competition in the hardware category (2022).",
        "Secured 3rd Position in Paper Presentation Contest at Taj Lands End, Bandra at World CSR Day Conference (2023)",
        "Secured 1st Rank in Intra College Debate during Spandan (2019).",
        "Held the position of 'Class Representative' for 3 years (2020-2023)",
        "Was the head of the department of literary committee during our college fest Spandan"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent font-pacifico">
            Education Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic foundation in computer science and artificial intelligence
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-ai-glow/20 hover:border-ai-glow/40 transition-all duration-300 hover:shadow-glow group">
              <div className="grid grid-cols-1 gap-6">
                {/* Institution Info */}
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:animate-pulse">
                      <GraduationCap className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-ai-glow mb-1">{edu.school}</h3>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{edu.degree}</h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
                {/* Achievements */}
                <div>
                  <Card className="bg-gradient-to-br from-green-50/80 via-white/80 to-green-100/60 dark:from-ai-glow/10 dark:via-background dark:to-ai-success/5 border border-ai-success/30 dark:border-ai-glow/40 shadow-lg rounded-xl">
                    <CardHeader className="pb-2 flex flex-row items-center gap-2">
                      <Award className="w-5 h-5 text-ai-success dark:text-ai-glow" />
                      <CardTitle className="text-ai-success dark:text-ai-glow text-lg font-bold">Achievements</CardTitle>
                    </CardHeader>
                    <hr className="border-ai-success/20 dark:border-ai-glow/30 mb-2 mx-6" />
                    <CardContent className="pt-0 pb-4">
                      <ul className="list-disc list-inside space-y-2 pl-4 text-sm text-foreground/90 dark:text-white/90">
                        {edu.achievements?.map((achievement, index) => (
                          <li key={index} className="leading-relaxed dark:text-white/80">{achievement}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;