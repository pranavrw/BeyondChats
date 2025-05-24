import {Button} from "./ui/button";
import { MessageCircle, Users, BarChart4 } from "lucide-react"

export default function Solutions() {
  const solutions = [
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-600" />,
      title: "For Support",
      description: "Deliver efficient, personalized support at scale with AI and automation.",
      features: ["AI chatbots", "Help center", "Shared inbox", "Customer data platform"],
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "For Marketing",
      description: "Engage customers with targeted messages that drive conversion and retention.",
      features: ["Targeted messaging", "Product tours", "Campaign management", "Conversion tracking"],
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-blue-600" />,
      title: "For Sales",
      description: "Convert more leads with real-time chat and automated qualification.",
      features: ["Live chat", "Lead qualification", "Meeting scheduling", "Sales reporting"],
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solutions for every team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intercom helps teams across your organization deliver a unified customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-3 mb-8">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg
                        className="w-3 h-3 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn more
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
