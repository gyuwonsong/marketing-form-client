import { motion } from "framer-motion";

export default function HoverCard({ icon: Icon, text }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="
        group flex items-center gap-6
        bg-white p-7 rounded-2xl border shadow-md
        hover:shadow-xl transition-all
      "
    >
      <div
        className="
          w-12 h-12 flex items-center justify-center
          rounded-xl bg-main/10
        "
      >
        <Icon size={22} className="text-main" />
      </div>

      <p className="text-xl font-semibold text-gray-600">{text}</p>
    </motion.div>
  );
}
