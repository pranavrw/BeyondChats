"use client"
import { Settings, Minimize2, ChevronDown, Plus } from "lucide-react"
import {Button} from "./ui/button";
import CopilotPanel from "./copilot";

export default function RightPanel({ activeTab, onTabChange }) {
    return (
        <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                    <div className="flex">
                        <button
                            className={`px-4 py-2 text-sm font-medium border-b-2 ${
                                activeTab === "details"
                                    ? "text-white border-orange-500"
                                    : "text-gray-400 border-transparent hover:text-white"
                            }`}
                            onClick={() => onTabChange("details")}
                        >
                            Details
                        </button>
                        <button
                            className={`px-4 py-2 text-sm font-medium border-b-2 ${
                                activeTab === "copilot"
                                    ? "text-white border-orange-500"
                                    : "text-gray-400 border-transparent hover:text-white"
                            }`}
                            onClick={() => onTabChange("copilot")}
                        >
                            Copilot
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Settings className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Minimize2 className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">{activeTab === "details" ? <DetailsPanel /> : <CopilotPanel />}</div>
        </div>
    )
}

function DetailsPanel() {
    const conversationAttributes = [
        { label: "Assignee", value: "Pranav Rajesh Wak...", icon: "👤" },
        { label: "Team Inbox", value: "Unassigned", icon: "👥" },
    ]

    const links = [
        { label: "Tracker ticket", hasAdd: true },
        { label: "Back-office tickets", hasAdd: true },
        { label: "Side conversations", hasAdd: true },
    ]

    const attributes = [
        { label: "ID", value: "2154691209117754" },
        { label: "Brand", value: "VIIT" },
        { label: "Subject", value: "+ Add", isAddButton: true },
        { label: "Language", value: "English" },
        { label: "External ID", value: "+ Add", isAddButton: true },
        { label: "Workspace ph...", value: "—" },
        { label: "Copilot used", value: "False" },
    ]

    return (
        <div className="p-4 space-y-6">
            {/* Assignee Section */}
            <div className="space-y-3">
                {conversationAttributes.map((attr, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">{attr.label}</span>
                        <div className="flex items-center gap-2">
                            <span className="text-white text-sm">{attr.value}</span>
                            <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                                <span className="text-xs">{attr.icon}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Links Section */}
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-white font-medium">📎 Links</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                {links.map((link, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">{link.label}</span>
                        {link.hasAdd && <Plus className="w-4 h-4 text-gray-400" />}
                    </div>
                ))}
            </div>

            {/* Conversation Attributes */}
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-white font-medium">💬 Conversation attributes</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                {attributes.map((attr, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">{attr.label}</span>
                        <span className={`text-sm ${attr.isAddButton ? "text-blue-400" : "text-white"}`}>{attr.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
