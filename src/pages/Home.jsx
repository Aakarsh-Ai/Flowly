
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  CornerDownLeft,
  GitBranch,
  Check,
  CircleDot,
} from "lucide-react";
import "./Home.css";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="status-dot"></span>
            WORKFLOW AUTOMATION FOR MODERN TEAMS
          </p>

          <h1>
            Less busywork.
            <br />
            <span>More progress.</span>
          </h1>

          <p className="hero-description">
            Bring repetitive tasks into one simple workflow.
            Let Flowly handle the routine, so your team can
            focus on work that moves the business forward.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="button-primary">
              Let's talk <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </Link>

            <Link to="/features" className="button-secondary">
              Explore features <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>

          <p className="hero-note">
            Simple workflows. Fewer manual steps.
          </p>
        </div>

        <div className="workflow-preview">
          <div className="workflow-topbar">
            <div>
              <p className="preview-label">WORKFLOW BUILDER</p>
              <h2>New customer request</h2>
            </div>

            <span className="workflow-status">
              <span className="status-dot"></span>
              Active
            </span>
          </div>

          <div className="workflow-body">
            <div className="workflow-line"></div>

            <div className="workflow-step">
              <div className="step-icon step-icon-start">
                    <CornerDownLeft size={20} strokeWidth={1.8} aria-hidden="true" />
                </div>
              <div className="step-copy">
                <span>TRIGGER</span>
                <h3>New request received</h3>
                <p>A customer submits a request</p>
              </div>
              <Check size={16} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <div className="workflow-connector">
              <span><ArrowDown size={14} strokeWidth={1.8} aria-hidden="true" /></span>
            </div>

            <div className="workflow-step">
              <div className="step-icon step-icon-condition"><GitBranch size={20} strokeWidth={1.8} aria-hidden="true" /></div>
              <div className="step-copy">
                <span>CONDITION</span>
                <h3>Check request type</h3>
                <p>Identify the right next step</p>
              </div>
                <Check size={16} strokeWidth={1.8} aria-hidden="true" />    
            </div>

            <div className="workflow-connector">
              <span><ArrowDown size={14} strokeWidth={1.8} aria-hidden="true" /></span>
            </div>

            <div className="workflow-step">
              <div className="step-icon step-icon-action"><ArrowUpRight size={20} strokeWidth={1.8} aria-hidden="true" /></div>
              <div className="step-copy">
                <span>ACTION</span>
                <h3>Notify the team</h3>
                <p>Send an update to the right person</p>
              </div>
               <Check size={16} strokeWidth={1.8} aria-hidden="true" /> 
            </div>
          </div>

          <div className="workflow-footer">
            <span className="footer-indicator"></span>
            <p>3 steps in this workflow</p>
            <span className="footer-arrow"><ArrowUpRight size={20} strokeWidth={1.8} aria-hidden="true" />  </span>
          </div>
        </div>
      </section>
      
    <section className="how-section">
        <div className="section-heading">
            <p className="section-eyebrow">A SIMPLER WAY TO WORK</p>

            <h2>
                Good work deserves
                <br />
                <span>fewer roadblocks.</span>
            </h2>

            <p className="section-description">
                Flowly gives repetitive tasks a clear path, helping
                your team spend less time managing processes and
                more time getting things done.
            </p>    
        </div>

        <div className="process-list">
            <article className="process-item">
            <span className="process-number">01</span>

            <div className="process-icon trigger-icon">
        <ArrowUpRight size={20} strokeWidth={1.8} aria-hidden="true" />
        </div>

        <div className="process-copy">
            <h3>Start with a trigger</h3>
            <p>
                Choose the event that starts your workflow,
                such as a new enquiry or a submitted form.
            </p>
        </div>

        <span className="process-arrow"><ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" /></span>
        </article>

        <article className="process-item">
            <span className="process-number">02</span>

            <div className="process-icon condition-icon">
            <GitBranch size={20} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <div className="process-copy">
            <h3>Define what happens next</h3>
            <p>
                Set the actions and conditions that guide
                each request through the right steps.
            </p>
            </div>

            <span className="process-arrow"><ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" /></span>
        </article>

        <article className="process-item">
            <span className="process-number">03</span>

            <div className="process-icon result-icon">
                     <Check size={16} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <div className="process-copy">
                <h3>Let the process flow</h3>
                <p>
                Keep routine tasks moving and make it easier
                for your team to know when action is needed.
                </p>
            </div>

            <span className="process-arrow"><ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" /></span>
        </article>
    </div>
    </section>

      <section className="benefits-section">
        <div className="benefits-heading">
          <p className="section-eyebrow">BUILT FOR THE WAY YOU WORK</p>
          <h2>
            The small things add up.
            <br />
            <span>Make them simpler.</span>
          </h2>
        </div>

        <div className="benefits-grid">
          <article className="benefit-item">
            <span className="benefit-number">01 / CLARITY</span>
            <div className="benefit-symbol"><ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" /></div>
            <h3>Know what happens next</h3>
            <p>
              Give routine work a clear sequence, so your team
              spends less time figuring out the next step.
            </p>
          </article>

          <article className="benefit-item">
            <span className="benefit-number">02 / CONSISTENCY</span>
            <div className="benefit-symbol"><GitBranch size={20} strokeWidth={1.8} aria-hidden="true" /></div>
            <h3>Keep processes consistent</h3>
            <p>
              Follow a defined process for recurring tasks
              instead of relying on memory every time.
            </p>
          </article>

          <article className="benefit-item">
            <span className="benefit-number">03 / VISIBILITY</span>
            <div className="benefit-symbol"><CircleDot size={21} strokeWidth={1.8} aria-hidden="true" /></div>
            <h3>Spend time where it matters</h3>
            <p>
              Make routine steps easier to manage, leaving
              more room for decisions that need human attention.
            </p>
          </article>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="section-eyebrow">YOUR WORKFLOW, YOUR WAY</p>
          <h2>Ready to make work flow?</h2>
          <p>
            Start with one repetitive process. Build from there.
          </p>
        </div>

        <Link to="/contact" className="button-primary">
          Get in touch <span aria-hidden="true"><ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" /></span>
        </Link>
      </section>

    </main>
  );
}

export default Home;
