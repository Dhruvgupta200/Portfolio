import PageWrapper from "../components/PageWrapper";

const Projects = () => {
  return (
    <PageWrapper>
      <section className="section">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            My <span>Projects</span>
          </h2>
          <p className="section-desc">
            Enterprise-grade applications built for real-world usage
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid-3">
          {/* Project 1 */}
          <div className="project-card">
            <h4>Smartbox Terminal Application</h4>
            <p className="text-muted">
              Desktop application enabling secure parcel drop-off and pickup
              through smart lockers in real-time logistics environments.
            </p>

            <ul className="text-muted mt-3">
              <li>Managed 500+ smart parcel lockers</li>
              <li>Integrated barcode scanner, camera & IoT hardware</li>
              <li>Implemented real-time WebSocket communication</li>
              <li>Handled critical production issues with 100% uptime</li>
            </ul>

            <div className="mt-3">
              <span className="skill-tag">Angular</span>
              <span className="skill-tag">Electron</span>
              <span className="skill-tag">RxJS</span>
              <span className="skill-tag">WebSocket</span>
              <span className="skill-tag">IoT</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h4>Smartbox Admin Dashboard</h4>
            <p className="text-muted">
              Web-based admin dashboard for monitoring, managing, and configuring
              large-scale smart locker systems.
            </p>

            <ul className="text-muted mt-3">
              <li>Controlled 1000+ lockers remotely</li>
              <li>Built reusable PrimeNG UI components</li>
              <li>Integrated REST APIs with authentication</li>
              <li>Reduced manual operations by 40%</li>
            </ul>

            <div className="mt-3">
              <span className="skill-tag">Angular</span>
              <span className="skill-tag">PrimeNG</span>
              <span className="skill-tag">REST API</span>
              <span className="skill-tag">RxJS</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <h4>Build Manager System</h4>
            <p className="text-muted">
              Centralized system for automated build creation, versioning, and
              deployment across multiple environments.
            </p>

            <ul className="text-muted mt-3">
              <li>Automated build and release workflows</li>
              <li>Implemented delta updates to reduce bandwidth usage</li>
              <li>Real-time build status using WebSockets</li>
              <li>Improved deployment efficiency significantly</li>
            </ul>

            <div className="mt-3">
              <span className="skill-tag">Angular</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Kafka</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Electron</span>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="section-divider" />

        <div className="glass-panel">
          <h4 className="mb-3">Project Impact</h4>

          <div className="grid-3">
            <div>
              <h3>500+</h3>
              <p className="text-muted">Smart Lockers Managed</p>
            </div>
            <div>
              <h3>30%</h3>
              <p className="text-muted">Operational Efficiency Improved</p>
            </div>
            <div>
              <h3>25%</h3>
              <p className="text-muted">Bug Resolution Time Reduced</p>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="section-divider" />

        <div className="glass-panel text-center">
          <h4>Want to see more?</h4>
          <p className="text-muted mt-2">
            I enjoy working on complex frontend problems, scalable UI systems,
            and performance-focused applications.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Projects;
