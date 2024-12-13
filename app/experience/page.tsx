import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "IT Tutorial Fellow / Assistant Lecturer",
      company: "Lukenya University",
      period: "June 2024 - Present",
      responsibilities: [
        "Deliver lectures, tutorials, and practical sessions in Information Technology",
        "Develop and update course materials aligned with industry standards",
        "Provide academic mentorship and guide students on research projects",
        "Engage in research and knowledge dissemination"
      ]
    },
    {
      title: "Part-time Lecturer",
      company: "Rongo University",
      period: "January 2022 - March 2024",
      responsibilities: [
        "Delivered lectures and practical sessions in Information Technology",
        "Developed course materials and provided academic mentorship",
        "Engaged in research activities and knowledge dissemination"
      ]
    },
    {
      title: "Volunteer University Research Assistant",
      company: "Rongo University",
      period: "March 2023 - Present",
      responsibilities: [
        "Co-authored journal articles, conference papers, and workshop proceedings",
        "Developed proposals for grant applications and funding",
        "Assisted in drafting research reports, presentations, and publications"
      ]
    },
    {
      title: "Research Assistant",
      company: "JOOUST VLIR-UOS",
      period: "August 2023 - September 2023",
      responsibilities: [
        "Data collection (surveys administration, Interviews scheduled administration, FGD administration, and observation)",
        "Prepare research reports, presentations, and publications in collaboration with the research team",
        "Manage research project logistics, including organizing materials, maintaining documentation, and ensuring deadlines are met"
      ]
    },
    {
      title: "Software Developer / Digital Business Developer",
      company: "Obysoft Technologies",
      period: "March 2022 - October 2022",
      responsibilities: [
        "Design and development of websites and software",
        "Digital business collaboration",
        "Digital e-commerce data analysis and e-business advisory",
        "Content management",
        "Search engine optimization"
      ]
    },
    {
      title: "Volunteer ICT Technician",
      company: "Rongo University",
      period: "October 2021 - March 2024",
      responsibilities: [
        "Network monitoring and configuration",
        "ICT user support",
        "Computer Repair and maintenance",
        "Software installation and troubleshooting",
        "Computer inventory taking",
        "Designing and implementing disaster recovery and backup procedures and information security and control structures"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 font-outfit">Professional Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

