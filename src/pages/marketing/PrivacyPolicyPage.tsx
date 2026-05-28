const SECTIONS: { title: string; body?: string; bullets?: string[] }[] = [
  {
    title: '1. Information We Collect',
    body: 'We may collect the following types of information:',
    bullets: [
      'Personal Information: Name, address, email address, phone number, payment information, and other similar information.',
      'Usage Information: Information about how you use our services, including your interactions with our website, applications, and customer support.',
      'Device Information: Information about your device, including IP address, browser type, and operating system.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: 'We may use your information for the following purposes:',
    bullets: [
      'To provide and maintain our services.',
      'To process payments and transactions.',
      'To communicate with you about our services and promotions.',
      'To personalise your experience and improve our services.',
      'To detect, prevent, and address technical issues and fraudulent activities.',
    ],
  },
  {
    title: '3. How We Share Your Information',
    body: 'We may share your information with third parties for the following purposes:',
    bullets: [
      'With service providers who assist us in providing our services.',
      'With financial institutions and payment processors to process payments.',
      'With law enforcement agencies or regulatory authorities when required by law.',
      'With your consent or at your direction.',
    ],
  },
  {
    title: '4. Data Retention',
    body: 'We will retain your information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.',
  },
  {
    title: '5. Security',
    body: 'We take reasonable measures to protect your information from unauthorised access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.',
  },
  {
    title: '6. Your Choices',
    body: 'You may choose not to provide certain information, but that may limit your ability to use our services. You may also update or delete your information by contacting us.',
  },
  {
    title: '7. Updates to this Privacy Policy',
    body: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.',
  },
  {
    title: '8. Contact Us',
    body: 'If you have any questions or concerns about this Privacy Policy, please contact us at customerservice@a2bpayments.co.uk',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-3xl px-5 pt-20 pb-12 sm:px-8 sm:pt-28 sm:pb-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-pretty text-lg text-paper/70">
            Thank you for choosing A2B Payment Solutions. This Privacy Policy describes how we collect, use, and
            disclose your personal information when you use our services.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="space-y-12">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {s.title}
                </h2>
                {s.body && <p className="mt-3 text-pretty text-ink-muted">{s.body}</p>}
                {s.bullets && (
                  <ul className="mt-4 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-ink-muted">
                        <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-mint-deep" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
