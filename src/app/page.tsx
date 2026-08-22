import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Type,
  ImageIcon,
  Braces,
  ArrowLeftRight,
  Wand2,
  Calculator,
  Zap,
  ShieldCheck,
  Infinity as InfinityIcon,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import TestKeno from "@/components/home/testKeno";

// ---------------------------------------------------------------------------
// SEO metadata — edit SITE_URL once you have the real domain.
// ---------------------------------------------------------------------------
const SITE_URL = "https://utilitystacks.com";
const SITE_NAME = "UtilityStacks";
const SITE_DESCRIPTION =
  "Free online tools for text, images, code, and everyday conversions. No sign-up, no install — open a drawer and get to work.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Every tool, one toolbox`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "online tools",
    "free web tools",
    "text tools",
    "image tools",
    "developer tools",
    "unit converter",
    "JSON formatter",
    "QR code generator",
    "password generator",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Every tool, one toolbox`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Every tool, one toolbox`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// Content — swap in real tool routes as you build them out.
// ---------------------------------------------------------------------------
const STACKS = [
  {
    id: "text",
    label: "Text",
    icon: Type,
    count: 9,
    blurb: "Counters, converters, formatters",
    tools: ["Word Counter", "Case Converter", "Markdown Preview"],
  },
  {
    id: "image",
    label: "Image",
    icon: ImageIcon,
    count: 6,
    blurb: "Compress, resize, convert",
    tools: ["Image Compressor", "Background Remover", "Format Converter"],
  },
  {
    id: "developer",
    label: "Developer",
    icon: Braces,
    count: 11,
    blurb: "JSON, Base64, regex, diffs",
    tools: ["JSON Formatter", "Base64 Encode/Decode", "Regex Tester"],
  },
  {
    id: "convert",
    label: "Convert",
    icon: ArrowLeftRight,
    count: 8,
    blurb: "Units, currency, time zones",
    tools: ["Unit Converter", "Currency Converter", "Time Zone Converter"],
  },
  {
    id: "generate",
    label: "Generate",
    icon: Wand2,
    count: 7,
    blurb: "QR codes, passwords, placeholders",
    tools: ["QR Code Generator", "Password Generator", "Lorem Ipsum"],
  },
  {
    id: "calculate",
    label: "Calculate",
    icon: Calculator,
    count: 5,
    blurb: "Percentages, loans, dates",
    tools: ["Percentage Calculator", "Loan Calculator", "Date Calculator"],
  },
] as const;

const POPULAR_TOOLS = [
  { name: "JSON Formatter", stack: "Developer", href: "/tools/json-formatter" },
  { name: "QR Code Generator", stack: "Generate", href: "/tools/qr-code-generator" },
  { name: "Word Counter", stack: "Text", href: "/tools/word-counter" },
  { name: "Image Compressor", stack: "Image", href: "/tools/image-compressor" },
  { name: "Password Generator", stack: "Generate", href: "/tools/password-generator" },
  { name: "Unit Converter", stack: "Convert", href: "/tools/unit-converter" },
  { name: "Base64 Encode/Decode", stack: "Developer", href: "/tools/base64" },
  { name: "Percentage Calculator", stack: "Calculate", href: "/tools/percentage-calculator" },
];

const TOTAL_TOOLS = STACKS.reduce((sum, s) => sum + s.count, 0);

