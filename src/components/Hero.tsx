export default function Hero() {
  return (
    <section className="relative bg-teal min-h-screen flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D7C59A 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          <p className="text-orange font-semibold text-sm sm:text-base uppercase tracking-widest mb-4">
            Engineering Excellence
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Industrial Automation{" "}
            <span className="text-gold-light">&amp; Engineering</span> Solutions
          </h1>
          <p className="text-gold-light/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            We engineer the future of manufacturing. From PLC programming and
            HMI development to complete system integration — we deliver
            precision-driven solutions that keep your operations running.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-orange hover:bg-orange/90 text-white px-8 py-3.5 rounded font-semibold text-base transition-colors text-center"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="border border-gold-light/30 hover:border-gold-light/60 text-gold-light px-8 py-3.5 rounded font-semibold text-base transition-colors text-center"
            >
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-gold-dark/20 max-w-lg">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-orange">10+</p>
              <p className="text-gold-light/60 text-sm mt-1">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-orange">50+</p>
              <p className="text-gold-light/60 text-sm mt-1">
                Projects Delivered
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-orange">24/7</p>
              <p className="text-gold-light/60 text-sm mt-1">
                Support Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
