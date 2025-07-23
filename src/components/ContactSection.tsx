import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ExternalLink, MessageCircle, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import { toast } from '@/components/ui/use-toast';

const SERVICE_ID = 'service_toxp02y'; 
const TEMPLATE_ID = 'template_wj1rcg9'; 
const USER_ID = 'wPVonp-2N2ILb1JSr'; 

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sushreen1@gmail.com",
      link: "mailto:sushreen1@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "716-910-7704",
      link: "tel:7169107704"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Buffalo, New York",
      link: "#"
    }
  ];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((result) => {
        toast({
          title: 'Thank you!',
          description: 'Your message was sent successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
        toast({
          title: 'Error',
          description: 'Failed to send message. Please try again later.',
        });
        console.error(error.text);
      });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-background/50 to-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent font-pacifico">
            Let's Chat! 💬
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to create something amazing together? I'd love to hear from you!
          </p>
        </div>

        {/* Send a Message Form */}
        <Card className="mb-12 p-8 bg-gradient-card border-ai-glow/20 hover:border-ai-glow/40 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Send className="w-5 h-5 text-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-ai-glow">Send Me a Message ✨</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="What should I call you?"
                  className="bg-background/50 border-ai-glow/30 focus:border-ai-glow"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-ai-glow/30 focus:border-ai-glow"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                className="bg-background/50 border-ai-glow/30 focus:border-ai-glow"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project, idea, or just say hi! I love coffee chats! 👋"
                rows={6}
                className="bg-background/50 border-ai-glow/30 focus:border-ai-glow resize-none"
                required
              />
            </div>

            <Button type="submit" variant="playful-primary" size="lg" className="w-full group">
              Send Message
              <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </Card>

        {/* Contact Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-card border border-ai-glow/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-center">
                <MessageCircle className="w-7 h-7 text-ai-glow" />
                Let's Connect! 💫
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Mail className="w-5 h-5 text-ai-glow" />
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">sushreen1@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Phone className="w-5 h-5 text-ai-glow" />
                  <div>
                    <div className="text-sm font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">716-910-7704</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <MapPin className="w-5 h-5 text-ai-glow" />
                  <div>
                    <div className="text-sm font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">Buffalo, New York</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Users className="w-5 h-5 text-ai-secondary" />
                  <div>
                    <div className="text-sm font-medium">Response Time</div>
                    <div className="text-sm text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold mb-4 text-center">Find Me Online</h4>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  {[
                    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/sushree-nadiminty/" },
                    { name: "GitHub", icon: <Github className="w-5 h-5" />, url: "https://github.com/sushree-n" }
                  ].map((social, index) => (
                    <Button
                      key={index}
                      variant="playful-ghost"
                      className="w-48 h-12 flex items-center justify-center text-base font-medium"
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        {social.icon}
                        <span className="ml-2">{social.name}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;