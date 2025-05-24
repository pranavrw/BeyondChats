"use client"

import {Button} from "./ui/button";
import { useRouter } from "next/navigation"

export default function Hero() {


  const handleStartTrial = () => {
    // This would typically navigate to the dashboard page
    // For this demo, we'll use window.location since we're showing the dashboard on the same page
    document.getElementById("intercom-dashboard").scrollIntoView({ behavior: "smooth" })
    // In a real app with routing: router.push('/dashboard')
  }

  return (
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                The only AI customer service solution built to help you grow
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Intercom helps you build better customer relationships through conversational, messenger-based experiences
                across the customer journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 text-lg py-6 px-8" onClick={handleStartTrial}>
                  Start free trial
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-6 px-8">
                  View demo
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                    src="/placeholder.svg?height=500&width=600"
                    alt="Intercom platform"
                    className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                      AI
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">AI-powered responses</p>
                      <p className="text-xs text-gray-500">Resolves 50% of queries instantly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
