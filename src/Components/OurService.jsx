import React, { use } from "react";
const sectionData = fetch("/sectionData.json").then((res) => res.json());
import "../Style/Animation.css";

const OurService = () => {
  const data = use(sectionData);

  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          A Trusted <span className="text-gray-400">Leader</span>{" "}
          <br className="hidden md:block" />
          In <span className="text-gray-900">Monetization</span>
          <span className="inline-block ml-2">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-orange-400 text-white rounded-full text-sm">
              ⚡
            </span>
            <span className="inline-flex items-center justify-center w-8 h-8 bg-purple-500 text-white rounded-full text-sm ml-1">
              ⭐
            </span>
          </span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-600">
          Zuora is a trusted leader in monetization, delivering innovative
          solutions that drive growth and streamline revenue operations
        </p>
      </div>

      {/* Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-8">
        {/* Center Z Icon */}
        <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none z-0">
          <div className="icon-container">
            <div className="icon">Z</div>
          </div>
        </div>

        {/* Left Cards */}
        <div className="flex flex-col gap-8 sm:gap-12 md:gap-8 lg:gap-24 w-full md:w-[360px] lg:w-[400px] mx-auto md:mx-0 md:self-start">
          {data.slice(0, 2).map((card) => (
            <div
              key={card.id}
              className="relative z-10 bg-white shadow-lg rounded-xl p-6 space-y-4"
            >
              <div className="flex items-center gap-2">
                {card.isImage ? (
                  <img
                    src={card.icon}
                    alt={card.title}
                    className={`${card.iconColor} w-8 h-8 min-w-[32px] min-h-[32px]`}
                  />
                ) : (
                  <div
                    className={`${card.iconColor} text-white w-8 h-8 flex items-center justify-center rounded-full font-bold`}
                  >
                    {card.icon}
                  </div>
                )}
                <h3 className="font-semibold text-lg sm:text-xl">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-8 sm:gap-12 md:gap-8 lg:gap-24 w-full md:w-[360px] lg:w-[400px] mx-auto md:mx-0 md:self-start justify-self-end">
          {data.slice(2, 4).map((card) => (
            <div
              key={card.id}
              className="relative z-10 bg-white shadow-lg rounded-xl p-6 space-y-4"
            >
              <div className="flex items-center gap-2">
                {card.isImage ? (
                  <img
                    src={card.icon}
                    alt={card.title}
                    className={`${card.iconColor} w-8 h-8 min-w-[32px] min-h-[32px]`}
                  />
                ) : (
                  <div
                    className={`${card.iconColor} text-white w-8 h-8 flex items-center justify-center rounded-full font-bold`}
                  >
                    {card.icon}
                  </div>
                )}
                <h3 className="font-semibold text-lg sm:text-xl">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
