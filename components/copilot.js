"use client"

import { useState } from "react"
import { Play, Send, Sliders } from "lucide-react"
import {Button} from "./ui/button";

export default function CopilotPanel() {
    const [question, setQuestion] = useState("")
    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const predefinedResponses = {
        "how to setup":
            "To set up Intercom, follow these steps:\n1. Install the Messenger widget on your website\n2. Configure your team settings\n3. Set up automated responses\n4. Train your AI with knowledge base articles",
        pricing:
            "Intercom offers several pricing tiers:\n- Starter: $39/month for basic features\n- Pro: $99/month for advanced automation\n- Enterprise: Custom pricing for large organizations\nAll plans include a 14-day free trial.",
        "ai features":
            "Intercom's AI features include:\n- Automated response suggestions\n- Intent recognition\n- Smart routing to the right team\n- Knowledge base search\n- Conversation summarization",
        integration:
            "Intercom integrates with 300+ tools including:\n- Salesforce, HubSpot (CRM)\n- Slack, Microsoft Teams (Communication)\n- Shopify, WooCommerce (E-commerce)\n- Zapier for custom workflows",
        help: "I can help you with:\n- Setting up Intercom features\n- Understanding pricing and plans\n- Integration questions\n- Best practices for customer support\n- AI and automation features\n\nWhat would you like to know more about?",
    }

    const generateResponse = (userQuestion) => {
        const lowerQuestion = userQuestion.toLowerCase()

        for (const [key, response] of Object.entries(predefinedResponses)) {
            if (lowerQuestion.includes(key)) {
                return response
            }
        }

        // Default response
        return (
            "I understand you're asking about: \"" +
            userQuestion +
            "\"\n\nBased on your team's knowledge base and past conversations, here are some relevant suggestions:\n\n• Check our help documentation for detailed guides\n• Review similar past conversations for context\n• Consider reaching out to your team lead for complex issues\n\nWould you like me to search for more specific information?"
        )
    }

    const handleSendQuestion = () => {
        if (!question.trim()) return

        const userMessage = {
            id: Date.now(),
            type: "user",
            content: question,
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setQuestion("")
        setIsLoading(true)

        // Simulate AI response delay
        setTimeout(() => {
            const aiResponse = {
                id: Date.now() + 1,
                type: "ai",
                content: generateResponse(question),
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, aiResponse])
            setIsLoading(false)
        }, 1500)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSendQuestion()
        }
    }

    const features = [
        {
            icon: "🚀",
            text: "Copilot can find answers to customer queries by searching your team's support content and past conversations.",
        },
        {
            icon: "💡",
            text: "It can help you figure out what to do, using your team's internal articles.",
        },
        {
            icon: "📚",
            text: (
                <>
                    All it needs is <span className="underline">knowledge</span>. The more content you give, the more expert
                    Copilot becomes.
                </>
            ),
        },
        {
            icon: "🔒",
            text: "Copilot conversations are only visible to you.",
        },
    ]

    return (
        <div className="p-4 flex flex-col h-full">
            {messages.length === 0 ? (
                <>
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">Copilot is here to help.</h2>
                        <h2 className="text-2xl font-bold text-white">Just ask.</h2>
                    </div>

                    {/* Features */}
                    <div className="space-y-6 mb-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-3">
                                <span className="text-lg">{feature.icon}</span>
                                <p className="text-gray-300 text-sm leading-relaxed">{feature.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Copilot Explained Button */}
                    <div className="mb-6">
                        <Button
                            variant="outline"
                            className="w-full bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            <Play className="w-4 h-4 mr-2" />
                            Copilot explained
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                        {messages.map((message) => (
                            <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`max-w-xs p-3 rounded-lg ${
                                        message.type === "user" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-100"
                                    }`}
                                >
                                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                                    <p className="text-xs opacity-70 mt-1">
                                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-700 text-gray-100 p-3 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div
                                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                            style={{ animationDelay: "0.1s" }}
                                        ></div>
                                        <div
                                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                            style={{ animationDelay: "0.2s" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}

            {/* Input Section */}
            <div className="mt-auto">
                <div className="relative">
          <textarea
              placeholder="Ask a question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full bg-gray-700 border border-blue-500 rounded-lg px-4 py-3 pr-20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
              rows={2}
          />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2">
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-1">
                            <Sliders className="w-4 h-4" />
                        </Button>
                        <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-400 hover:text-white p-1"
                            onClick={handleSendQuestion}
                            disabled={!question.trim() || isLoading}
                        >
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {messages.length === 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        <Button
                            size="sm"
                            variant="outline"
                            className="text-xs bg-transparent border-gray-600 text-gray-400 hover:bg-gray-700"
                            onClick={() => setQuestion("How to setup Intercom?")}
                        >
                            How to setup?
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            className="text-xs bg-transparent border-gray-600 text-gray-400 hover:bg-gray-700"
                            onClick={() => setQuestion("What are the pricing options?")}
                        >
                            Pricing
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            className="text-xs bg-transparent border-gray-600 text-gray-400 hover:bg-gray-700"
                            onClick={() => setQuestion("Tell me about AI features")}
                        >
                            AI features
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
