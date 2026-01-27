import React from 'react';
import { GuidePage, InfoBox, StepCard, FaqAccordion } from '../components/pages';

/**
 * Example: Manufacturing Guide Page
 * URL: /guides/manufacturing-101
 */
export const Manufacturing101Page: React.FC = () => {
  const toc = [
    { id: 'overview', label: 'Overview' },
    { id: 'step1', label: '1. Finalize Your Design' },
    { id: 'step2', label: '2. Choose Components' },
    { id: 'step3', label: '3. Get Quotes' },
    { id: 'step4', label: '4. Production Process' },
    { id: 'step5', label: '5. Quality Control' },
    { id: 'step6', label: '6. Shipping' },
    { id: 'faq', label: 'FAQ' },
  ];

  const faqItems = [
    {
      question: 'What is the minimum order quantity?',
      answer:
        'Our minimum order quantity is 200 units. This allows indie designers and first-time creators to test the market without a massive investment. For the best per-unit pricing, orders of 1,000+ units are recommended.',
    },
    {
      question: 'How long does manufacturing take?',
      answer:
        'Standard production time is 8-12 weeks from final file approval and sample sign-off. Rush orders may be possible for an additional fee, depending on our current production schedule.',
    },
    {
      question: 'Do you offer fulfillment services?',
      answer:
        'Yes! We can ship directly to your backers, retail partners, or distribution centers worldwide. Our fulfillment service includes pick-and-pack, international shipping, and tracking for each order.',
    },
    {
      question: 'What file formats do you accept?',
      answer:
        'We prefer PDF files with embedded fonts, but also accept AI, PSD, and INDD files. All files should be CMYK, 300 DPI minimum, with 3mm bleed. We provide templates for common components.',
    },
  ];

  return (
    <GuidePage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Guides', href: '/guides' },
        { label: 'Manufacturing 101' },
      ]}
      title="How to Manufacture a Board Game"
      subtitle="Everything you need to know about turning your game design into a professionally manufactured product—from choosing materials to shipping worldwide."
      meta={{
        readTime: '15 min read',
        updated: 'Updated Jan 2025',
        author: 'By Oakheart Team',
      }}
      toc={toc}
    >
      <h2 id="overview">Overview</h2>
      <p>
        Manufacturing a board game is a journey that transforms your creative
        vision into a tangible product. Whether you're an indie designer making
        your first game or an established publisher, understanding the
        manufacturing process is crucial for success.
      </p>
      <p>
        This guide covers the complete manufacturing journey, from finalizing
        your design files to receiving your finished games. We'll walk through
        each step with practical advice and insider tips from our 12+ years in
        the industry.
      </p>

      <InfoBox title="Pro Tip" icon="💡">
        <p>
          Start the manufacturing conversation early—ideally 6-8 months before
          you need finished products. This gives you time for sampling,
          revisions, and production without rushing.
        </p>
      </InfoBox>

      <h2 id="step1">Step 1: Finalize Your Design</h2>
      <p>
        Before approaching any manufacturer, ensure your game design is
        production-ready. This means having complete, print-ready files for all
        components.
      </p>

      <StepCard
        number={1}
        title="Prepare Print-Ready Files"
        description="All artwork should be in CMYK color mode at 300 DPI minimum. Include 3mm bleed on all edges and ensure text is at least 5mm from cut lines."
      />
      <StepCard
        number={2}
        title="Create a Component List"
        description="Document every component in your game: card counts, board dimensions, token quantities, box size, rulebook page count, and any special pieces."
      />
      <StepCard
        number={3}
        title="Write Clear Specifications"
        description="For each component, specify materials, finishes, and any special requirements. The more detail you provide, the more accurate your quote will be."
      />

      <h2 id="step2">Step 2: Choose Components</h2>
      <p>
        Component selection affects both cost and player experience. Here's what
        to consider for the most common game components:
      </p>

      <h3>Cards</h3>
      <p>
        Card stock weight (measured in GSM) determines durability. 300gsm with
        blue/black core is standard for playing cards. Consider linen finish for
        a premium feel or glossy for vibrant colors.
      </p>

      <h3>Game Boards</h3>
      <p>
        Folding boards (bi-fold or quad-fold) are most common. Thickness ranges
        from 1.5mm to 3mm—thicker feels more premium but costs more.
        Jigsaw-style puzzle boards are an alternative for large boards.
      </p>

      <h3>Boxes</h3>
      <p>
        Rigid (setup) boxes feel premium but cost significantly more than tuck
        boxes or lid-and-base boxes. Consider your price point and retail
        expectations when choosing.
      </p>

      <h2 id="step3">Step 3: Get Quotes</h2>
      <p>
        Request quotes from 2-3 manufacturers to compare pricing, lead times,
        and services. A good quote request should include:
      </p>
      <ul>
        <li>Complete component list with specifications</li>
        <li>Target quantity (and alternate quantities for comparison)</li>
        <li>Desired delivery date and destination</li>
        <li>Any special requirements (shrink wrap, retail packaging, etc.)</li>
      </ul>

      <InfoBox title="Timeline Tip" icon="⏱️">
        <p>
          Manufacturing typically takes 8-12 weeks from final file approval.
          Ocean shipping adds 4-6 weeks. Plan accordingly for your launch date.
        </p>
      </InfoBox>

      <h2 id="step4">Step 4: Production Process</h2>
      <p>
        Once you approve your quote and submit final files, production begins.
        Here's what happens:
      </p>

      <StepCard
        number={1}
        title="Pre-Production Review"
        description="Our team reviews all files for print-readiness, checking resolution, bleed, and color accuracy. We'll flag any issues before printing begins."
      />
      <StepCard
        number={2}
        title="Sample Production"
        description="We create a physical sample (white box or production sample) for your approval. This is your chance to verify everything before mass production."
      />
      <StepCard
        number={3}
        title="Mass Production"
        description="After sample approval, we begin full production. Regular progress updates keep you informed throughout the process."
      />

      <h2 id="step5">Step 5: Quality Control</h2>
      <p>
        Quality control happens at multiple stages throughout production. Our QC
        process includes:
      </p>
      <ul>
        <li>Incoming material inspection</li>
        <li>In-line production checks</li>
        <li>Final random sampling (AQL inspection)</li>
        <li>Pre-shipment verification</li>
      </ul>

      <h2 id="step6">Step 6: Shipping</h2>
      <p>
        The final step is getting your games to you (or your customers). We
        offer multiple shipping options:
      </p>
      <ul>
        <li>
          <strong>Ocean Freight:</strong> Most economical for large orders. 4-6
          weeks transit time.
        </li>
        <li>
          <strong>Air Freight:</strong> Faster (1-2 weeks) but significantly
          more expensive.
        </li>
        <li>
          <strong>Direct Fulfillment:</strong> We ship directly to your backers
          or distribution centers.
        </li>
      </ul>

      <h2 id="faq">Frequently Asked Questions</h2>
      <FaqAccordion items={faqItems} />
    </GuidePage>
  );
};

export default Manufacturing101Page;
