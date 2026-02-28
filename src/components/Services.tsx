const services = [
  {
    title: "PLC Programming",
    description:
      "Custom PLC programming for Allen-Bradley, Siemens, Mitsubishi, and other major platforms. We design reliable control logic for manufacturing lines, packaging systems, and process automation.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "HMI Development",
    description:
      "Intuitive operator interfaces designed for clarity and efficiency. We build HMI screens that give operators real-time visibility and control over production processes.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
  },
  {
    title: "System Integration",
    description:
      "End-to-end integration of PLCs, drives, sensors, and SCADA systems. We connect all the pieces of your automation architecture into a cohesive, reliable system.",
    icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.2 13.8l-1.9 1.9a3.2 3.2 0 01-4.5-4.5l2.3-2.3a3.2 3.2 0 014.5 0"
          />
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.8 10.2l1.9-1.9a3.2 3.2 0 014.5 4.5l-2.3 2.3a3.2 3.2 0 01-4.5 0"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.3 14.7l5.4-5.4" />
        </svg>
    ),
  },
  {
    title: "Industrial Equipment Engineering",
    description:
      "Complete mechanical and electrical engineering for industrial manufacturing equipment. From concept design through commissioning, we bring your production systems to life.",
    icon: (
        <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.6}
        >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 20V9l5 3V9l6 3V9l5 3v8H4z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 20v-4M12 20v-4M16 20v-4" />
        </svg>
    ),
  },
  {
    title: "Web Development",
    description:
      "Professional websites and web applications built with modern technologies. We help businesses establish their digital presence with custom, responsive, and performant solutions.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Graphic Design & Branding",
    description:
      "Visual identity design including logos, branding packages, marketing materials, and UI/UX design. Our design team creates cohesive brand experiences that stand out.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-4">
            Our Services
          </h2>
          <p className="text-teal/60 text-lg">
            From industrial automation to digital solutions, we deliver
            engineering expertise across the full spectrum of modern
            manufacturing technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg border border-gold-light/30 hover:border-orange/40 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-lg bg-teal/5 group-hover:bg-orange/10 flex items-center justify-center text-teal group-hover:text-orange transition-colors mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-teal mb-3">
                {service.title}
              </h3>
              <p className="text-teal/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
