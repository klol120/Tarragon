import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Send, Map, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 md:pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 inline-block">Connect With Us</span>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Visit Our Market</h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              We're conveniently located in the South Miami area. Stop by to explore our full selection of Lebanese groceries, hot food, and fresh bakery items.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-12 rounded-[40px] shadow-soft border border-outline-variant/10 space-y-12">
              <a 
                href="https://www.google.com/maps/place/Tarragon+Middle+East+Market/@25.6945535,-80.3003,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9c7956f125cd7:0x710f0ca079fd6883!8m2!3d25.6945535!4d-80.3003!16s%2Fg%2F1th7nq27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-6 group"
              >
                <div className="p-4 bg-primary-fixed rounded-2xl shrink-0 h-fit group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Address</h3>
                  <p className="text-lg text-on-surface-variant leading-relaxed group-hover:text-primary transition-colors">
                    Tarragon Middle East Market<br />
                    6623 S Dixie Hwy, Miami, FL 33143<br />
                    <span className="font-bold text-primary-container text-base">Located in Dadeland North Shopping Center</span>
                  </p>
                </div>
              </a>

              <a href="tel:+13056631121" className="flex gap-6 group">
                <div className="p-4 bg-primary-fixed rounded-2xl shrink-0 h-fit group-hover:bg-primary transition-colors">
                  <Phone className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Phone</h3>
                  <p className="text-lg text-on-surface-variant group-hover:text-primary transition-colors">+1 305-663-1121</p>
                </div>
              </a>

              <div className="flex gap-6">
                <div className="p-4 bg-primary-fixed rounded-2xl shrink-0 h-fit">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Hours</h3>
                  <p className="text-lg text-on-surface-variant leading-relaxed">
                    Tuesday-Sunday<br />
                    8 AM to 6 PM
                  </p>
                </div>
              </div>

              <a 
                href="https://www.instagram.com/tarragon_middle_east_market/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-6 group"
              >
                <div className="p-4 bg-primary-fixed rounded-2xl shrink-0 h-fit group-hover:bg-primary group-hover:text-white transition-colors">
                  <Instagram className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3 text-left">Social</h3>
                  <p className="text-lg text-on-surface-variant group-hover:text-primary transition-colors">@tarragon_middle_east_market</p>
                </div>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="https://www.google.com/maps/place/Tarragon+Middle+East+Market/@25.6945535,-80.3003,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9c7956f125cd7:0x710f0ca079fd6883!8m2!3d25.6945535!4d-80.3003!16s%2Fg%2F1th7nq27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-primary text-white py-5 rounded-3xl font-bold hover:scale-105 transition-all shadow-lg active:scale-95 text-center"
              >
                <Map className="w-5 h-5" />
                Get Directions
              </a>
              <a 
                href="tel:+13056631121"
                className="flex items-center justify-center gap-3 bg-white border-2 border-primary text-primary py-5 rounded-3xl font-bold hover:bg-primary hover:text-white transition-all active:scale-95"
              >
                <Phone className="w-5 h-5" />
                Call Store
              </a>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl bg-surface-container-low border border-outline-variant/30"
          >
             {/* Simple Map Visualization */}
             <div className="absolute inset-0 bg-[#e5e3df] opacity-50 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover grayscale opacity-20"
                />
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute -inset-8 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                  <div className="relative p-6 bg-white rounded-3xl shadow-2xl border border-primary/20 flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white mb-3 shadow-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <p className="font-bold text-primary">Tarragon Market</p>
                    <p className="text-xs text-on-surface-variant">6623 S Dixie Hwy</p>
                  </div>
                </div>
             </div>
             
             {/* Bottom Panel on Map */}
             <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl flex justify-between items-center">
                <div>
                   <p className="font-bold text-primary text-lg">South Miami</p>
                   <p className="text-sm text-on-surface-variant font-medium">Tuesday-Sunday, 8 AM to 6 PM</p>
                </div>
                <button className="p-4 bg-primary text-white rounded-2xl hover:bg-primary-container transition-colors">
                  <Send className="w-5 h-5" />
                </button>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
