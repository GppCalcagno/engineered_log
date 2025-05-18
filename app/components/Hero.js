import Image from 'next/image';

export default function Hero({ title, subtitle, subtitle2, image: image_path }) {
    const textSectionWidth = image_path ? "sm:w-3/5" : "sm:w-full";
  
    return (
      <section className="py-3">
        <div className="sm:mx-3 flex flex-col sm:flex-row items-center">
          <div className={`w-full ${textSectionWidth} text-left`}>
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl mb-4">{subtitle}</p>
            {subtitle2 && (
              <p className="text-lg">{subtitle2}</p>
            )}
          </div>
          {image_path && (
            <div className=" relative w-full h-50 sm:w-2/5 flex" > 
              <Image src={image_path} alt="Landing Page" fill />
            </div>
          )}
        </div>
      </section>
    );
  }
  