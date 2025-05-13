import PageLayout from "@/app/components/pageLayout";
import Hero from "@/app/components/Hero"
import Image from "next/image";
import projectsList from "@/content/projects/projects.json";


export default function Home() {
  console.log(projectsList)
  return (
    <PageLayout>
      <Hero
        title="Some Things I’ve Built"
        subtitle="I love automating things and I'm always full of ideas. Sometimes I get so excited about one that I just have to build it!"
        subtitle2="From Software Engineering to Machine Learning — and everything in between..."
        image="illustration/project1.svg"
      />
    </PageLayout>
    
  );
}


