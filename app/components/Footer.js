// components/Navbar.js
import { SiRefinedgithub } from "react-icons/si";


export default function Footer() {
    return (
        <div className="border-t border-[var(--color-shade)] p-3">
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                    Made with 🧠 by me
                </p>
                <p className="flex items-center text-sm text-gray-500">
                    All Technical info is available on
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="ml-2">
                        <SiRefinedgithub className="h-5 w-5" />
                    </a>
                </p>
            </div>
        </div>
    );
  }