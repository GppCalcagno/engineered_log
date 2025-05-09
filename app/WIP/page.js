import PageLayout from "../components/pageLayout";
import Image from "next/image";

export default function Home() {
  return (
    <PageLayout>
<div className="flex flex-col md:flex-row items-center justify-between h-full p-4 space-y-4 md:space-y-0">
  <div className="flex flex-col max-w-xl p-10 space-y-10">
    <h1 className="text-4xl font-bold">Still Under Construction</h1>
    <p className="text-xl">
      This corner of the internet is still in the making. I work on this project in my free time.
      Sooner or later, this part of the website will see the light of day!
    </p>
  </div>
  <div className="flex-1 p-1'">
    <Image
      src="/illustration/WIP.svg"
      alt="Work in progress illustration"
      className="w-full h-auto"
      width={0}
      height={0}
      sizes="100vw"
    />
  </div>
</div>

      
    </PageLayout>
  );
}
