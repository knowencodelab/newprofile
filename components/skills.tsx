import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const technicalSkills = [
    "PHP", "HTML/CSS", "C", "JavaScript", "Python", "R", "Java",
    "Data Analysis", "IT Systems Management", "Software Deployment",
    "Research Methodology", "Machine Learning", "AI"
  ]
  
  const softSkills = [
    "Strategic Planning", "Ethical Decision-Making", "Team Leadership",
    "Conflict Resolution", "Problem-Solving", "Effective Communication"
  ]

  return (
    <section id="skills" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <Badge key={index} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <Badge key={index} variant="outline">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

