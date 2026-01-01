import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
      <section className="section">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            Contact <span>Me</span>
          </h2>
          <p className="section-desc">
            Let’s connect and build something great together
          </p>
        </div>

        {/* Contact Card */}
        <div className="glass-panel contact-card">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:dhruv.gupta6142@gmail.com"
              className="nav-link"
            >
              dhruv.gupta6142@gmail.com
            </a>
          </p>

          <p className="mt-3">
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/dhruv-gupta2001"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              linkedin.com/in/dhruv-gupta2001
            </a>
          </p>

          <p className="mt-3">
            💻 GitHub:{" "}
            <a
              href="https://github.com/Dhruvgupta200"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              github.com/Dhruvgupta200
            </a>
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
