import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],

  template: `
    <div class="portfolio">
      <!-- HEADER -->
      <header class="header" data-aos="fade-down">
        <div class="logo">Ibrahim Wahid</div>

        <nav class="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="/resume.pdf" target="_blank" rel="noopener" class="resume-btn"> Resume </a>
        <!-- <a
          href="https://drive.google.com/file/d/11b5L7OdBOZzB7I9Fc_blACvEK7eVmJFi/view?usp=drivesdk"
          target="_blank"
          rel="noopener"
          class="resume-btn"
        >
          Resume
        </a> -->
      </header>

      <!-- HERO -->
      <section class="hero">
        <div class="left" data-aos="fade-up">
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
            <a href="#contact" class="primary">Hire Me</a>
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

            <!-- <div class="card">
              <h2>0</h2>
              <p>International Clients</p>
              <span>Searching ....</span>
            </div> -->
          </div>
        </div>

        <!-- RIGHT -->
        <div class="right" data-aos="fade-left">
          <div class="profile-card">
            <img src="/profile.jpg" alt="Ibrahim Wahid" />

            <h3>Ibrahim Wahid</h3>

            <span>Senior Flutter Developer</span>

            <div class="tech">
              <span>Flutter</span>
              <span>Firebase</span>
              <span>REST API</span>
              <span>GetX</span>
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
      <!-- EXPERIENCE SECTION -->
      <section id="experience" class="section">
        <h2 class="title">Experience</h2>

        <div class="grid-3">
          <!-- GAMA -->
          <div class="box-project">
            <h3 class="project-title">
              <img src="/gama_suite_logo.jpeg" alt="Gamasuite Mobile Logo" />
              <span>Gamasuite Mobile</span>
            </h3>

            <p class="role">
              Shipping Line Project
              <span class="meta-tag company">Company: Office Automation Services</span>
            </p>

            <div
              class="desc"
              (mouseenter)="
                showTooltip(
                  $event,
                  'Gama is a complete solution for small and medium-size forwarders that enables your customers to manage all their freight online. With pre-built integrations into leading TMS software (like CargoWise) and other logtech applications, gama is easy to implement and is connected with other major industry platforms and carriers.'
                )
              "
              (mousemove)="moveTooltip($event)"
              (mouseleave)="hideTooltip()"
            >
              Gama is a complete solution for small and medium-size forwarders that enables your
              customers to manage all their freight online. With pre-built integrations into leading
              TMS software (like CargoWise) and other logtech applications, gama is easy to
              implement and is connected with other major industry platforms and carriers.
            </div>
            <div class="links">
              <div *ngIf="true">
                <span class="label">Android:</span>
                <a
                  href="https://play.google.com/store/apps/details?id=com.oaspakistan.gama&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://play.google.com/store/apps/details?id=com.oaspakistan.gama&hl=en
                </a>
              </div>

              <div *ngIf="true">
                <span class="label"> iOS:</span>
                <a
                  href="https://apps.apple.com/us/app/gamasuite-mobile/id1627884065"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://apps.apple.com/us/app/gamasuite-mobile/id1627884065
                </a>
              </div>
            </div>
            <div class="tags">
              <span>Flutter</span>
              <span>Android</span>
              <span>iOS</span>
            </div>
          </div>

          <!-- CSUL -->
          <div class="box-project">
            <h3 class="project-title">
              <img src="/climax_csul.jpeg" alt="Climax Ultimate Logo" />
              <span>Climax Ultimate</span>
            </h3>

            <p class="role">
              Shipping Line Project
              <span class="meta-tag company">Company: Office Automation Services</span>
            </p>

            <div
              class="desc"
              (mouseenter)="
                showTooltip(
                  $event,
                  'Climax Shipping Ultimate Software is a powerful, all-in-one shipping management solution designed to streamline logistics operations. It offers advanced tools for tracking shipments, managing inventory, optimizing routes, and automating shipping processes to improve efficiency and reduce costs. With user-friendly interfaces and real-time analytics, Climax ensures seamless integration for businesses of all sizes, enhancing productivity and customer satisfaction.'
                )
              "
              (mousemove)="moveTooltip($event)"
              (mouseleave)="hideTooltip()"
            >
              Climax Shipping Ultimate Software is a powerful, all-in-one shipping management
              solution designed to streamline logistics operations. It offers advanced tools for
              tracking shipments, managing inventory, optimizing routes, and automating shipping
              processes to improve efficiency and reduce costs. With user-friendly interfaces and
              real-time analytics, Climax ensures seamless integration for businesses of all sizes,
              enhancing productivity and customer satisfaction.
            </div>
            <div class="links">
              <div *ngIf="true">
                <span class="label">Android:</span>
                <a
                  href="https://play.google.com/store/apps/details?id=com.oas.csul&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://play.google.com/store/apps/details?id=com.oas.csul&hl=en
                </a>
              </div>

              <!-- <div *ngIf="true">
                <span class="label"> iOS:</span>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a>
              </div> -->
            </div>

            <div class="tags">
              <span>Flutter</span>
              <span>Android</span>
              <!-- <span>iOS</span> -->
            </div>
          </div>

          <!-- CTRACK -->
          <div class="box-project ">
            <h3 class="project-title">
              <img src="/climax_ctrack.jpeg" alt="Climax NVOCC Logo" />
              <span>Climax NVOCC</span>
            </h3>

            <p class="role">
              Tracking System
              <span class="meta-tag company">Company: Office Automation Services</span>
            </p>

            <div
              class="desc"
              (mouseenter)="
                showTooltip(
                  $event,
                  'Climax NVOCC App: Your Global Logistics Solution Experience seamless logistics management with the Climax NVOCC Mobile App. Access all essential features with just one tap, no matter where you are in the world. Designed to enhance productivity and streamline operations, our app offers comprehensive solutions for managing bookings, inventory, Trading and communication.'
                )
              "
              (mousemove)="moveTooltip($event)"
              (mouseleave)="hideTooltip()"
            >
              Climax NVOCC App: Your Global Logistics Solution Experience seamless logistics
              management with the Climax NVOCC Mobile App. Access all essential features with just
              one tap, no matter where you are in the world. Designed to enhance productivity and
              streamline operations, our app offers comprehensive solutions for managing bookings,
              inventory, Trading and communication.
            </div>
            <div class="links">
              <div *ngIf="true">
                <span class="label">Android:</span>
                <a
                  href="https://play.google.com/store/apps/details?id=com.oaspakistan.nvocc&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://play.google.com/store/apps/details?id=com.oaspakistan.nvocc&hl=en
                </a>
              </div>

              <!-- <div *ngIf="true">
                <span class="label"> iOS:</span>
                <a
                  href="https://apps.apple.com/us/app/gamasuite-mobile/id1627884065"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://apps.apple.com/us/app/gamasuite-mobile/id1627884065
                </a>
              </div> -->
            </div>
            <div class="tags">
              <span>Flutter</span>
              <span>Android</span>
              <span>GPS Tracking</span>
              <span>API Integration</span>
            </div>
          </div>

          <!-- VISUAL MUSLIMS -->
          <div class="box-project">
            <h3 class="project-title">
              <img src="/vm_logo.png" alt="Visual Muslims Goal & Habit Logo" />
              <span>Visual Muslims Goal & Habit</span>
            </h3>

            <p class="role">
              Islamic Habit Tracking App
              <span class="meta-tag company">Company: DoozieLabs</span>
            </p>

            <div
              class="desc"
              (mouseenter)="
                showTooltip(
                  $event,
                  'Visual Muslim (VM) is a free Islamic app designed to help Muslims turn faith into consistent action through purpose-driven habits, personal goal setting, and smart daily reminders that keep you connected to your deen (faith) every day. It combines Islamic habits, goals, visual reminders, and progress tracking to support spiritual growth and intentional living.'
                )
              "
              (mousemove)="moveTooltip($event)"
              (mouseleave)="hideTooltip()"
            >
              Visual Muslim (VM) is a free Islamic app designed to help Muslims turn faith into
              consistent action through purpose-driven habits, personal goal setting, and smart
              daily reminders that keep you connected to your deen (faith) every day. It combines
              Islamic habits, goals, visual reminders, and progress tracking to support spiritual
              growth and intentional living.
            </div>
            <div class="links">
              <div *ngIf="true">
                <span class="label">Android:</span>
                <a
                  href="https://play.google.com/store/apps/details?id=com.visualmuslim.app&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://play.google.com/store/apps/details?id=com.visualmuslim.app&hl=en
                </a>
              </div>

              <div *ngIf="true">
                <span class="label"> iOS:</span>
                <a
                  href="https://apps.apple.com/us/app/visual-muslim-goals-habits/id6740770609"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://apps.apple.com/us/app/visual-muslim-goals-habits/id6740770609
                </a>
              </div>
            </div>
            <div class="tags">
              <span>Flutter</span>
              <span>Android</span>
              <span>iOS</span>
            </div>
          </div>

          <!-- SALAHPRO -->
          <div class="box-project ">
            <h3 class="project-title">
              <img src="/salah_pro.png" alt="SalahPro Logo" />
              <span>SalahPro</span>
            </h3>

            <p class="role">
              Prayer Timing App
              <span class="meta-tag company">Company: DoozieLabs</span>
            </p>

            <div
              class="desc"
              (mouseenter)="
                showTooltip(
                  $event,
                  'SalahPro is designed to help Muslims enhance their knowledge and practice of Islam. Easily find the Qibla direction no matter where you are and stay informed about the upcoming prayer times, including the time frames to perform each Salah.'
                )
              "
              (mousemove)="moveTooltip($event)"
              (mouseleave)="hideTooltip()"
            >
              SalahPro is designed to help Muslims enhance their knowledge and practice of Islam.
              Easily find the Qibla direction no matter where you are and stay informed about the
              upcoming prayer times, including the time frames to perform each Salah.
            </div>
            <div class="links">
              <div *ngIf="true">
                <span class="label">Android:</span>
                <a
                  href="https://play.google.com/store/apps/details?id=com.salahplus.app&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://play.google.com/store/apps/details?id=com.salahplus.app&hl=en
                </a>
              </div>

              <div *ngIf="true">
                <span class="label"> iOS:</span>
                <a
                  href="https://apps.apple.com/us/app/salah-pro/id6744323227"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://apps.apple.com/us/app/salah-pro/id6744323227
                </a>
              </div>
            </div>
            <div class="tags">
              <span>Flutter</span>
              <span>Firebase</span>
              <span>Android</span>
              <span>iOS</span>
              <span>Web</span>
            </div>
          </div>
        </div>
      </section>

      <!-- PROJECTS SECTION -->
      <section id="projects" class="section">
        <h2 class="title">Projects</h2>

        <div class="grid-3">
          <!-- BRMS WEB -->
          <div class="box-project">
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
          <div class="box-project">
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
          <div class="box-project">
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
        <div class="contact-box contact-grid">
          <!-- LEFT SIDE: DESCRIPTION -->
          <div class="contact-info" data-aos="fade-right">
            <h2>Turn Your Idea Into a Scalable Product</h2>

            <p>
              I specialize in building high-performance Flutter applications with clean
              architecture, Firebase integration, REST APIs, and production-ready systems.
            </p>

            <p>
              Whether you need a consultation, project discussion, or want to hire a dedicated
              Flutter developer, you can reach out using the form. I usually respond within 24
              hours.
            </p>

            <div class="contact-highlights">
              <div>✔ Flutter Expert</div>
              <div>✔ Firebase & Backend Integration</div>
              <div>✔ Production-Ready Apps</div>
              <div>✔ Clean Architecture</div>
            </div>
          </div>

          <!-- RIGHT SIDE: FORM -->
          <div class="contact-form" data-aos="fade-left">
            <input type="text" placeholder="Your Name" [(ngModel)]="contact.name" />

            <input type="email" placeholder="Your Email" [(ngModel)]="contact.email" />

            <select [(ngModel)]="contact.type">
              <option value="Consultation">Consultation</option>
              <option value="Discussion">Need Discussion</option>
              <option value="Hire">Want to Hire You</option>
            </select>
            <textarea
              class=""
              placeholder="Describe your project or requirement..."
              rows="5"
              [(ngModel)]="contact.description"
            ></textarea>
            <button class="primary" (click)="sendEmail()">Send Message</button>
          </div>
        </div>
      </section>
      <div
        class="global-tooltip"
        *ngIf="hoverTooltip.visible"
        [style.left.px]="hoverTooltip.x"
        [style.top.px]="hoverTooltip.y"
      >
        {{ hoverTooltip.text }}
      </div>
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
        background: #f8fafc;
        overflow-x: hidden;
      }

      .portfolio {
        background:
          radial-gradient(circle at top right, rgba(37, 99, 235, 0.08), transparent 25%),
          radial-gradient(circle at bottom left, rgba(99, 102, 241, 0.08), transparent 25%), #f8fafc;

        color: #0f172a;
        min-height: 100vh;
      }

      /* HEADER */
      .header {
        position: sticky;
        top: 0;
        z-index: 1000;

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 18px 80px;

        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(16px);

        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      }

      .logo {
        font-size: 28px;
        font-weight: 800;
        color: #2563eb;
        letter-spacing: -1px;
      }

      .nav-links {
        display: flex;
        gap: 30px;
        padding: 12px 24px;
        border-radius: 999px;

        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(12px);

        border: 1px solid rgba(255, 255, 255, 0.5);

        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
      }

      .nav-links a {
        text-decoration: none;
        color: #334155;
        font-weight: 600;
        transition: all 0.3s ease;
        position: relative;
      }

      .nav-links a::after {
        content: '';
        position: absolute;
        width: 0%;
        height: 2px;
        background: #2563eb;
        left: 0;
        bottom: -6px;
        transition: 0.3s;
      }
      .links {
        display: flex;
        gap: 12px;
        margin-top: 12px;
        flex-wrap: wrap;
      }

      .links a {
        font-size: 10px;
        font-weight: 700;
        color: #2563eb;
        text-decoration: none;
        padding: 6px 12px;
        border-radius: 8px;
        transition: 0.3s;
      }

      .links a:hover {
        transform: translateY(-2px);
      }
      .nav-links a:hover::after {
        width: 100%;
      }

      .nav-links a:hover {
        color: #2563eb;
      }

      .resume-btn {
        background: linear-gradient(135deg, #2563eb, #4f46e5);
        color: white;

        padding: 14px 26px;
        border-radius: 14px;

        text-decoration: none;
        font-weight: 700;

        box-shadow: 0 10px 30px rgba(37, 99, 235, 0.25);

        transition: all 0.35s ease;
      }

      .resume-btn:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 40px rgba(37, 99, 235, 0.35);
      }
      .eye-btn {
        position: absolute;
        top: 14px;
        right: 14px;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: rgba(37, 99, 235, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 16px;
        transition: 0.3s;
      }

      .eye-btn:hover {
        transform: scale(1.1);
        background: rgba(37, 99, 235, 0.2);
      }

      .box-project {
        display: flex;
        flex-direction: column;
        min-height: 320px;

        padding: 20px;
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(14px);
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 28px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
        transition: all 0.35s ease;
      }
      .tooltip-container {
        position: relative;
      }

      .tooltip {
        position: fixed;
        max-width: 350px;
        background: rgba(20, 20, 20, 0.95);
        color: #fff;
        padding: 12px 14px;
        border-radius: 12px;
        font-size: 12px;
        line-height: 1.5;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 9999;

        opacity: 0;
        transform: translateY(10px);
        transition: 0.15s ease;
        pointer-events: none;
      }

      /* HERO */
      .hero {
        min-height: 100vh;

        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: 70px;

        align-items: center;

        padding: 40px 80px;

        position: relative;
        overflow: hidden;
      }

      .hero::before {
        content: '';
        position: absolute;
        width: 550px;
        height: 550px;
        background: rgba(37, 99, 235, 0.12);
        filter: blur(120px);
        top: -120px;
        right: -100px;
        z-index: 0;
      }

      .hero::after {
        content: '';
        position: absolute;
        width: 350px;
        height: 350px;
        background: rgba(99, 102, 241, 0.1);
        filter: blur(120px);
        bottom: -100px;
        left: -100px;
        z-index: 0;
      }

      .hero > * {
        position: relative;
        z-index: 2;
      }

      .badge {
        background: rgba(34, 197, 94, 0.12);
        color: #16a34a;

        padding: 12px 20px;
        border-radius: 999px;

        display: inline-flex;
        align-items: center;
        gap: 8px;

        font-weight: 700;
        font-size: 14px;
      }

      h1 {
        font-size: 74px;
        line-height: 1.02;
        margin-top: 25px;
        font-weight: 800;
        letter-spacing: -3px;
      }

      h1 span {
        background: linear-gradient(135deg, #2563eb, #4f46e5);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      p {
        margin-top: 24px;
        color: #64748b;
        line-height: 1.9;
        font-size: 18px;
      }

      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 14px;
        margin-top: 28px;
      }

      .contact-info a {
        color: #334155;
        text-decoration: none;
        font-weight: 600;
        transition: 0.3s;
      }

      .contact-info a:hover {
        color: #2563eb;
      }

      /* BUTTONS */
      .buttons {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        margin-top: 35px;
      }

      .primary,
      .secondary {
        padding: 16px 30px;
        border-radius: 16px;

        text-decoration: none;
        border: none;

        cursor: pointer;
        font-weight: 700;

        transition: all 0.35s ease;
      }

      .primary {
        background: linear-gradient(135deg, #2563eb, #4f46e5);
        color: white;

        box-shadow: 0 12px 30px rgba(37, 99, 235, 0.25);
      }

      .secondary {
        background: rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(10px);

        color: #0f172a;
        border: 1px solid rgba(255, 255, 255, 0.5);
      }

      .primary:hover,
      .secondary:hover {
        transform: translateY(-5px);
      }

      .primary:hover {
        box-shadow: 0 20px 40px rgba(37, 99, 235, 0.35);
      }

      /* SOCIALS */
      .socials {
        display: flex;
        gap: 20px;
        margin-top: 35px;
        flex-wrap: wrap;
      }

      .socials a {
        text-decoration: none;
        color: #2563eb;
        font-weight: 700;
        transition: 0.3s;
      }

      .socials a:hover {
        transform: translateY(-2px);
      }

      /* STATS */
      .stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 22px;
        margin-top: 50px;
      }

      .card,
      .box,
      .profile-card,
      .contact-box {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(14px);

        border: 1px solid rgba(255, 255, 255, 0.4);

        border-radius: 28px;

        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);

        transition: all 0.35s ease;
      }

      .card:hover,
      .box:hover,
      .profile-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 60px rgba(37, 99, 235, 0.12);
      }

      .card {
        padding: 30px;
      }

      .card h2 {
        color: #2563eb;
        font-size: 34px;
        font-weight: 800;
      }

      .card p {
        margin-top: 10px;
      }

      /* PROFILE */
      .profile-card {
        padding: 40px;
        text-align: center;
      }

      .profile-card img {
        width: 260px;
        height: 260px;

        object-fit: cover;

        border-radius: 30px;

        transition: all 0.4s ease;

        box-shadow: 0 20px 50px rgba(37, 99, 235, 0.15);
      }

      .profile-card img:hover {
        transform: scale(1.03) rotate(-1deg);
      }

      .profile-card h3 {
        margin-top: 24px;
        font-size: 30px;
      }

      .profile-card span {
        color: #64748b;
        font-weight: 500;
      }

      .tech {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: center;
        margin-top: 30px;
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: center;
        margin-top: 30px;
      }
      .tech span,
      .tags span {
        background: rgba(37, 99, 235, 0.08);
        color: #2563eb;
        padding: 10px 16px;
        border-radius: 999px;

        font-size: 13px;
        font-weight: 700;
      }

      /* SECTIONS */
      .section {
        padding: 20px 80px;
      }

      .title {
        font-size: 56px;
        margin-bottom: 60px;
        font-weight: 800;
        letter-spacing: -2px;
      }

      .grid-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
      }

      .grid-3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        align-items: stretch;
      }

      .box {
        padding: 20px;
      }

      .box h3 {
        margin-bottom: 18px;
        font-size: 24px;
      }

      .box ul {
        padding-left: 20px;
        margin-top: 16px;
      }

      .box li {
        margin-bottom: 12px;
        color: #475569;
      }

      .role {
        margin-top: 12px;
        font-weight: 600;
        color: #334155;

        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
      }

      .meta-tag {
        font-size: 12px;
        padding: 6px 12px;
        border-radius: 999px;
        font-weight: 700;
      }

      .meta-tag.company {
        background: #dbeafe;
        color: #2563eb;
      }

      .meta-tag.self {
        background: #fef3c7;
        color: #b45309;
      }

      .desc {
        margin-top: 14px;
        font-size: 15px;
        color: #64748b;
        line-height: 1.8;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* ✅ 3 lines only */
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      /* CONTACT */
      .contact-box {
        padding: 70px;
        text-align: center;
      }

      .contact-box h2 {
        font-size: 48px;
        font-weight: 800;
      }
      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        align-items: center;
      }

      /* LEFT SIDE TEXT */
      .contact-info h2 {
        font-size: 42px;
        margin-bottom: 20px;
      }

      .contact-info p {
        margin-bottom: 15px;
        color: #64748b;
        line-height: 1.8;
      }

      /* HIGHLIGHTS */
      .contact-highlights {
        margin-top: 25px;
        display: grid;
        gap: 10px;
        color: #2563eb;
        font-weight: 600;
      }

      /* FORM */
      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .contact-form input,
      .contact-form textarea,
      .contact-form select {
        padding: 14px 16px;
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        font-size: 14px;
        outline: none;
      }

      /* RESPONSIVE */
      @media (max-width: 900px) {
        .contact-grid {
          grid-template-columns: 1fr;
        }
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
          padding: 100px 20px 60px;
        }

        .section {
          padding: 80px 20px;
        }

        h1 {
          font-size: 46px;
          line-height: 1.1;
        }

        .title {
          font-size: 38px;
        }

        .profile-card img {
          width: 200px;
          height: 200px;
        }

        .buttons {
          width: 100%;
        }

        .primary,
        .secondary,
        .resume-btn {
          width: 100%;
          text-align: center;
        }

        .nav-links {
          flex-wrap: wrap;
          justify-content: center;
        }

        .contact-box {
          padding: 40px 25px;
        }

        .contact-box h2 {
          font-size: 34px;
        }
      }
      .project-title {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 12px;
      }

      .project-title img {
        width: 40px;
        height: 40px;
        object-fit: contain;
        border-radius: 8px;
        flex-shrink: 0;
      }

      .project-title span {
        font-size: 1.2rem;
        font-weight: 700;
      }
      .global-tooltip {
        position: absolute;
        max-width: 380px;
        background: rgba(15, 23, 42, 0.95);
        color: #fff;
        padding: 12px 14px;
        border-radius: 12px;
        font-size: 12px;
        line-height: 1.6;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 99999;
        pointer-events: none;
        white-space: normal;
      }
    `,
  ],
})
export class App {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  hoverTooltip = {
    visible: false,
    text: '',
    x: 0,
    y: 0,
  };

  showTooltip(event: MouseEvent, text: string) {
    this.hoverTooltip.visible = true;
    this.hoverTooltip.text = text;
    this.moveTooltip(event);
  }

  moveTooltip(event: MouseEvent) {
    this.hoverTooltip.x = event.pageX + 15;
    this.hoverTooltip.y = event.pageY + 15;
  }

  hideTooltip() {
    this.hoverTooltip.visible = false;
  }
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
  contact = {
    name: '',
    email: '',
    description: '',
    type: 'Consultation',
  };
  sendEmail() {
    if (
      this.contact.name.trim() === '' ||
      this.contact.email.trim() === '' ||
      this.contact.description.trim() === ''
    ) {
      alert('Please fill in all fields before sending the message.');
      return;
    }
    const subject = `Portfolio Contact - ${this.contact.type}`;

    const body = `
Name: ${this.contact.name}
Email: ${this.contact.email}
Request Type: ${this.contact.type}
Description: ${this.contact.description}
`;

    const mailtoLink =
      `https://mail.google.com/mail/?view=cm&fs=1&to=ibrahimwahid333@gmail.com` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, '_blank');
  }
}
