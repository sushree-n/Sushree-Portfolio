import { Trophy, Star, Award, Target, Zap, Heart, Users, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Microsoft Azure AI Engineer Associate (AI 102) Certified",
      date: "2025"
    },
    {
      title: "Microsoft Azure AI Fundamentals (AI 900) Certified",
      date: "2021"
    },
    {
      title: "Google Cloud Big Data and Machine Learning Fundamentals, Coursera",
      date: "2023"
    },
    {
      title: "Guest Lectures on NLP, Conversational AI and Sentiment Analysis",
      description: "Delivered guest lectures with over 100 students in collaboration with the Department of Computer Science and Engineering."
    },
    {
      title: "Organized a week long student development program (SDP) for which was attended by over 200+ students",
      description: "Conducted the workshop ‘Introduction with hands-on on LaTex’ where I taught about usage of LaTeX in formatting reports and technical papers."
    },
    {
      title: "Head of Department of Literary Committee, Spandan",
      description: "Spearheaded a team of volunteers, organizing five literary events with 400+ participants. Managed judge recruitment, venue, budget, and social media marketing."
    },
    {
      title: "World CSR Day Conference - 3rd Place",
      description: "Secured 3rd place at the World CSR Day Conference for presenting a paper."
    },
    {
      title: "Volunteered at NSS Unit of XIE",
      description: "Participated and organized in many activities like Blood Donation Camps, local beach clean ups and Tree Plantation Drives. Organized webinars on Breast Cancer Awareness, Cardiac Health Awareness and Lectures on Sexual Education."
    },
    {
      title: "Training and Placement Coordinator",
      description: "Head coordinator for the Computer Engineering department  responsible for coordinating between the training and placement cell, students and HRs from various companies."
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-gradient-to-br from-muted/20 to-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent font-pacifico">
            What I'm About 💫
          </h2>
          <p className="text-xl text-muted-foreground">
            Here's what drives me and what I love doing!
          </p>
        </div>

        {/* Personal Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group text-center bg-gradient-card border border-ai-glow/20 hover:border-ai-glow/40 transition-all duration-300 hover:shadow-glow">
              <div className="p-8">
                <div className="flex justify-center mb-4">
                  {/* Icon for the achievement */}
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <div className="text-3xl font-bold text-ai-glow mb-4">{achievement.date}</div>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;