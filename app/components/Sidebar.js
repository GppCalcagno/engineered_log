import Logo from './Logo';
import Link from 'next/link';

// components/Navbar.js
export default function Sidebar() {
    return (
      <div className="hidden lg:flex w-[var(--sidebar-width)] h-full bg-[var(--color-sidebar)] overflow-auto no-scrollbar">
        <div className='flex flex-col h-full w-full items-center' >

          {/* Logo */}
          <div className='fixed h-12 justify-center items-center pt-2 px-6 border-b border-[var(--color-shade)] bg-[var(--color-sidebar)]'><Logo/></div>
          <div className='flex flex-col h-full w-full pt-14 px-4'>

          {/* About Me */}
          <div>
            <section className="border-b border-[var(--color-shade)] pb-4 my-1">
              <h2 className="text-base font-semibold mb-2">About Me</h2>
              <div className="sidebar-content">
                  <p>
                    <Link className="text-[var(--color-link)] hover:underline" href="/about"> I am </Link> a Machine Learing and 
                    Software engineer. This is my digital garden. 🌱
                  </p>
              </div>
            </section>
          </div>

          {/* Start Here */}
          <div>
            <section className="border-b border-[var(--color-shade)] pb-4 my-1">
              <h2 className="text-base font-semibold mb-2">Here We Go</h2>
              <div className="sidebar-content">
                  <p>
                    This is about me, tech and a bit of finance. Sometimes I also think, and when it happens, I write it down.   
                    If you’re looking for a good spot to dive in,
                    <Link className="text-[var(--color-link)] hover:underline" href="/WIP"> this might be it</Link>.  🌏
                  </p>
              </div>    
            </section>
          </div>

          {/* Notes */}
          <div>
            <section className="border-b border-[var(--color-shade)] pb-4 my-1">
              <h2 className="text-base font-semibold">Notes</h2>
              <div className="sidebar-content mb-2">
                <ul className="border-l border-gray-300 dark:border-gray-700 ml-1.5 pl-1.5 Univers space-y-2 pt-1.5 mt-1">
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-green-500">
                    <Link className="hover:underline" href="/WIP">
                      <p>Tech Notes</p>
                    </Link>
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-blue-500">
                    <Link className="hover:underline" href="/WIP">
                      <p>Thinking Notes</p>
                    </Link>
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-orange-500">
                    <Link className="hover:underline" href="/WIP">
                      <p>Life Notes</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>


        {/* Projects */}
          <div>
            <section className="border-b border-[var(--color-shade)] pb-4 my-1">
              <h2 className="text-base font-semibold">Projects</h2>
              <div className="sidebar-content mb-2">
                <ul className="border-l border-gray-300 dark:border-gray-700 ml-1.5 pl-1.5 space-y-2 pt-1.5 mt-1">
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-teal-500">
                    <Link className="hover:underline" href="/WIP">
                      <p>Machine Learning</p>
                    </Link>
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-yellow-400">
                    <Link className="hover:underline" href="/WIP">
                      <p>Software Engineering</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          
          </div>
        
        </div>
      </div>
    );
  }