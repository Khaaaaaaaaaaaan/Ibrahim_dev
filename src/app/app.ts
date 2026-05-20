import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="portfolio-container">
      <!-- HERO SECTION -->
      <section class="hero-section">
        <div class="overlay"></div>

        <nav class="navbar">
          <div class="logo">Flutter Developer</div>

          <div class="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div class="hero-content">
          <div class="hero-left">
            <div class="badge">Available for Remote Work</div>

            <h1>
              Senior <span>Flutter Developer</span>
              Building Modern Mobile Experiences
            </h1>

            <p>
              5+ years of experience creating scalable Flutter applications,
              prayer apps, business apps, backend integrations, Firebase,
              REST APIs, and production-ready mobile solutions.
            </p>

            <div class="hero-buttons">
              <button class="primary-btn">Hire Me</button>
              <button class="secondary-btn">View Projects</button>
            </div>

            <div class="stats-grid">
              <div class="stat-card">
                <h2>5+</h2>
                <p>Years Experience</p>
              </div>

              <div class="stat-card">
                <h2>20+</h2>
                <p>Apps Delivered</p>
              </div>

              <div class="stat-card">
                <h2>10+</h2>
                <p>International Clients</p>
              </div>
            </div>
          </div>

          <div class="hero-right">
            <div class="profile-card">
              <div class="profile-circle"></div>

              <div class="tech-stack">
                <div class="tech-chip">Flutter</div>
                <div class="tech-chip">Firebase</div>
                <div class="tech-chip">GetX</div>
                <div class="tech-chip">REST API</div>
                <div class="tech-chip">Node.js</div>
                <div class="tech-chip">ASP.NET</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ABOUT SECTION -->
      <section id="about" class="section about-section">
        <div class="section-title">
          <span>About Me</span>
          <h2>Professional Mobile App Developer</h2>
        </div>

        <div class="about-grid">
          <div class="about-card">
            <h3>Who I Am</h3>

            <p>
              I am a passionate Flutter developer focused on building
              high-performance and clean mobile applications for Android,
              iOS, and Web.
            </p>

            <p>
              I specialize in production-level Flutter architecture,
              Firebase integration, payment systems, REST APIs,
              authentication flows, offline storage, and responsive UI.
            </p>
          </div>

          <div class="about-card">
            <h3>What I Offer</h3>

            <ul>
              <li>Cross-platform Flutter apps</li>
              <li>Beautiful modern UI/UX</li>
              <li>Firebase integration</li>
              <li>API integration</li>
              <li>Performance optimization</li>
              <li>App Store & Play Store deployment</li>
              <li>Bug fixing & maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SKILLS SECTION -->
      <section id="skills" class="section skills-section">
        <div class="section-title">
          <span>My Skills</span>
          <h2>Technologies I Work With</h2>
        </div>

        <div class="skills-grid">
          <div class="skill-card">
            <h3>Flutter</h3>
            <p>Advanced mobile app development using Flutter & Dart.</p>
          </div>

          <div class="skill-card">
            <h3>Firebase</h3>
            <p>Authentication, Firestore, Notifications & Analytics.</p>
          </div>

          <div class="skill-card">
            <h3>State Management</h3>
            <p>GetX, Provider, Riverpod, Bloc architecture.</p>
          </div>

          <div class="skill-card">
            <h3>Backend APIs</h3>
            <p>REST APIs, ASP.NET Core, Node.js integration.</p>
          </div>

          <div class="skill-card">
            <h3>Database</h3>
            <p>Hive, SQLite, Firebase Firestore & SQL.</p>
          </div>

          <div class="skill-card">
            <h3>Deployment</h3>
            <p>Google Play Store, App Store & Web deployment.</p>
          </div>
        </div>
      </section>

      <!-- PROJECTS SECTION -->
      <section id="projects" class="section projects-section">
        <div class="section-title">
          <span>Projects</span>
          <h2>Featured Work</h2>
        </div>

        <div class="projects-grid">
          <div class="project-card">
            <div class="project-top"></div>

            <div class="project-content">
              <h3>SalahPlus App</h3>

              <p>
                Islamic prayer application with prayer times,
                adhkar, qadha tracker, offline audio,
                timezone support and Apple Watch sync.
              </p>

              <div class="project-tags">
                <span>Flutter</span>
                <span>Firebase</span>
                <span>GetX</span>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-top"></div>

            <div class="project-content">
              <h3>E-Commerce App</h3>

              <p>
                Full-feature shopping app with payment integration,
                authentication, order management and admin panel.
              </p>

              <div class="project-tags">
                <span>Flutter</span>
                <span>REST API</span>
                <span>Stripe</span>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-top"></div>

            <div class="project-content">
              <h3>Business Management System</h3>

              <p>
                Inventory, invoices, reports, payments,
                customer management and synchronization.
              </p>

              <div class="project-tags">
                <span>Flutter</span>
                <span>ASP.NET</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT SECTION -->
      <section id="contact" class="section contact-section">
        <div class="contact-box">
          <div>
            <span class="contact-small">Let's Work Together</span>
            <h2>Need a Flutter Developer?</h2>
            <p>
              Available for freelance, remote jobs,
              startup projects and long-term collaboration.
            </p>
          </div>

          <div class="contact-actions">
            <button class="primary-btn">Contact Me</button>
            <button class="secondary-btn">Download CV</button>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Inter, sans-serif;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: #050816;
    }

    .portfolio-container {
      background: linear-gradient(180deg, #050816 0%, #0b1023 100%);
      color: white;
      min-height: 100vh;
      overflow-x: hidden;
    }

    .hero-section {
      position: relative;
      min-height: 100vh;
      padding: 30px 80px;
      overflow: hidden;
    }

    .overlay {
      position: absolute;
      width: 500px;
      height: 500px;
      background: #4f46e5;
      filter: blur(160px);
      opacity: 0.25;
      top: -150px;
      right: -150px;
      border-radius: 50%;
    }

    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 2;
    }

    .logo {
      font-size: 28px;
      font-weight: 700;
      color: #7c8cff;
    }

    .nav-links {
      display: flex;
      gap: 30px;
    }

    .nav-links a {
      text-decoration: none;
      color: white;
      font-size: 15px;
      transition: 0.3s ease;
    }

    .nav-links a:hover {
      color: #7c8cff;
    }

    .hero-content {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;
  min-height: 85vh;
  position: relative;
  z-index: 2;

  animation: fadeUp 1s ease forwards;
}

    .badge {
      display: inline-flex;
      align-items: center;
      padding: 10px 18px;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.1);
      margin-bottom: 25px;
      font-size: 14px;
    }

   .hero-left h1 {
  font-size: 68px;
  line-height: 1.1;
  margin-bottom: 24px;
  font-weight: 800;

  animation: fadeUp 1.2s ease forwards;
}

