import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],

  template: `
    <div class="portfolio">
      <!-- HEADER -->
      <header class="header">
        <div class="logo">Ibrahim Wahid</div>

        <nav class="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="/resume.pdf" download="resume.pdf" class="resume-btn"> Download CV </a>
      </header>

      <!-- HERO -->
      <section class="hero">
        <div class="left">
          <span class="badge"> Available For Remote Work </span>

          <h1>
            Senior <span>Flutter Developer</span><br />
            Building Modern Mobile Apps
          </h1>

          <p>
            I build scalable Flutter applications with clean architecture, Firebase integration,
            modern UI/UX and production-ready systems.
          </p>

          <div class="contact-info">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ibrahimwahid333@gmail.com"
              target="_blank"
            >
              📧 ibrahimwahid333@gmail.com
            </a>

            <a href="https://wa.me/923334342004" target="_blank"> 📱 +92 333 4342004 </a>
          </div>

          <div class="buttons">
            <button class="primary">Hire Me</button>

            <a href="/resume.pdf" download="resume.pdf" class="secondary"> Download Resume </a>
          </div>

          <!-- SOCIAL LINKS -->
          <div class="socials">
            <!-- <a href="https://github.com/Khaaaaaaaaaaaan" target="_blank"> GitHub </a> -->

            <a href="https://www.linkedin.com/in/ibrahim-wahid-3b5509243" target="_blank">
              LinkedIn
            </a>

            <a href="https://www.facebook.com/ibrahim.wahid.988" target="_blank"> Facebook </a>

            <a href="https://x.com/Ibrahimwahid18" target="_blank"> X (Twitter) </a>
          </div>

          <!-- STATS -->
          <div class="stats">
            <div class="card">
              <h2>5+</h2>
              <p>Years Experience</p>
            </div>

            <div class="card">
              <h2>8+</h2>
              <p>Apps Delivered</p>
              <span>(Self/Company)</span>
            </div>

            <div class="card">
              <h2>0</h2>
              <p>International Clients</p>
              <span>Searching ....</span>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="right">
          <div class="profile-card">
            <img src="/profile.jpg" alt="Ibrahim Wahid" />

            <h3>Ibrahim Wahid</h3>

            <span>Senior Flutter Developer</span>

            <div class="tech">
              <span>Flutter</span>
              <span>Firebase</span>
              <span>REST API</span>
              <span>GetX</span>
              <span>ASP.NET</span>
              <span>Node.js</span>
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
              Passionate Flutter developer focused on high-performance applications with scalable
              architecture and premium UI design.
            </p>

            <p>
              I specialize in Firebase, REST APIs, clean architecture, offline storage,
              authentication systems and business solutions.
            </p>
          </div>

          <div class="box">
            <h3>Services</h3>

            <ul>
              <li>Flutter Mobile Apps</li>
              <li>Firebase Integration</li>
              <li>REST APIs</li>
              <li>Admin Panels</li>
              <li>Play Store Deployment</li>
              <li>UI/UX Implementation</li>
              <li>Bug Fixing & Optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SKILLS -->
      <section id="skills" class="section">
        <h2 class="title">Skills</h2>

        <div class="grid-3">
          <div class="box">
            <h3>Flutter</h3>
            <p>Cross-platform mobile apps</p>
          </div>

          <div class="box">
            <h3>Firebase</h3>
            <p>Auth, Firestore, Analytics</p>
          </div>

          <div class="box">
            <h3>State Management</h3>
            <p>GetX, Bloc, Provider</p>
          </div>

          <div class="box">
            <h3>Backend APIs</h3>
            <p>REST APIs & Integrations</p>
          </div>

          <div class="box">
            <h3>Databases</h3>
            <p>Hive, SQLite, SQL</p>
          </div>

          <div class="box">
            <h3>Deployment</h3>
            <p>Play Store & App Store</p>
          </div>
        </div>
      </section>

      <!-- PROJECTS -->
      <section id="projects" class="section">
        <h2 class="title">Projects & Experience</h2>

        <div class="grid-3">
          <!-- GAMA -->
          <div class="box project">
            <h3>GAMA</h3>

            <p class="role">
              Shipping Line Project
              <span class="meta-tag company">Company: Office Automation Services</span>
            </p>

            <div class="desc">
              Flutter mobile app for shipping operations, tracking and workflow automation.
            </div>

            <div class="tags">
              <span>Flutter</span>
              <span>Android</span>
              <span>iOS</span>
            </div>
          </div>

          <!-- CSUL -->
          <div class="box project">
            <h3>CSUL</h3>

            <p class="role">
              Shipping Line Project
              <span class="meta-tag company">Company: Office Automation Services</span>
            </p>

            <div class="desc">
              Logistics and shipment management system with real-time tracking features.
            </div>

            <div class="tags">
              <span>Flutter</span>
              <span>Android</span>
              <span>iOS</span>
            </div>
          </div>

          <!-- CTRACK -->
          <div class="box project">
            <h3>CTRACK</h3>

            <p class="role">
              Tracking System
              <span class="meta-tag company">Company: Office Automation Services</span>
            </p>

            <div class="desc">
              Fleet and shipment tracking system with live updates and reporting.
            </div>

            <div class="tags">
              <span>Flutter</span>
              <span>GPS Tracking</span>
              <span>API Integration</span>
            </div>
          </div>

          <!-- VISUAL MUSLIMS -->
          <div class="box project">
            <h3>Visual Muslims Goal & Habit</h3>

            <p class="role">
              Islamic Habit Tracking App
              <span class="meta-tag company">Company: DoozieLabs</span>
            </p>

            <div class="desc">
              Goal tracking and habit-building app for Islamic lifestyle improvement.
            </div>

            <div class="tags">
              <span>Flutter</span>
              <span>Android</span>
              <span>iOS</span>
            </div>
          </div>

          <!-- SALAHPRO -->
          <div class="box project">
            <h3>SalahPro</h3>

            <p class="role">
              Prayer Timing App
              <span class="meta-tag company">Company: DoozieLabs</span>
            </p>

            <div class="desc">Prayer timing, adhkar, and namaz tracking with notifications.</div>

            <div class="tags">
              <span>Flutter</span>
              <span>Android</span>
              <span>iOS</span>
              <span>Web</span>
            </div>
          </div>

          <!-- BRMS WEB -->
          <div class="box project">
            <h3>BRMS (Web Admin Panel)</h3>

            <p class="role">
              ERP System
              <span class="meta-tag self">Self Developed</span>
            </p>

            <div class="desc">
              Business ERP system for inventory, invoices and reporting dashboard.
            </div>

            <div class="tags">
              <span>Angular</span>
              <span>ERP</span>
              <span>Web</span>
            </div>
          </div>

          <!-- BRMS MOBILE -->
          <div class="box project">
            <h3>BRMS Mobile App</h3>

            <p class="role">
              ERP Mobile App
              <span class="meta-tag self">Self Developed</span>
            </p>

            <div class="desc">Native Android ERP mobile application for field operations.</div>

            <div class="tags">
              <span>Java</span>
              <span>Android</span>
              <span>ERP</span>
            </div>
          </div>

          <!-- ECOMMERCE -->
          <div class="box project">
            <h3>E-Commerce Web App</h3>

            <p class="role">
              Online Store System
              <span class="meta-tag self">Self Developed</span>
            </p>

            <div class="desc">
              Full-featured eCommerce platform with admin panel and product management.
            </div>

            <div class="tags">
              <span>Angular</span>
              <span>Web</span>
              <span>Admin Panel</span>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <section id="contact" class="section">
        <div class="contact-box">
          <h2>Let's Build Something Amazing</h2>

          <p>Available for freelance, remote jobs and Flutter projects.</p>

          <div class="buttons">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ibrahimwahid333@gmail.com"
              target="_blank"
              class="primary"
            >
              Email Me
            </a>

            <a href="https://wa.me/923334342004" target="_blank" class="secondary"> WhatsApp </a>
          </div>
        </div>
      </section>
    </div>
  `,

  styles: [
    `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        background: #f7f9fc;
      }

      .portfolio {
        background: #f7f9fc;
        color: #0f172a;
      }

      /* HEADER */
      .header {
        position: sticky;
        top: 0;
        z-index: 1000;

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 20px 80px;

        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(14px);

        border-bottom: 1px solid #e2e8f0;
      }

      .logo {
        font-size: 26px;
        font-weight: 800;
        color: #2563eb;
      }

      .nav-links {
        display: flex;
        gap: 30px;
      }

      .nav-links a {
        text-decoration: none;
        color: #334155;
        font-weight: 600;
        transition: 0.3s;
      }

      .nav-links a:hover {
        color: #2563eb;
      }

      .resume-btn {
        background: #2563eb;
        color: white;
        padding: 12px 24px;
        border-radius: 12px;
        text-decoration: none;
        font-weight: 600;
      }

      /* HERO */
      .hero {
        min-height: 100vh;

        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 60px;

        align-items: center;

        padding: 10px 80px;
      }

      .badge {
        background: #c2f0f0;
        color: #1ed83a;

        padding: 10px 18px;
        border-radius: 999px;

        display: inline-block;
        font-weight: 700;
      }

      h1 {
        font-size: 64px;
        line-height: 1.1;
        margin-top: 25px;
      }

      h1 span {
        color: #2563eb;
      }

      p {
        margin-top: 20px;
        color: #64748b;
        line-height: 1.8;
        font-size: 18px;
      }

      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 25px;
      }

      .contact-info a {
        color: #334155;
        text-decoration: none;
        font-weight: 600;
      }

      /* BUTTONS */
      .buttons {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        margin-top: 30px;
      }

      .primary,
      .secondary {
        padding: 15px 26px;
        border-radius: 14px;
        text-decoration: none;
        border: none;
        cursor: pointer;
        font-weight: 700;
        transition: 0.3s;
      }

      .primary {
        background: #2563eb;
        color: white;
      }

      .secondary {
        background: white;
        color: #0f172a;
        border: 1px solid #dbe2ea;
      }

      .primary:hover,
      .secondary:hover {
        transform: translateY(-4px);
      }

      /* SOCIALS */
      .socials {
        display: flex;
        gap: 15px;
        margin-top: 30px;
        flex-wrap: wrap;
      }

      .socials a {
        text-decoration: none;
        color: #2563eb;
        font-weight: 700;
      }

      /* STATS */
      .stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 40px;
      }

      .card {
        background: white;
        padding: 25px;
        border-radius: 22px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      }

      .card h2 {
        color: #2563eb;
        font-size: 32px;
      }

      /* PROFILE */
      .profile-card {
        background: white;
        padding: 40px;
        border-radius: 30px;
        text-align: center;

        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
      }

      .profile-card img {
        width: 240px;
        height: 240px;
        object-fit: cover;
        border-radius: 30px;
      }

      .profile-card h3 {
        margin-top: 20px;
        font-size: 28px;
      }

      .profile-card span {
        color: #64748b;
      }

      .tech {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        margin-top: 30px;
      }

      .tech span {
        background: #eff6ff;
        color: #2563eb;

        padding: 10px 16px;
        border-radius: 999px;

        font-size: 14px;
        font-weight: 600;
      }

      /* SECTIONS */
      .section {
        padding: 20px 80px;
      }

      .title {
        font-size: 48px;
        margin-bottom: 50px;
      }

      .grid-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
      }

      .grid-3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
      }

      .box {
        background: white;
        padding: 35px;
        border-radius: 24px;

        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

        transition: 0.3s;
      }

      .box:hover {
        transform: translateY(-8px);
      }

      .box h3 {
        margin-bottom: 15px;
      }

      .box ul {
        padding-left: 20px;
        margin-top: 15px;
      }

      .box li {
        margin-bottom: 10px;
        color: #475569;
      }

      .tags {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 20px;
      }

      .tags span {
        background: #eff6ff;
        color: #2563eb;

        padding: 8px 14px;
        border-radius: 999px;
        font-size: 13px;
        font-weight: 600;
      }

      /* CONTACT */
      .contact-box {
        background: white;
        padding: 60px;
        border-radius: 30px;
        text-align: center;

        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
      }

      .contact-box h2 {
        font-size: 42px;
      }

      /* RESPONSIVE */
      @media (max-width: 1100px) {
        .hero,
        .grid-2,
        .grid-3,
        .stats {
          grid-template-columns: 1fr;
        }

        .header {
          padding: 20px;
          flex-direction: column;
          gap: 20px;
        }

        .hero {
          padding: 50px 20px;
        }

        .section {
          padding: 70px 20px;
        }

        h1 {
          font-size: 42px;
        }

        .title {
          font-size: 36px;
        }

        .profile-card img {
          width: 180px;
          height: 180px;
        }
      }
      .role {
        margin-top: 10px;
        font-weight: 600;
        color: #334155;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
      }

      .meta-tag {
        font-size: 12px;
        padding: 4px 10px;
        border-radius: 999px;
        font-weight: 600;
      }

      .meta-tag.company {
        background: #e0f2fe;
        color: #0284c7;
      }

      .meta-tag.self {
        background: #fef3c7;
        color: #b45309;
      }

      .desc {
        margin-top: 10px;
        font-size: 14px;
        color: #64748b;
        line-height: 1.6;
      }
    `,
  ],
})
export class App {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 900,
        once: true,
        offset: 80,
        easing: 'ease-out-cubic',
      });
    }
  }
}
