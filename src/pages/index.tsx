import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Shepherd Help Center</h1>
        <p className={styles.heroSubtitle}>
          Everything you need to know about using Shepherd ChMS —
          the church management platform built for African churches.
        </p>
        <Link className={styles.heroButton} to="/docs/intro">
          Get Started →
        </Link>
      </div>
    </header>
  );
}

const sections = [
  {
    emoji: '🚀',
    title: 'Getting Started',
    description: 'Set up your church, invite your team, and configure Shepherd from scratch.',
    href: '/docs/setup/getting-started',
  },
  {
    emoji: '👥',
    title: 'Members',
    description: 'Add and manage your congregation — visitors, new converts, active members, and families.',
    href: '/docs/members/overview',
  },
  {
    emoji: '📋',
    title: 'Attendance',
    description: 'Track who shows up to every service with manual check-in or WhatsApp self check-in.',
    href: '/docs/attendance/tracking',
  },
  {
    emoji: '💬',
    title: 'Messages & Broadcasts',
    description: 'Reach your members via WhatsApp and SMS with personalised broadcasts.',
    href: '/docs/communication/messaging',
  },
  {
    emoji: '🙏',
    title: 'Pastoral Care',
    description: 'Manage prayer requests, appointments, visits, and care journeys for your congregation.',
    href: '/docs/pastoral/care',
  },
  {
    emoji: '💰',
    title: 'Giving & Finance',
    description: 'Record offerings, collect via Mobile Money or card, and track giving history.',
    href: '/docs/giving/overview',
  },
  {
    emoji: '🤖',
    title: 'WhatsApp Bot',
    description: 'Let members check in, give, pray, and book appointments directly from WhatsApp.',
    href: '/docs/communication/whatsapp-bot',
  },
  {
    emoji: '🗳️',
    title: 'Church Elections',
    description: 'Run transparent, audited elections with WhatsApp voting and PDF certificates.',
    href: '/docs/admin/elections',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Help Center" description="Shepherd ChMS User Guide">
      <HomepageHeader />
      <main className={styles.main}>
        <div className={styles.sectionGrid}>
          {sections.map((s) => (
            <Link key={s.href} to={s.href} className={styles.card}>
              <div className={styles.cardEmoji}>{s.emoji}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.description}</p>
            </Link>
          ))}
        </div>

        <div className={styles.support}>
          <p>
            Need help? Contact us at{' '}
            <a href="mailto:support@get-shepherd.net">support@get-shepherd.net</a>
            {' '}or visit{' '}
            <a href="https://get-shepherd.net">get-shepherd.net</a>.
          </p>
        </div>
      </main>
    </Layout>
  );
}
