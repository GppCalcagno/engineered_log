export default function Hero({ title, subtitle, subtitle2, image }) {
    const textSectionWidth = image ? "sm:w-2/3" : "sm:w-full";
  
    return (
      <section className="py-3">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-8">
          <div className={`w-full ${textSectionWidth} text-left`}>
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl mb-4">{subtitle}</p>
            {subtitle2 && (
              <p className="text-lg">{subtitle2}</p>
            )}
          </div>
          {image && (
            <div className="w-full sm:w-1/3 flex justify-center">
              <img src={image} alt="Landing Page" className="max-w-full h-auto" />
            </div>
          )}
        </div>
      </section>
    );
  }
  