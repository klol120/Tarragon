import { Link } from 'react-router-dom';
import { Clock, Instagram, MapPin, Phone, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-surface-container-highest mt-auto w-full py-16 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-6">Tarragon Market</h3>
            <p className="text-on-surface-variant text-base leading-relaxed mb-8">
              Experience Lebanese food at its finest in Miami. Authentic flavors, freshly prepared daily with the finest ingredients from the Middle East.
            </p>
            <div className="flex gap-5">
              <a href="https://www.instagram.com/tarragon_middle_east_market/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-primary/5 text-primary rounded-full hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2.5 bg-primary/5 text-primary rounded-full hover:bg-primary hover:text-white transition-all">
                <MapPin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2.5 bg-primary/5 text-primary rounded-full hover:bg-primary hover:text-white transition-all">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Products', 'About', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-on-surface-variant hover:text-primary transition-colors text-base hover:underline underline-offset-4 decoration-primary/30"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Visit Us</h4>
            <div className="space-y-6">
              <a 
                href="https://www.google.com/maps/place/Tarragon+Middle+East+Market/@25.6945535,-80.3003,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9c7956f125cd7:0x710f0ca079fd6883!8m2!3d25.6945535!4d-80.3003!16s%2Fg%2F1th7nq27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-on-surface-variant hover:text-primary transition-colors"
              >
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <p className="text-base">
                  6623 S Dixie Hwy,<br />
                  Miami, FL 33143<br />
                  <span className="text-sm opacity-75">Dadeland North Shopping Center</span>
                </p>
              </a>
              <div className="flex items-center gap-4 text-on-surface-variant">
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <p className="text-base leading-none">+1 305-663-1121</p>
              </div>
              <div className="flex items-start gap-4 text-on-surface-variant">
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <p className="text-base leading-relaxed">
                  Tuesday-Sunday<br />
                  8 AM to 6 PM
                </p>
              </div>
              <a 
                href="https://www.instagram.com/tarragon_middle_east_market/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors group"
              >
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-base leading-none truncate">@tarragon_middle_east_market</p>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-on-surface-variant text-base mb-6">
              Join our community for weekly recipes and fresh arrivals.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email"
                className="flex-grow bg-surface border border-outline-variant/50 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <button className="bg-primary text-white p-3 rounded-xl hover:bg-primary-container transition-all">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-outline-variant/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-sm text-on-surface-variant opacity-70">
            © 2024 Tarragon Middle East Market. Authentic Lebanese Heritage.
          </p>
          <div className="flex gap-6 text-sm text-on-surface-variant opacity-70">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
