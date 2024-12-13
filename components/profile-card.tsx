import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, GraduationCap, BarChart2, GitBranch, Brain, Microscope, LineChart } from 'lucide-react'

export default function ProfileCard() {
  const skills = [
    {
      category: "Artificial Intelligence",
      icon: <Brain className="h-4 w-4" />,
      items: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      category: "DevOps & Development",
      icon: <GitBranch className="h-4 w-4" />,
      items: ["CI/CD", "Docker", "Cloud Services", "Version Control", "API Development"]
    },
    {
      category: "Software Development",
      icon: <BarChart2 className="h-4 w-4" />,
      items: ["Full Stack Development", "Python", "JavaScript", "React", "Node.js"]
    },
    {
      category: "Research",
      icon: <Microscope className="h-4 w-4" />,
      items: ["Academic Research", "Data Analysis", "Research Methodology", "Technical Writing"]
    },
    {
      category: "Monitoring & Evaluation",
      icon: <LineChart className="h-4 w-4" />,
      items: ["Performance Metrics", "Impact Assessment", "Quality Assurance", "Project Evaluation"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 p-4 md:p-8">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Avatar className="w-48 h-48 border-4 border-background shadow-xl">
                <AvatarImage src="/website_logo.png" alt="Cosmas Knowen" className="object-cover" />
                <AvatarFallback className="text-2xl font-outfit">CK</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold font-outfit mb-2">Cosmas Knowen</h1>
                <p className="text-muted-foreground">IT Consultant & Academic Professional</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Resume
                </Button>
                <Button variant="outline" size="sm">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Publications
                </Button>
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-xl font-semibold font-outfit mb-4">About</h2>
                <p className="text-muted-foreground">
                  Accomplished IT professional and academic with expertise in AI, software development, and research. 
                  Currently serving as an IT Tutorial Fellow at Lukenya University, focusing on advancing technology 
                  education and conducting research in AI and computational ethics.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold font-outfit mb-4">Core Competencies</h2>
                <div className="space-y-4">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2 font-medium">
                        {skillGroup.icon}
                        {skillGroup.category}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary"
                            className="bg-primary/5 hover:bg-primary/10"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

