/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function FadeRightWrapper({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 150 }} // bắt đầu từ bên phải
      whileInView={{ opacity: 1, x: 0 }} // về vị trí gốc
      transition={{ duration: 2, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
