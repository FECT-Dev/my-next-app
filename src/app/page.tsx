import Link from "next/link";
import type { ReactNode } from "react";

type Route = {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
  featured?: boolean;
};

const iconClass = "h-6 w-6";

const routes: Route[] = [
  {
    href: "/dashboard",
    title: "Dashboard",
    description: "Everything at a glance: live readings, summaries and status.",
    featured: true,
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 13h6V4H4v9zm0 7h6v-3H4v3zm10 0h6v-9h-6v9zm0-16v3h6V4h-6z" />
      </svg>
    ),
  },
  {
    href: "/aq",
    title: "Air quality",
    description: "Current air quality readings across monitoring stations.",
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h11a3 3 0 100-3M3 12h15a3 3 0 110 3M3 16h8a3 3 0 110 3" />
      </svg>
    ),
  },
  {
    href: "/aq-trends",
    title: "AQ trends",
    description: "See how air quality has changed over time.",
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M21 7v6m0-6h-6" />
      </svg>
    ),
  },
  {
    href: "/aku_digana",
    title: "Aku Digana",
    description: "Readings from the Aku Digana station.",
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    href: "/aku_digana_pm2.5",
    title: "Aku Digana PM2.5",
    description: "Fine particle (PM2.5) levels at Aku Digana.",
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="8" cy="9" r="2.5" />
        <circle cx="16" cy="7" r="1.5" />
        <circle cx="15" cy="15" r="3" />
        <circle cx="6.5" cy="17" r="1.2" />
      </svg>
    ),
  },
  {
    href: "/scraped_Aq_Table",
    title: "Scraped AQ table",
    description: "The raw scraped data in a sortable-style table view.",
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18v14H3V5zm0 5h18M9 5v14" />
      </svg>
    ),
  },
];

// US EPA AQI categories, used as the page's signature colour band.
const aqiBand = [
  { label: "Good", color: "bg-green-500" },
  { label: "Moderate", color: "bg-yellow-400" },
  { label: "Unhealthy for sensitive groups", color: "bg-orange-500" },
  { label: "Unhealthy", color: "bg-red-500" },
  { label: "Very unhealthy", color: "bg-purple-600" },
  { label: "Hazardous", color: "bg-rose-900" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-100 via-slate-50 to-white text-slate-900">
      {/* soft haze behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[60rem] -translate-x-1/2 rounded-full bg-sky-200/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
        {/* Hero */}
        <header className="max-w-3xl">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Sri Lanka air quality, <span className="text-sky-700">in one place.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Browse live readings, long-term trends and the raw scraped data
            behind them.
          </p>

          {/* AQI colour band */}
          <div className="mt-10 max-w-xl" role="img" aria-label="Air quality index scale from good to hazardous">
            <div className="flex h-3 overflow-hidden rounded-full shadow-inner ring-1 ring-black/5">
              {aqiBand.map((b) => (
                <div key={b.label} title={b.label} className={`flex-1 ${b.color}`} />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-xs font-medium text-slate-500">
              <span>Good</span>
              <span>Hazardous</span>
            </div>
          </div>
        </header>

        {/* Route links */}
        <nav aria-label="Pages" className="mt-16">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((r) => (
              <li key={r.href} className={r.featured ? "sm:col-span-2 lg:col-span-2" : ""}>
                <Link
                  href={r.href}
                  className={`group flex h-full flex-col justify-between rounded-3xl p-7 outline-none transition duration-200 focus-visible:ring-4 focus-visible:ring-sky-400/60 ${
                    r.featured
                      ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20 hover:bg-slate-800"
                      : "bg-white/80 ring-1 ring-slate-200 backdrop-blur hover:-translate-y-1 hover:shadow-lg hover:ring-sky-300"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      r.featured ? "bg-white/10 text-sky-300" : "bg-sky-50 text-sky-700"
                    }`}
                  >
                    {r.icon}
                  </span>

                  <span className="mt-10 block">
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-xl font-semibold">{r.title}</span>
                      <svg
                        className={`h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1 ${
                          r.featured ? "text-sky-300" : "text-slate-400 group-hover:text-sky-600"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                      </svg>
                    </span>
                    <span
                      className={`mt-2 block text-sm leading-relaxed ${
                        r.featured ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {r.description}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}