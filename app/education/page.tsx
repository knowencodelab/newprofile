import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  const education = [
    {
      degree: "Master of Science, Information Technology",
      institution: "Rongo University",
      period: "January 2022 - December 2024",
      thesis: "Robust reinforcement personal data security model: a case of selected insurance companies in Kenya"
    },
    {
      degree: "Bachelor's Degree, Information Science (IT Option)",
      institution: "Rongo University",
      period: "August 2017 - December 2021"
    }
  ]

  const courses = [
    "Summer school course on climate change AI (June 23 - July 26, 2023)",
    "Online leadership academic and professional development program (March 2023)",
    "SDGS course program (March 31, 2020)",
    "ITIL Foundational Training (October 2021)"
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 font-outfit">Education & Training</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 font-outfit">Academic Qualifications</h2>
          {education.map((edu, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <p className="text-sm text-muted-foreground">{edu.institution} | {edu.period}</p>
              </CardHeader>
              {edu.thesis && (
                <CardContent>
                  <p><span className="font-semibold">Thesis:</span> {edu.thesis}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 font-outfit">Additional Courses & Training</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc pl-6 space-y-2">
                {courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

