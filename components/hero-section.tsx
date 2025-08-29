"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { motion } from "framer-motion"

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-primary/20">
            <img
              src="/advay_headshot.jpg"
              alt="Advay Bhattacharya"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
        >
          Advay Bhattacharya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance"
        >
          Aspiring Data Scientist & Machine Learning Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed"
        >
          Junior Statistics major at Texas A&M University, passionate about the deep mathematical underpinnings of data
          science and machine learning. Interested in AI-focused internships. Outside work: art, chess, swimming, and
          pickleball.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            View Projects
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com/AdvayBhatt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/advay-bhattacharya-968a88241/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:advayabhattacharya@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
