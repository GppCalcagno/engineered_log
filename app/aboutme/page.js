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
      <div className="flex flex-col px-6 sm:px-17 py-6">
        

        {/* NOW SECTION */}
        <h2 className="text-3xl font-semibold mt-4 mb-4">What I'm Doing Now</h2>
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            <p>
              Since 2024, I’ve been working with a large European company that supports me financially while I contribute as a <b>Data Scientist</b>.  
              My role mainly involves applying data-driven approaches to optimize industrial processes, with a strong focus on the <b>manufacturing sector</b>.  
              This includes analyzing production data, identifying inefficiencies, and helping design solutions that improve performance, reduce waste, and increase overall productivity.
            </p>
          </li>

          <li>
            <p>
              In addition to my main job, I enjoy exploring new ideas through <b>personal side projects</b>.  
              These projects allow me to experiment with technologies I’m passionate about and continue learning outside of work.  
              Currently, I'm dedicating my free time to building this website.
            </p>
          </li>
        </ul>

        {/* PUBLICATIONS */}
        <h2 className="text-3xl font-semibold mt-10 mb-4">Publications</h2>
        <p className="mb-4 text-gray-700">
          During my academic journey, I also had the chance to work on projects that led to publications in conferences and peer-reviewed journals. 
          I contributed to a few papers, mainly exploring how machine learning can be applied to optimize manufacturing processes.     
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link 
              href="https://ieeexplore.ieee.org/document/10650627/metrics#metrics" 
              target="_blank"
              className="text-blue-600 hover:underline"
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

        {/* MUSCLE MEMORIES (Placeholder) */}
        <h2 className="text-3xl font-semibold mt-10 mb-4"> ...  Muscle Memories</h2>
        <p className="text-gray-600">Coming soon: my personal relationship with sports and physical activities.</p>

        {/* MISCELLANEOUS CARDS */}
        <h2 className="text-3xl font-semibold mt-10 mb-6"> ... Other stuff i like to do</h2>
        <p>I like playing chess</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-3">

          {/* Card 1: Chess */}
          <Link href="/WIP" className="block p-5 rounded-2xl shadow-md bg-white hover:shadow-lg transition-all border border-gray-200">
            <div className="flex items-center gap-3">
              <FaChessKnight className="text-indigo-600 text-2xl" />
              <h3 className="text-xl font-semibold text-indigo-600">Chess</h3>
            </div>
            <p className="text-sm mt-2 text-gray-600">Track my ranking and progress over time.</p>
          </Link>

          {/* Card 2: Library */}
          <Link href="/WIP" className="block p-5 rounded-2xl shadow-md bg-white hover:shadow-lg transition-all border border-gray-200">
            <div className="flex items-center gap-3">
              <FaBookOpen className="text-green-600 text-2xl" />
              <h3 className="text-xl font-semibold text-green-600">Bookshelf</h3>
            </div>
            <p className="text-sm mt-2 text-gray-600">A curated collection of books I’ve read or plan to read.</p>
          </Link>

          {/* Card 3: Todo */}
          <Link href="/WIP" className="block p-5 rounded-2xl shadow-md bg-white hover:shadow-lg transition-all border border-gray-200">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-pink-600 text-2xl" />
              <h3 className="text-xl font-semibold text-pink-600">Todoist</h3>
            </div>
            <p className="text-sm mt-2 text-gray-600">Things I’m currently working on or want to achieve.</p>
          </Link>

        </div>
      
        <h2 className="text-3xl font-semibold mt-10 mb-6"> ... Miscellaneous</h2>
        <p>SOmething funny about m </p>


      </div>
    </PageLayout>
  );
}
