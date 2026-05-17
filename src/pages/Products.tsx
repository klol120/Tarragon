import { motion } from 'motion/react';
import { ShoppingBasket, Heart, Phone, Search } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Products() {
  const location = useLocation();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Items');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  const products = [
    { name: "Taboli salad", label: "Salads", img: "/01-taboli-salad.jpg" },
    { name: "Meat pie", label: "Pies", img: "/02-meat-pie.jpg" },
    { name: "Siffha Lebanese meat pie", label: "Pies", img: "/03-siffha-lebanese-meat-pie.jpg" },
    { name: "Spinach fatayer", label: "Pies", img: "/04-spinach-fatayer.jpg" },
    { name: "Lebanese Hummus", label: "Dips", img: "/05-lebanese-hummus.jpg" },
    { name: "Zaatar pie", label: "Pies", img: "/06-zaatar-pie.jpg" },
    { name: "Tzatziki salad (yogurt salad)", label: "Dips", img: "/07-tzatziki-salad-yogurt-salad.jpg" },
    { name: "Stuffed Grape leaves", label: "Mezze", img: "/08-stuffed-grape-leaves.jpg" },
    { name: "Baba ghanouj", label: "Dips", img: "/09-baba-ghanouj.jpg" },
    { name: "Pita chips", label: "Snacks", img: "/10-pita-chips.jpg" },
    { name: "Fried kibbeh", label: "Fried specialties", img: "/11-fried-kibbeh.jpg" },
    { name: "Cheese pies", label: "Pies", img: "/12-cheese-pies.jpg" },
    { name: "Falafel balls", label: "Vegetarian", img: "/13-falafel-balls.jpg" },
  ];

  const categories = ["All Items", ...Array.from(new Set(products.map((product) => product.label)))];
  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All Items' || product.label === selectedCategory;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.label.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [products, searchTerm, selectedCategory]);

  useEffect(() => {
    const state = location.state as { focusSearch?: boolean } | null;

    if (state?.focusSearch) {
      searchInputRef.current?.focus();
    }
  }, [location.state]);

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
            Explore our curated selection of Lebanese salads, dips, pies, and classic mezze made with fresh ingredients and photographed in-house.
          </motion.p>
        </header>

        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-on-surface-variant" />
            <input
              ref={searchInputRef}
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search products"
              className="w-full rounded-full border border-outline-variant/40 bg-white py-4 pl-14 pr-5 text-base font-medium text-on-surface shadow-soft outline-none transition-all placeholder:text-on-surface-variant/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto py-2 no-scrollbar justify-start md:justify-center">
            {categories.map((cat) => (
              <button 
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat ? 'bg-primary text-white shadow-lg' : 'bg-surface-container-high text-on-surface-variant hover:bg-primary/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.name}
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
        ) : (
          <div className="rounded-[32px] border border-outline-variant/30 bg-white p-10 text-center shadow-soft">
            <p className="text-xl font-bold text-primary">No products found</p>
            <p className="mt-3 text-on-surface-variant">Try another search or category.</p>
          </div>
        )}

        {/* Floating Notice */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-8 bg-secondary-container/30 rounded-[32px] border border-outline-variant/30 text-center"
        >
          <p className="text-on-secondary-container font-medium text-lg">
            Looking for something specific? We receive weekly shipments from Lebanon. <br className="hidden md:block" />
            <a href="tel:+13056631121" className="inline-flex items-center gap-2 text-primary font-bold underline underline-offset-4 decoration-primary/30">
              <Phone className="w-5 h-5" />
              Call us to check availability
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
