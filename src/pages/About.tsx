import PageWrapper from "../components/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <section className="section">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <p className="section-desc">
            Frontend Engineer focused on scalable, high-performance applications
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid-2">
          {/* Left Content */}
          <div className="glass-panel">
            <h4 className="mb-3">Who I Am</h4>
            <p>
              I’m <strong>Dhruv Gupta</strong>, a Frontend Software Engineer with
              <strong> 3+ years of experience</strong> building enterprise-grade
              web and desktop applications. I currently work at
              <strong> FCI-CCM Private Limited</strong>, where I develop
              large-scale systems used in real-world logistics and IoT
              environments.
            </p>

            <p className="text-muted mt-3">
              My core expertise lies in <strong>Angular</strong>, and I actively
              build modern interfaces using <strong>React + TypeScript</strong>.
              I focus on clean architecture, reusable components, and
              performance-optimized UI that scales with business needs.
            </p>
          </div>

          {/* Right Content */}
          <div className="glass-panel">
            <h4 className="mb-3">What I Do Best</h4>
            <ul className="text-muted">
              <li>Design and build scalable frontend architectures</li>
              <li>Create reusable UI components and design systems</li>
              <li>Integrate REST APIs & real-time WebSocket services</li>
              <li>Optimize application performance and load time</li>
              <li>Collaborate with backend, QA, and DevOps teams</li>
            </ul>
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="section-divider" />

        <div className="glass-panel">
          <h4 className="mb-3">Experience Highlights</h4>

          <div className="grid-3">
            <div>
              <h3>500+</h3>
              <p className="text-muted">Smart Lockers Managed</p>
            </div>

            <div>
              <h3>30%</h3>
              <p className="text-muted">Efficiency Improvement</p>
            </div>

            <div>
              <h3>25%</h3>
              <p className="text-muted">Bug Resolution Faster</p>
            </div>
          </div>
        </div>

        {/* Work Philosophy */}
        <div className="section-divider" />

        <div className="glass-panel">
          <h4 className="mb-3">My Work Philosophy</h4>
          <p className="text-muted">
            I believe great frontend development is a balance between
            <strong> clean code</strong>, <strong>performance</strong>, and
            <strong> user experience</strong>. I enjoy solving complex UI
            problems, improving existing systems, and continuously learning new
            tools and frameworks.
          </p>

          <p className="text-muted mt-3">
            I follow Agile practices, write maintainable code, and take ownership
            of features from design to deployment.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
