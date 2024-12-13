import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:sticky md:top-24 space-y-6 w-full md:w-1/3">
          <Avatar className="w-48 h-48 mx-auto md:mx-0">
            <AvatarImage src="/website_logo.png" alt="Cosmas Knowen" className="object-cover" />
            <AvatarFallback>CK</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold font-outfit mb-2">Cosmas Knowen</h1>
            <p className="text-muted-foreground">IT Consultant & Academic Professional</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">AI Specialist</Badge>
            <Badge variant="outline">Software Developer</Badge>
            <Badge variant="outline">Researcher</Badge>
            <Badge variant="outline">Educator</Badge>
          </div>
        </div>
        <div className="flex-1 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Accomplished IT professional, academic, and aspiring researcher with a robust background in technology
                and education. Currently serving as an IT Tutorial Fellow at Lukenya University, delivering high-quality
                instruction and mentorship to students in the ever-evolving tech industry.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Key Qualifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Master's degree in Information Technology from Rongo University</li>
                <li>Expertise in AI, Machine Learning, and Software Development</li>
                <li>Strong background in academic research and publication</li>
                <li>Experience in project management and team leadership</li>
                <li>Advocate for ethics in technology and AI policy development</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Current Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Passionate about Software development and Integration, intellectual property trends,
                Computational ethics, Machine Learning and AI for societal transformation, GenAI, and AI policy development.
                Currently conducting a community project to inspire youth to pursue computing careers while emphasizing
                the importance of moral values in the tech industry.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

