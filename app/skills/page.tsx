import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, Network, LineChart, BookOpen, Users, Shield } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      name: "Artificial Intelligence & Machine Learning",
      icon: <Brain className="w-5 h-5" />,
      skills: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "AI for Societal Transformation", "GenAI"]
    },
    {
      name: "Software Development",
      icon: <Code className="w-5 h-5" />,
      skills: ["PHP", "HTML/CSS", "C", "JavaScript", "Python", "R", "Java", "Full Stack Development", "API Development"]
    },
    {
      name: "Data Management & Analysis",
      icon: <Database className="w-5 h-5" />,
      skills: ["Data Analysis", "STATA", "SPSS", "NVivo", "Atlas Ti", "MaxQDA", "Big Data Analytics"]
    },
    {
      name: "IT Systems & Infrastructure",
      icon: <Network className="w-5 h-5" />,
      skills: ["IT Systems Management", "Network Configuration", "Cloud Services", "DevOps", "CI/CD"]
    },
    {
      name: "Research & Academia",
      icon: <BookOpen className="w-5 h-5" />,
      skills: ["Research Methodology", "Academic Writing", "Curriculum Development", "Mentorship", "Grant Proposal Writing"]
    },
    {
      name: "Project Management & Leadership",
      icon: <Users className="w-5 h-5" />,
      skills: ["Strategic Planning", "Team Leadership", "Conflict Resolution", "Performance Evaluation", "Stakeholder Management"]
    },
    {
      name: "Monitoring & Evaluation",
      icon: <LineChart className="w-5 h-5" />,
      skills: ["Impact Assessment", "Performance Metrics", "Quality Assurance", "Data-Driven Decision Making"]
    },
    {
      name: "Ethics & Policy",
      icon: <Shield className="w-5 h-5" />,
      skills: ["Computational Ethics", "AI Policy Development", "Intellectual Property Trends", "Technology Ethics"]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 font-outfit">Skills & Expertise</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {category.icon}
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

