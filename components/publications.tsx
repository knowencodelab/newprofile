import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Publications() {
  return (
    <section id="publications" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Selected Publications</h2>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>ICT4SDG 6: Embracing ICT Integration Attainment of Decency of Water Services Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Knowen, C., Oloo, S., Ronoh, L., & Mokua, A. (2024)</p>
            <p>Journal of Computing Research and Innovation, 9(2), 216-231.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Harnessing and Leveraging the Convergence of AI, 5G, and Big Data Analytics Technologies and Innovations for Sustainable Development: Literature Review</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Knowen, C. B., & Mabururu, M. N. (2023)</p>
            <p>SCIRES-IT-SCIentific RESearch and Information Technology, 13(2), 151-160.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Prioritizing Personal Data Protection in Insurance Organizations: A Review</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Knowen, C., & Ronoh, L. (2023)</p>
            <p>Journal of Information Security and Cybercrimes Research, 6(1), 40-56.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

