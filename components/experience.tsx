import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>IT Tutorial Fellow / Assistant Lecturer</CardTitle>
            <p className="text-sm text-muted-foreground">Lukenya University | June 2024 - Present</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Deliver lectures, tutorials, and practical sessions in Information Technology</li>
              <li>Develop and update course materials aligned with industry standards</li>
              <li>Provide academic mentorship and guide students on research projects</li>
              <li>Engage in research and knowledge dissemination</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Part-time Lecturer</CardTitle>
            <p className="text-sm text-muted-foreground">Rongo University | January 2022 - March 2024</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Delivered lectures and practical sessions in Information Technology</li>
              <li>Developed course materials and provided academic mentorship</li>
              <li>Engaged in research activities and knowledge dissemination</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Volunteer University Research Assistant</CardTitle>
            <p className="text-sm text-muted-foreground">Rongo University | March 2023 - Present</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Co-authored journal articles, conference papers, and workshop proceedings</li>
              <li>Developed proposals for grant applications and funding</li>
              <li>Assisted in drafting research reports, presentations, and publications</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

