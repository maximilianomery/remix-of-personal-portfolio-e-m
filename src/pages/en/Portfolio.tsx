import { projectsEn } from '@/data/projectsEn';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';

const CATEGORY_LABELS_EN: Record<string, string> = {
  landscapes: 'Landscapes',
  portraits: 'Portraits',
  architecture: 'Architecture',
  editorial: 'Editorial',
  documentary: 'Documentary',
};

export default function Portfolio() {
  return (
    <>
      <SEOHead
        title="Portfolio"
        description="Explore my complete photography portfolio featuring portraits, landscapes, editorial work, architecture and documentary projects."
      />

      <div className="min-h-screen">
        <section className="relative py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Portfolio
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                A curated collection of photography spanning diverse subjects and styles
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-2 md:px-4">
          <PortfolioGrid projects={projectsEn} categoryLabels={CATEGORY_LABELS_EN} />
        </section>

        <div className="h-24" />
      </div>
    </>
  );
}