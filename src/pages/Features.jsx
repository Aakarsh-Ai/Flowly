
import { Link } from "react-router-dom";
import "./Features.css";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  CornerDownLeft,
  GitBranch,
  Check,
  CircleDot,
} from "lucide-react";
const features = [
  {
    number: "01",
    label: "WORKFLOW DESIGN",
    title: "Turn repeatable work into clear steps.",
    description:
      "Map out the sequence of a task, from the event that starts it to the action that completes it. Keep the process easy to understand.",
    points: [
      "Define a starting event",
      "Arrange steps in a clear order",
      "See how a process fits together",
    ],
  },
  {
    number: "02",
    label: "CONDITIONS",
    title: "Make the next step depend on the situation.",
    description:
      "Not every request needs the same response. Use conditions to describe how different cases should move through a workflow.",
    points: [
      "Separate different request types",
      "Set rules for the next step",
      "Keep exceptions easier to identify",
    ],
  },
  {
    number: "03",
    label: "TEAM NOTIFICATIONS",
    title: "Help the right people stay informed.",
    description:
      "Describe when a team member needs an update, so important handoffs are part of the process instead of an afterthought.",
    points: [
      "Identify who needs an update",
      "Include notifications in the process",
      "Make responsibilities easier to follow",
    ],
  },
];

function Features() {
  return (
    <main className="features-page">
      <section className="features-hero">
        <h1>
          Less chasing.
          <br />
          <span>More getting done.</span>
        </h1>
        <p>
          A clearer way to organise recurring work, define
          what happens next, and keep everyday processes moving.
        </p>

        
      </section>

      <section className="features-list">
        <div className="features-list-heading">
          <p className="section-eyebrow">THE BUILDING BLOCKS</p>
          <h2>Everything starts with a better process.</h2>
        </div>

        {features.map((feature) => (
          <article className="feature-row" key={feature.number}>
            <div className="feature-index">
              <span>{feature.number}</span>
              <span className="feature-index-line"></span>
            </div>

            <div className="feature-main">
              <p className="section-eyebrow">{feature.label}</p>
              <h3>{feature.title}</h3>
              <p className="feature-description">
                {feature.description}
              </p>

              <ul>
                {feature.points.map((point) => (
                  <li key={point}>
                    <span aria-hidden="true"><Check size={16} strokeWidth={1.8} aria-hidden="true" /></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="feature-visual">
              <span className="feature-visual-label">
                WORKFLOW STEP
              </span>
              <div className="feature-visual-node">
                <span className="feature-node-icon">
                  {feature.number === "01"
                    ? <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
                    : feature.number === "02"
                    ? <GitBranch size={20} strokeWidth={1.8} aria-hidden="true" />
                    : <CircleDot size={21} strokeWidth={1.8} aria-hidden="true" />}
                </span>
                <div>
                  <span className="feature-node-caption">
                    {feature.label}
                  </span>
                  <p>
                    {feature.number === "01"
                      ? "Choose a trigger"
                      : feature.number === "02"
                      ? "Check a condition"
                      : "Notify your team"}
                  </p>
                </div>
              </div>
              <div className="feature-visual-connector">↓</div>
              <div className="feature-visual-result">
                <span className="result-dot"></span>
                Next step defined
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="features-bottom">
        <div>
          <p className="section-eyebrow">START SMALL</p>
          <h2>One process is a good place to begin.</h2>
          <p>
            Explore how Flowly could fit the way your team works.
          </p>
        </div>

        <Link to="/contact" className="button-primary">
          Get in touch <span aria-hidden="true"><ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" /></span>
        </Link>
      </section>
    </main>
  );
}

export default Features;
