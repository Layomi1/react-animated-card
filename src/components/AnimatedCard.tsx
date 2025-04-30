import { motion } from "motion/react";

const AnimatedCard = () => {
  return (
    <motion.div
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.05, rotate: 3 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={{
        left: -50,
        right: 50,
        top: -50,
        bottom: 50,
      }}
      dragElastic={0.2}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full h-40 object-cover"
        alt="card image"
      />
      <div className="p-6">
        <h2 className="text-black file:text-2xl font-semibold mb-2">
          Card Title
        </h2>
        <p className="text-gray-700 mb-2">
          Basic practice of frame motion animation with Tailwind CSS for
          styling.
        </p>
        <button className="py-2 px-4 cursor-pointer text-white  bg-green-500 hover:bg-teal-800 rounded-xl font-bold">
          Add More
        </button>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
