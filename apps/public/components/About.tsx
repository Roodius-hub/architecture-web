


export default function About(){


    return <section id="about" className="py-40 px-8 bg-[#f7f3eb] rounded-2xl">
  <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20">
    
    {/* LEFT */}
    <div className="font-bowlby">
      <div className="tracking-[0.3em] text-sm mb-6 flex items-center">
        <p className="w-15">
        <img src="./Archi_Logo.png" alt="" />
      </p>
        Ar. Manzoor Ahmad
      </div>

      <h2 className="text-7xl leading-[0.9] font-bold">
        DESIGNED <br/>
        <span className="text-purple-700">FOR</span><br/>
        <span className="text-transparent [-webkit-text-stroke:0.5px_black]">HUMAN LIFE</span>
      </h2>
    </div>

    {/* RIGHT */}
    <div className="mx-auto max-w-6xl border-4 border-[#2a170d] bg-[#f5f1ea] p-8 shadow-[10px_10px_0px_#2a170d] md:p-14">

    {/* Tag */}
    <div className="mb-10 inline-block border border-green-700 px-6 py-2">
      <p className="text-xs uppercase tracking-[0.4em] text-green-700">
        Commercial Architecture
      </p>
    </div>

    {/* Content */}
    <h2 className="max-w-5xl text-xl leading-relaxed md:text-sm md:leading-[1.4]">
      We design spaces that feel timeless, functional, and deeply human.
      From modern house elevations to luxury interiors and detailed
      architectural planning — every project is built with clarity,
      purpose, and bold creative vision.
    </h2>
  </div>

  <div className="mx-auto max-w-6xl border-4 border-[#2a170d] bg-[#f5f1ea] p-8 shadow-[10px_10px_0px_#2a170d] md:p-14">

    {/* Tag */}
    <div className="mb-10 inline-block border border-green-700 px-6 py-2">
      <p className="text-xs uppercase tracking-[0.3em] text-green-700">
       Institutional Architecture,<br /> 
       <span>Educational Architecture,</span>  Healthcare Architecture
      </p>
    </div>

    {/* Content */}
    <h2 className="max-w-5xl text-sm leading-relaxed md:text-sm md:leading-[1.4]">
      We design spaces that feel timeless, functional, and deeply human.
      From modern house elevations to luxury interiors and detailed
      architectural planning — every project is built with clarity,
      purpose, and bold creative vision.
    </h2>
  </div>

  <div className="mx-auto max-w-6xl border-4 border-[#2a170d] bg-[#f5f1ea] p-8 shadow-[10px_10px_0px_#2a170d] md:p-14">

    {/* Tag */}
    <div className="mb-10 inline-block border border-green-700 px-6 py-2">
      <p className="text-xs uppercase tracking-[0.4em] text-green-700">
        Completed Many Residential Architecture
      </p>
    </div>

    {/* Content */}
    <h2 className="max-w-5xl text-xl leading-relaxed md:text-sm md:leading-[1.4]">
      We design spaces that feel timeless, functional, and deeply human.
      From modern house elevations to luxury interiors and detailed
      architectural planning — every project is built with clarity,
      purpose, and bold creative vision.
    </h2>
  </div>
  </div>
</section>
}