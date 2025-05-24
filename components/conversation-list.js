"use client"

import { Search, Plus, MoreHorizontal, ChevronDown } from "lucide-react"
import {Button} from "./ui/button";

export default function ConversationList({ selectedConversation, onSelectConversation }) {
    const conversations = [
        {
            id: "messenger-demo",
            type: "Messenger",
            title: "Messenger • [Demo]",
            subtitle: "Install Messenger",
            time: "2m",
            avatar: "M",
            avatarColor: "bg-blue-500",
        },
        {
            id: "email-demo",
            type: "Email",
            title: "Email • [Demo]",
            subtitle: "This is a demo email. It s...",
            time: "2m",
            avatar: "E",
            avatarColor: "bg-green-500",
        },
        {
            id: "whatsapp-demo",
            type: "WhatsApp",
            title: "WhatsApp • [Demo]",
            subtitle: "Set up WhatsApp or soc...",
            time: "2m",
            avatar: "W",
            avatarColor: "bg-green-600",
        },
        {
            id: "phone-demo",
            type: "Phone",
            title: "Phone • [Demo]",
            subtitle: "Set up phone or SMS",
            time: "2m",
            avatar: "P",
            avatarColor: "bg-purple-500",
        },
    ]

    const inboxStats = [
        { label: "Your inbox", count: 4 },
        { label: "Mentions", count: 0 },
        { label: "Created by you", count: 0 },
        { label: "All", count: 4 },
        { label: "Unassigned", count: 0 },
    ]

    return (
        <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-xl font-semibold">Inbox</h1>
                    <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Search className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Plus className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Inbox Stats */}
                <div className="space-y-2">
                    {inboxStats.map((stat, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                                <span className="text-gray-300">{stat.label}</span>
                            </div>
                            <span className="text-gray-400">{stat.count}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conversation Header */}
            <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-white font-medium">4 Open</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                        <span className="text-sm">Last activity</span>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                    <div
                        key={conversation.id}
                        className={`p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-750 ${
                            selectedConversation === conversation.id ? "bg-gray-750" : ""
                        }`}
                        onClick={() => onSelectConversation(conversation.id)}
                    >
                        <div className="flex items-start gap-3">
                            <div
                                className={`w-8 h-8 rounded-full ${conversation.avatarColor} flex items-center justify-center text-white text-sm font-medium`}
                            >
                                {conversation.avatar}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white text-sm font-medium truncate">{conversation.title}</h3>
                                    <div className="flex items-center gap-1">
                                        <span className="text-gray-400 text-xs">{conversation.time}</span>
                                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm truncate mt-1">{conversation.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Section */}
            <div className="p-4 border-t border-gray-700">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">Fin AI Agent</span>
                        <Plus className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">Teammates</span>
                        <Plus className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">Team inboxes</span>
                        <Plus className="w-4 h-4 text-gray-400" />
                    </div>
                </div>

                <div className="mt-4 bg-gray-700 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-sm font-medium">Get set up</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-gray-400 text-xs">Set up channels to connect with your customers</p>
                </div>
            </div>
        </div>
    )
}
