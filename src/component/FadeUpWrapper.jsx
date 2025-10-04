/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function FadeUpWrapper({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 2, y: 0 }}
      transition={{ duration: 2, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
