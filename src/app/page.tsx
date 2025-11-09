"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin, MessageCircle, MapPin, Calendar, Briefcase, GraduationCap, Code2, Sparkles, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { BlurryNav } from "@/components/blurry-nav"
import { ScrollToTop } from "@/components/scroll-to-top"
import { TechLogos } from "@/components/tech-logos"
import { GlowingText } from "@/components/glowing-text"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

export default function Home() {
  const whatsappNumber = "+96565772444"
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`

  const skills = {
    backend: [
      "Laravel (Inertia)",
      "PHP",
      "PEST & Unit Testing",
      "API Development",
      "MySQL DBs",
      "Database Structure"
    ],
    frontend: [
      "React.js",
      "Next.js (SSR v.14)",
      "React Native",
      "React Native Expo",
      "Redux (RTK + Query)",
      "Redux Saga / Persist",
      "JEST Testing"
    ],
    styling: [
      "Tailwind CSS",
      "shadcn/ui",
      "Bootstrap",
      "Pure CSS"
    ],
    devOps: [
      "Digital Ocean Apps",
      "Storage Management",
      "Domains Setup",
      "Mail Servers Setup",
      "Version Control (Git)"
    ],
    aiTools: [
      "Claude AI CLI",
      "Claude Desktop",
      "Claude Skills",
      "MCPs Integration",
      "ChatGPT",
      "Figma Design",
      "Make AI Automation"
    ]
  }

  const experiences = [
    {
      title: "Full Stack Developer (Team Lead)",
      company: "The HUB",
      location: "Kuwait",
      period: "2022 - 2024",
      highlights: [
        "Autonomy interpreting business requirements, designing, implementing, and testing high-quality solutions",
        "Design, build and maintain high performance and reusable code using React",
        "Building startup websites (e-commerce sites) with dashboard for users and admin with different permissions"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Med Vision",
      location: "Kuwait",
      period: "2019 - 2022",
      highlights: [
        "Refactoring old code and fixing issues for multiple company sites",
        "Building and maintaining high performance and reusable code",
        "Engaging with clients to understand their needs and achieve them",
        "Technologies: React, Next.js, Redux, React Query, Tailwind CSS, MUI"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Micro Services Tech co.",
      location: "Kuwait",
      period: "2017 - 2019",
      highlights: [
        "Define and implement technical and design requirements",
        "Ensuring core functions for filtering and sorting data",
        "Working on Reports department to view filtered data to clients",
        "Handling React Components logic code of the brand's platform"
      ]
    },
    {
      title: "Backend Developer",
      company: "Ideas owners",
      location: "Kuwait",
      period: "2014 - 2017",
      highlights: [
        "Leading junior developers to be in time with the project backlog",
        "Transforming dashboard into blade templates using Laravel",
        "Responsible for partnership integration and implementing design & functionality",
        "Increased scalability, maintainability, and responsiveness of cross-browser code"
      ]
    }
  ]

  const education = [
    {
      degree: "Bachelor's degree (Economics & B.A)",
      institution: "Ain Shames University",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      degree: "PHP Code Principles Diploma",
      institution: "American University in Cairo (AUC)",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      degree: "Website Development Diploma",
      institution: "YAT Institute",
      icon: <GraduationCap className="h-5 w-5" />
    }
  ]

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <ThemeToggle />
      <BlurryNav />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>

        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6"
          >
            <div className="inline-block">
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
                <Code2 className="h-3 w-3 mr-2 inline" />
                Available for opportunities
              </Badge>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100"
          >
            USAMA AHMED
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Full Stack Developer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Mobile & Web
            </p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            A Senior-level software engineer with a passion for computer science and a strong commitment to building products that add value to the community. Looking to join a team of dynamic engineers where I can bring my technical skills and problem-solving abilities to help drive growth and success.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" variant="outline" asChild className="gap-2">
              <a href="/resume-updated.pdf" download="Usama_Ahmed_Resume.pdf">
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <a href={`mailto:Uusa35@gmail.com`}>
                <Mail className="h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <a href="https://linktr.ee/usama.ahmed" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                Linktree
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <GlowingText className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</GlowingText>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              My expertise across the full development stack
            </p>
          </motion.div>

          <TechLogos />

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 backdrop-blur-md bg-white/60 dark:bg-gray-900/60">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Code2 className="h-5 w-5 text-blue-500" />
                    </div>
                    Backend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 backdrop-blur-md bg-white/60 dark:bg-gray-900/60">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Code2 className="h-5 w-5 text-purple-500" />
                    </div>
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 backdrop-blur-md bg-white/60 dark:bg-gray-900/60">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Code2 className="h-5 w-5 text-green-500" />
                    </div>
                    Styling & UI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.styling.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 backdrop-blur-md bg-white/60 dark:bg-gray-900/60">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <Code2 className="h-5 w-5 text-orange-500" />
                    </div>
                    DevOps & Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.devOps.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 backdrop-blur-md bg-white/60 dark:bg-gray-900/60">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-violet-500/10 rounded-lg">
                      <Sparkles className="h-5 w-5 text-violet-500" />
                    </div>
                    AI & Automation Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.aiTools.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <GlowingText className="text-4xl md:text-5xl font-bold mb-4">Work Experience</GlowingText>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              10+ years of professional software development
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-2 backdrop-blur-md bg-white/60 dark:bg-gray-900/60">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{experience.title}</CardTitle>
                        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4" />
                            <span className="font-semibold">{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="self-start md:self-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {experience.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {experience.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-blue-500 mt-1.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <GlowingText className="text-4xl md:text-5xl font-bold mb-4">Education</GlowingText>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Academic background and professional certifications
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                variants={fadeInUp}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 backdrop-blur-md bg-white/60 dark:bg-gray-900/60">
                  <CardHeader>
                    <div className="mb-4">
                      <div className="p-3 bg-blue-500/10 rounded-lg inline-block">
                        {edu.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-2">{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <GlowingText className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</GlowingText>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 shadow-2xl backdrop-blur-md bg-white/60 dark:bg-gray-900/60">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.a
                    href={`mailto:Uusa35@gmail.com`}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Uusa35@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href={`tel:${whatsappNumber}`}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                      <Phone className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone (Kuwait)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">+965 65772444</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+201553848624"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                      <Phone className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone (Egypt)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">+20 1553848624</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                      <MessageCircle className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Message me</p>
                    </div>
                  </motion.a>
                </div>

                <Separator className="my-6" />

                <motion.a
                  href="https://linktr.ee/usama.ahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <Linkedin className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">All Links</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">linktr.ee/usama.ahmed</p>
                  </div>
                </motion.a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              © {new Date().getFullYear()} Usama Ahmed. Built with Next.js, Tailwind CSS, and shadcn/ui
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://linktr.ee/usama.ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl z-40 group"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
