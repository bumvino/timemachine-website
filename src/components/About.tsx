const capabilities = [
  "Allen-Bradley / Rockwell Automation",
  "Siemens TIA Portal & S7",
  "Mitsubishi & Omron PLCs",
  "SCADA & Data Acquisition",
  "Industrial Networking & Protocols",
  "Panel Design & Fabrication",
  "Electrical Schematics (AutoCAD)",
  "UL / CE Compliance",
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6">
              Engineering Partners You Can Trust
            </h2>
            <div className="space-y-4 text-teal/70 leading-relaxed">
              <p>
                Time Machine is an engineering company specializing in industrial
                manufacturing equipment design, automation, and control systems.
                We combine deep technical expertise with practical, hands-on
                experience to deliver solutions that work.
              </p>
              <p>
                Our team brings together electrical, mechanical, and software
                engineering disciplines to tackle complex automation challenges.
                Whether you need a single PLC program or a complete turnkey
                system, we have the skills and experience to deliver.
              </p>
              <p>
                Beyond industrial automation, we also offer web development and
                graphic design services — helping businesses build their digital
                presence with the same precision and reliability we bring to
                the factory floor.
              </p>
            </div>
          </div>

          {/* Right - Capabilities */}
          <div className="bg-teal rounded-xl p-8 sm:p-10">
            <h3 className="text-xl font-bold text-gold-light mb-6">
              Technical Capabilities
            </h3>
            <ul className="space-y-4">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-orange mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gold-light/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gold-dark/20">
              <p className="text-gold-light/60 text-sm">
                We work with all major industrial automation platforms and are
                committed to finding the right solution for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
