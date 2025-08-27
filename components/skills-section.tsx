"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, BarChart, Wrench } from "lucide-react"
import { motion } from "framer-motion"

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "SQL", "R", "C++", "JavaScript"],
    },
    {
      icon: BarChart,
      title: "Data Science & ML",
      skills: ["Scikit-Learn", "Pandas", "NumPy", "BERT", "Random Forest", "Gradient Boosting", "NLP"],
    },
    {
      icon: Database,
      title: "Databases & Analytics",
      skills: ["SQLite", "Power BI", "Excel", "STATA", "Power Query"],
    },
    {
      icon: Wrench,
      title: "Development Tools",
      skills: ["Git", "Jupyter", "Flask", "Fast API", "GitHub"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for data science, machine learning, and software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                I'm constantly expanding my skill set through coursework, personal projects, and staying current with
                the latest developments in data science and machine learning. Currently exploring advanced deep learning
                techniques and cloud computing platforms to enhance my technical capabilities.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
