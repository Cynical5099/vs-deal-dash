import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DesktopOverlay } from "@/components/DesktopOverlay";
import { ChevronDown, Gift, Sparkles, Download, Gamepad2, Repeat, Star, TrendingUp } from "lucide-react";

// ============================================================
//  👇  PASTE YOUR OFFER LINKS HERE  👇
//  Each reward tier has its own link.
// ============================================================
const LINK_100 = "https://example.com/your-100-offer-link";
const LINK_750 = "https://example.com/your-750-offer-link";
// ============================================================

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Victoria's Secret Gift Card · Claim $100 or $750" },
      { name: "description", content: "Choose a $100 or $750 Victoria's Secret gift card by completing a few simple sponsored deals." },
    ],
  }),
});

const steps = [
  { n: 1, t: "Sign up with your email" },
  { n: 2, t: "Choose your reward ($100 = 5 deals / $750 = 20 deals)" },
  { n: 3, t: "Complete sponsored deals (~15 mins each)" },
  { n: 4, t: "Submit your ID for verification" },
  { n: 5, t: "Receive your gift card within 6 to 10 days" },
];

const dealTypes = [
  { icon: Download, label: "App Download" },
  { icon: Sparkles, label: "Trial Sign-Up" },
  { icon: Gamepad2, label: "Mobile Game" },
  { icon: Repeat, label: "Subscription" },
];

const faqs = [
  { q: "How many deals do I have to complete?", a: "It depends on the reward you choose. $100 = 5 deals, $750 = 20 deals." },
  { q: "How long does each deal take?", a: "Most deals take around 10 to 15 minutes to complete. Some may take up to 60 days, but the majority are quick." },
  { q: "Are the deals paid?", a: "Many deals are no-cost (app downloads, trials), but some may require a small purchase for a product or service." },
  { q: "How long until I receive my reward?", a: "Once you complete your deals and verify your ID, most customers receive their reward within 6 to 10 days." },
  { q: "Do I have to do the deals all at once?", a: "Nope! You can complete them at your own pace." },
  { q: "Is this legit?", a: "Yes! Last year over $1.8 million in rewards were given out to customers just like you." },
  { q: "Can I pick which deals I want to do?", a: "Yes! You browse available deals and choose the ones that interest you." },
  { q: "What happens after I complete my deals?", a: "You'll go through a quick ID verification process, then our team delivers your reward within 1 to 3 business days after verification." },
];

function CtaButton({ children, href, variant = "solid" }: { children: React.ReactNode; href: string; variant?: "solid" | "outline" }) {
  const base = "block w-full text-center rounded-full font-bold tracking-tight py-4 text-base transition-all active:scale-[0.97]";
  const style = variant === "solid"
    ? "text-white bg-[image:var(--gradient-pink)] shadow-[var(--shadow-pink)]"
    : "border-2 border-[oklch(0.65_0.25_350)] text-[oklch(0.55_0.25_350)] bg-white";
  return <a href={href} className={`${base} ${style}`}>{children}</a>;
}

function FunFact() {
  return (
    <div className="rounded-2xl bg-white border border-pink-200 p-4 shadow-sm flex gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[image:var(--gradient-pink)] text-white">
        <TrendingUp className="h-4 w-4" />
      </div>
      <p className="text-[13px] leading-snug text-foreground/80">
        <b className="text-foreground">Go for higher rewards for the most value!</b> Customers who received a $500 reward only spent around $15, while those who received $1,000 spent about $49.
      </p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-pink-100">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-3 py-4 text-left">
        <span className="font-semibold text-foreground text-[15px]">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-[oklch(0.6_0.25_350)] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-foreground/70 leading-relaxed text-sm">{a}</p>}
    </div>
  );
}

