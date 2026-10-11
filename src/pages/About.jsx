
import { Link } from "react-router-dom";
import "./About.css";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  CornerDownLeft,
  GitBranch,
  Check,
  CircleDot,
} from "lucide-react";
function About() {
  return (
    <main className="about-page">
      <section className="about-hero">

        <h1>
          Better processes.
          <br />
          <span>Better workdays.</span>
        </h1>

        <p className="about-hero-description">
          Work shouldn't get harder just because the small
          tasks keep piling up. Flowly is built around a
          simple idea: make everyday work easier to follow.
        </p>

        <div className="about-hero-meta">
          <span>OUR POINT OF VIEW</span>
          <span className="about-meta-line"></span>
          <span>KEEP WORK SIMPLE</span>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-label">
          <p className="section-eyebrow">THE IDEA</p>
        </div>

        <div className="about-story-content">
          <h2>
            Less time managing the work.
            <br />
            <span>More time doing it.</span>
          </h2>

          <p>
            Many teams repeat the same tasks every day:
            sorting requests, passing information along,
            checking progress, and reminding people what
            comes next.
          </p>

          <p>
            When those steps are unclear, work becomes
            harder to track. Flowly explores how simple,
            well-defined workflows can give recurring tasks
            a clearer structure.
          </p>
        </div>
      </section>

      <section className="about-principles">
        <div className="about-principles-heading">
          <p className="section-eyebrow">WHAT GUIDES THE IDEA</p>
          <h2>Simple by design.</h2>
        </div>

        <div className="principle-list">
          <article className="principle-item">
            <span className="principle-number">01</span>
            <div>
              <h3>Clarity over complexity</h3>
              <p>
                Every step should be understandable.
                A process is useful only when people can
                follow it without unnecessary confusion.
              </p>
            </div>
            <span className="principle-mark"><Check size={16} strokeWidth={1.8} aria-hidden="true" /></span>
          </article>

          <article className="principle-item">
            <span className="principle-number">02</span>
            <div>
              <h3>Consistency in everyday work</h3>
              <p>
                Repeated tasks deserve a repeatable approach,
                so important steps are less likely to be missed.
              </p>
            </div>
            <span className="principle-mark"><Check size={16} strokeWidth={1.8} aria-hidden="true" /></span>
          </article>

          <article className="principle-item">
            <span className="principle-number">03</span>
            <div>
              <h3>People stay in control</h3>
              <p>
                Good workflows support people and their
                decisions instead of adding more complexity
                to the workday.
              </p>
            </div>
            <span className="principle-mark"><Check size={16} strokeWidth={1.8} aria-hidden="true" /></span>
          </article>
        </div>
      </section>

      <section className="about-cta">
        <p className="section-eyebrow">A BETTER WAY TO GET THINGS DONE</p>
        <h2>Start with the work that slows you down.</h2>
        <p>
          Explore the Flowly concept and see how a clearer
          process could fit your team's needs.
        </p>

        
      </section>
    </main>
  );
}

export default About;
