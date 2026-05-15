import { motion } from 'motion/react';
import { Star, MessageCircle, Quote } from 'lucide-react';

export default function Reviews() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  const googleMapsUrl = "https://www.google.com/maps/place/Tarragon+Middle+East+Market/@25.6945535,-80.3003,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9c7956f125cd7:0x710f0ca079fd6883!8m2!3d25.6945535!4d-80.3003!16s%2Fg%2F1th7nq27";

  const reviews = [
    {
      name: "Gonzalo Pereyra",
      review: "Awesome Mediterranean market!! Delicious fresh food: Tzatziki, Hummus, Baba Ganuj, Grape leaves, meat and spinach pies, kibeh, falafel, labneh, etc. The owner is awesome and very friendly.",
      rating: 5,
      date: "Local Guide"
    },
    {
      name: "Sharon",
      review: "I've come here many times. The owner is very nice and friendly. They have excellent Middle Eastern food, especially their homemade items.",
      rating: 5,
      date: "Verified Review"
    },
    {
      name: "Abeer Shaban",
      review: "This place has almost every produce you need from the Middle East. Very friendly owner.",
      rating: 5,
      date: "Verified Review"
    },
    {
      name: "Gisela Garcia",
      review: "The best Middle Eastern market in Miami! The owner is extremely polite and helpful. The kibbee and fatayer are outstanding.",
      rating: 5,
      date: "Verified Review"
    },
    {
      name: "Moe T.",
      review: "Authentic flavors and a great selection of imported goods. Their zaatar and olive oil selection is the best in town.",
      rating: 5,
      date: "Verified Review"
    },
    {
      name: "Sabrina V.",
      review: "A hidden gem. I come here specifically for the fresh pita and the stuffed grape leaves. Reminds me of home.",
      rating: 5,
      date: "Verified Review"
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-background px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-primary mb-6">What Our Community Says</h1>
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-primary">4.3</span>
                <div className="flex text-primary-fixed">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < 4 ? 'fill-current' : ''}`} />
                  ))}
                </div>
              </div>
              <p className="text-lg text-on-surface-variant font-medium">102 Verified Google Reviews</p>
            </a>
          </motion.div>
        </header>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white p-10 rounded-[32px] shadow-soft border border-outline-variant/10 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-1 text-primary-fixed">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary-fixed/30" />
                </div>
                <p className="text-lg text-on-surface leading-relaxed mb-8 italic">
                  "{rev.review}"
                </p>
              </div>
              <div>
                <div className="h-px w-12 bg-outline-variant/50 mb-6"></div>
                <p className="font-bold text-primary text-xl">{rev.name}</p>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1 opacity-60">{rev.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-32 p-12 bg-primary-container text-white rounded-[40px] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <MessageCircle className="w-32 h-32" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Share Your Experience</h2>
          <p className="text-xl opacity-90 mb-10 max-w-xl mx-auto leading-relaxed">
            Had a great visit? We'd love to hear your feedback on Google! Your support helps us grow our local Lebanese community.
          </p>
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-primary font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20"
          >
            Write a Google Review
          </a>
        </div>
      </div>
    </div>
  );
}
