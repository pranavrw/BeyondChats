import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Intercom has transformed how we interact with our customers. The AI capabilities have reduced our response time by 70%.",
      author: "Sarah Johnson",
      role: "Head of Customer Success",
      company: "TechCorp",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "The seamless integration between AI and our support team has allowed us to scale our customer service without sacrificing quality.",
      author: "Michael Chen",
      role: "CTO",
      company: "GrowthLabs",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Our customers love the instant responses they get from Intercom's AI, and our team loves how it handles routine questions so they can focus on complex issues.",
      author: "Emily Rodriguez",
      role: "Customer Support Manager",
      company: "Shopify Plus Partner",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Loved by businesses worldwide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why thousands of companies trust Intercom to build better customer relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-2">
            <span className="text-blue-600 font-medium">4.8/5</span>
            <div className="flex ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-blue-600 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-gray-600">from 2,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
