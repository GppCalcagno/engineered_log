import PageLayout from "../components/pageLayout";
import Hero from "../components/Hero";
import Link from "next/link";

export default function About() {

  return (
    <PageLayout>
      <Hero
        title="About Me"
        subtitle="Since I truly believe content is king, I tend to value what's written over who wrote it. Still, if you'd like to know a bit about me, you're in the right place!"
        subtitle2=" I'm a Computer Science Engineer focused on extracting value from data. I'm prone to forgetting things, so I write things down. This blog functions as my public diary, a personal archive of everything I explory in my life."
        image="illustration/aboutme.svg"
      />

      
      <div className="flex flex-col sm:px-15">
      <p className="text-sm mb-5"> Last update on 06/25</p> 
      <h2 className="text-3xl"> What I'm Doing Now </h2>
      <p>
        Since 2024, I’ve been working with a large European company that supports me financially while I contribute as a Data Scientist.  
        My role mainly involves applying data-driven approaches to optimize industrial processes, with a strong focus on the manufacturing sector.  
        This includes analyzing production data, identifying inefficiencies, and helping design solutions that improve performance, reduce waste, and increase overall productivity.
      </p>

      <p>
        In addition to my main job, I enjoy exploring new ideas through personal side projects.  
        These projects allow me to experiment with technologies I’m passionate about and continue learning outside of work.  
        Currently, I'm dedicating my free time to building this website from scratch — a space where I can share my thoughts, projects, and experiences.
      </p>

      <h2 className="text-4xl"> Publications </h2>
      During my academic journey,  I also had the chance to work on a projects that led to publications in conferences and peer-reviewed journals. 
      I had the opportunity to contribute to the writing of a few papers. My contributions primarily focused on exploring how machine learning can be applied to optimize processes within the manufacturing industry.     
      <ul>
        <li>
          <Link href="https://doi.org/10.1016/j.jom.2023.08.001" target="_blank">
            A systematic literature review of the application of machine learning in the manufacturing industry
          </Link>
        </li>
        <li>
          <Link href="https://doi.org/10.1016/j.jom.2023.08.001" target="_blank">
            A systematic literature review of the application of machine learning in the manufacturing industry
          </Link>
        </li>
        </ul>

      <h2 className="text-4xl">Muscle Memories</h2>


      <ul>
        <li>Chess</li>
        <li>Checking List Performance</li>
        <li>BookShelf</li>
      </ul>
      </div>
    </PageLayout>
  );
}
