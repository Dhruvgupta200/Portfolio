import PageWrapper from "../components/PageWrapper";

const Experience = () => {
  return (
    <PageWrapper>
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            Work <span>Experience</span>
          </h2>
        </div>

        <div className="timeline">
          <div className="timeline-item glass-panel">
            <h4>Software Engineer</h4>
            <span className="text-muted">
              FCI-CCM Pvt. Ltd · Noida (2022 – Present)
            </span>
            <ul className="mt-3">
              <li>Developed Angular & React applications for IoT systems</li>
              <li>Managed 500+ smart parcel lockers</li>
              <li>Improved system efficiency by 30%</li>
              <li>Built reusable UI components & dashboards</li>
            </ul>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Experience;
