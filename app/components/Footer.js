// components/Navbar.js
import { SiRefinedgithub } from "react-icons/si";


export default function Footer() {
    return (
        <div className="border-t border-[var(--color-shade)] p-3">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <p className="text-sm text-gray-500">
                    Made with <span className="hover:scale-120">🧠</span> by me
                </p>
                <p className="flex items-center text-sm text-gray-500">
                    All Technical info is available on
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="ml-2">
                        <SiRefinedgithub className="h-5 w-5 hover:scale-130" />
                    </a>
                </p>
            </div>
        </div>
    );
  }