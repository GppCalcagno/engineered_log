import Logo from './Logo'
// components/Navbar.js
export default function Sidebar() {
    return (
        <div className="hidden sm:flex w-[var(--sidebar-width)] h-full bg-[var(--color-sand-dark)]">
          <div className='flex flex-col h-full w-full items-center' >
          <div className='fixed h-12 justify-center items-center pt-2 px-6 border-b border-gray'><Logo/></div>
          <div className='flex flex-col h-full w-full pt-14'>

          <div>potaaaaaaaaaa aaaaaaaaa aaaaaaa aaaaaaaaaaaa aaaaaa aaaaaaa</div>

          </div>
          </div>
        
      </div>
    );
  }