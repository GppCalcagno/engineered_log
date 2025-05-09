import PageLayout from "../components/pageLayout";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <PageLayout>
      <Hero
        title="Notes Page"
        subtitle="I’m a Computer Science Engineer passionate about coding, 
        dedicated to solving complex problems and staying updated in the ever‑evolving tech landscape."
        subtitle2="This is my little corner of the internet where I share what I learn, think, and sometimes do."
      />
      <section className="py-6">
        <div className="max-w">
          <h2 className="text-3xl font-bold mb-4">WIP</h2>
          <p className="text-lg mb-4 text-gray-700">
            Here are some of my latest thoughts and projects. Feel free to explore!
          </p>
          {/* Add your posts or content here */}
        </div>
      </section>
    </PageLayout>
  );
}
