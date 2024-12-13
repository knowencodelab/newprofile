import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Master of Science, Information Technology</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Rongo University | 2022 - 2024</p>
            <p>Thesis: Robust reinforcement personal data security model: a case of selected insurance companies in Kenya</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bachelor's Degree, Information Science (IT Option)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Rongo University | 2017 - 2021</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

