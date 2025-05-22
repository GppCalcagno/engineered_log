import Logo from './Logo';
import Link from 'next/link';
import Image from 'next/image';


export default function Sidebar() {
  return (
    <div className="hidden lg:flex w-[var(--sidebar-width)] h-full bg-[var(--color-sidebar)] overflow-auto no-scrollbar">
      <div className="flex flex-col h-full w-full items-center">

        {/* Logo */}
        <div className='fixed h-12 justify-center items-center pt-2 px-6 border-b border-[var(--color-shade)] bg-[var(--color-sidebar)]'>
          <Logo />
        </div>

        <div className='flex flex-col h-full w-full pt-14 px-4'>

          {/* About Me */}
          <section className="border-b border-[var(--color-shade)] pb-4 my-1">
            <h2 className="text-base font-semibold mb-2">About Me</h2>
            <div className="sidebar-content">
              <p>
                <Link className="text-[var(--color-link)] hover:underline" href="/aboutme"> I am </Link> a Machine Learning and 
                Software engineer. This is my digital garden. 🌱
              </p>
            </div>
          </section>

          {/* Here We Go */}
          <section className="border-b border-[var(--color-shade)] pb-4 my-1">
            <h2 className="text-base font-semibold mb-2">Here We Go</h2>
            <div className="sidebar-content">
              <p>
                This is about me, tech and a bit of finance. Sometimes I also think, and when it happens, I write it down.   
                If you’re looking for a good spot to dive in,
                <Link className="text-[var(--color-link)] hover:underline" href="/WIP"> this might be it</Link>. 🌏
              </p>
            </div>
          </section>

          {/* Code Snippet Background */}
            <div className="flex flex-1 mt-4 border-b border-[var(--color-shade)] pb-4 items-center">
              <pre className="text-[8.5px] leading-normal opacity-30 font-mono pointer-events-none select-none">
{`class Me {
  type: 'engineer',
  role: 'dataScientist',
  stack: ['Python', 'ML', 'SE'],
  status: 'awake',
}

function dailyRoutine() {
  while (Me.status = 'awake') {
  try {
    if (curiosity && caffeineLevel > 0.8) {
      Explore();
      TestIdeas();
      PushToProd();
      Reflect(); //sometimes
      WriteDocs(); // maybe sometimes
      }
    } catch (err) {
        print(\'A noi la qualità c\'à r...');
        debug&Fix();
        refactor();
    }
  } 
  Sleep(Me)
  return 'È coffee break signori';  
}

dailyRoutine();
`}
              </pre>
            </div>

            <div className="w-full  mt-4 pb-4 flex items-end">
              <Link
                href="/aboutme/toomanycoffee"
                //target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
              >
                <Image
                  src="/illustration/bmc.png" 
                  alt="Buy Me a Coffee"
                  width={80} 
                  height={50}
                  className="h-auto dark:invert" 
                />
              </Link>
            </div>

        </div>

      </div>
    </div>
  );
}
