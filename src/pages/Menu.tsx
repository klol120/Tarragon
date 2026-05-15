import { motion } from 'motion/react';
import { Phone, Heart } from 'lucide-react';

export default function Menu() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const menuSections = [
    {
      title: "Sandwiches",
      subtitle: "Wrapped in fresh pita with traditional garnishes.",
      items: [
        { name: "Falafel Sandwich", price: "$4.99", desc: "Crispy chickpea fritters, tahini, parsley, tomatoes, and pickled turnips." },
        { name: "Shawarma Sandwich", price: "$5.99", desc: "Marinated prime cuts, slow-roasted, served with garlic paste and pickles." },
        { name: "Kibi Sandwich", price: "$5.99", desc: "Traditional spiced ground meat and bulgur, served with house special sauce." },
      ]
    },
    {
      title: "Pies",
      subtitle: "Freshly baked in our stone oven every morning.",
      items: [
        { name: "Spinach Pie", price: "$1.75", desc: "Handmade dough filled with fresh spinach, onions, and sumac." },
        { name: "Meat Pie", price: "$1.75", desc: "Spiced ground beef and pine nuts in a traditional pastry." },
        { name: "Cheese Pie", price: "$1.75", desc: "A blend of premium Middle Eastern cheeses." },
      ]
    },
    {
      title: "Stuffed Grape Leaves",
      subtitle: "Rolled by hand with Lebanese passion.",
      items: [
        { name: "Stuffed Vegetable Grape Leaves", price: "$7.99", desc: "Rice, herbs, lemon, and olive oil." },
        { name: "Stuffed Meat Grape Leaves", price: "$11.99", desc: "Spiced beef, rice, and aromatic marrow." },
      ]
    },
    {
      title: "Dips",
      subtitle: "Creamy, smooth, and authentic perfection.",
      items: [
        { name: "Hoummous", price: "$7.99", desc: "The gold standard of chickpea & tahini purees." },
        { name: "Babaganouj", price: "$7.99", desc: "Smoky fire-roasted eggplant with premium tahini." },
      ]
    }
  ];

  const favorites = ["Tzatziki", "Hummus", "Baba Ganuj", "Grape Leaves", "Meat Pies", "Spinach Pies", "Kibeh", "Falafel", "Labneh", "Tabouli", "Baklava"];

  return (
    <div className="pt-24 md:pt-32 pb-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <section className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 inline-block">Authentic Lebanese Kitchen</span>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Our Fresh Menu</h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Hand-crafted recipes passed down through generations, made fresh daily with organic ingredients for our Miami community.
            </p>
          </motion.div>
        </section>

        {/* Menu Sections */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-32"
        >
          {menuSections.map((section, sIdx) => (
            <div key={sIdx} className="relative">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-outline-variant/30 pb-6">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">{section.title}</h2>
                  <p className="text-on-surface-variant">{section.subtitle}</p>
                </div>
                <div className="h-0.5 md:flex-grow mx-8 bg-outline-variant/20 hidden md:block"></div>
                <span className="text-primary/20 text-6xl font-black">0{sIdx + 1}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {section.items.map((item, iIdx) => (
                  <motion.div 
                    key={iIdx}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-primary group-hover:text-primary-fixed transition-colors">{item.name}</h3>
                      <span className="text-primary font-bold">{item.price}</span>
                    </div>
                    <p className="text-on-surface-variant text-base leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Customer Favorites */}
        <section className="mt-40 text-center">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px w-12 bg-outline-variant/50"></div>
            <Heart className="w-6 h-6 text-lebanese-red" fill="currentColor" />
            <h2 className="text-3xl font-bold text-primary">Customer Favorites</h2>
            <div className="h-px w-12 bg-outline-variant/50"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {favorites.map((fav) => (
              <span 
                key={fav}
                className="px-6 py-2.5 bg-white shadow-soft rounded-full text-sm font-semibold text-primary border border-outline-variant/20 hover:border-primary/30 transition-all cursor-default"
              >
                {fav}
              </span>
            ))}
          </div>
        </section>

        {/* Ordering Notice */}
        <section className="mt-40 relative rounded-[40px] overflow-hidden bg-primary-container p-12 text-center text-white shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Hungry? Order Now.</h2>
            <p className="text-xl opacity-90 mb-10 max-w-xl mx-auto">
              Avoid the wait and pick up your authentic Lebanese feast today.
            </p>
            <a 
              href="tel:+13056631121" 
              className="inline-flex items-center gap-4 bg-white text-primary px-10 py-5 rounded-3xl font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20"
            >
              <Phone className="w-6 h-6" />
              +1 305-663-1121
            </a>
            <p className="mt-8 text-sm italic opacity-70">
              Prices and availability may change. Please call to confirm.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
