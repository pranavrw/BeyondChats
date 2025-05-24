import {Button} from "./ui/button";
import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$39",
      description: "For small businesses getting started with customer service",
      features: [
        "AI chatbot with 50 resolutions/mo",
        "Shared inbox for 2 team members",
        "Basic reporting",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "$99",
      description: "For growing teams that need more power and flexibility",
      features: [
        "AI chatbot with 500 resolutions/mo",
        "Shared inbox for 5 team members",
        "Advanced reporting and analytics",
        "Custom bots and automation",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited AI chatbot resolutions",
        "Unlimited team members",
        "Advanced security and compliance",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 premium support",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden ${plan.popular ? "ring-2 ring-blue-600 shadow-lg" : "border border-gray-200"}`}
            >
              {plan.popular && <div className="bg-blue-600 text-white text-center py-2 font-medium">Most Popular</div>}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-600 ml-2">/month</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Button
                  className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"}`}
                >
                  {plan.price === "Custom" ? "Contact sales" : "Start free trial"}
                </Button>
                <div className="mt-8">
                  <p className="font-medium text-gray-900 mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Contact our sales team
          </Button>
        </div>
      </div>
    </section>
  )
}
