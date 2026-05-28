import { useState } from "react";

const NAV_LINKS = ["About", "Mission", "Services", "Pricing", "Contact"];

const SERVICES = [
  {
    icon: "♻️",
    title: "Home Pickup",
    desc: "Schedule recurring curbside recycling pickups tailored to your household's waste output.",
  },
  {
    icon: "📦",
    title: "Smart Sorting",
    desc: "We sort and process mixed recyclables so you don't have to — just toss it all in one bin.",
  },
  {
    icon: "📊",
    title: "Impact Reports",
    desc: "Get monthly reports showing exactly how much waste you've diverted from landfills.",
  },
  {
    icon: "🏫",
    title: "Community Drives",
    desc: "Join neighborhood collection events and large-item drop-off days near you.",
  },
  {
    icon: "🌿",
    title: "Composting",
    desc: "Add organic composting to your plan and turn food scraps into garden gold.",
  },
  {
    icon: "📱",
    title: "GreenCycle App",
    desc: "Track pickups, schedule changes, and see your cumulative environmental impact live.",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "$9",
    period: "/mo",
    features: ["Bi-weekly pickup", "Basic sorting", "Email reports"],
    highlight: false,
  },
  {
    name: "Family",
    price: "$19",
    period: "/mo",
    features: ["Weekly pickup", "Smart sorting", "Monthly impact report", "App access"],
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Community",
    price: "$39",
    period: "/mo",
    features: ["2× weekly pickup", "Composting add-on", "Priority support", "Full analytics", "Community drive access"],
    highlight: false,
  },
];

const STATS = [
  { value: "10K+", label: "Tons recycled" },
  { value: "40K+", label: "Families served" },
  { value: "98%", label: "Satisfaction rate" },
  { value: "20K", label: "Trees protected" },
];

