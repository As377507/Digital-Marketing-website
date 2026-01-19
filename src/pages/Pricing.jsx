import React from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import "../css/Pricing.css";

const Pricing = ({ setCurrentPage }) => {
  const [isYearly, setIsYearly] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const plans = [
    {
      name: "Starter",
      price: isYearly ? "$9,590" : "$999",
      period: isYearly ? "/year" : "/month",
      billing: isYearly ? "Billed yearly" : "Billed monthly",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "SEO Audit & Strategy",
        "Social Media Setup (2 platforms)",
        "Monthly Performance Report",
        "Email Support",
        "Basic Analytics Dashboard",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Growth",
      price: isYearly ? "$23,990" : "$2,499",
      period: isYearly ? "/year" : "/month",
      billing: isYearly ? "Billed yearly" : "Billed monthly",
      description: "Ideal for growing companies looking to scale",
      features: [
        "Everything in Starter",
        "Full SEO Implementation",
        "Social Media Management (4 platforms)",
        "Google Ads Management",
        "Content Creation (4 posts/month)",
        "Weekly Strategy Calls",
        "Priority Support",
        "Advanced Analytics",
      ],
      cta: "Start Growing",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      billing: "Custom billing",
      description: "Tailored solutions for large organizations",
      features: [
        "Everything in Growth",
        "Dedicated Account Manager",
        "Custom Marketing Strategy",
        "Multi-channel Campaigns",
        "24/7 Support",
        "White-label Reporting",
        "API Integrations",
        "Quarterly Business Reviews",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const faqs = [
    { q: "Can I cancel my subscription anytime?", a: "Yes, you can pause or cancel your subscription at any time. There are no long-term contracts for our monthly plans." },
    { q: "What is included in the SEO Audit?", a: "Our comprehensive SEO audit covers technical performance, on-page optimization, backlink profile analysis, and competitor research." },
    { q: "Do you offer refunds?", a: "We offer a 7-day money-back guarantee if you're not satisfied with our initial service setup." },
    { q: "Can I switch plans later?", a: "Absolutely! You can upgrade or downgrade your plan at any time to match your business needs." },
  ];

  return (
    <div className="pricing-scope">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">Flexible Pricing</div>
          <h1>Transparent Pricing</h1>
          <p style={{ opacity: 0.8, fontSize: '1.2rem', marginBottom: '2rem' }}>
            Choose the perfect plan for your business growth
          </p>

          {/* Billing Toggle */}
          <div className="billing-toggle-container">
            <span className={!isYearly ? "active" : ""}>Monthly</span>
            <button
              className={`toggle-switch ${isYearly ? 'yearly' : ''}`}
              onClick={() => setIsYearly(!isYearly)}
              aria-label="Toggle billing period"
            >
              <div className="toggle-thumb" />
            </button>
            <span className={isYearly ? "active" : ""}>
              Yearly <span className="save-badge">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <div key={i} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && (
              <div className="popular-label">
                <Sparkles size={12} style={{ marginRight: '4px' }} />
                Most Popular
              </div>
            )}

            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
              <div className="price-row">
                <span className="amount">{plan.price}</span>
                <span style={{ color: '#6b7280', alignSelf: 'center' }}>{plan.period}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#6b7280', margin: '-1rem 0 1.5rem' }}>{plan.billing}</p>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '2rem' }}>
                {plan.description}
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, flexGrow: 1 }}>
              {plan.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <Check size={18} color="#2563eb" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className="btn-primary"
              onClick={() => setCurrentPage("Contact")}
              style={{ marginTop: '2rem' }}
            >
              {plan.cta}
              <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="container-padding" style={{ paddingBottom: '80px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h2>
        <div className="accordion-root">
          {faqs.map((faq, i) => (
            <div key={i} className={`accordion-item ${openFaq === i ? 'active' : ''}`}>
              <button className="accordion-trigger" onClick={() => toggleFaq(i)}>
                <span className="accordion-title">{faq.q}</span>
                <span style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
                  ▼
                </span>
              </button>
              {openFaq === i && (
                <div className="accordion-content">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;