import React from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const Pricing = ({ setCurrentPage }) => {
  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "/month",
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
      price: "$2,499",
      period: "/month",
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

  return (
    <div className="pricing-scope">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transparent Pricing</h1>
          <p style={{ opacity: 0.8, fontSize: '1.2rem' }}>
            Choose the perfect plan for your business growth
          </p>
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
                <span style={{ color: '#6b7280' }}>{plan.period}</span>
              </div>
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
    </div>
  );
};

export default Pricing;