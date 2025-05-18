import PageLayout from "./components/pageLayout";
import Image from "next/image";

export default function Custom404() {
  return (

  <PageLayout>
<div className="flex flex-col md:flex-row items-center justify-between h-full p-4 space-y-4 md:space-y-0">
  <div className="flex flex-col max-w-xl p-10 space-y-10">
    <h1 className="text-9xl font-bold">104</h1>
    <p className="text-2xl">
      Probably you are looking for something that doesn&#39;t exist (yet)!
    </p>
  </div>
  <div className="flex-1 p-1'">
    <Image
      src="/illustration/404.svg"
      alt="Work in progress illustration"
      className="w-full h-auto"
      width={0}
      height={0}
      sizes="100vw"
    />
  </div>
</div>  </PageLayout>
  );
}