import { ArrowRight, Star, MapPin, ShoppingBasket, Store } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const categories = [
    { title: "Fresh Produce", desc: "Directly sourced organic vegetables and seasonal Middle Eastern fruits.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX8PFfKiedk89yWfknCFIA_aUGa58nrdXK9Y2U3-wUj4S-FvLKxgPzMZVF0_CQvAwmDoQPbyE2pkJOtoA2sVomi4_21SYsV23DBtNyR6B8yEn2Fx-Nno67_JDDl4VPHRCobliElmIfTOQdasWCa6P8wH92agdhYupHrOPFosV2tiniS_cgV5wcuntgr7V9amroMFxVonmKi801aOf5Q-XKSQKl_7kfKbOGTSq-4u-XmWaisFM3ZtS8w_OYWd7RxMQ1z02VpKmo5Wo" },
    { title: "Homemade Pies", desc: "Traditional Sfeeha and Fatayer baked daily in our brick ovens.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl3M2gy7NXvh4zs6yLxAO7a7kM0IBdCEqsnpYjJHF0zEEuBHPXybUpaKdY5v6Yq3pMeOX5xlMn9oLdj3dTQwnEWyBq4RNjtLtzNsswq5Rab7gVcKINsLRIw8q6TkCJ1mcphfN6tIje4ppYHwetlKd-DIPNmhOZIBtQtT_b495VZqZmRNTbBSdPjgz80iRIsHNZVVnOoie4JbFWbyIEXJtDRFxG2B_7yYF2_ZsXptFvfwrM5iPdxjUdneuod1NAKeqZp1Xuhp7D3M0" },
    { title: "Dips & Grape Leaves", desc: "Our signature hummus, baba ghanoush, and hand-rolled dolmas.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqy8-6E6rih8Lb3tylPxwW18bV4F7lLYwbb81N9wFcZYeD-PmNkHFANyU_5vYBVxJhiq5wmuHMZMAtc15n4Yjsivs16iH3e1rdpoh5fmeDL7AOAyOQ3au5wT8nbnimbv6FXZtO2KPVzzUshKIin3-Ne71y1f0tlmHup4eMPrEkeCvQQztTSr0D-BfnCLpzc0nZCMVt6F3eTcSm9VJVQEa62A9j-NIax_bdvEBEjlLZqw184emF_JQ78ativ6LG8cHO6Rk8-a9_OEU" },
    { title: "Baklava & Sweets", desc: "Exquisite pastries made with pure honey, nuts, and orange blossom.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMLJaqCLJZX-kIGa0jXXD1D_Cxy6q8scNfWcVTAQAJGPMAloo0uMXI5fgycA9pWadG9WnO4lUxYRctsIjmoNj1OOneC-490mcCzYs25BRl33WDw7gxEaWp2H632U-jQZET0NaSIa8Ti5WKkWooGSDkdK7PbbQ_MZhrSzeTMj1_HJPLvIHNpTm6_zi4ApQtIXraxQvlxFtQH2oiv_tKzqxqCwzd0mG1MODiulBRbTUeDqI6mwVZTi8URGsEjIbnq80b2hKzyGEWNJM" },
    { title: "Spices & Pantry", desc: "The soul of Lebanese cooking: Za'atar, Sumac, and premium olive oils.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrjh_V5BsLM3JZi8XZbBEqV-2-t5-yK40P1puJ5XJBQCGVjG_53mf9Gt85gSMGRwgzplICpL_2_MZ5-2oLn_t8UlEt9HBmzw4eddTLBFqlcrdkW4o7VoSCm5nL-AFoiICnjr7fEHEsR_xleWRo6cfv1kyEADuW2LSUlN2LkppHdllqKw5Pl3ksZPC59wZEgi0jYQSzro0BlhwsAOAwVq2r8YhKMaCSLH4oCLClSlyPuoJWzMBfvT-_syLF9tz0zuGNnvoLro06qC4" },
    { title: "Imported Specialties", desc: "Hard-to-find delicacies directly imported from the Levant region.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2tAjuquUgApEA4p_ZSEE2lWI_u1C3LLaEFenAAh5ECE4TR8_aP5nnsDysCuOwyO4baDLOj_J-BUgx7TJHi5GOWsdvQ-YwZDqssukmP4h_7vRBDzXd59M-szCIK7Me_Syn5GusX3sAxJ_y8yJlPvqIo4kI8lLsgz2nHvBAjkJjI9S_gg67QMzcRieA9tavBhxIxmSEaQqa98oDGutYorzEr0YOOQmZkmYINyqcwzNeoJ1tGcasDQiPp6bqF7D_rJAtD6Vwq6_qhZo" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80"
            alt="Tarragon Market Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-fixed text-primary font-bold text-xs rounded-full mb-8 uppercase tracking-widest">
              Authentic Lebanese Heritage
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Tarragon Middle<br />East Market
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed">
              Experience Lebanese food at its finest in Miami. Freshly sourced ingredients, traditional recipes, and a passion for excellence in every bite.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="group px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-container transition-all flex items-center gap-3 shadow-lg shadow-primary/20">
                View Menu
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                Visit Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 -mt-16 relative z-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { 
                label: "4.3 Google Rating", 
                icon: <Star className="text-secondary-container" fill="currentColor" />, 
                sub: "102 verified reviews",
                url: "/reviews"
              },
              { 
                label: "Miami, FL", 
                icon: <MapPin className="text-primary-fixed" />, 
                sub: "Dadeland North",
                url: "https://www.google.com/maps/place/Tarragon+Middle+East+Market/@25.6945535,-80.3003,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9c7956f125cd7:0x710f0ca079fd6883!8m2!3d25.6945535!4d-80.3003!16s%2Fg%2F1th7nq27"
              },
              { label: "Lebanese Specialties", icon: <ShoppingBasket className="text-tertiary-container" />, sub: "Authentic & imported" },
              { label: "In-store Pickup", icon: <Store className="text-secondary-container" />, sub: "Fresh daily" },
            ].map((info, idx) => {
              const Content = (
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-surface-container-low rounded-xl">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-bold text-lg text-primary">{info.label}</p>
                    <p className="text-sm text-on-surface-variant">{info.sub}</p>
                  </div>
                </div>
              );

              if (info.url) {
                if (info.url.startsWith('http')) {
                  return (
                    <motion.a 
                      key={idx}
                      href={info.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      className="glass-card p-6 rounded-2xl shadow-soft border border-outline-variant/30 hover:scale-105 transition-transform cursor-pointer"
                    >
                      {Content}
                    </motion.a>
                  );
                }
                return (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                  >
                    <Link
                      to={info.url}
                      className="glass-card p-6 rounded-2xl shadow-soft border border-outline-variant/30 flex items-center gap-5 hover:scale-105 transition-transform cursor-pointer block"
                    >
                      {Content}
                    </Link>
                  </motion.div>
                );
              }

              return (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="glass-card p-6 rounded-2xl shadow-soft border border-outline-variant/30 flex items-center gap-5 hover:scale-105 transition-transform"
                >
                  {Content}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Fresh From the Levant</h2>
            <div className="w-24 h-1 bg-primary-fixed mx-auto rounded-full"></div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-soft hover:shadow-xl transition-all duration-500"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3">{cat.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6">{cat.desc}</p>
                  <button className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore items
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu Preview CTA */}
      <section className="py-24 px-4 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-fixed/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-primary-fixed">The Kitchen at Tarragon</h2>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Freshly prepared Lebanese classics made to order. From crispy falafel to tender shawarma and hand-rolled grape leaves.
            </p>
            <Link to="/menu" className="inline-flex px-10 py-4 bg-primary-fixed text-primary font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20">
              See the Full Menu
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqy8-6E6rih8Lb3tylPxwW18bV4F7lLYwbb81N9wFcZYeD-PmNkHFANyU_5vYBVxJhiq5wmuHMZMAtc15n4Yjsivs16iH3e1rdpoh5fmeDL7AOAyOQ3au5wT8nbnimbv6FXZtO2KPVzzUshKIin3-Ne71y1f0tlmHup4eMPrEkeCvQQztTSr0D-BfnCLpzc0nZCMVt6F3eTcSm9VJVQEa62A9j-NIax_bdvEBEjlLZqw184emF_JQ78ativ6LG8cHO6Rk8-a9_OEU" className="w-full h-48 object-cover rounded-2xl shadow-lg" alt="Hummus" />
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl3M2gy7NXvh4zs6yLxAO7a7kM0IBdCEqsnpYjJHF0zEEuBHPXybUpaKdY5v6Yq3pMeOX5xlMn9oLdj3dTQwnEWyBq4RNjtLtzNsswq5Rab7gVcKINsLRIw8q6TkCJ1mcphfN6tIje4ppYHwetlKd-DIPNmhOZIBtQtT_b495VZqZmRNTbBSdPjgz80iRIsHNZVVnOoie4JbFWbyIEXJtDRFxG2B_7yYF2_ZsXptFvfwrM5iPdxjUdneuod1NAKeqZp1Xuhp7D3M0" className="w-full h-48 object-cover rounded-2xl shadow-lg mt-8" alt="Pies" />
          </div>
        </div>
      </section>
    </div>
  );
}
