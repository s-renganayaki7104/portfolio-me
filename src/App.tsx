import "./App.css";

function App() {
   const scrollGallery = (direction) => {
    const gallery = document.getElementById("gallery");
    const cardWidth = gallery.querySelector(".project-card").offsetWidth;
    const gap = 30; // same as CSS gap
    gallery.scrollBy({
      left: direction * (cardWidth * 3 + gap * 3), // scroll 3 cards at a time
      behavior: "smooth"
    });
  };
  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <a href="#about">ABOUT ME</a>
          <a href="#works">MY WORKS</a>
        </div>
        <div className="nav-right">
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      {/* First Section */}
      <div className="first-section">
        <main className="main-title">
          <h1>PORTFOLIO</h1>
          <h2>by S Renganayaki</h2>
        </main>
        <div className="intro">
          <p>CSE student. </p>
            <p> Web apps. Full Stack. SWE. AI/ML.
          </p>
        </div>
      </div>

      {/* ABOUT ME */}
      <div id="about" className="about-me">
        <div className="about-left">
          <h1>ABOUT ME</h1>
        </div>
        <div className="about-right">
          <p>
            From algorithms to aesthetics.

          </p>
          <p>
            Developing web applications and AI experiments,
crafting interfaces that seamlessly balance function and style.</p>
<p>
Exploring new ideas, iterating quickly, and finding elegant solutions to complex problems.
Blending creativity and logic to build experiences that are both intuitive and engaging. Passionate about learning, experimenting, and pushing the boundaries of digital design.</p>
          
        </div>
      </div>

      {/* SECTION 2 - Centered Heading + Paragraph */}
      <div className="section2">
        <h1 className="section2-heading">Philosophy & Toolbox</h1>
        <p className="section2-para">Curious coder. Problem solver.</p>
        <p className="section2-para"> Driven by curiosity and problem-solving, I turn ideas into experiences.</p>
       <p className="section2-para4">
  <span className="tech-stack">
    TypeScript • React • Node.js • Express • MongoDB • Jest • Docker • AWS • Figma
  </span>
</p>

        <p className="section2-para4">
With a toolkit that spans modern web technologies, AI experimentation, and design principles, ideas are turned into experiences that are both functional and visually engaging.
        </p>
      </div>

      {/* SECTION 3 - Gallery / Carousel */}
      <div id="works" className="section3">
        <h1 className="section3-heading">MY WORKS</h1>
        <div className="project-gallery" id="gallery">
          <div className="project-card">
            {/* <img src="https://via.placeholder.com/300" alt="Project 1" /> */}
            <h3>Build a REST API with AWS Lambda & API Gateway</h3>
            <p>
              This project demonstrates how to build a serverless CRUD REST API using AWS Lambda functions and API Gateway.
            </p>
            <p className="tech-stack">AWS Lambda • API Gateway</p>
            <a href="https://github.com/s-renganayaki7104/AWS-RestlambdaAPI" >GitHub</a>
            
          </div>
          <div className="project-card">
            {/* <img src="https://via.placeholder.com/300" alt="Project 2" /> */}
            <h3>BuggedOut</h3>
            <p> Track. Debug. Done.</p>
            <p>
              Cloud-based full-stack bug tracking system with real-time updates, modular architecture, RESTful APIs, and CI/CD pipeline integration for agile DevOps workflows.
            </p>
            <p className="tech-stack"> Spark • Firebase • TypeScript 
            </p>
            <a href="https://github.com/s-renganayaki7104/bug-tracker">GitHub</a>
          </div>
          <div className="project-card">
            {/* <img src="https://via.placeholder.com/300" alt="Project 3" /> */}
            <h3>Scheduler</h3>
            <p>
              Simulation of CPU Scheduling Algorithms in Java. It demonstrates how different scheduling strategies impact process execution in an operating system. 
            </p>
            <p className="tech-stack">Java • OS </p>
            <a href="https://github.com/s-renganayaki7104/Scheduler">GitHub</a>
            
          </div>
          <div className="project-card">
           {/*  <img src="https://via.placeholder.com/300" alt="Project 4" /> */}
            <h3>Rexhart</h3>
              <p>Online OCR Receipt Manager</p>
            <p>
             Upload receipts and instantly extract key information like date, vendor, total, and line items.
Designed to simplify expense tracking by turning images and PDFs into structured data.
            </p>
            <p className="tech-stack">TypeScript • React • Bootstrap • Tesseract.js</p>
            <a href="https://github.com/s-renganayaki7104/ocr_recog">GitHub</a>
          </div>
          <div className="project-card">
            {/* <img src="https://via.placeholder.com/300" alt="Project 3" /> */}
            <h3>Boxing Punch Strength</h3>
            <p>A machine learning model that predicts the strength category of a punch based on input parameters like speed and force. The neural network uses TensorFlow/Keras to classify punches into predefined strength levels (e.g., weak, medium, strong).
            </p>
            <p className="tech-stack">Python </p>
            <a href="https://github.com/s-renganayaki7104/boxing-punch-strength
">GitHub</a>
          </div>
        </div>
      <div className="project-gallery-wrapper">
  <div id="gallery" className="project-gallery">
    {/* Project Cards Here */}
  </div>
  <div className="gallery-controls">
    <button className="gallery-btn" onClick={() => scrollGallery(-1)}>◀</button>
    <button className="gallery-btn" onClick={() => scrollGallery(1)}>▶</button>
  </div>
</div>


      </div>

      {/* CONTACT ME Section */}
     {/* CONTACT ME Section */}
<div id="contact" className="contact-section">
  <div className="contact-container">
    <h1 className="contact-title">S RENGANAYAKI</h1>
    <div className="contact-info">
      <h3>CONTACT</h3>
      <p> <a href="srenganayaki.7104@gmail.com">srenganayaki.7104@gmail.com</a></p>
      <p>+91 9008604468</p>
      <p><a href="https://www.linkedin.com/in/s-renganayaki-9375a7254/" target="_blank" rel="noreferrer">LinkedIn</a></p>
      <p><a href="https://github.com/s-renganayaki7104" target="_blank" rel="noreferrer">GitHub</a></p>
    </div>
  </div>
</div>


    </div>
  );
}

export default App;
