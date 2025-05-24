"use client"

import {Button} from "./ui/button";

export default function TopBanner() {
    const handleBuyIntercom = () => {
        // In a real app, this would navigate to a purchase page
        alert("Redirecting to purchase page...")
    }

    const handleApplyDiscount = () => {
        // In a real app, this would navigate to a discount application page
        alert("Redirecting to discount application page...")
    }

    return (
        <div className="bg-blue-600 px-4 py-2 flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
                <span>You have 14 days left in your Advanced trial</span>
                <Button size="sm" className="bg-white text-blue-600 hover:bg-gray-100" onClick={handleBuyIntercom}>
                    Buy Intercom
                </Button>
                <Button variant="link" className="text-yellow-200 p-0 hover:text-yellow-100" onClick={handleApplyDiscount}>
                    Apply for an Early Stage 90% discount
                </Button>
            </div>
        </div>
    )
}
