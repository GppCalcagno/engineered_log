import PageLayout from "../components/pageLayout";
import Hero from "../components/Hero";
import Link from "next/link";
import { FaChessKnight, FaBookOpen, FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <PageLayout>
      <Hero
        title="About Me"
        subtitle="Since I truly believe content is king, I tend to value what's written over who wrote it. Still, if you'd like to know a bit about me, you're in the right place!"
        subtitle2=" I'm a Computer Science Engineer focused on extracting value from data. I'm prone to forgetting things, so I write things down. This blog functions as my public diary, a personal archive of everything I explore in my life."
        image="illustration/aboutme.svg"
      />
    <p className="text-sm text-gray-500 mx-3">Last update on 06/25</p>
      <div className="flex flex-col px-6 md:px-15">
        

        {/* NOW SECTION */}
        <h2 className="about-title-h2">What I&rsquo;m Doing Now</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <p>
              Since 2024, I&rsquo;ve been working with a large European company that supports me financially while I contribute as a <b>Data Scientist</b>.  
              My role mainly involves applying data-driven approaches to optimize industrial processes, with a strong focus on the <b>manufacturing sector</b>.  
              This includes analyzing production data, identifying inefficiencies, and helping design solutions that improve performance, reduce waste, and increase overall productivity.
            </p>
          </li>

          <li>
            <p>
              In addition to my main job, I enjoy exploring new ideas through <b>personal side projects</b>.  
              These projects allow me to experiment with technologies I&rsquo;m passionate about and continue learning outside of work.  
              Currently, I&rsquo;m dedicating my free time to building this website.
            </p>
          </li>
        </ul>

        {/* PUBLICATIONS */}
        <h2 className="about-title-h2">Publications</h2>
        <p className="mb-4">
          During my academic journey, I also had the chance to work on projects that led to publications in conferences and peer-reviewed journals. 
          I contributed to a few papers, mainly exploring how machine learning can be applied to optimize manufacturing processes.     
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link 
              href="https://ieeexplore.ieee.org/document/10650627" target="_blank"
              className="text-[var(--color-link)] hover:underline"
            >
              The Power of Hybrid Learning in Industrial Robotics: Efficient Grasping Strategies with Supervised-Driven Reinforcement Learning
            </Link>
          </li>
          <li>
            <Link href="" target="_blank" className="text-blue-400 italic">
              Still in revision
            </Link>
          </li>
        </ul>

        {/* MUSCLE MEMORIES */}
        <h2 className="about-title-h2">Muscle Memories</h2>
          <p className="mb-4">
            Throughout my life, I&rsquo;ve dedicated a lot of time to practicing sports. Like most children, I started with <b>football</b>, and I still enjoy playing casual matches with friends.
            Later, I switched to <b>rowing</b> for a few years. However, the early morning training sessions were too much for me. Still, my love for water sports remained, so I moved on to <b>swimming</b>.
            I&rsquo;d say I was quite good at it and I even had the chance to compete.
          </p>
          <p className="mb-4">
            When I moved to my current city, a new <i>sports chapter</i> began. These days, I focus on <b>going to the gym</b>, practicing <b>calisthenics</b> in open-air parks, <b>running</b>, and <b>bouldering</b>.
            Here are some key record metrics from my training:
          </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:justify-items-center">
          {/* Lifting Card */}
          <div className="p-3">
            <h3 className="text-xl font-semibold mb-2 text-red-600">🏋️ Lifting</h3>
            <ul className="list-inside list-disc space-y-1 text-sm pl-5">
              <li><b> Dumbbells Bench Press</b>: 12RM 18kg </li>
              <li><b>Pull-up</b>: 8RM </li>
              <li><b>Squat</b>: 10RM 55kg</li>
            </ul>
          </div>

          {/* Running Card */}
          <div className="p-3">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">🏃 Running</h3>
            <ul className="list-inside list-disc space-y-1 text-sm pl-5">
              <li><b>5k</b>: 26:01</li>
              <li><b>10k</b>: 54:00</li>
              <li><b>Half Marathon</b>: 02:08:00</li>
            </ul>
          </div>
        </div>

        {/* MISCELLANEOUS CARDS */}
        <h2 className="about-title-h2">Logged Interests</h2>
          <p className="mb-4">
            I have other interests in life, like reading, playing chess, and so on...  
            One of my meta-hobbies is maintaining tracking systems for the things I do:    
            <i>“if you don&rsquo;t track it, it never happened.“ </i>  
            Here are a few activities I enjoy and manage to track:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">

            {/* Card 1: Bookshelf */}
            <Link href="/aboutme/bookshelf" className="about-card">
              <div className="flex items-center gap-3">
                <FaBookOpen className="text-green-600 text-2xl" />
                <h3 className="text-xl font-semibold text-green-600">Bookshelf</h3>
              </div>
              <p className="text-sm mt-2">A List of books I&rsquo;ve read with notes and rating.</p>
            </Link>

            {/* Card 2: Chess */}
            <Link href="/WIP" className="about-card">
              <div className="flex items-center gap-3">
                <FaChessKnight className="text-indigo-400 text-2xl" />
                <h3 className="text-xl font-semibold text-indigo-400">Chess Progress</h3>
              </div>
              <p className="text-sm mt-2">Tracking my Elo ranking, games played, and training stats.</p>
            </Link>

            {/* Card 3: Todoist */}
            <Link href="/WIP" className="about-card">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-pink-600 text-2xl" />
                <h3 className="text-xl font-semibold text-pink-600">Productivity</h3>
              </div>
              <p className="text-sm mt-2">Visualizing the number of tasks I plan, complete, and postpone.</p>
            </Link>

          </div>
      
        <h2 className="about-title-h2">Miscellaneous</h2>
          <p className="mb-8">
            This is the drawer where I keep everything that doesn&rsquo;t fit neatly elsewhere. 
            On “a day that doesn&rsquo;t rain much,” I&rsquo;ll fill this part with interesting information.
          </p>

        {/* Some Ideas I Have
          - Some of the Results I'm Proud of
        */}

      </div>
    </PageLayout>
  );
}
