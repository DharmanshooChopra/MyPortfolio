import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>RD Info Technology</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a telecom churn prediction solution using Python and Logistic Regression with feature engineering,
              performed EDA and data preprocessing using Pandas and SQL, and built interactive dashboards in Power BI
              and Excel to support data-driven decision-making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>Evolutionary Computation Enterprises</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Engineered a reinforcement learning-based image classification system using Python, Q-learning, and ε-greedy
              exploration, designing custom reward functions and building an end-to-end training pipeline for adaptive policy
              optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
