


export default function() {


    return <section id="contact" className="min-h-screen my-3 rounded-2xl bg-[#f5f1ea] px-6 py-20 text-black">
  <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

    {/* Left Side */}
    <div className="flex flex-col justify-between">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Contact Us
        </p>

        <h1 className="font-bowlby text-6xl uppercase leading-none md:text-8xl">
          Let’s Build
          <br />
          Your Space
        </h1>

        <p className="mt-8 max-w-md text-lg leading-relaxed text-neutral-700">
          Residential architecture, luxury elevations, interiors,
          and modern living spaces crafted with timeless aesthetics.
        </p>
      </div>
    </div>

    {/* Right Side Form */}
    <div className="rounded-[40px] border border-black/10 bg-white p-8 shadow-2xl md:p-12">
      <form className="space-y-8">

        <div>
          <label className="mb-2 block text-sm uppercase tracking-[0.2em]">
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="w-full border-b border-black bg-transparent py-4 outline-none placeholder:text-neutral-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm uppercase tracking-[0.2em]">
            Email Address
          </label>

          <input
            type="email"
            placeholder="john@example.com"
            className="w-full border-b border-black bg-transparent py-4 outline-none placeholder:text-neutral-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm uppercase tracking-[0.2em]">
            Phone Number
          </label>

          <input
            type="phone"
            placeholder="+91xxxxxxxx"
            className="w-full border-b border-black bg-transparent py-4 outline-none placeholder:text-neutral-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm uppercase tracking-[0.2em]">
            Project Type
          </label>

          <select className="w-full border-b border-black bg-transparent py-4 outline-none">
            <option>House Elevation</option>
            <option>Interior Design</option>
            <option>2D & 3D Planning</option>
            <option>Villa Design</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm uppercase tracking-[0.2em]">
            Message
          </label>

          <textarea
            rows={4}
            placeholder="Tell us about your project..."
            className="w-full border-b border-black bg-transparent py-4 outline-none placeholder:text-neutral-400"
          />
        </div>

        <button
          type="submit"
          className="font-bowlby rounded-full border border-black px-10 py-4 text-xl uppercase transition hover:bg-black hover:text-white"
        >
          Send 
        </button>

      </form>
    </div>

  </div>
</section>
}