"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import {Button} from "./ui/button";
import { useIsMobile} from "./ui/use-mobile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Intercom
            </Link>

            {!isMobile && (
              <nav className="ml-10 hidden md:block">
                <ul className="flex space-x-8">
                  <li className="relative group">
                    <button className="flex items-center text-gray-700 hover:text-blue-600">
                      Products <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 top-full mt-2 w-60 rounded-md bg-white p-4 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded-md">
                        Inbox
                      </Link>
                      <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded-md">
                        Articles
                      </Link>
                      <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded-md">
                        Bots
                      </Link>
                      <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded-md">
                        Product Tours
                      </Link>
                    </div>
                  </li>
                  <li className="relative group">
                    <button className="flex items-center text-gray-700 hover:text-blue-600">
                      Solutions <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 top-full mt-2 w-60 rounded-md bg-white p-4 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded-md">
                        For Support
                      </Link>
                      <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded-md">
                        For Marketing
                      </Link>
                      <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded-md">
                        For Sales
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                      Resources
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>

          {!isMobile ? (
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Log in
              </Link>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Talk to sales
              </Button>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">Start free trial</Button>
            </div>
          ) : (
            <button onClick={toggleMenu} className="md:hidden text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white">
            <nav>
              <ul className="space-y-4">
                <li>
                  <button className="flex items-center justify-between w-full text-gray-700 py-2">
                    Products <ChevronDown className="h-4 w-4" />
                  </button>
                </li>
                <li>
                  <button className="flex items-center justify-between w-full text-gray-700 py-2">
                    Solutions <ChevronDown className="h-4 w-4" />
                  </button>
                </li>
                <li>
                  <Link href="#" className="block text-gray-700 py-2">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block text-gray-700 py-2">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block text-gray-700 py-2">
                    Log in
                  </Link>
                </li>
                <li>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600">
                    Talk to sales
                  </Button>
                </li>
                <li>
                  <Button className="w-full bg-blue-600 text-white">Start free trial</Button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
