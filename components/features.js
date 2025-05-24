import { MessageSquare, Bot, BarChart, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
      title: "Conversational Support",
      description: "Deliver personalized customer service at scale with a messenger that's built for support teams.",
    },
    {
      icon: <Bot className="h-10 w-10 text-blue-600" />,
      title: "AI Chatbots",
      description: "Resolve common customer questions instantly with AI chatbots that understand your business.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-600" />,
      title: "Customer Engagement",
      description: "Proactively engage with customers through targeted messages and campaigns.",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with your team to provide the best customer experience.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to deliver exceptional customer service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines powerful AI with human touch to create meaningful customer relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  AI-powered customer service that feels human
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our AI understands customer intent, provides accurate answers, and knows when to bring in your team.
                </p>
                <ul className="space-y-3">
                  {[
                    "Resolves 50% of queries instantly",
                    "Learns from your knowledge base",
                    "Available 24/7",
                    "Seamless handoff to human agents",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 lg:pl-12">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="AI chatbot interface"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
