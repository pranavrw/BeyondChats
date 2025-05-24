import { Star, MoreHorizontal, Archive, RotateCcw, User, ChevronDown, Zap } from "lucide-react"
import {Button} from "./ui/button";

export default function Messenger({ conversationId }) {
    return (
        <div className="flex-1 bg-gray-900 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-300" />
                    </div>
                    <h2 className="text-white font-medium">Pranav Rajesh Wak...</h2>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-white font-medium">Messenger</span>
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

            {/* Message Area */}
            <div className="flex-1 p-6 overflow-y-auto">
                <div className="max-w-md mx-auto">
                    {/* Messenger Icon */}
                    <div className="mb-6 flex justify-center">
                        <div className="relative">
                            <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                    <div className="w-4 h-4 bg-gray-800 rounded"></div>
                                </div>
                            </div>
                            <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
                            <div className="absolute -top-1 -right-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900"></div>
                            <div className="absolute -bottom-2 -left-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-gray-900"></div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-gray-900"></div>
                        </div>
                        <div className="ml-8 flex flex-col gap-2">
                            <div className="w-12 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                                <span className="text-xs text-gray-300">Inbox</span>
                            </div>
                            <div className="flex gap-1">
                                <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                                    <User className="w-3 h-3 text-gray-300" />
                                </div>
                                <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                                    <User className="w-3 h-3 text-gray-300" />
                                </div>
                                <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-xs text-gray-300">
                                    3
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 text-gray-300">
                        <p>
                            This is a demo message. It shows how a customer conversation from the Messenger will look in your Inbox.
                            Conversations handled by Fin AI Agent will also appear here.
                        </p>
                        <p>
                            Once a channel is installed, all conversations come straight to your Inbox, so you can route them to the
                            right team.
                        </p>
                    </div>
                </div>
            </div>

            {/* Reply Section */}
            <div className="p-4 border-t border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        Reply <ChevronDown className="w-3 h-3 ml-1" />
                    </Button>
                </div>
                <p className="text-gray-500 text-sm mb-4">Use Ctrl+K for shortcuts</p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Zap className="w-4 h-4" />
                        </Button>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                            Send <ChevronDown className="w-3 h-3 ml-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
