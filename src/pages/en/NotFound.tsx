import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page not found"
        description="The page you are looking for does not exist or may have been moved."
      />

      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-light uppercase tracking-[0.3em] text-muted-foreground">
              Error
            </p>
            <h1 className="text-8xl md:text-9xl font-light tracking-widest text-foreground">
              404
            </h1>
            <p className="text-lg md:text-xl font-light text-muted-foreground">
              The page you are looking for does not exist or may have been moved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-4"
          >
            <Link
              to="/en"
              className="inline-block px-8 py-3 border border-border hover:bg-accent transition-colors text-sm font-light tracking-wide"
            >
              Back to home
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}