export default function GreenCycleWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (formState.name && formState.email && formState.message) {
      setSent(true);
    }
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#FAFAF7", color: "#1a1a18", minHeight: "100vh" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; }
        .gc-serif { font-family: 'Playfair Display', Georgia, serif; }
        .gc-sans { font-family: 'DM Sans', sans-serif; }
        .nav-link { color: #3a3a35; text-decoration: none; font-size: 15px; font-weight: 400; letter-spacing: 0.01em; transition: color 0.2s; }
        .nav-link:hover { color: #3B6D11; }
        .btn-primary { background: #3B6D11; color: #EAF3DE; border: none; padding: 14px 32px; border-radius: 100px; font-size: 15px; font-weight: 500; cursor: pointer; transition: background 0.2s, transform 0.15s; letter-spacing: 0.02em; }
        .btn-primary:hover { background: #27500A; transform: translateY(-1px); }
        .btn-outline { background: transparent; color: #3B6D11; border: 1.5px solid #3B6D11; padding: 13px 32px; border-radius: 100px; font-size: 15px; font-weight: 500; cursor: pointer; transition: all 0.2s; }
        .btn-outline:hover { background: #EAF3DE; }
        .section-label { font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #639922; font-family: 'DM Sans', sans-serif; font-weight: 500; }
        .service-card { background: #fff; border: 1px solid #e4e8da; border-radius: 20px; padding: 32px 28px; transition: box-shadow 0.2s, transform 0.2s; }
        .service-card:hover { box-shadow: 0 8px 32px rgba(59,109,17,0.10); transform: translateY(-3px); }
        .plan-card { background: #fff; border: 1.5px solid #e4e8da; border-radius: 24px; padding: 36px 32px; flex: 1; min-width: 220px; transition: box-shadow 0.2s; }
        .plan-card.featured { border-color: #639922; box-shadow: 0 4px 24px rgba(99,153,34,0.13); }
        input, textarea { width: 100%; background: #fff; border: 1px solid #d4d9c9; border-radius: 12px; padding: 14px 18px; font-size: 15px; font-family: 'DM Sans', sans-serif; color: #1a1a18; outline: none; transition: border-color 0.2s; resize: vertical; }
        input:focus, textarea:focus { border-color: #639922; }
        .leaf-dot { display: inline-block; width: 8px; height: 8px; background: #97C459; border-radius: 50%; margin-right: 10px; flex-shrink: 0; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hero-btns { flex-direction: column; align-items: center; }
          .about-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .plans-row { flex-direction: column !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* Navbar */}
      <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 100, background: "rgba(250,250,247,0.92)", backdropFilter: "blur(10px)", borderBottom: "1px solid #e8ead8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 22 }}>🌿</span>
            <span className="gc-serif" style={{ fontSize: 22, fontWeight: 700, color: "#27500A", letterSpacing: "-0.01em" }}>Green Cycle</span>
          </div>
          <div className="desktop-nav" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {NAV_LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
            ))}
            <a href="#contact"><button className="btn-primary" style={{ padding: "10px 24px", fontSize: 14 }}>Get started</button></a>
          </div>
          <button onClick={() => setMenuOpen(o => !o)} style={{ display: "none", background: "none", border: "none", fontSize: 24, cursor: "pointer" }} className="mobile-menu-btn">☰</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 80, background: "linear-gradient(160deg, #f0f5e8 0%, #fafaf7 55%, #e8f2de 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -80, width: 400, height: 400, background: "radial-gradient(circle, #c0dd9730 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: -40, left: -60, width: 300, height: 300, background: "radial-gradient(circle, #9FE1CB22 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", padding: "0 28px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EAF3DE", border: "1px solid #C0DD97", borderRadius: 100, padding: "6px 18px", marginBottom: 36 }}>
            <span style={{ fontSize: 13 }}>🌱</span>
            <span className="gc-sans" style={{ fontSize: 13, color: "#3B6D11", fontWeight: 500 }}>Sustainable recycling for everyone</span>
          </div>
          <h1 className="gc-serif" style={{ fontSize: "clamp(42px, 7vw, 76px)", fontWeight: 700, lineHeight: 1.1, color: "#17340a", letterSpacing: "-0.02em", marginBottom: 24 }}>
            Recycling made<br />
            <span style={{ color: "#639922", fontStyle: "italic" }}>effortless</span> for you
          </h1>
          <p className="gc-sans" style={{ fontSize: 19, color: "#4a4a3f", lineHeight: 1.7, marginBottom: 44, maxWidth: 560, margin: "0 auto 44px" }}>
            Green Cycle picks up, sorts, and processes your household recyclables — so living sustainably fits into your real life.
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <a href="#pricing"><button className="btn-primary">Start recycling today</button></a>
            <a href="#about"><button className="btn-outline">How it works</button></a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: "#27500A", padding: "44px 28px" }}>
        <div className="stats-grid" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "center" }}>
          {STATS.map(s => (
            <div key={s.value}>
              <div className="gc-serif" style={{ fontSize: 38, fontWeight: 700, color: "#C0DD97", lineHeight: 1 }}>{s.value}</div>
              <div className="gc-sans" style={{ fontSize: 14, color: "#9FE1CB", marginTop: 6, letterSpacing: "0.03em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "100px 28px", background: "#FAFAF7" }}>
        <div className="about-grid" style={{ maxWidth: 1050, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <p className="section-label" style={{ marginBottom: 16 }}>About us</p>
            <h2 className="gc-serif" style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#17340a", lineHeight: 1.2, marginBottom: 24 }}>Recycling that works around your life</h2>
            <p className="gc-sans" style={{ fontSize: 17, color: "#4a4a3f", lineHeight: 1.8, marginBottom: 20 }}>
              We started Green Cycle because recycling shouldn't require a PhD or a second car. Our team of environmental scientists and logistics experts built a service that removes every barrier — from confusing sorting rules to missed pickup days.
            </p>
            <p className="gc-sans" style={{ fontSize: 17, color: "#4a4a3f", lineHeight: 1.8 }}>
              Whether you're a family of four or a single apartment dweller, we have a plan that fits your needs and your budget.
            </p>
          </div>
          <div style={{ background: "#EAF3DE", borderRadius: 28, padding: 40 }}>
            {[
              { icon: "🔄", title: "We pick up", desc: "Schedule once, we handle the rest. Reliable pickups every week." },
              { icon: "🔍", title: "We sort", desc: "No sorting required on your end — we process everything at our facility." },
              { icon: "📈", title: "You track impact", desc: "See your personal environmental footprint shrink in real time." },
            ].map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 18, marginBottom: i < 2 ? 28 : 0 }}>
                <div style={{ fontSize: 28, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{step.icon}</div>
                <div>
                  <div className="gc-sans" style={{ fontWeight: 500, fontSize: 16, color: "#17340a", marginBottom: 4 }}>{step.title}</div>
                  <div className="gc-sans" style={{ fontSize: 15, color: "#4a5a38", lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" style={{ padding: "100px 28px", background: "#f2f5ec" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label" style={{ marginBottom: 16 }}>Our mission</p>
          <h2 className="gc-serif" style={{ fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 700, color: "#17340a", lineHeight: 1.25, marginBottom: 28 }}>A planet where nothing goes to waste</h2>
          <p className="gc-sans" style={{ fontSize: 18, color: "#4a4a3f", lineHeight: 1.85, marginBottom: 48 }}>
            We believe the biggest obstacle to recycling isn't willingness — it's friction. Our mission is to make sustainable living the path of least resistance. Every pickup diverts waste from landfills, conserves natural resources, and proves that doing good can also be easy.
          </p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            {["Zero landfill by 2030", "Carbon-neutral logistics", "100% renewable processing"].map(p => (
              <div key={p} style={{ display: "flex", alignItems: "center", background: "#fff", border: "1px solid #C0DD97", borderRadius: 100, padding: "10px 22px" }}>
                <span className="leaf-dot" />
                <span className="gc-sans" style={{ fontSize: 14, color: "#27500A", fontWeight: 500 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "100px 28px", background: "#FAFAF7" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p className="section-label" style={{ marginBottom: 14 }}>What we offer</p>
            <h2 className="gc-serif" style={{ fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 700, color: "#17340a", lineHeight: 1.2 }}>Everything you need to go green</h2>
          </div>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {SERVICES.map(s => (
              <div key={s.title} className="service-card">
                <div style={{ fontSize: 32, marginBottom: 18 }}>{s.icon}</div>
                <h3 className="gc-serif" style={{ fontSize: 20, fontWeight: 700, color: "#17340a", marginBottom: 10 }}>{s.title}</h3>
                <p className="gc-sans" style={{ fontSize: 15, color: "#4a4a3f", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: "100px 28px", background: "#f2f5ec" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p className="section-label" style={{ marginBottom: 14 }}>Pricing</p>
            <h2 className="gc-serif" style={{ fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 700, color: "#17340a", marginBottom: 14 }}>Simple, honest pricing</h2>
            <p className="gc-sans" style={{ fontSize: 17, color: "#4a4a3f" }}>No hidden fees. Cancel anytime.</p>
          </div>
          <div className="plans-row" style={{ display: "flex", gap: 24, alignItems: "stretch" }}>
            {PLANS.map(plan => (
              <div key={plan.name} className={`plan-card${plan.highlight ? " featured" : ""}`}>
                {plan.badge && (
                  <div style={{ display: "inline-block", background: "#EAF3DE", color: "#3B6D11", fontSize: 12, fontWeight: 600, padding: "4px 14px", borderRadius: 100, marginBottom: 20, letterSpacing: "0.04em" }}>{plan.badge}</div>
                )}
                <h3 className="gc-serif" style={{ fontSize: 22, fontWeight: 700, color: "#17340a", marginBottom: 8 }}>{plan.name}</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 28 }}>
                  <span className="gc-serif" style={{ fontSize: 42, fontWeight: 700, color: "#3B6D11" }}>{plan.price}</span>
                  <span className="gc-sans" style={{ fontSize: 16, color: "#7a7a6a" }}>{plan.period}</span>
                </div>
                <div style={{ marginBottom: 32 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                      <span className="leaf-dot" />
                      <span className="gc-sans" style={{ fontSize: 15, color: "#3a3a35" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button className={plan.highlight ? "btn-primary" : "btn-outline"} style={{ width: "100%", borderRadius: 12 }}>
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "100px 28px", background: "#FAFAF7" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p className="section-label" style={{ marginBottom: 14 }}>Get in touch</p>
            <h2 className="gc-serif" style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, color: "#17340a", marginBottom: 14 }}>Let's talk sustainability</h2>
            <p className="gc-sans" style={{ fontSize: 17, color: "#4a4a3f" }}>Have a question or want to partner with us? We'd love to hear from you.</p>
          </div>
          {sent ? (
            <div style={{ background: "#EAF3DE", border: "1px solid #C0DD97", borderRadius: 20, padding: 40, textAlign: "center" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>🌿</div>
              <h3 className="gc-serif" style={{ fontSize: 24, color: "#17340a", marginBottom: 10 }}>Message sent!</h3>
              <p className="gc-sans" style={{ color: "#4a5a38" }}>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <input placeholder="Your name" value={formState.name} onChange={e => setFormState(s => ({ ...s, name: e.target.value }))} />
                <input placeholder="Your email" type="email" value={formState.email} onChange={e => setFormState(s => ({ ...s, email: e.target.value }))} />
              </div>
              <textarea rows={5} placeholder="Your message…" value={formState.message} onChange={e => setFormState(s => ({ ...s, message: e.target.value }))} />
              <button className="btn-primary" onClick={handleSend} style={{ alignSelf: "flex-start", padding: "14px 40px" }}>Send message</button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#17340a", color: "#C0DD97", padding: "52px 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 20 }}>🌿</span>
              <span className="gc-serif" style={{ fontSize: 20, fontWeight: 700, color: "#EAF3DE" }}>Green Cycle</span>
            </div>
            <p className="gc-sans" style={{ fontSize: 14, color: "#9FE1CB", maxWidth: 280, lineHeight: 1.6 }}>Sustainable recycling for people. Making the planet cleaner, one pickup at a time.</p>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {["Instagram", "LinkedIn", "Twitter"].map(s => (
              <a key={s} href="#" className="gc-sans" style={{ color: "#9FE1CB", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                onMouseOver={e => e.target.style.color = "#EAF3DE"} onMouseOut={e => e.target.style.color = "#9FE1CB"}>{s}</a>
            ))}
          </div>
          <p className="gc-sans" style={{ fontSize: 13, color: "#639922", width: "100%", textAlign: "center", marginTop: 12 }}>© 2026 Green Cycle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
