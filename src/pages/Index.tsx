import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Code2,
  Database,
  Server,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LanguageToggle } from "@/components/layout/LanguageToggle";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary/60" />
            {eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export default function Index() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  const [active, setActive] = useState("home");

  const { NAV, SKILL_GROUPS, EXPERIENCE, PROJECTS } = useMemo(() => {
    return {
      NAV: [
        { id: "home", label: "Inicio" },
        { id: "about", label: "Sobre mí" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experiencia" },
        { id: "projects", label: "Proyectos" },
        { id: "contact", label: "Contacto" },
      ],
      SKILL_GROUPS: [
        {
          icon: Code2,
          title: "Lenguajes & Frameworks",
          items: ["PHP", "Laravel", "Java / J2EE", "C# / ASP.NET", "JavaScript", "TypeScript", "Node", "Angular", "HTML / CSS"],
        },
        {
          icon: Database,
          title: "Bases de datos & Datos",
          items: ["SQL", "MySQL", "Oracle PL/SQL", "SQL Server", "ETL", "Procedimientos almacenados", "Jasper Reports"],
        },
        {
          icon: Server,
          title: "Plataformas & Metodologías",
          items: ["LAMP (Linux/Apache/MySQL/PHP)", "WordPress", "Joomla", "SuiteCRM / SugarCRM", "ERP", "Git", "Scrum / Agile / XP"],
        },
        {
          icon: Sparkles,
          title: "Herramientas IA",
          items: ["IA aplicada al desarrollo", "Automatización de tareas", "Optimización de procesos", "Mejora de calidad de código"],
        },
      ],
      EXPERIENCE: [
        {
          company: "S2S",
          role: "Desarrollador Full Stack Senior",
          period: "May 2024 – Ago 2024",
          location: "Santiago, Chile",
          description: "Mantenimiento, desarrollo y continuidad operacional de la Plataforma Universal Cliente para Banco Estado. Análisis y desarrollo de requerimientos en C#, ASP.NET, VB, SQL Server, JavaScript y XML.",
          stack: ["C#", "ASP.NET", "VB", "SQL Server", "JavaScript", "Git"],
        },
        {
          company: "I2T",
          role: "Desarrollador Full Stack Senior",
          period: "Oct 2013 – May 2024",
          location: "Santa Fe, Argentina",
          description: "Desarrollo de aplicaciones web LAMP: sistema de gestión de trámites, vuelcos masivos, indicadores gerenciales, gestión contable y CRM. Administración y normalización de bases de datos. Desarrollo de ETLs entre ecommerce, CRM y ERP.",
          stack: ["PHP", "Laravel", "Java", "Angular", "TypeScript", "PL/SQL", "MySQL", "Jasper", "Git"],
        },
        {
          company: "Falabella Retail S.A",
          role: "Analista / Desarrollador PL/SQL",
          period: "2010 – 2012",
          location: "Santiago, Chile",
          description: "Análisis, desarrollo y control de procedimientos almacenados PL/SQL para procesos logísticos en bodegas y centros de distribución de Falabella, Tottus y Sodimac en LATAM (Chile, Colombia, Argentina, Perú).",
          stack: ["Oracle", "PL/SQL", "ETL", "LATAM"],
        },
        {
          company: "Everis (NTT Data)",
          role: "Analista / Programador / QA Front End",
          period: "2009 – 2010",
          location: "Santiago, Chile",
          description: "Cliente Movistar — Sistema de Ventas Online en J2EE/XML WS, HTML/JS/CSS sobre BEA-Oracle/PLSQL. Cliente Telmex — asistencia de tercer nivel.",
          stack: ["J2EE", "XML", "Oracle", "PL/SQL", "HTML/JS/CSS"],
        },
      ],
      PROJECTS: [
        {
          title: "Plataforma Universal Cliente — Banco Estado",
          summary: "Aplicativo bancario crítico para atención de clientes. Mantenimiento evolutivo y desarrollo de nuevos requerimientos sobre stack .NET legacy.",
          tags: ["C#", "ASP.NET", "SQL Server"],
          accent: "from-indigo-500/20 to-violet-500/10",
        },
        {
          title: "Sistema de Gestión de Trámites",
          summary: "Aplicación web LAMP para digitalizar el ciclo completo de trámites internos: bandejas, derivaciones, firmas y trazabilidad.",
          tags: ["Laravel", "PHP", "MySQL", "JS"],
          accent: "from-violet-500/20 to-fuchsia-500/10",
        },
        {
          title: "ETLs Ecommerce → CRM/ERP",
          summary: "Procesos de extracción y transformación que sincronizan catálogos, clientes y órdenes desde tiendas online hacia SuiteCRM y ERP.",
          tags: ["PHP", "PL/SQL", "ETL", "SuiteCRM"],
          accent: "from-cyan-500/20 to-indigo-500/10",
        },
        {
          title: "Indicadores Gerenciales & Reportería",
          summary: "Dashboards y reportes Jasper para gerencia: KPIs financieros, operativos y comerciales con consultas optimizadas en PL/SQL.",
          tags: ["Jasper", "PL/SQL", "Reporting"],
          accent: "from-emerald-500/20 to-cyan-500/10",
        },
        {
          title: "Procesos Logísticos LATAM — Falabella",
          summary: "PL/SQL para bodegas y centros de distribución de Falabella, Tottus y Sodimac operando en Chile, Colombia, Argentina y Perú.",
          tags: ["Oracle", "PL/SQL", "Logística"],
          accent: "from-amber-500/20 to-rose-500/10",
        },
        {
          title: "Sistema de Ventas Online — Movistar",
          summary: "Front end y QA de plataforma de ventas online en arquitectura J2EE con servicios XML sobre BEA-Oracle.",
          tags: ["J2EE", "XML WS", "Oracle"],
          accent: "from-rose-500/20 to-indigo-500/10",
        },
      ],
    };
  }, []);

  useEffect(() => {
    document.title = "Eduardo Mery — Ingeniero en Informática & Desarrollador Full Stack";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Portfolio de Eduardo Maximiliano Mery Rojas. Ingeniero en Informática, Analista de Datos y Desarrollador Full Stack con +15 años de experiencia.");
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [NAV]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-primary via-violet-500 to-fuchsia-500"
      />

      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Nav */}
      <header className="fixed left-1/2 top-4 z-40 -translate-x-1/2">
        <nav className="flex items-center gap-1 rounded-full border border-border/60 bg-background/70 px-2 py-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors md:text-sm ${
                active === n.id
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === n.id && (
                <motion.span
                  layoutId="navpill"
                  className="absolute inset-0 -z-10 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {n.label}
            </a>
          ))}
          <div className="ml-1 flex items-center gap-1 border-l border-border/60 pl-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center scroll-mt-24"
      >
        <div className="mx-auto max-w-5xl px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Disponible para nuevos proyectos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
          >
            Eduardo{" "}
            <span className="bg-gradient-to-br from-primary via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Mery
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl"
          >
            Ingeniero en Informática · Analista de Datos · Desarrollador Full Stack con +15 años construyendo plataformas web, ETLs y sistemas críticos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild size="lg" className="group rounded-full">
              <a href="#projects">
                Ver proyectos
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <a href="#contact">Contactarme</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 flex items-center justify-center gap-6 text-muted-foreground"
          >
            <a
              href="https://www.linkedin.com/in/maximilianomery"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:maximiliano.mery@gmail.com"
              className="transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:+5493425179421"
              className="transition-colors hover:text-foreground"
              aria-label="Teléfono"
            >
              <Phone className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="Sobre mí" title="Construyendo software con propósito.">
        <div className="grid gap-10 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-5 text-lg leading-relaxed text-muted-foreground"
          >
            <p
              dangerouslySetInnerHTML={{
                __html: `Soy experto en arquitectura <span class="text-foreground font-medium">LAMP (Linux, Apache, MySQL, PHP)</span> con vasta experiencia en automatización, desarrollo de ETL, sistemas CRM y ERP, ecommerce y aplicaciones web dinámicas.`,
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: `Sólido conocimiento en <span class="text-foreground font-medium">SQL</span>, administración de bases de datos y desarrollo de procedimientos almacenados. Aplico <span class="text-foreground font-medium">herramientas de inteligencia artificial</span> para optimizar procesos, automatizar tareas y mejorar la calidad del software.`,
              }}
            />
            <p>Destaco mis habilidades blandas: comunicación efectiva, adaptabilidad y trabajo en equipo, lo que me permite colaborar eficientemente en entornos multidisciplinarios.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            <Card className="border-border/60 bg-secondary/30 p-6 backdrop-blur">
              <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-primary" />
                Educación
              </div>
              <div className="font-medium">Ingeniería Informática</div>
              <div className="text-sm text-muted-foreground">
                Universidad Tecnológica de Chile · 2005–2010
              </div>
            </Card>
            <Card className="border-border/60 bg-secondary/30 p-6 backdrop-blur">
              <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Ubicación
              </div>
              <div className="font-medium">Argentina · Chile</div>
              <div className="text-sm text-muted-foreground">
                Trabajo remoto LATAM
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Skills" title="Stack técnico.">
        <div className="grid gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="group h-full overflow-hidden border-border/60 bg-secondary/20 p-6 backdrop-blur transition-all hover:border-primary/40 hover:bg-secondary/40">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    {g.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <Badge
                      key={it}
                      variant="secondary"
                      className="rounded-full border-border/60 bg-background/40 font-normal"
                    >
                      {it}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="Experiencia" title="Trayectoria profesional.">
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />
          <div className="space-y-12">
            {EXPERIENCE.map((e, i) => (
              <motion.div
                key={e.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2" />
                <div className={i % 2 === 1 ? "md:pl-12" : "md:pr-12 md:text-right"}>
                  <Card className="ml-12 border-border/60 bg-secondary/20 p-6 backdrop-blur md:ml-0">
                    <div className="mb-1 flex items-center gap-2 text-xs text-primary md:justify-start">
                      <Briefcase className="h-3.5 w-3.5" />
                      {e.period}
                    </div>
                    <h3 className="font-display text-xl font-semibold">
                      {e.role}
                    </h3>
                    <div className="mb-3 text-sm text-muted-foreground">
                      {e.company} · {e.location}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {e.description}
                    </p>
                    <div className={`mt-4 flex flex-wrap gap-1.5 ${i % 2 === 1 ? "" : "md:justify-end"}`}>
                      {e.stack.map((s) => (
                        <Badge
                          key={s}
                          variant="outline"
                          className="rounded-full border-border/60 text-xs font-normal"
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="Proyectos" title="Trabajo destacado.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <Card className="group relative h-full overflow-hidden border-border/60 bg-secondary/20 p-6 backdrop-blur transition-colors hover:border-primary/40">
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 transition-opacity group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-display mb-2 text-lg font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-full border-border/60 text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Contacto" title="Hablemos.">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden border-border/60 bg-gradient-to-br from-secondary/40 to-secondary/10 p-8 md:p-12 backdrop-blur">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="font-display text-3xl font-semibold md:text-4xl">
                  ¿Tienes un proyecto en mente?
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Estoy disponible para colaboraciones, consultoría y nuevos desafíos full stack. Respondo en menos de 24 horas.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-6 rounded-full"
                >
                  <a href="mailto:maximiliano.mery@gmail.com">
                    Enviar email
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="space-y-3">
                <ContactRow
                  icon={Mail}
                  label="Email"
                  value="maximiliano.mery@gmail.com"
                  href="mailto:maximiliano.mery@gmail.com"
                />
                <ContactRow
                  icon={Phone}
                  label="Argentina"
                  value="+54 9 342 517-9421"
                  href="tel:+5493425179421"
                />
                <ContactRow
                  icon={Phone}
                  label="Chile"
                  value="+56 9 2920 8801"
                  href="tel:+56929208801"
                />
                <ContactRow
                  icon={Linkedin}
                  label="LinkedIn"
                  value="/in/maximilianomery"
                  href="https://www.linkedin.com/in/maximilianomery"
                />
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      <footer className="border-t border-border/60 py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Eduardo Maximiliano Mery Rojas.{" "}
        Construido con React + Tailwind.
      </footer>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-border/60 bg-background/40 p-4 transition-colors hover:border-primary/40 hover:bg-background/70"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
    </a>
  );
}
