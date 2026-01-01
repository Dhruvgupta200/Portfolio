import PageWrapper from "../components/PageWrapper";

const Skills = () => {
  return (
    <PageWrapper>
      <section className="section">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            Technical <span>Skills</span>
          </h2>
          <p className="section-desc">
            My strongest skills and the technologies I use daily
          </p>
        </div>

        {/* CORE SKILLS – MOST IMPORTANT */}
        <div className="glass-panel mb-5">
          <h4 className="mb-4">Core Frontend Expertise</h4>

          <div className="grid-3">
            <div>
              <h5>Angular</h5>
              <p className="text-muted">Advanced • 3+ years</p>
              <p className="text-muted">
                Enterprise applications, RxJS, reusable components, performance optimization
              </p>
            </div>

            <div>
              <h5>React</h5>
              <p className="text-muted">Proficient</p>
              <p className="text-muted">
                Component-driven architecture, hooks, TypeScript, routing
              </p>
            </div>

            <div>
              <h5>TypeScript</h5>
              <p className="text-muted">Advanced</p>
              <p className="text-muted">
                Strong typing, scalable codebases, interfaces & generics
              </p>
            </div>
          </div>
        </div>

        {/* SUPPORTING SKILLS */}
        <div className="glass-panel mb-5">
          <h4 className="mb-4">Supporting Frontend Skills</h4>

          <div className="grid-3">
            <div>
              <h5>JavaScript (ES6+)</h5>
              <p className="text-muted">Advanced</p>
            </div>

            <div>
              <h5>HTML5 / CSS3 / SCSS</h5>
              <p className="text-muted">Advanced</p>
            </div>

            <div>
              <h5>UI Libraries</h5>
              <p className="text-muted">
                PrimeNG, Angular Material, Bootstrap, React Bootstrap
              </p>
            </div>
          </div>
        </div>

        {/* DATA & INTEGRATION */}
        <div className="glass-panel mb-5">
          <h4 className="mb-4">State, APIs & Real-Time Systems</h4>

          <div className="grid-3">
            <div>
              <h5>RxJS</h5>
              <p className="text-muted">
                Observables, streams, real-time data handling
              </p>
            </div>

            <div>
              <h5>REST APIs</h5>
              <p className="text-muted">
                Secure API integration, error handling
              </p>
            </div>

            <div>
              <h5>WebSocket</h5>
              <p className="text-muted">
                Live data, device communication, dashboards
              </p>
            </div>
          </div>
        </div>

        {/* BACKEND & SYSTEMS */}
        <div className="glass-panel mb-5">
          <h4 className="mb-4">Backend & System Knowledge</h4>

          <div className="grid-3">
            <div>
              <h5>Node.js / Express</h5>
              <p className="text-muted">Proficient</p>
            </div>

            <div>
              <h5>MongoDB</h5>
              <p className="text-muted">Proficient</p>
            </div>

            <div>
              <h5>Kafka</h5>
              <p className="text-muted">Working Knowledge</p>
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="glass-panel">
          <h4 className="mb-4">Tools & Workflow</h4>

          <div className="grid-3">
            <div>
              <h5>Version Control</h5>
              <p className="text-muted">Git, GitHub, GitLab</p>
            </div>

            <div>
              <h5>Development Tools</h5>
              <p className="text-muted">VS Code, Postman</p>
            </div>

            <div>
              <h5>Process</h5>
              <p className="text-muted">Agile / Scrum, Jira</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Skills;
