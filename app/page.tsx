import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  const sections = [
    { title: "Profile", description: "Learn more about my professional background and expertise.", link: "/profile" },
    { title: "Skills", description: "Explore my technical and soft skills in various domains.", link: "/skills" },
    { title: "Experience", description: "View my professional journey and accomplishments.", link: "/experience" },
    { title: "Publications", description: "Browse my academic publications and research work.", link: "/publications" },
    { title: "Education", description: "Check out my academic qualifications and training.", link: "/education" },
    { title: "Contact", description: "Get in touch with me for collaborations or inquiries.", link: "/contact" }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 font-outfit">Welcome to My Professional Portfolio</h1>
          <p className="text-xl mb-4">
            I'm Cosmas Knowen, an IT Consultant and Academic Professional specializing in AI, Software Development, and Technology Ethics.
            Explore my portfolio to learn more about my work and expertise.
          </p>
        </div>
        <Avatar className="w-48 h-48 border-4 border-background shadow-xl">
          <AvatarImage src="/website_logo.png" alt="Cosmas Knowen" className="object-cover" />
          <AvatarFallback>CK</AvatarFallback>
        </Avatar>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{section.description}</p>
              <Button asChild>
                <Link href={section.link}>
                  View {section.title} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

