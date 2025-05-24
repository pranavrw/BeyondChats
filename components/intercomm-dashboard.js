"use client"

import { useState } from "react"
import Sidebar from "./sidebar";
import ConversationList from "./conversation-list";
import RightPanel from "./rightpanel";
import TopBanner from "./top-banner";
import MessengerTabs from "./massenger-tabs";


export default function IntercomDashboard() {
    const [selectedConversation, setSelectedConversation] = useState("messenger-demo")
    const [activeRightTab, setActiveRightTab] = useState("details")
    const [openTabs, setOpenTabs] = useState([
        {
            id: "messenger-demo",
            title: "Messenger • [Demo]",
            type: "messenger",
            messages: [
                {
                    id: 1,
                    type: "system",
                    content:
                        "This is a demo message. It shows how a customer conversation from the Messenger will look in your Inbox. Conversations handled by Fin AI Agent will also appear here.",
                    timestamp: new Date(Date.now() - 300000),
                },
            ],
        },
    ])
    const [activeTab, setActiveTab] = useState("messenger-demo")

    const handleSelectConversation = (conversationId) => {
        setSelectedConversation(conversationId)

        // Check if tab is already open
        const existingTab = openTabs.find((tab) => tab.id === conversationId)

        if (!existingTab) {
            // Create new tab based on conversation type
            const conversations = {
                "messenger-demo": { title: "Messenger • [Demo]", type: "messenger" },
                "email-demo": { title: "Email • [Demo]", type: "email" },
                "whatsapp-demo": { title: "WhatsApp • [Demo]", type: "whatsapp" },
                "phone-demo": { title: "Phone • [Demo]", type: "phone" },
            }

            const conversation = conversations[conversationId]
            if (conversation) {
                const newTab = {
                    id: conversationId,
                    title: conversation.title,
                    type: conversation.type,
                    messages: [
                        {
                            id: 1,
                            type: "system",
                            content: `Welcome to ${conversation.type} support. How can we help you today?`,
                            timestamp: new Date(),
                        },
                    ],
                }
                setOpenTabs((prev) => [...prev, newTab])
            }
        }

        setActiveTab(conversationId)
    }

    const handleCloseTab = (tabId) => {
        setOpenTabs((prev) => prev.filter((tab) => tab.id !== tabId))
        if (activeTab === tabId) {
            const remainingTabs = openTabs.filter((tab) => tab.id !== tabId)
            setActiveTab(remainingTabs.length > 0 ? remainingTabs[0].id : "")
        }
    }

    const handleSendMessage = (tabId, message) => {
        setOpenTabs((prev) =>
            prev.map((tab) => {
                if (tab.id === tabId) {
                    const newMessage = {
                        id: Date.now(),
                        type: "user",
                        content: message,
                        timestamp: new Date(),
                    }

                    // Generate AI response after a short delay
                    setTimeout(() => {
                        const aiResponse = generateAIResponse(message, tab.type)
                        setOpenTabs((current) =>
                            current.map((t) => {
                                if (t.id === tabId) {
                                    return {
                                        ...t,
                                        messages: [
                                            ...t.messages,
                                            {
                                                id: Date.now() + 1,
                                                type: "ai",
                                                content: aiResponse,
                                                timestamp: new Date(),
                                            },
                                        ],
                                    }
                                }
                                return t
                            }),
                        )
                    }, 1000)

                    return {
                        ...tab,
                        messages: [...tab.messages, newMessage],
                    }
                }
                return tab
            }),
        )
    }

    const generateAIResponse = (message, type) => {
        const responses = {
            messenger: [
                "Thanks for reaching out! I'm here to help you with your messenger integration.",
                "I understand you're having issues with the messenger. Let me assist you with that.",
                "Great question! For messenger setup, I recommend checking our integration guide.",
                "I can help you configure your messenger settings. What specific issue are you facing?",
            ],
            email: [
                "I've received your email inquiry. Let me help you resolve this issue.",
                "Thank you for contacting us via email. I'll assist you right away.",
                "For email-related questions, I can guide you through the setup process.",
                "I see you're asking about email integration. Here's what you need to know...",
            ],
            whatsapp: [
                "WhatsApp integration is one of our most popular features. I can help you set it up.",
                "Thanks for your WhatsApp inquiry. Let me walk you through the process.",
                "I can assist you with WhatsApp Business API integration.",
                "For WhatsApp setup, you'll need to verify your business account first.",
            ],
            phone: [
                "I can help you set up phone support for your customers.",
                "Phone integration allows you to handle calls directly in Intercom.",
                "Let me guide you through the phone system configuration.",
                "For phone support setup, we'll need to configure your telephony provider.",
            ],
        }

        const typeResponses = responses[type] || responses.messenger
        return typeResponses[Math.floor(Math.random() * typeResponses.length)]
    }

    return (
        <div id="intercom-dashboard" className="h-screen bg-gray-900 text-white flex flex-col">
            <TopBanner />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <ConversationList selectedConversation={selectedConversation} onSelectConversation={handleSelectConversation} />
                <MessengerTabs
                    tabs={openTabs}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    onCloseTab={handleCloseTab}
                    onSendMessage={handleSendMessage}
                />
                <RightPanel activeTab={activeRightTab} onTabChange={setActiveRightTab} />
            </div>
        </div>
    )
}
