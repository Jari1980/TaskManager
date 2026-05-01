export default function About() {
  return (
    <div className="about-page">
      {/* Header */}
      <section className="about-header">
        <h1 className="admin-title">About This Project</h1>
        <p>
          A collaborative task management system built with React, TypeScript,
          and Spring Boot.
        </p>
      </section>

      {/* Links */}
      <section className="about-section">
        <h2>Resources</h2>

        <div className="about-links">
          <a
            href="http://localhost:8080/swagger-ui/index.html"
            target="_blank"
            rel="noreferrer"
          >
            OpenAPI Documentation
          </a>

          <a
            href="http://localhost:8080/v3/api-docs"
            target="_blank"
            rel="noreferrer"
          >
            API JSON Spec
          </a>
        </div>
      </section>

      {/* Team */}
      <section className="about-section">
        <h2>Team</h2>

        <div className="team-card">
          <h3>Community-built project</h3>

          <p className="team-subtitle">
            Contributors found each other on a random internet site
          </p>

          <h4>Proud GitHub members:</h4>

          <ul className="team-list">
            <li>gnabriola</li>
            <li>Ginseku</li>
            <li>Jari1980</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