function Index() {
  return (
    <>
      <DesktopOverlay />
      <main className="mx-auto max-w-md min-h-screen bg-white text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pt-10 pb-8 bg-gradient-to-br from-pink-100 via-pink-50 to-white">
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[oklch(0.7_0.22_350)]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[oklch(0.8_0.18_340)]/30 blur-3xl" />
          <div className="relative">
            <h1 className="text-[2rem] font-extrabold leading-[1.1] tracking-tight">
              Get a <span className="bg-gradient-to-r from-[oklch(0.6_0.27_355)] to-[oklch(0.7_0.22_340)] bg-clip-text text-transparent">Victoria's Secret</span> Gift Card 💕
            </h1>
            <p className="mt-3 text-[15px] text-foreground/70 leading-relaxed">
              Choose your reward of <b>$100</b> or <b>$750</b>. Just complete a few simple deals.
            </p>
            <div className="mt-5 space-y-3">
              <CtaButton>Claim $100 Reward 🎁</CtaButton>
              <CtaButton variant="outline">Claim $750 Reward 💎</CtaButton>
            </div>
            <div className="mt-5"><FunFact /></div>
            <p className="mt-3 text-[10px] text-foreground/50 text-center">
              Offer not sponsored or endorsed by Victoria's Secret.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="px-5 py-10">
          <h2 className="text-2xl font-extrabold tracking-tight">Here's How It Works ✨</h2>
          <ol className="mt-5 space-y-3">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-3 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[image:var(--gradient-pink)] text-white font-bold text-sm shadow-[var(--shadow-pink)]">
                  {s.n}
                </div>
                <p className="pt-1 text-[15px] text-foreground/80 leading-snug">{s.t}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Deals */}
        <section className="px-5 py-10 bg-pink-50/60">
          <h2 className="text-2xl font-extrabold tracking-tight">What Are the Deals?</h2>
          <p className="mt-2 text-[14px] text-foreground/70 leading-relaxed">
            Sponsored offers from our partners like app downloads, trials, mobile games, and subscriptions. Some have no cost, others may require a small payment. You choose.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {dealTypes.map((d) => (
              <div key={d.label} className="rounded-2xl bg-white p-4 border border-pink-100 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[image:var(--gradient-pink)] text-white mb-2">
                  <d.icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-semibold leading-tight">{d.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reward options */}
        <section className="px-5 py-10">
          <h2 className="text-2xl font-extrabold tracking-tight">Pick Your Reward 💝</h2>
          <div className="mt-5 space-y-4">
            <div className="rounded-3xl bg-white border-2 border-pink-200 p-5 shadow-[var(--shadow-pink)]">
              <Gift className="h-7 w-7 text-[oklch(0.6_0.25_350)]" />
              <p className="mt-2 text-3xl font-extrabold">$100</p>
              <p className="text-sm text-foreground/60">Gift Card • Complete 5 deals</p>
              <div className="mt-4"><CtaButton>Claim $100</CtaButton></div>
            </div>
            <div className="rounded-3xl bg-black text-white p-5 shadow-xl relative overflow-hidden">
              <div className="absolute top-3 right-3 rounded-full bg-[image:var(--gradient-pink)] px-2.5 py-1 text-[10px] font-bold">BEST VALUE</div>
              <Star className="h-7 w-7 text-[oklch(0.75_0.22_350)]" />
              <p className="mt-2 text-3xl font-extrabold">$750</p>
              <p className="text-sm text-white/60">Gift Card • Complete 20 deals</p>
              <div className="mt-4"><CtaButton>Claim $750</CtaButton></div>
            </div>
            <FunFact />
          </div>
        </section>

        {/* FAQ last section */}
        <section className="px-5 py-10 bg-pink-50/60">
          <h2 className="text-2xl font-extrabold tracking-tight">Got Questions? 💭</h2>
          <div className="mt-3">
            {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
          </div>
          <p className="mt-6 text-[11px] text-foreground/50 text-center">Must be 18+.</p>
        </section>
      </main>
    </>
  );
}