.hero-left p {
  animation: fadeUp 1.4s ease forwards;
}

    .hero-left h1 span {
      color: #7c8cff;
    }



    .hero-buttons {
      display: flex;
      gap: 18px;
      margin-top: 35px;
    }

    .primary-btn,
    .secondary-btn {
      padding: 16px 28px;
      border-radius: 14px;
      font-size: 15px;
      cursor: pointer;
      transition: 0.3s ease;
      font-weight: 600;
      position: relative;
  overflow: hidden;

    }

    .primary-btn {
      border: none;
      background: linear-gradient(135deg, #6b7cff, #4f46e5);
      color: white;
      box-shadow: 0 10px 25px rgba(79, 70, 229, 0.35);


    }

    .primary-btn:hover {
      transform: translateY(-3px);
    }

    .secondary-btn {
      border: 1px solid rgba(255,255,255,0.15);
      background: rgba(255,255,255,0.04);
      color: white;
    }

    .secondary-btn:hover {
      background: rgba(255,255,255,0.08);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-top: 45px;
    }

    .stat-card {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      padding: 24px;
      border-radius: 24px;
      backdrop-filter: blur(12px);
    }

    .stat-card h2 {
      font-size: 34px;
      color: #7c8cff;
      margin-bottom: 10px;
    }

    .stat-card p {
      font-size: 14px;
      color: #cfd3ff;
    }

    .profile-card {
      position: relative;
      width: 100%;
      min-height: 540px;
      border-radius: 40px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      backdrop-filter: blur(14px);
       animation: float 6s ease-in-out infinite;
  transition: 0.4s ease;
    }

    .profile-circle {
      width: 260px;
      height: 260px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6b7cff, #8b5cf6);
      box-shadow: 0 25px 80px rgba(99,102,241,0.45);
    }

    .tech-stack {
      position: absolute;
      bottom: 30px;
      left: 30px;
      right: 30px;
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
    }

    .tech-chip {
      padding: 12px 18px;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.1);
      font-size: 14px;
    }

    .section {
      padding: 110px 80px;
    }

    .section-title {
      text-align: center;
      margin-bottom: 60px;
    }

    .section-title span {
      color: #7c8cff;
      font-size: 15px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .section-title h2 {
      font-size: 48px;
      margin-top: 12px;
    }

    .about-grid,
    .skills-grid,
    .projects-grid {
      display: grid;
      gap: 28px;
    }

    .about-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .skills-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .projects-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .about-card,
    .skill-card,
    .project-card {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 28px;
      padding: 32px;
      backdrop-filter: blur(10px);
      transition: 0.3s ease;
    }

    .about-card:hover,
    .skill-card:hover,
    .project-card:hover {
      transform: translateY(-6px);
      border-color: rgba(124,140,255,0.5);
    }

    .about-card h3,
    .skill-card h3,
    .project-content h3 {
      font-size: 24px;
      margin-bottom: 18px;
    }

    .about-card p,
    .skill-card p,
    .project-content p,
    .contact-box p,
    li {
      color: #cfd3ff;
      line-height: 1.8;
    }

    ul {
      padding-left: 20px;
    }

    .project-top {
      height: 200px;
      border-radius: 20px;
      background: linear-gradient(135deg, #4f46e5, #8b5cf6);
      margin-bottom: 24px;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 20px;
    }

    .project-tags span {
      padding: 10px 16px;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      font-size: 13px;
    }

    .contact-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
      background: linear-gradient(135deg, rgba(79,70,229,0.2), rgba(139,92,246,0.12));
      border: 1px solid rgba(255,255,255,0.08);
      padding: 50px;
      border-radius: 36px;
    }

    .contact-small {
      color: #7c8cff;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 14px;
    }

    .contact-box h2 {
      font-size: 42px;
      margin: 12px 0 18px;
    }

    .contact-actions {
      display: flex;
      gap: 18px;
    }

    @media (max-width: 1100px) {
      .hero-content,
      .about-grid,
      .skills-grid,
      .projects-grid,
      .contact-box {
        grid-template-columns: 1fr;
        flex-direction: column;
      }

      .hero-left h1 {
        font-size: 52px;
      }
    }

    @media (max-width: 768px) {
      .hero-section,
      .section {
        padding: 30px 20px;
      }

      .navbar {
        flex-direction: column;
        gap: 20px;
      }

      .nav-links {
        flex-wrap: wrap;
        justify-content: center;
      }

      .hero-left h1 {
        font-size: 42px;
      }

      .stats-grid,
      .skills-grid,
      .projects-grid {
        grid-template-columns: 1fr;
      }

      .contact-actions,
      .hero-buttons {
        flex-direction: column;
      }

      .profile-card {
        min-height: 420px;
      }
    }
  `]
})
export class App {}
