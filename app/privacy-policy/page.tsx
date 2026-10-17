import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | JU STEM Academy',
  description: 'How JUSTEM Academy LLC collects, uses, and protects your personal information.',
};

const h3 = { color: '#00273d', fontSize: '1.4rem', fontWeight: 700, margin: '36px 0 12px' } as const;
const p = { color: '#333333', lineHeight: 1.7, marginBottom: '14px' } as const;
const ul = { color: '#333333', lineHeight: 1.7, paddingLeft: '22px', marginBottom: '14px' } as const;

export default function PrivacyPolicyPage() {
  return (
    <section>
      <div className="container" style={{ maxWidth: '850px', textAlign: 'left' }}>
        <h2>Privacy Policy</h2>
        <p style={{ ...p, fontWeight: 600 }}>Effective Date: October 7, 2026</p>
        <p style={p}>
          JUSTEM Academy LLC (&ldquo;JUSTEM Academy,&rdquo; &ldquo;JU STEM Academy,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, and protect personal information when you interact with our website, advertisements, consultation forms, and educational services.
        </p>

        <h3 style={h3}>Information We Collect</h3>
        <p style={p}>
          We may collect information that you voluntarily provide to us, including your name, email address, phone number, academic interests, anticipated exam date, tutoring needs, and other information you choose to provide when requesting a consultation, submitting an inquiry, enrolling in services, or communicating with us.
        </p>
        <p style={p}>
          We may also receive information that you submit through our advertisements or lead forms on third-party platforms, such as LinkedIn.
        </p>

        <h3 style={h3}>How We Use Your Information</h3>
        <p style={p}>We may use the information we collect to:</p>
        <ul style={ul}>
          <li>Respond to inquiries and consultation requests.</li>
          <li>Schedule and conduct consultations.</li>
          <li>Communicate with prospective and current students about our tutoring and educational services.</li>
          <li>Process enrollment and payments.</li>
          <li>Provide and administer purchased services.</li>
          <li>Maintain appropriate business records.</li>
        </ul>

        <h3 style={h3}>Payments</h3>
        <p style={p}>
          We use Stripe to process payments for our services. Payment information submitted through Stripe is processed by Stripe in accordance with its own privacy practices.
        </p>
        <p style={p}>
          JUSTEM Academy does not directly store complete credit or debit card information submitted through Stripe.
        </p>

        <h3 style={h3}>Scheduling</h3>
        <p style={p}>
          We use Calendly to schedule consultations and other appointments. Information submitted through Calendly may be processed and stored by Calendly in accordance with its own privacy practices.
        </p>

        <h3 style={h3}>LinkedIn Lead Forms</h3>
        <p style={p}>
          We may use LinkedIn Lead Gen Forms to allow prospective students and other interested individuals to request information or consultations.
        </p>
        <p style={p}>
          Information submitted through these forms may be provided to JUSTEM Academy and used to respond to your request and communicate with you regarding our tutoring and educational services.
        </p>

        <h3 style={h3}>Sharing of Personal Information</h3>
        <p style={p}>We do not sell your personal information.</p>
        <p style={p}>
          We may share personal information with service providers when reasonably necessary to operate our business, including providers that assist us with payment processing, scheduling, and lead collection.
        </p>
        <p style={p}>
          We may also disclose information when required by law or when reasonably necessary to protect our rights, comply with legal obligations, or protect the safety and security of our business and users.
        </p>

        <h3 style={h3}>Data Security</h3>
        <p style={p}>
          We take reasonable administrative and technical measures to protect personal information in our possession.
        </p>
        <p style={p}>
          However, no method of electronic transmission or storage can be guaranteed to be completely secure, and we cannot guarantee the absolute security of information transmitted to or maintained by us or our service providers.
        </p>

        <h3 style={h3}>Data Retention</h3>
        <p style={p}>
          We retain personal information for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, provide our services, respond to inquiries, maintain appropriate business records, comply with legal obligations, and resolve disputes.
        </p>

        <h3 style={h3}>Your Choices</h3>
        <p style={p}>
          You may contact us to request access to, correction of, or deletion of personal information you have provided to us, subject to applicable legal and recordkeeping requirements.
        </p>
        <p style={p}>
          You may also ask us to stop sending promotional communications. Transactional or service-related communications may still be sent when necessary to provide services you have requested or purchased.
        </p>

        <h3 style={h3}>Children&apos;s Privacy</h3>
        <p style={p}>
          Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13.
        </p>
        <p style={p}>
          If we become aware that we have collected personal information from a child under 13, we will take reasonable steps to delete that information.
        </p>

        <h3 style={h3}>Third-Party Services</h3>
        <p style={p}>
          Our website and services may direct you to or integrate with third-party services, including Stripe, Calendly, and LinkedIn. These third parties maintain their own privacy practices and policies.
        </p>
        <p style={p}>
          JUSTEM Academy is not responsible for the privacy practices of third-party websites or services. We encourage you to review their respective privacy policies when providing information through those services.
        </p>

        <h3 style={h3}>Changes to This Privacy Policy</h3>
        <p style={p}>
          We may update this Privacy Policy periodically to reflect changes to our services, business practices, or applicable requirements.
        </p>
        <p style={p}>
          When changes are made, the revised Privacy Policy will be posted on this page with an updated effective date.
        </p>

        <h3 style={h3}>Contact Us</h3>
        <p style={p}>
          If you have questions about this Privacy Policy, would like to make a privacy-related request, or have questions about how your information is handled, please contact us:
        </p>
        <p style={p}>
          <strong>JUSTEM Academy LLC</strong>
          <br />
          Website: justemacademy.com
          <br />
          Email: <a href="mailto:info@justemacademy.com" style={{ color: '#00273d', textDecoration: 'underline' }}><span suppressHydrationWarning>info@justemacademy.com</span></a>
        </p>
      </div>
    </section>
  );
}
