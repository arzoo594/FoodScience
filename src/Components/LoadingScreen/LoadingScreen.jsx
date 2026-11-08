import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#f5fbf6]"
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.35, 0.6, 0.35],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-green-200 blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.3, 0.55, 0.3],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-emerald-200 blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex flex-col items-center"
          >
            <motion.div
              animate={{
                rotate: [0, 4, -4, 0],
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-24 w-24 items-center justify-center rounded-[28px] bg-green-700 shadow-2xl shadow-green-700/30"
            >
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-[28px] border-2 border-green-500"
              />

              <span className="relative text-4xl font-extrabold text-white">
                F
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.6,
              }}
              className="mt-6 text-3xl font-extrabold tracking-tight text-green-700"
            >
              FoodScience
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.45,
                duration: 0.6,
              }}
              className="mt-2 text-sm font-medium tracking-wide text-gray-500"
            >
              Understand Food. Eat Better.
            </motion.p>

            <div className="mt-7 h-1.5 w-44 overflow-hidden rounded-full bg-green-100">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "300%" }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 rounded-full bg-green-700"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.5,
              }}
              className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-400"
            >
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-green-600"
              />
              Preparing your experience
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: 0.2,
                }}
                className="h-1.5 w-1.5 rounded-full bg-green-600"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
