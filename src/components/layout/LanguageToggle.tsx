import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

/**
 * Language switch that navigates between the Spanish (/) and English (/en) versions.
 * The site keeps two fully duplicated page trees, one per language.
 */
export function LanguageToggle() {
  const { pathname } = useLocation();

  const isEn = pathname.startsWith('/en');

  const esPath = isEn ? pathname.replace(/^\/en/, '') || '/' : pathname;
  const enPath = isEn ? pathname : `/en${pathname}`;

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center gap-0.5 rounded-full bg-background/40 p-0.5"
    >
      <Link
        to={esPath}
        aria-label="Español"
        className={cn(
          'rounded-full px-2 py-1 text-xs font-medium transition-colors',
          !isEn
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        ES
      </Link>
      <Link
        to={enPath}
        aria-label="English"
        className={cn(
          'rounded-full px-2 py-1 text-xs font-medium transition-colors',
          isEn
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        EN
      </Link>
    </div>
  );
}