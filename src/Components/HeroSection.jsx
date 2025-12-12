import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBkZWNvcmF0aW9ufGVufDB8fDB8fHww')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-6 py-24">

        {/* Left Content */}
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          >
            Make Your Event <br /> Truly Unforgettable
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl mt-5"
          >
            Premium decoration services for weddings, birthdays, and corporate
            events — crafted by top-rated decorators.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/services")}
            className="mt-8 px-8 py-4 bg-linear-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg"
          >
            Book Decoration Service
          </motion.button>
        </div>

        {/* Right Animated Image */}
        <motion.img
          src="https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA="
          alt="Decoration"
          className="hidden md:block max-w-[480px] drop-shadow-2xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
