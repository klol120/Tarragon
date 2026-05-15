import { motion } from 'motion/react';
import { Utensils, Wheat, Truck, Users, Clock } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const highlights = [
    { title: "Authentic Lebanese", desc: "Directly imported gems and heritage items.", icon: <Wheat className="w-6 h-6" /> },
    { title: "Homemade Prepared", desc: "Fresh hummus, pies, and dips made daily.", icon: <Utensils className="w-6 h-6" /> },
    { title: "Fresh Seasonal", desc: "The best produce from local & overseas markets.", icon: <Clock className="w-6 h-6" /> },
    { title: "Imported Staples", desc: "Premium oils, spices, and Levant essentials.", icon: <Truck className="w-6 h-6" /> },
    { title: "Friendly Service", desc: "A family-run market with a personal touch.", icon: <Users className="w-6 h-6" /> },
    { title: "In-store Pickup", desc: "Order your favorites and collect them today.", icon: <Clock className="w-6 h-6" /> },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-background">
      {/* Hero Section */}
      <section className="mb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6 inline-block">Our Story</span>
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-10 leading-tight">
                Traditional Taste,<br />Modern Miami.
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
                Tarragon Middle East Market is a compact Middle Eastern grocery store in Miami offering fresh produce, homemade Lebanese foods, imported pantry staples, spices, sweets, and everyday essentials.
              </p>
              <p className="text-lg text-on-surface-variant font-medium opacity-80 leading-relaxed italic border-l-4 border-primary-fixed pl-6 py-2">
                "We started with a simple vision: to bring the authentic, sun-drenched flavors of Beirut to our neighbors in Miami. Every item on our shelf tells a story of heritage."
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative pb-10 md:pb-0"
            >
              <div className="aspect-[4/5] rounded-[40px] shadow-2xl relative">
                <div className="absolute inset-0 rounded-[40px] overflow-hidden">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX8PFfKiedk89yWfknCFIA_aUGa58nrdXK9Y2U3-wUj4S-FvLKxgPzMZVF0_CQvAwmDoQPbyE2pkJOtoA2sVomi4_21SYsV23DBtNyR6B8yEn2Fx-Nno67_JDDl4VPHRCobliElmIfTOQdasWCa6P8wH92agdhYupHrOPFosV2tiniS_cgV5wcuntgr7V9amroMFxVonmKi801aOf5Q-XKSQKl_7kfKbOGTSq-4u-XmWaisFM3ZtS8w_OYWd7RxMQ1z02VpKmo5Wo" 
                    alt="Traditional Meal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-sm hidden md:block z-20 border border-outline-variant/10">
                  <h3 className="font-bold text-xl text-primary mb-2">Heritage First</h3>
                  <p className="text-on-surface-variant text-base">We prioritize quality over quantity, hand-selecting items that define Lebanese cuisine.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="bg-surface py-32 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold text-primary mb-6">What Defines Tarragon Market</h2>
            <div className="w-24 h-1 bg-primary-fixed mx-auto"></div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {highlights.map((h, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white p-10 rounded-[32px] shadow-soft hover:shadow-xl transition-all border border-outline-variant/10 group"
              >
                <div className="p-4 bg-primary-container/5 rounded-2xl w-fit mb-8 group-hover:bg-primary transition-colors text-primary group-hover:text-white">
                  {h.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{h.title}</h3>
                <p className="text-lg text-on-surface-variant leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-10">A Compact Haven of Flavor</h2>
            <p className="text-2xl text-on-surface-variant leading-relaxed font-light">
              Located in the Dadeland North Shopping Center, we serve as a boutique gateway to the Levant. Whether you're a lifelong connoisseur of Middle Eastern food or a curious newcomer, our doors are open to share our traditions with you.
            </p>
            <div className="mt-16 flex justify-center gap-12">
              <div className="text-center">
                <p className="text-5xl font-bold text-primary mb-2">12+</p>
                <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Years in Miami</p>
              </div>
              <div className="w-px bg-outline-variant"></div>
              <div className="text-center">
                <p className="text-5xl font-bold text-primary mb-2">100%</p>
                <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Hand-Selected</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
