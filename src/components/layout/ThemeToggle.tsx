import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Theme switch for toggling between light/dark modes.
 * A pill switch with a sliding thumb and sun/moon icons.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent mismatch before next-themes applies the stored theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      disabled={!mounted}
      className="relative inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border border-border bg-secondary/80 px-1 transition-opacity disabled:cursor-default disabled:opacity-60"
    >
      <Sun className="absolute left-2 size-3.5 text-amber-500/90" />
      <Moon className="absolute right-2 size-3.5 text-primary/90" />

      <span
        className={cn(
          'pointer-events-none absolute z-10 flex size-5 items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-border transition-transform duration-300 ease-out',
          isDark ? 'translate-x-7' : 'translate-x-0'
        )}
      >
        {isDark ? (
          <Moon className="size-3 text-primary" />
        ) : (
          <Sun className="size-3 text-amber-500" />
        )}
      </span>
    </button>
  );
}