import PageLayout from "../components/pageLayout";
import Hero from "../components/Hero";
import Link from "next/link";

export default function About() {

  return (
    <PageLayout>
      <Hero
        title="About Me"
        subtitle="Here is the place where I write the relevant stuff about my life that may (not) be valuable enough to be stored in a bunch of bits."
        subtitle2="Mostly about coding, personal finance, and productivity — Occasionally, just brain dumps."
        image="illustration/blog1.svg"
      />

      <div className="flex sm:px-15">
    WIP
      </div>
    </PageLayout>
  );
}
