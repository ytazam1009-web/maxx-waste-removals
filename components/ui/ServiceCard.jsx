"use client";

import { motion } from "framer-motion";

export default function ServiceCard({
  icon,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-sm
        transition
      "
    >

      <div className="
        absolute
        inset-0
        bg-yellow-400/0
        transition
        duration-500
        group-hover:bg-yellow-400/5
      " />

      <div className="
        relative
        mb-6
        inline-flex
        rounded-2xl
        bg-yellow-400/10
        p-4
        text-yellow-400
      ">

        {icon}

      </div>

      <h3 className="relative text-2xl font-bold text-white">

        {title}

      </h3>

      <p className="
        relative
        mt-4
        leading-relaxed
        text-gray-300
      ">

        {description}

      </p>

    </motion.div>
  );
}