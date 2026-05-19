


export default function About(){


    return <section id="about" className="py-40 px-8 bg-[#f7f3eb]">

  <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20">

    {/* LEFT */}
    <div>
      <p className="tracking-[0.3em] text-sm mb-6">
        Manzoor Ahmad
      </p>

      <h2 className="text-7xl leading-[0.9] font-bold">
        DESIGNED <br/>
        <span className="text-purple-700">FOR</span><br/>
        <span className="text-transparent [-webkit-text-stroke:0.5px_black]">HUMAN LIFE</span>
      </h2>
    </div>

    {/* RIGHT */}
    <div className="space-y-8 text-black/70 leading-relaxed">
      <p>
        We create architecture rooted in atmosphere,
        material honesty, and spatial clarity.
      </p>

      <p>
        Every project is approached with restraint,
        allowing light, texture, and proportion
        to shape the experience naturally.
      </p>
      <p>
        Every project is approached with restraint,
        allowing light, texture, and proportion
        to shape the experience naturally.
      </p>
    </div>

  </div>
</section>
}