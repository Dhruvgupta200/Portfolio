import { useNavigate } from "react-router-dom";
import resume from '../assets/Dhruv_Gupta_Resume.pdf';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="hero container fade-up">
      <div>
        <span className="hero-badge">Frontend Software Engineer</span>

        <h1 className="hero-title">
          Building <span>Scalable</span> & Modern Web Applications
        </h1>

        <p className="hero-desc">
          I’m Dhruv Gupta, a frontend engineer with 3+ years of experience
          specializing in Angular, React, and TypeScript, delivering
          enterprise-grade user interfaces.
        </p>

        <div className="hero-actions">
          <button className="btn-main" onClick={() => navigate("/projects")}>
            View Projects
          </button>

          <a
            href={resume} download className="btn-resume"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="glass-panel">
        <h4>What I Do</h4>
        <p className="text-muted">
          • Angular & React applications<br />
          • Scalable UI architecture<br />
          • REST & WebSocket integration<br />
          • Performance optimization
        </p>
      </div>
    </section>
  );
};

export default Home;
