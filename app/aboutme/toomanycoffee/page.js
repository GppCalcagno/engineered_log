import PageLayout from "@/app/components/pageLayout";
import Image from "next/image";

export default function CoffeeThanks() {
  return (
    <PageLayout>
      <div className="flex flex-col md:flex-row items-center justify-between h-full p-4 space-y-4 md:space-y-0">
        <div className="flex flex-col w-full md:w-4/7 p-10 space-y-10">
          <h1 className="text-6xl font-bold">Thank you so much!</h1>
            <p className="text-xl">
              I truly appreciate the gesture, and I&apos;m really grateful for your support!<br/><br/>
              At the moment, I&apos;m not set up to accept donations... and honestly, I don&apos;t think I ever will.
              That said, I&apos;d be very happy to accept a real coffee ☕ if we ever meet in person!<br /><br />
              Let&apos;s be real - the button does nothing, but it makes this look like a real blog, doesn&apos;t it?.
            </p>

        </div>
        <div className="flex-1 p-2">
          <Image
            src="/illustration/bmc_fake.png"
            alt="Coffee illustration"
            className="w-full h-auto rounded-xl"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </PageLayout>
  );
}
