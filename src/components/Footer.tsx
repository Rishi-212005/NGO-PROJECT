import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <span className="font-display text-xl font-bold block mb-4 tracking-tight">NGO <span className="font-normal text-sm opacity-80">Foundation</span></span>
          <p className="text-sm opacity-80 leading-relaxed">
            Empowering communities, transforming lives. Together we build a brighter tomorrow.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm opacity-80">
            <Link to="/about" className="block hover:opacity-100 transition-opacity">About Us</Link>
            <Link to="/works" className="block hover:opacity-100 transition-opacity">Our Works</Link>
            <Link to="/volunteer" className="block hover:opacity-100 transition-opacity">Volunteer</Link>
            <Link to="/contact" className="block hover:opacity-100 transition-opacity">Contact</Link>
            <Link to="/admin/login" className="block hover:opacity-100 transition-opacity">Admin Login</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-sm opacity-80">
            <p>123 Hope Street, New Delhi</p>
            <p>India - 110001</p>
            <p>info@hopebridge.org</p>
            <p>+91 98765 43210</p>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs font-bold hover:bg-primary-foreground/20 transition-colors"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-60">
        © 2026 NGO Foundation. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
