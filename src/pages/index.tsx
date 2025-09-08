import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

type Tile = {
  title: string;
  desc: string;
  to: string;
  tag?: string;
  emoji?: string;
  span?: "wide" | "tall" | "normal";
};

const tiles: Tile[] = [
  { 
    title: "Overview", 
    desc: "Discover the vision behind Trust-Card: how collectibles, invitations, and trust links combine to build a living graph of reputation.", 
    to: "/docs/tutorial/Overview", 
    tag: "Start", 
    emoji: "🌐", 
    span: "wide" 
  },
  { 
    title: "Waves", 
    desc: "Cards are released in limited waves. Each wave brings unique frames, rarity distributions, and a sense of progression for the community.", 
    to: "/docs/tutorial/waves", 
    tag: "Drops", 
    emoji: "🌊" 
  },
  { 
    title: "Invitations", 
    desc: "Every card grants invitations. Onboard new members, extend trust, and grow the network through curated connections that shape the graph.", 
    to: "/docs/tutorial/invitations", 
    tag: "Onboarding", 
    emoji: "✉️" 
  },
  { 
    title: "Physical Edition", 
    desc: "Premium printed versions of Trust-Cards with NFC/QR integration. Carry your identity and trust links into the physical world.", 
    to: "/docs/tutorial/physical-card", 
    tag: "IRL", 
    emoji: "📇" 
  },
  { 
    title: "Personal Domain", 
    desc: "Claim yourname.box — a personal hub where your Trust-Card, connections, and social links come together into a shareable identity page.", 
    to: "/docs/tutorial/domain", 
    tag: "Identity", 
    emoji: "🔗" 
  },
];

const WAVES = ["Wave 1", "Wave 2", "Wave 3", "Wave 0"] as const;
const ACTIVE_WAVE: (typeof WAVES)[number] = "Wave 1";

function BentoCard({ t }: { t: Tile }) {
  const span =
    t.span === "wide" ? styles.spanWide : t.span === "tall" ? styles.spanTall : undefined;
  return (
    <Link to={t.to} className={clsx(styles.docCard, span)}>
      <div className={styles.cardGlow} />
      <div className={styles.cardHeader}>
        <span className={styles.cardEmoji}>{t.emoji ?? "✨"}</span>
        {t.tag && <span className={styles.cardTag}>{t.tag}</span>}
      </div>
      <div>
        <Heading as="h3" className={styles.cardTitle}>{t.title}</Heading>
        <p className={styles.cardDesc}>{t.desc}</p>
      </div>
      <div aria-hidden className={styles.cardArrow}>↗</div>
    </Link>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--secondary button--lg", styles.btnPrimary)}
            to="/docs/tutorial/Overview"
          >
            Explore
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Trust Card" description="Trust. Collect. Connect.">
      <HomepageHeader />
      <main>
        <section className={styles.mainSection}>
          <div className="container">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col col--6">
                <Heading as="h1" className={styles.heroTitle}>
                  Trust the network.
                </Heading>
                <p className={styles.heroLead}>Not just a collectible — an invitation, a proof of trust, and a key to reputation. Grow the network, visualize connections, and unlock new opportunities across the Intuition ecosystem.</p>
                <div className={styles.ctaRow}>
                  <Link className={clsx("button", styles.btnPrimary)} to="/docs/tutorial/Overview">
                    Start reading
                  </Link>
                  <Link className={clsx("button", styles.btnSecondary)} to="/docs/tutorial/waves">
                    See waves
                  </Link>
                </div>

                {/* Waves */}
                <div className={styles.waveWrap}>
                  <ul className={styles.waveList}>
                    {WAVES.map((w) => {
                      const active = w === ACTIVE_WAVE;
                      return (
                        <li key={w} className={clsx(styles.waveItem, active && styles.waveItemActive)}>
                          <span className={clsx(styles.waveDot, active && styles.waveDotActive)} />
                          <span>{w}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className={styles.waveLinks}>
                    <Link to="/docs/tutorial/trust-graph" className={styles.linkInline}>
                      Trust Graph ↗
                    </Link>
                    <span className={styles.bullet} />
                    <Link to="/docs/tutorial/reputation-checker" className={styles.linkInline}>
                      Reputation Checker ↗
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col--6">
                <div className={styles.viewer}>
                  <div className={styles.viewerCard}>
                    <span className={styles.viewerLabel}>3D Card Viewer (embed)</span>
                  </div>
                  <div className={styles.viewerCaption}>
                    Wave frame • rarity glow • NFT/Physical
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento */}
          <div className="container">
            <div className={styles.bentoGrid}>
              {tiles.map((t, i) => (
                <BentoCard key={i} t={t} />
              ))}
            </div>
          </div>

          {/* Diagram */}
          <div className="container">
            <Heading as="h2" className={styles.subTitle}>👁️</Heading>
            <div className={styles.embedBox}>
              <div className={styles.embedPlaceholder}>
                Add your Whimsical / image / iframe here
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
