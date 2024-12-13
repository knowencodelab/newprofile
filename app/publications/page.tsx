import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Publications() {
  const publications = [
    {
      title: "ICT4SDG 6: Embracing ICT Integration Attainment of Decency of Water Services Delivery",
      authors: "Knowen, C., Oloo, S., Ronoh, L., & Mokua, A.",
      year: 2024,
      journal: "Journal of Computing Research and Innovation",
      details: "9(2), 216-231"
    },
    {
      title: "Harnessing and Leveraging the Convergence of AI, 5G, and Big Data Analytics Technologies and Innovations for Sustainable Development: Literature Review",
      authors: "Knowen, C. B., & Mabururu, M. N.",
      year: 2023,
      journal: "SCIRES-IT-SCIentific RESearch and Information Technology",
      details: "13(2), 151-160"
    },
    {
      title: "Prioritizing Personal Data Protection in Insurance Organizations: A Review",
      authors: "Knowen, C., & Ronoh, L.",
      year: 2023,
      journal: "Journal of Information Security and Cybercrimes Research",
      details: "6(1), 40-56"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 font-outfit">Publications</h1>
      <div className="space-y-8">
        {publications.map((pub, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{pub.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{pub.authors} ({pub.year})</p>
              <p><span className="font-semibold">{pub.journal}</span>, {pub.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

