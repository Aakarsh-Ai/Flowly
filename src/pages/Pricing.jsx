
import { Link } from "react-router-dom";
import "./Pricing.css";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  CornerDownLeft,
  GitBranch,
  Check,
  CircleDot,
} from "lucide-react";
const plans = [
  {
    name: "Starter",
    description: "For individuals organising their first workflows.",
    price: "Free",
    period: "to explore the basics",
    features: [
      "Up to 3 workflows",
      "Basic workflow steps",
      "Simple process overview",
      "Community-style self-service",
    ],
    action: "Get started",
    featured: false,
  },
  {
    name: "Team",
    description: "For small teams looking to reduce repetitive work.",
    price: "₹999",
    period: "per month ",
    features: [
      "Upto 10 workflows",
      "Conditional workflow steps",
      "Team notification planning",
      "Workflow management overview",
      "Priority support concept",
    ],
    action: "Get started",
    featured: true,
  },
  {
    name: "Business",
    description: "For teams with more involved processes.",
    price: "Custom",
    period: "based on requirements",
    features: [
      "Tailored workflow limits",
      "More complex process design",
      "Business-specific requirements",
      "Integration planning",
      "Dedicated onboarding discussion",
    ],
    action: "Get started",
    featured: false,
  },
];

function Pricing() {
  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        
        <h1>
          Straightforward plans.
          <br />
          <span>Room to grow.</span>
        </h1>
        <p>
          Start with the processes that slow you down.
          Choose a plan that fits the way your team works.
        </p>
        
      </section>

      <section className="pricing-content">
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`pricing-card ${
                plan.featured ? "pricing-card-featured" : ""
              }`}
              key={plan.name}
            >
              

              <div className="plan-intro">
                <h2>{plan.name}</h2>
                <p>{plan.description}</p>
              </div>

              <div className="plan-price">
                <span className="price-value">{plan.price}</span>
                <span className="price-period">{plan.period}</span>
              </div>

              
                <Link
                to="/contact"
                className="plan-button"
                >
                <span className="plan-button-text">{plan.action}</span>
                <span aria-hidden="true"><ArrowUpRight size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                </Link>


              <div className="plan-divider"></div>

              <p className="plan-includes">WHAT'S INCLUDED</p>

              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true"><Check size={16} strokeWidth={1.8} aria-hidden="true" /></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        
      </section>

      <section className="pricing-bottom">
        <div>
          <p className="section-eyebrow">NOT SURE WHICH PLAN FITS?</p>
          <h2>Let's talk about your workflow.</h2>
          <p>
            Tell us about the repetitive work your team wants to simplify.
          </p>
        </div>

        <Link to="/contact" className="button-primary">
          Contact us <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}

export default Pricing;
