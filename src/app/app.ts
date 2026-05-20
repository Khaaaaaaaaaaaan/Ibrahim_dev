import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="portfolio">

      <!-- HERO -->
      <section class="hero">

        <div class="bg-glow"></div>

        <nav class="nav">
          <div class="logo">Flutter Developer</div>

          <div class="links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div class="hero-content">

          <div class="left">
            <span class="badge">Available for Remote Work</span>

            <h1>
              Senior <span>Flutter Developer</span><br />
              Building Modern Mobile Experiences
            </h1>

            <p>
              5+ years of experience creating scalable Flutter applications,
              prayer apps, business apps, backend integrations, Firebase,
              REST APIs, and production-ready mobile solutions.
            </p>

            <div class="buttons">
              <button class="primary">Hire Me</button>
              <button class="secondary">View Projects</button>
            </div>

            <div class="stats">
              <div class="card"><h2>5+</h2><p>Years Experience</p></div>
              <div class="card"><h2>20+</h2><p>Apps Delivered</p></div>
              <div class="card"><h2>10+</h2><p>International Clients</p></div>
            </div>
          </div>

          <div class="right">
            <div class="profile">
              <div class="circle"></div>

              <div class="tech">
                <span>Flutter</span>
                <span>Firebase</span>
                <span>GetX</span>
                <span>REST API</span>
                <span>Node.js</span>
                <span>ASP.NET</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ABOUT -->
      <section id="about" class="section">
        <h2 class="title">About Me</h2>

        <div class="grid-2">

          <div class="box">
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

          <div class="box">
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

      <!-- SKILLS -->
      <section id="skills" class="section">
        <h2 class="title">My Skills</h2>

        <div class="grid-3">
          <div class="box">Flutter <p>Advanced mobile development</p></div>
          <div class="box">Firebase <p>Auth, Firestore, Analytics</p></div>
          <div class="box">State Management <p>GetX, Provider, Bloc</p></div>
          <div class="box">Backend APIs <p>REST, ASP.NET, Node.js</p></div>
          <div class="box">Database <p>Hive, SQLite, Firestore</p></div>
          <div class="box">Deployment <p>Play Store & App Store</p></div>
        </div>
      </section>

      <!-- PROJECTS -->
      <section id="projects" class="section">
        <h2 class="title">Featured Projects</h2>

        <div class="grid-3">

          <div class="box project">
            <h3>SalahPlus App</h3>
            <p>Islamic prayer app with adhkar, qadha tracker, offline audio.</p>
            <div class="tags">
              <span>Flutter</span><span>Firebase</span><span>GetX</span>
            </div>
          </div>

          <div class="box project">
            <h3>E-Commerce App</h3>
            <p>Full shopping app with payments and admin panel.</p>
            <div class="tags">
              <span>Flutter</span><span>REST API</span><span>Stripe</span>
            </div>
          </div>

          <div class="box project">
            <h3>Business System</h3>
            <p>Inventory, invoices, reports, and customer management.</p>
            <div class="tags">
              <span>Flutter</span><span>ASP.NET</span><span>SQL</span>
            </div>
          </div>

        </div>
      </section>

      <!-- CONTACT -->
      <section id="contact" class="section">
        <div class="contact">

          <div>
            <h4>Let's Work Together</h4>
            <h2>Need a Flutter Developer?</h2>
            <p>Available for freelance and remote work.</p>
          </div>

          <div class="buttons">
            <button class="primary">Contact Me</button>
            <button class="secondary">Download CV</button>
          </div>

        </div>
      </section>

    </div>
  `,
  styles: [`

  /* RESET */
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

  .portfolio {
    color: white;
    background: linear-gradient(180deg, #050816, #0b1023);
    overflow-x: hidden;
  }

  /* HERO */
  .hero {
    min-height: 100vh;
    padding: 40px 80px;
    position: relative;
  }

  .bg-glow {
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, #4f46e5, transparent 70%);
    filter: blur(120px);
    top: -200px;
    right: -200px;
    opacity: 0.4;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 28px;
    font-weight: 700;
    color: #7c8cff;
  }

  .links {
    display: flex;
    gap: 25px;
  }

  .links a {
    color: white;
    text-decoration: none;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 60px;
    margin-top: 60px;
  }

  .badge {
    background: rgba(255,255,255,0.08);
    padding: 8px 16px;
    border-radius: 999px;
    display: inline-block;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 60px;
    line-height: 1.1;
  }

  h1 span {
    color: #7c8cff;
  }

  p {
    margin-top: 20px;
    color: #cfd3ff;
    line-height: 1.7;
  }

  /* BUTTONS */
  .buttons {
    display: flex;
    gap: 15px;
    margin-top: 30px;
    flex-wrap: wrap;
  }

  .primary, .secondary {
    padding: 14px 24px;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 600;
  }

  .primary {
    background: linear-gradient(135deg,#6b7cff,#4f46e5);
    border: none;
    color: white;
  }

  .secondary {
    background: transparent;
    border: 1px solid #ffffff22;
    color: white;
  }

  .primary:hover,
  .secondary:hover {
    transform: translateY(-4px);
  }

  /* STATS */
  .stats {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 15px;
    margin-top: 40px;
  }

  .card {
    background: rgba(255,255,255,0.05);
    padding: 20px;
    border-radius: 18px;
  }

  .card h2 {
    color: #7c8cff;
  }

  /* PROFILE */
  .profile {
    background: rgba(255,255,255,0.05);
    border-radius: 30px;
    padding: 40px;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(135deg,#6b7cff,#8b5cf6);
  }

  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 30px;
    justify-content: center;
  }

  .tech span {
    background: rgba(255,255,255,0.08);
    padding: 8px 14px;
    border-radius: 999px;
  }

  /* SECTIONS */
  .section {
    padding: 100px 80px;
  }

  .title {
    text-align: center;
    font-size: 42px;
    margin-bottom: 50px;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 30px;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 25px;
  }

  .box {
    background: rgba(255,255,255,0.05);
    padding: 30px;
    border-radius: 20px;
    transition: 0.3s;
  }

  .box:hover {
    transform: translateY(-8px);
    border: 1px solid #7c8cff55;
  }

  .tags {
    margin-top: 15px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .tags span {
    background: rgba(255,255,255,0.08);
    padding: 6px 12px;
    border-radius: 999px;
    font-size: 12px;
  }

  /* CONTACT */
  .contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    border-radius: 30px;
    background: linear-gradient(135deg, rgba(79,70,229,0.2), rgba(139,92,246,0.1));
  }

  /* RESPONSIVE */
  @media (max-width: 1100px) {
    .hero-content {
      grid-template-columns: 1fr;
    }

    .grid-2,
    .grid-3,
    .stats {
      grid-template-columns: 1fr;
    }

    h1 {
      font-size: 42px;
    }

    .contact {
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }

    .hero {
      padding: 30px 20px;
    }

    .section {
      padding: 60px 20px;
    }
  }

  `]
})
export class App {}