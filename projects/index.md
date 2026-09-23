---
layout: default
---

# Research Projects

The following projects are under active development.

## Clinical AI

### ePSA — Electronic PSA Tool

<img class="proj_thumb" src="{{ "/assets/img/projects/epsa/01-welcome.jpg" | relative_url }}" alt="">

An electronic decision-support tool built around PSA and clinical risk factors. ePSA helps clinicians and patients understand individualized risk at key decision points — from initial diagnosis through treatment selection and post-treatment surveillance.

*Developed by* **Aditya Dixit**  
**Daniel Ajabshir** — Clinical  
**Hannah Sur** — Literature  
**Yashaswini Agarwal** — Analysis  
**Henry Walker Jodka** — Collection

[Launch ePSA (Mount Sinai) →](https://epsa.mssm.edu) · [Public Version →](https://epsa.millionstrongmen.com/) · [See how it works →]({{ "/projects/epsa/" | relative_url }})

### e-Biopsy

<img class="proj_thumb" src="{{ "/assets/img/projects/e-biopsy/01-welcome.jpg" | relative_url }}" alt="">

The next step after ePSA. For a man whose PSA was raised and who has had an MRI, e-Biopsy estimates the chance of a prostate cancer that needs treatment and helps him prepare for the biopsy conversation with his urologist. Three inputs (PSA, PI-RADS, and optionally prostate volume), a plain-language patient view, and a clinician view for several patients at once.

*Created by* **Aditya Dixit**, **Yashaswini Agarwal Gahalot**, and **Neelanchal Gahalot**  
*Validation by* **Kacagan Coskun** and **Pradhan Erena** — Clinical Fellows

[Launch e-Biopsy (Mount Sinai) →](https://biopsy.urology.edu.eu.org/) · [See how it works →]({{ "/projects/e-biopsy/" | relative_url }})

### COMPASS Digital Twin

<img class="proj_thumb" src="{{ "/assets/img/projects/compass/00-welcome.jpg" | relative_url }}" alt="">

A patient-specific 3D digital twin of the prostate and surrounding anatomy, reconstructed from pre-operative MRI. COMPASS gives surgeons an interactive model of each patient's anatomy before they enter the OR — supporting surgical planning, nerve-sparing decisions, and trainee education.

*Software by* **Aditya Dixit** · *Models by* **Daniel Ajabshir**

[Launch COMPASS Digital Twin →](https://urology-ai.github.io/digital-twin/) · [See how it works →]({{ "/projects/compass/" | relative_url }})

### Active Surveillance Tool

<img class="proj_thumb" src="{{ "/assets/img/projects/active-surveillance/01-welcome.jpg" | relative_url }}" alt="">

A clinical decision-support tool for men with low- to intermediate-risk prostate cancer on active surveillance. The tool tracks PSA trends, biopsy history, and imaging findings over time to help clinicians identify when a patient's disease trajectory warrants reclassification and intervention — reducing both over-treatment and missed progression.

*Developed by* **Aditya Dixit** · *Data by* **Yashaswini Agarwal**

[Launch Active Surveillance Tool →](https://as.millionstrongmen.com/) · [See how it works →]({{ "/projects/active-surveillance/" | relative_url }})

## Surgical AI

### Surgery Copilot — Surgical Intelligence Platform

A custom internal annotation tool for robotic surgery video. The platform supports zero-shot object tracking through video using segmentation masks — powered by a SAM2 (Segment Anything Model 2) backend. Annotators can select an object in a single frame and have it tracked automatically across the full video, dramatically reducing the manual effort needed to build labeled datasets for surgical AI research.

*Led by* **Neelanchal Gahalot**
