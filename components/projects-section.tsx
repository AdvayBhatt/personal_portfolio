"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Trophy, BarChart3, Car, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useRef } from "react"

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      icon: Trophy,
      title: "Coinvo AI Financial Advising Platform",
      subtitle: "TAMUHack 2025 - 2nd Place Winner",
      description:
        "Full-stack AI-powered financial advisory platform integrating real-time stock trading APIs with intelligent recommendation algorithms.",
      achievements: [
        "Secured 2nd place in competitive hackathon",
        "Real-time stock data integration and analysis",
        "AI-driven personalized financial recommendations",
        "Responsive full-stack web application",
      ],
      technologies: ["Flask", "Fast API", "JavaScript", "AI/ML", "Stock APIs"],
      github: "#",
      demo: "#",
      featured: true,
      image: "/ai-financial-platform-dashboard-with-charts-and-gr.png",
    },
    {
      icon: BarChart3,
      title: "Student Engineering Council Survey Analysis",
      subtitle: "Advanced NLP & Predictive Modeling",
      description:
        "Comprehensive sentiment analysis and predictive modeling project using BERT and ensemble methods to analyze student feedback data.",
      achievements: [
        "BERT-based sentiment analysis implementation",
        "Gradient boosting and KNN ensemble model",
        "Achieved AUC score of 0.86",
        "Actionable insights for student engagement",
      ],
      technologies: ["Python", "BERT", "Scikit-Learn", "Gradient Boosting", "KNN"],
      github: "#",
      demo: "#",
      featured: false,
      image: "/nlp-sentiment-analysis-visualization-with-bert-mod.png",
    },
    {
      icon: Car,
      title: "General Motors EV Adoption Prediction",
      subtitle: "Machine Learning for Automotive Industry",
      description:
        "Predictive modeling project analyzing hybrid vehicle data to forecast electric vehicle adoption patterns with high accuracy.",
      achievements: [
        "Random forest model with 95% accuracy",
        "Comprehensive data engineering pipeline",
        "Hybrid vehicle usage pattern analysis",
        "Industry-relevant insights for EV transition",
      ],
      technologies: ["Python", "Random Forest", "Data Engineering", "Pandas", "NumPy"],
      github: "#",
      demo: "#",
      featured: false,
      image: "/electric-vehicle-data-visualization-with-predictio.png",
    },
  ]

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in data science, machine learning, and full-stack development
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel container */}
          <div className="overflow-hidden" ref={carouselRef}>
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Card className={`overflow-hidden ${project.featured ? "ring-2 ring-primary/20" : ""}`}>
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        {project.featured && (
                          <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                            Featured
                          </Badge>
                        )}
                      </div>

                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <project.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                              <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{project.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, i) => (
                              <li key={i} className="text-muted-foreground flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                <span className="text-pretty">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-transparent"
            onClick={prevProject}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-transparent"
            onClick={nextProject}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
