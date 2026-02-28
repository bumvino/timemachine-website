import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal border-t border-gold-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Time Machine"
                width={160}
                height={42}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gold-light/50 text-sm leading-relaxed">
              Engineering the future of industrial automation and digital
              solutions. Precision-driven, reliability-focused.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-light font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "#services", label: "Services" },
                { href: "#about", label: "About" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gold-light/50 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold-light font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "PLC Programming",
                "HMI Development",
                "System Integration",
                "Web Development",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gold-light/50 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-dark/20 mt-10 pt-8 text-center">
          <p className="text-gold-light/40 text-sm">
            &copy; {currentYear} Time Machine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
