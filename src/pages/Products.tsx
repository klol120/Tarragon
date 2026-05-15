import { motion } from 'motion/react';
import { ShoppingBasket, Heart } from 'lucide-react';

export default function Products() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  const products = [
    { name: "Fresh Almonds", label: "Fresh produce", img: "https://images.unsplash.com/photo-1508817628294-43283711c17c?auto=format&fit=crop&q=80" },
    { name: "Sour Plums", label: "Fresh produce", img: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80" },
    { name: "Medjool Dates", label: "Imported specialty", img: "https://images.unsplash.com/photo-1548029960-695d127f4543?auto=format&fit=crop&q=80" },
    { name: "Persian Cucumbers", label: "Fresh produce", img: "https://images.unsplash.com/photo-1449339044510-a418d184af2d?auto=format&fit=crop&q=80" },
    { name: "Kousa (Zucchini)", label: "Fresh produce", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80" },
    { name: "Fresh Oranges", label: "Fresh produce", img: "https://images.unsplash.com/photo-154751470b-42782101795e?auto=format&fit=crop&q=80" },
    { name: "Grape Leaves", label: "Pantry staple", img: "https://images.unsplash.com/photo-1541519086429-54cbe2bc6479?auto=format&fit=crop&q=80" },
    { name: "Assorted Baklava", label: "Homemade favorite", img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80" },
    { name: "Lebanese Pies", label: "Homemade favorite", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80" },
    { name: "Za'atar Spice", label: "Imported specialty", img: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80" },
    { name: "Sumac Spice", label: "Imported specialty", img: "https://images.unsplash.com/photo-1594910411210-983375811776?auto=format&fit=crop&q=80" },
    { name: "Pomegranate Juice", label: "Fresh produce", img: "https://images.unsplash.com/photo-1543666328-93e176378e90?auto=format&fit=crop&q=80" },
    { name: "String Cheese", label: "Imported specialty", img: "https://images.unsplash.com/photo-1485822698434-10de169557a5?auto=format&fit=crop&q=80" },
    { name: "Premium Sardines", label: "Imported specialty", img: "https://images.unsplash.com/photo-1587333333064-072049e6f244?auto=format&fit=crop&q=80" },
    { name: "Evil Eye Gifts", label: "Artisan specialty", img: "https://images.unsplash.com/photo-1589182397057-b16275de4ec6?auto=format&fit=crop&q=80" },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-primary mb-6"
          >
            Market Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            Explore our curated selection of fresh produce, artisanal Lebanese essentials, and imported favorites delivered straight to our Miami market.
          </motion.p>
        </header>

        {/* Categories Filter (Visual only) */}
        <div className="flex gap-3 mb-12 overflow-x-auto py-2 no-scrollbar justify-center">
          {["All Items", "Fresh Produce", "Homemade", "Imported", "Pantry"].map((cat, idx) => (
            <button 
              key={cat}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                idx === 0 ? 'bg-primary text-white shadow-lg' : 'bg-surface-container-high text-on-surface-variant hover:bg-primary/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-[32px] overflow-hidden shadow-soft hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-outline-variant/10"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-primary shadow-sm">
                    {product.label}
                  </span>
                </div>
                <button className="absolute top-6 right-6 p-2 bg-white/90 backdrop-blur-md rounded-full text-lebanese-red opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-primary tracking-tight">{product.name}</h3>
                  <div className="flex text-primary-fixed">
                    <Heart className="w-5 h-5" />
                  </div>
                </div>
                <button className="w-full bg-surface-container-low text-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all active:scale-95">
                  <ShoppingBasket className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Notice */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-8 bg-secondary-container/30 rounded-[32px] border border-outline-variant/30 text-center"
        >
          <p className="text-on-secondary-container font-medium text-lg">
            Looking for something specific? We receive weekly shipments from Lebanon. <br className="hidden md:block" />
            <button className="text-primary font-bold underline underline-offset-4 decoration-primary/30">Call us to check availability</button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
