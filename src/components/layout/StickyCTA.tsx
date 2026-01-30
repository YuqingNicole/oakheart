import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (approx 500px)
      const show = window.scrollY > 500;
      setIsVisible(show);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-0 right-0 z-50 px-4 pointer-events-none flex justify-center"
        >
          <div className="pointer-events-auto shadow-2xl rounded-full">
            <Button asChild variant="hero" size="xl" className="rounded-full px-8 py-6 text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-primary border-2 border-aged-brass/20">
              <Link href="/quote" className="flex items-center gap-2">
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
