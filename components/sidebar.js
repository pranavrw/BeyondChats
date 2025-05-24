import { Inbox, Search, MessageSquare, Users, BarChart3, Play, Users2, Settings, HelpCircle } from "lucide-react"

export default function Sidebar() {
    const menuItems = [
        { icon: <Inbox className="w-5 h-5" />, label: "Inbox", active: true },
        { icon: <MessageSquare className="w-5 h-5" />, label: "Messages" },
        { icon: <Users className="w-5 h-5" />, label: "Customers" },
        { icon: <BarChart3 className="w-5 h-5" />, label: "Reports" },
        { icon: <Play className="w-5 h-5" />, label: "Outbound" },
        { icon: <Users2 className="w-5 h-5" />, label: "Teammates" },
    ]

    return (
        <div className="w-16 bg-gray-800 flex flex-col items-center py-4 border-r border-gray-700">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold text-sm">I</span>
            </div>

            <nav className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                            item.active ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-700"
                        }`}
                    >
                        {item.icon}
                    </button>
                ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4">
                <button className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700">
                    <Search className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700">
                    <Settings className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700">
                    <HelpCircle className="w-5 h-5" />
                </button>
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                </div>
            </div>
        </div>
    )
}
