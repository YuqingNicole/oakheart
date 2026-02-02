import React from 'react';
import { ServicePage } from '../components/pages';

/**
 * Example: Manufacturing Service Landing Page
 * URL: /manufacturing
 */
export const ManufacturingPage: React.FC = () => {
  return (
    <ServicePage
      hero={{
        badge: '🏆 500+ Games Manufactured',
        title: (
          <>
            Turn Your Board Game <em>Vision</em> Into Reality
          </>
        ),
        description:
          'Premium manufacturing for indie designers, crowdfunders, and publishers. From 200 units to 100,000+, we craft every game with precision and care.',
        stats: [
          { value: '200+', label: 'Minimum Order' },
          { value: '98%', label: 'On-Time Delivery' },
          { value: '12', label: 'Years Experience' },
        ],
      }}
      segments={[
        {
          icon: '🌱',
          title: 'First-Time Designers',
          description:
            "New to manufacturing? We'll guide you through every step with patience and expertise.",
          features: [
            'Low MOQ from 200 units',
            'Free design review',
            'Dedicated project manager',
            'Step-by-step guidance',
          ],
          href: '/for/first-time-designers',
        },
        {
          icon: '🚀',
          title: 'Crowdfund Creators',
          description:
            'Running a Kickstarter? We guarantee on-time delivery so you can keep your backers happy.',
          features: [
            'Pre-campaign quotes',
            'Flexible capacity scaling',
            '98% on-time delivery',
            'Fulfillment solutions',
          ],
          href: '/for/kickstarter-creators',
        },
        {
          icon: '🏢',
          title: 'Publishers',
          description:
            "Looking for a reliable long-term manufacturing partner? Let's build something together.",
          features: [
            'Volume discounts',
            'Priority scheduling',
            'Dedicated account team',
            'Annual agreements',
          ],
          href: '/for/publishers',
        },
      ]}
      capabilities={[
        { icon: '🃏', name: 'Card Printing' },
        { icon: '📦', name: 'Box Manufacturing' },
        { icon: '🗺️', name: 'Game Boards' },
        { icon: '🎲', name: 'Custom Dice' },
        { icon: '♟️', name: 'Meeples & Tokens' },
        { icon: '🧩', name: 'Plastic Miniatures' },
        { icon: '📐', name: 'Box Inserts' },
        { icon: '🚚', name: 'Global Fulfillment' },
      ]}
      cta={{
        title: 'Ready to Bring Your Game to Life?',
        description:
          'Get a detailed quote within 24 hours. No obligation, no pressure—just honest pricing.',
        primaryButton: { label: 'Get Free Quote', href: '/quote' },
        secondaryButton: { label: 'Schedule a Call', href: '/contact' },
      }}
    />
  );
};

export default ManufacturingPage;
