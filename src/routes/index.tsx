import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DesktopOverlay } from "@/components/DesktopOverlay";
import { ChevronDown, Smartphone, Gift, CheckCircle2, Sparkles, Download, Gamepad2, Repeat, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Free Victoria's Secret Gift Card — Claim $100 or $750" },
      { name: "description", content: "Get a free $100 or $750 Victoria's Secret gift card by completing a few simple sponsored deals. Mobile-optimized rewards offer." },
    ],
  }),
});

const steps = [
  { n: 1, t: "Sign up with your email" },
  { n: 2, t: "Choose your reward ($100 = 5 deals / $750 = 20 deals)" },
  { n: 3, t: "Complete sponsored deals (~15 mins each)" },
  { n: 4, t: "Submit your ID for verification" },
  { n: 5, t: "Receive your gift card within 6–10 days" },
];

const dealTypes = [
  { icon: Download, label: "Free App Download" },
  { icon: Sparkles, label: "Free Trial Sign-Up" },
  { icon: Gamepad2, label: "Mobile Game Install" },
  { icon: Repeat, label: "Subscription Service" },
];

const faqs = [
  { q: "How many deals do I have to complete to get my gift card?", a: "It depends on the reward you choose. $100 = 5 deals, $750 = 20 deals." },
  { q: "How long does each deal take?", a: "Most deals take around 10–15 minutes to complete. Some may take up to 60 days, but the majority are quick." },
  { q: "Are the deals free?", a: "Many deals are free (app downloads, free trials), but some may require a small purchase for a product or service." },
  { q: "How long until I receive my reward?", a: "Once you complete your deals and verify your ID, most customers receive their reward within 6–10 days." },
  { q: "Do I have to do the deals all at once?", a: "Nope! You can complete them at your own pace." },
  { q: "Is this legit?", a: "Yes! Last year over $1.8 million in rewards were given out to customers just like you." },
  { q: "Can I pick which deals I want to do?", a: "Yes! You browse available deals and choose the ones that interest you." },
  { q: "What happens after I complete my deals?", a: "You'll go through a quick ID verification process, then our team delivers your reward within 1–3 business days after verification." },
];

function PinkButton({ children, large = false, variant = "solid" }: { children: React.ReactNode; large?: boolean; variant?: "solid" | "outline" }) {
  const base = "w-full rounded-full font-bold tracking-tight transition-all active:scale-[0.97] hover:shadow-[0_12px_40px_-10px_oklch(0.65_0.25_350/0.6)]";
  const size = large ? "py-5 text-lg" : "py-4 text-base";
  const style = variant === "solid"
    ? "text-white bg-[image:var(--gradient-pink)] shadow-[var(--shadow-pink)]"
    : "border-2 border-[oklch(0.65_0.25_350)] text-[oklch(0.55_0.25_350)] bg-white";
  return <button className={`${base} ${size} ${style}`}>{children}</button>;
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-pink-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 py-4 text-left"
      >
        <span className="font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-[oklch(0.6_0.25_350)] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-foreground/70 leading-relaxed">{a}</p>}
    </div>
  );
}

function Index() {
  return (
    <>
      <DesktopOverlay />
      <main className="mx-auto max-w-md min-h-screen bg-white text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-12 pb-10 bg-gradient-to-br from-pink-100 via-pink-50 to-white">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[oklch(0.7_0.22_350)]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[oklch(0.8_0.18_340)]/30 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white mb-4">
              <Sparkles className="h-3 w-3" /> LIMITED TIME OFFER
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight">
              Get a <span className="bg-gradient-to-r from-[oklch(0.6_0.27_355)] to-[oklch(0.7_0.22_340)] bg-clip-text text-transparent">FREE</span> Victoria's Secret Gift Card 💕
            </h1>
            <p className="mt-4 text-base text-foreground/70 leading-relaxed">
              Choose your reward — <b>$100</b> or <b>$750</b> — just complete a few simple deals.
            </p>
            <div className="mt-6 space-y-3">
              <PinkButton large>Claim $100 Reward 🎁</PinkButton>
              <PinkButton large variant="outline">Claim $750 Reward 💎</PinkButton>
            </div>
            <p className="mt-4 text-[10px] text-foreground/50 text-center">
              Offer not sponsored or endorsed by Victoria's Secret.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-12">
          <h2 className="text-3xl font-extrabold tracking-tight">Here's How It Works ✨</h2>
          <ol className="mt-6 space-y-4">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4 items-start">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[image:var(--gradient-pink)] text-white font-bold shadow-[var(--shadow-pink)]">
                  {s.n}
                </div>
                <p className="pt-1.5 text-foreground/80 leading-snug">{s.t}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Deals */}
        <section className="px-6 py-12 bg-pink-50/50">
          <h2 className="text-3xl font-extrabold tracking-tight">What Are the Deals?</h2>
          <p className="mt-3 text-foreground/70 leading-relaxed">
            Deals are sponsored offers from our partners. They include free app downloads, free trials, mobile games, and subscription services. Some deals are 100% free, while others may require a small payment. You get to choose!
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {dealTypes.map((d) => (
              <div key={d.label} className="rounded-2xl bg-white p-4 border border-pink-100 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-pink)] text-white mb-3">
                  <d.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold leading-tight">{d.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reward options */}
        <section className="px-6 py-12">
          <h2 className="text-3xl font-extrabold tracking-tight">Pick Your Reward 💝</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-white border-2 border-pink-200 p-6 shadow-[var(--shadow-pink)]">
              <Gift className="h-8 w-8 text-[oklch(0.6_0.25_350)]" />
              <p className="mt-3 text-4xl font-extrabold">$100</p>
              <p className="text-foreground/60">Gift Card • Complete 5 deals</p>
              <div className="mt-4"><PinkButton>Claim This Reward</PinkButton></div>
            </div>
            <div className="rounded-3xl bg-black text-white p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-3 right-3 rounded-full bg-[image:var(--gradient-pink)] px-2.5 py-1 text-[10px] font-bold">MOST POPULAR</div>
              <Star className="h-8 w-8 text-[oklch(0.75_0.22_350)]" />
              <p className="mt-3 text-4xl font-extrabold">$750</p>
              <p className="text-white/60">Gift Card • Complete 20 deals</p>
              <div className="mt-4"><PinkButton>Claim This Reward</PinkButton></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-12 bg-pink-50/50">
          <h2 className="text-3xl font-extrabold tracking-tight">Got Questions? We Got Answers 💭</h2>
          <div className="mt-4">
            {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="px-6 py-14 bg-gradient-to-br from-black via-[oklch(0.2_0.05_350)] to-black text-white text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Ready to claim your reward? 💕</h2>
          <div className="mt-6 space-y-3">
            <PinkButton large>Get $100 Gift Card</PinkButton>
            <PinkButton large variant="outline">Get $750 Gift Card</PinkButton>
          </div>
          <p className="mt-5 text-xs text-white/50">Limited spots available. Must be 18+.</p>
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/40">
            <Smartphone className="h-3 w-3" /> Best on mobile
          </div>
        </section>
      </main>
    </>
  );
}
