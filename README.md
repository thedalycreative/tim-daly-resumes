<div align="center">

<img src="assets/images/header.svg" alt="Timothy Francis Daly — Learning & Development · Training & Assessment" width="100%">

<br>

[![Live site](https://img.shields.io/website?url=https%3A%2F%2Fthedalycreative.github.io%2Ftim-daly-resumes%2F&label=live%20site&up_message=online&style=for-the-badge&color=0f766e)](https://thedalycreative.github.io/tim-daly-resumes/)
[![GitHub Pages](https://img.shields.io/github/deployments/thedalycreative/tim-daly-resumes/github-pages?label=pages&style=for-the-badge&logo=github)](https://github.com/thedalycreative/tim-daly-resumes/deployments)
[![Last commit](https://img.shields.io/github/last-commit/thedalycreative/tim-daly-resumes?style=for-the-badge&color=14b8a6)](https://github.com/thedalycreative/tim-daly-resumes/commits/main)

![TAE40122](https://img.shields.io/badge/TAE40122-Cert%20IV%20Training%20%26%20Assessment-0f766e?style=flat-square)
![Perth WA](https://img.shields.io/badge/based%20in-Perth%2C%20WA-fbbf24?style=flat-square)
![Open to work](https://img.shields.io/badge/status-open%20to%20L%26D%20roles-22c55e?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![A4 PDF](https://img.shields.io/badge/PDF-A4%20print--ready-dc2626?style=flat-square&logo=adobeacrobatreader&logoColor=white)
![Paper jams](https://img.shields.io/badge/paper%20jams-0-64748b?style=flat-square)

<br>

<img src="assets/images/hello.gif" alt="Cartoon Tim says: G'day! I'm Tim. I build the training I deliver." width="560">

</div>

---

## 👋 What's this?

The online home of my resumes. I'm a TAE40122-qualified trainer in Perth who builds the digital learning materials I teach from. This repo is the same idea applied to job hunting: a resume that is also a small, tidy website.

| Resume | Best for | View online | Download |
|---|---|---|---|
| 🎓 **Learning & Development** | L&D, training, capability and LMS roles | [ld-resume.html](https://thedalycreative.github.io/tim-daly-resumes/ld-resume.html) | [PDF · 3 pages](assets/pdf/Tim-Daly-Resume-Learning-and-Development.pdf) |
| 📚 **Master** | The full story: every role, unit and award | [master-resume.html](https://thedalycreative.github.io/tim-daly-resumes/master-resume.html) | [PDF · 5 pages](assets/pdf/Tim-Daly-Master-Resume.pdf) |

Or start at the landing page: **[thedalycreative.github.io/tim-daly-resumes](https://thedalycreative.github.io/tim-daly-resumes/)**

---

## 📸 Screenshots

<div align="center">
<img src="assets/images/demo.gif" alt="Scrolling from the landing page through the L&D resume" width="560">
<br><sub>The tour: landing page, then a scroll through the L&D resume.</sub>
</div>

<br>

| Landing page | L&D resume |
|---|---|
| <img src="assets/images/screenshots/landing.png" alt="Landing page with both resumes" width="420"> | <img src="assets/images/screenshots/ld-resume.png" alt="Learning and Development resume" width="420"> |
| **Master resume** | **On a phone** |
| <img src="assets/images/screenshots/master-resume.png" alt="Master resume" width="420"> | <img src="assets/images/screenshots/mobile.png" alt="L&D resume on a phone" width="200"> |

---

## ✨ Features

- **Two resumes, one look.** A focused 3-page L&D version and a 5-page master with the full history.
- **Print-ready.** Each page has *Download PDF* and *Print* buttons, plus A4 print styles that keep sections from splitting awkwardly across pages.
- **Real logos, real links.** Employer logos and live links to the learning hubs and tools I've built.
- **Light and fast.** Plain HTML, CSS and a little JavaScript. No frameworks, no trackers, no cookie banner.
- **Accessible.** Semantic headings, alt text, good contrast and keyboard-friendly buttons.

---

## 🗂️ Structure

```
tim-daly-resumes/
├── index.html                 Landing page linking both resumes
├── ld-resume.html             Learning & Development resume
├── master-resume.html         Master resume
├── assets/
│   ├── css/
│   │   └── styles.css         Shared styles, including A4 print rules
│   ├── js/
│   │   └── scripts.js         Print buttons; external links open in a new tab
│   ├── images/
│   │   ├── avatar.jpg         Illustrated portrait (landing page)
│   │   ├── logo.png           Personal logo (favicon)
│   │   ├── logos/             Employer and organisation logos
│   │   ├── screenshots/       Images used in this README
│   │   └── *.gif, header.svg  README animations
│   └── pdf/                   Downloadable PDF versions
└── README.md
```

---

## 🛠️ How it's built

1. **Content.** Every line comes from one master reference document that holds my verified dates, qualifications and examples. If it's not in there, it's not on the resume.
2. **Generate.** A script turns that content into the two HTML pages, with icons from [Bootstrap Icons](https://icons.getbootstrap.com/) inlined as SVG.
3. **Assemble.** Styles, scripts and logos are split into `assets/` so every page shares them.
4. **Print.** Headless Chrome (via [Playwright](https://playwright.dev/)) prints each page to an A4 PDF, so the PDFs always match the web pages.
5. **Deploy.** [GitHub Pages](https://pages.github.com/) serves the `main` branch. Push a change and it's live within a minute or two.

### Run it locally

No build step needed to view it:

```bash
git clone https://github.com/thedalycreative/tim-daly-resumes.git
cd tim-daly-resumes
python3 -m http.server 8000   # then open http://localhost:8000
```

Or just double-click `index.html`.

---

## 🖨️ Printing

<div align="center">
<img src="assets/images/printer.gif" alt="A printer smoothly prints the resume. Caption: No paper jams were harmed." width="380">
</div>

Use the **Download PDF** button on either resume, or **Print** and choose *Save as PDF*. The layout is tuned for A4 with backgrounds on. Your office printer's mood is outside the scope of this project.

---

## 📬 Contact

**Timothy (Tim) Daly** · Perth, Western Australia

📞 0414 265 050 · ✉️ [thetimdaly@gmail.com](mailto:thetimdaly@gmail.com) · 💼 [linkedin.com/in/thetimdaly](https://linkedin.com/in/thetimdaly) · 🌐 [thedalycreative.com](https://thedalycreative.com)

<div align="center">
<sub>Referees available on request. Cartoon Tim is not available for interviews, but real Tim is.</sub>
</div>
