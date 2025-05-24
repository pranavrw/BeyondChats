"use client"

import {Button} from "./ui/button";

export default function Cta() {
  const handleStartTrial = () => {
    // Scroll to the dashboard section
    document.getElementById("intercom-dashboard").scrollIntoView({ behavior: "smooth" })
  }

  const handleTalkToSales = () => {
    // In a real app, this would open a contact form or chat
    alert("Opening sales contact form...")
  }

  return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your customer service?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using Intercom to build better customer relationships.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg py-6 px-8" onClick={handleStartTrial}>
                Start free trial
              </Button>
              <Button
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700 text-lg py-6 px-8"
                  onClick={handleTalkToSales}
              >
                Talk to sales
              </Button>
            </div>
            <p className="text-blue-100 mt-6">No credit card required. 14-day free trial.</p>
          </div>
        </div>
      </section>
  )
}
