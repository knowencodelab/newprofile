import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <Card>
        <CardHeader>
          <CardTitle>IT Consultant & Academic Professional</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            I am an accomplished IT professional, academic, and aspiring researcher with a robust background in technology
            and education. Holding a Master's degree in Information Technology, I currently serve as an IT Tutorial Fellow at
            Lukenya University, where I deliver high-quality instruction and mentorship to students, fostering their growth in the ever-
            evolving tech industry.
          </p>
          <p>
            In addition to my academic role, I have actively contributed to leadership and professional
            development initiatives. I am passionate about Software development and Integration, intellectual property trends,
            Computational ethics, Machine Learning and AI for societal transformation, GenAI, and AI policy development.
          </p>
          <p>
            An advocate for ethics in technology, I am currently conducting a community project to inspire youth to pursue
            computing careers while emphasizing the importance of moral values in the tech industry. My comprehensive
            experience in academia, leadership, and technology positions me as a transformative contributor to any
            organization, particularly in roles requiring strategic vision, innovative thinking, and a passion for societal
            development through IT.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