// ---------------------------------------------------------------------------
// JSON-LD structured data
// ---------------------------------------------------------------------------
function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}#tools`,
        itemListElement: POPULAR_TOOLS.map((tool, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: tool.name,
          url: `${SITE_URL}${tool.href}`,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#ECEDEF] text-[#17181C] antialiased">
      <StructuredData />

      {/* Blueprint grid backdrop, contained to the hero */}
      <div className="relative overflow-hidden border-b border-[#D3D5D9]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#17181C 1px, transparent 1px), linear-gradient(90deg, #17181C 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#17181C] font-mono text-sm font-bold text-[#F5B700]">
              U
            </span>
            <span className="font-mono text-sm font-semibold tracking-tight">
              utility<span className="text-[#2C4A7C]">stacks</span>
            </span>
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-8 text-sm font-medium sm:flex">
            <Link href="/tools" className="hover:text-[#2C4A7C]">
              All tools
            </Link>
            <Link href="/#stacks" className="hover:text-[#2C4A7C]">
              Stacks
            </Link>
            <Link href="/about" className="hover:text-[#2C4A7C]">
              About
            </Link>
          </nav>
        </header>

        <main>
          <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pb-28 sm:pt-16">
            <Badge
              variant="outline"
              className="rounded-full border-[#17181C]/15 bg-white px-3 py-1 font-mono text-xs uppercase tracking-widest text-[#2C4A7C]"
            >
              {TOTAL_TOOLS}+ tools, zero installs
            </Badge>

            <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
              Every tool.
              <br />
              One toolbox.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#17181C]/70">
              UtilityStacks keeps every everyday tool you reach for — text,
              images, code, conversions — in one place. Pick a drawer, run
              the tool, get back to work. No sign-up, no downloads.
            </p>

            {/* Search */}
            <form action="/search" method="GET" className="mt-10 max-w-xl">
              <label htmlFor="tool-search" className="sr-only">
                Search tools
              </label>
              <div className="flex items-center gap-2 rounded-md border border-[#17181C]/20 bg-white p-2 shadow-[3px_3px_0_0_#17181C]">
                <Search className="ml-2 h-5 w-5 shrink-0 text-[#17181C]/40" aria-hidden="true" />
                <Input
                  id="tool-search"
                  name="q"
                  type="search"
                  placeholder="Search for a tool — “json formatter”, “resize image”…"
                  className="border-0 bg-transparent shadow-none focus-visible:ring-0"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="shrink-0 rounded-sm bg-[#17181C] font-mono text-xs font-semibold text-[#F5B700] hover:bg-[#2C4A7C]"
                >
                  Go
                </Button>
              </div>
            </form>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#17181C]/60">
              <span className="inline-flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-[#F5B700]" aria-hidden="true" /> Runs instantly in-browser
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#1F7A6C]" aria-hidden="true" /> Files never leave your device
              </span>
              <span className="inline-flex items-center gap-1.5">
                <InfinityIcon className="h-3.5 w-3.5 text-[#2C4A7C]" aria-hidden="true" /> Free, unlimited use
              </span>
            </div>
          </section>
        </main>
      </div>

      {/* Stacks — the signature "toolbox drawer" grid */}
      <section id="stacks" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#2C4A7C]">
              Browse by stack
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Six drawers. Every tool has a home.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STACKS.map((stack) => {
            const Icon = stack.icon;
            return (
              <Link key={stack.id} href={`/stacks/${stack.id}`} className="group block">
                <Card className="relative flex h-full flex-col justify-between overflow-hidden rounded-md border-[#17181C]/15 bg-white p-6 shadow-none transition-all group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0_0_#17181C]">
                  {/* rivets, referencing a drawer's corner screws */}
                  <span className="absolute left-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-[#17181C]/15" aria-hidden="true" />
                  <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-[#17181C]/15" aria-hidden="true" />

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#ECEDEF] text-[#17181C] transition-colors group-hover:bg-[#F5B700]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-xs text-[#17181C]/40">
                        {String(stack.count).padStart(2, "0")} tools
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold tracking-tight">{stack.label}</h3>
                    <p className="mt-1 text-sm text-[#17181C]/60">{stack.blurb}</p>
                  </div>

                  <Separator className="my-4 border-t border-dashed border-[#17181C]/15 bg-transparent" />

                  <ul className="space-y-1 text-sm text-[#17181C]/70">
                    {stack.tools.map((tool) => (
                      <li key={tool} className="flex items-center gap-2">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-[#17181C]/30" />
                        {tool}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#2C4A7C]">
                    Open drawer
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular tools */}
      <section className="border-y border-[#D3D5D9] bg-white/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#2C4A7C]">
            Reached for most
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Popular tools</p>

          <div className="mt-8 grid grid-cols-1 divide-y divide-[#D3D5D9] border-t border-[#D3D5D9] sm:grid-cols-2">
            {POPULAR_TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex items-center justify-between gap-4 py-4 pr-2 sm:odd:pr-8 sm:even:pl-8"
              >
                <span className="flex items-center gap-3">
                  <span>
                    <span className="block text-base font-semibold group-hover:text-[#2C4A7C]">
                      {tool.name}
                    </span>
                    <Badge
                      variant="secondary"
                      className="mt-1 rounded-sm bg-[#ECEDEF] font-mono text-[10px] uppercase tracking-wide text-[#17181C]/50"
                    >
                      {tool.stack}
                    </Badge>
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-[#17181C]/30 transition-transform group-hover:translate-x-1 group-hover:text-[#2C4A7C]" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>

        
      </section>

      {/* Why UtilityStacks */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <Zap className="h-6 w-6 text-[#F5B700]" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold tracking-tight">Instant, every time</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#17181C]/60">
              Every tool loads and runs in the browser. No queue, no
              processing wait, no account to create first.
            </p>
          </div>
          <div>
            <ShieldCheck className="h-6 w-6 text-[#1F7A6C]" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold tracking-tight">Your files stay yours</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#17181C]/60">
              Most tools process data locally on your device — nothing gets
              uploaded to run a word count or format some JSON.
            </p>
          </div>
          <div>
            <InfinityIcon className="h-6 w-6 text-[#2C4A7C]" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold tracking-tight">Free, no limits</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#17181C]/60">
              Use any tool as many times as you need. UtilityStacks is
              supported by ads, not paywalls.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#D3D5D9] bg-[#17181C] py-12 text-[#ECEDEF]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#F5B700] font-mono text-xs font-bold text-[#17181C]">
              U
            </span>
            <span className="font-mono text-sm">
              utility<span className="text-[#F5B700]">stacks</span>
            </span>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#ECEDEF]/70">
            <Link href="/tools" className="hover:text-white">
              All tools
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </nav>
          <p className="font-mono text-xs text-[#ECEDEF]/40">
            © {new Date().getFullYear()} UtilityStacks
          </p>
        </div>
      </footer>
    </div>
  );
}