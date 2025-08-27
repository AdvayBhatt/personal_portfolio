"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, BookOpen, FlaskConical } from "lucide-react"
import { motion } from "framer-motion"

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Building,
      title: "Analytics Intern",
      company: "UnitedHealth Group",
      period: "Jun 2025 – Aug 2025",
      achievements: [
        "Developed Power BI dashboards for 5M+ accounts representing $39.6B in revenue",
        "Automated SQL workflows for revenue cycle analysis",
        "Identified $160M+ in misallocated claims through data analysis",
        "Conducted denial pattern analysis across $600M in claims data",
      ],
      skills: ["Power BI", "SQL", "Revenue Analysis", "Data Visualization"],
    },
    {
      icon: FlaskConical,
      title: "Undergraduate Research in ML",
      company: "Texas A&M University",
      period: "Aug 2024 – Jan 2025",
      achievements: [
        "Built random forest models predicting change orders in 10,000+ TxDOT projects",
        "Optimized case-based reasoning algorithms for predictive modeling",
        "Designed and implemented SQLite database architecture",
        "Achieved significant improvements in prediction accuracy",
      ],
      skills: ["Random Forest", "SQLite", "Predictive Modeling", "Algorithm Optimization"],
    },
    {
      icon: BookOpen,
      title: "Undergraduate Research in Game-Based Learning",
      company: "Texas A&M University",
      period: "Sep 2023 – May 2024",
      achievements: [
        "Conducted comprehensive survey analysis for educational research",
        "Co-authored 3 academic publications on learning methodologies",
        "Led student camp testing initiatives with measurable outcomes",
        "Achieved 2× improvement in learning outcomes through innovative approaches",
      ],
      skills: ["Survey Analysis", "Academic Research", "Statistical Analysis", "Publication Writing"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey spans analytics, machine learning research, and educational innovation
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <exp.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                          <p className="text-lg text-primary font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="secondary" className="w-fit mt-2 md:mt-0">
                          {exp.period}
                        </Badge>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span className="text-pretty">{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
