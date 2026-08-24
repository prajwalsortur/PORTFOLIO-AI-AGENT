function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Programming & Data</h3>

          <div className="skill-tags">
            <span>Python</span>
            <span>SQL</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Matplotlib</span>
            <span>Excel</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>AI & Machine Learning</h3>

          <div className="skill-tags">
            <span>Scikit-learn</span>
            <span>TensorFlow</span>
            <span>PyTorch</span>
            <span>Machine Learning</span>
            <span>Generative AI</span>
            <span>Gemini AI</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Tools & Visualization</h3>

          <div className="skill-tags">
            <span>Power BI</span>
            <span>Tableau</span>
            <span>Streamlit</span>
            <span>Git</span>
            <span>VS Code</span>
            <span>Jupyter</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills