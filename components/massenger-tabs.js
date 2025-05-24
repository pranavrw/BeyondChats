"use client"

import { useState } from "react"
import { Star, MoreHorizontal, Archive, RotateCcw, User, ChevronDown, Zap, X, Send } from "lucide-react"
import {Button} from "./ui/button";

export default function MessengerTabs({ tabs, activeTab, onTabChange, onCloseTab, onSendMessage }) {
    const [messageInputs, setMessageInputs] = useState({})

    const handleSendMessage = (tabId) => {
        const message = messageInputs[tabId]?.trim()
        if (message) {
            onSendMessage(tabId, message)
            setMessageInputs((prev) => ({ ...prev, [tabId]: "" }))
        }
    }

    const handleInputChange = (tabId, value) => {
        setMessageInputs((prev) => ({ ...prev, [tabId]: value }))
    }

    const handleKeyPress = (e, tabId) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage(tabId)
        }
    }

    const activeTabData = tabs.find((tab) => tab.id === activeTab)

    if (!activeTabData) {
        return (
            <div className="flex-1 bg-gray-900 flex items-center justify-center">
                <p className="text-gray-400">No conversation selected</p>
            </div>
        )
    }

    return (
        <div className="flex-1 bg-gray-900 flex flex-col">
            {/* Tab Headers */}
            {tabs.length > 1 && (
                <div className="flex border-b border-gray-700 bg-gray-800">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`flex items-center gap-2 px-4 py-2 cursor-pointer border-r border-gray-700 ${
                                activeTab === tab.id ? "bg-gray-900 text-white" : "bg-gray-800 text-gray-400 hover:text-white"
                            }`}
                            onClick={() => onTabChange(tab.id)}
                        >
                            <span className="text-sm truncate max-w-32">{tab.title}</span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    onCloseTab(tab.id)
                                }}
                                className="hover:bg-gray-600 rounded p-1"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Header */}
            <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-300" />
                    </div>
                    <h2 className="text-white font-medium">Pranav Rajesh Wak...</h2>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-white font-medium">{activeTabData.type}</span>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <Star className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <MoreHorizontal className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <Archive className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <RotateCcw className="w-4 h-4" />
                    </Button>
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-300" />
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-4">
                    {activeTabData.messages.map((message) => (
                        <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`max-w-md p-3 rounded-lg ${
                                    message.type === "user"
                                        ? "bg-blue-600 text-white"
                                        : message.type === "ai"
                                            ? "bg-gray-700 text-gray-100"
                                            : "bg-gray-800 text-gray-300"
                                }`}
                            >
                                <p className="text-sm">{message.content}</p>
                                <p className="text-xs opacity-70 mt-1">
                                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Input Section */}
            <div className="p-4 border-t border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        Reply <ChevronDown className="w-3 h-3 ml-1" />
                    </Button>
                </div>
                <p className="text-gray-500 text-sm mb-4">Use Ctrl+K for shortcuts</p>

                <div className="flex items-end gap-2">
                    <div className="flex-1">
            <textarea
                value={messageInputs[activeTab] || ""}
                onChange={(e) => handleInputChange(activeTab, e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, activeTab)}
                placeholder="Type your message..."
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                rows={2}
            />
                    </div>
                    <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Zap className="w-4 h-4" />
                        </Button>
                        <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={() => handleSendMessage(activeTab)}
                            disabled={!messageInputs[activeTab]?.trim()}
                        >
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
