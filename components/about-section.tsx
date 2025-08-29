"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Users } from "lucide-react"
import { motion } from "framer-motion"

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            I'm a passionate Statistics student at Texas A&M University with a deep fascination for the mathematical
            foundations that power data science and machine learning. My academic journey combines rigorous statistical
            theory with practical applications in computer science and economics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/texas_am.png"
              alt="Texas A&M University Campus"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                <p className="text-sm opacity-90">Pursuing rigorous statistical education at Texas A&M</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <img src="/data_science_generic.png" alt="Data Science Workspace" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Hands-On Learning</h3>
                <p className="text-sm opacity-90">Applying theory through practical projects and research</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">B.Sc. Statistics with minors in Computer Science & Economics</p>
                <p className="text-sm text-muted-foreground mt-2">Texas A&M University • Aug 2023 – May 2027</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Leadership</h3>
                <p className="text-muted-foreground">Co-Captain of TAMU Mock Trial Team</p>
                <p className="text-sm text-muted-foreground mt-2">Mentorship, public speaking, and legal research</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interests</h3>
                <p className="text-muted-foreground">Art, Chess, Swimming, and Pickleball</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Balancing analytical thinking with creative pursuits
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Beyond Academics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="/chess_strategy.png"
                alt="Chess Strategy"
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-medium">Chess</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="/swimming_lanes.png"
                alt="Swimming"
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-medium">Swimming</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="/pickleball.png"
                alt="Pickleball"
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-medium">Pickleball</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="/paint_brush.png"
                alt="Art & Creativity"
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-medium">Art</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                My passion for data science stems from its unique blend of mathematical rigor and real-world impact.
                Through my coursework in Statistics, Computer Science, and Economics, I've developed a comprehensive
                understanding of how data-driven insights can solve complex problems. My experience with the Mock Trial
                Team has honed my analytical thinking and communication skills, which I apply to presenting technical
                findings in accessible ways. I'm actively seeking AI-focused internship opportunities where I can
                contribute to cutting-edge projects while continuing to learn and grow in this rapidly evolving field.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
