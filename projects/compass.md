---
layout: default
title: "COMPASS Digital Twin"
permalink: /projects/compass/
---

[← All projects]({{ "/projects" | relative_url }})

# COMPASS Digital Twin

A patient-specific 3D digital twin of the prostate and surrounding anatomy, built from pre-operative imaging. COMPASS gives surgeons an interactive model of each patient's anatomy before they enter the OR, supporting surgical planning, nerve-sparing decisions, and trainee education.

COMPASS brings together clinical data, MRI, micro-ultrasound, PSMA PET, and biopsy findings, mapped zone by zone onto the 3D prostate. From these it shows:

- **Pathology outcomes** expected at radical prostatectomy, such as extracapsular extension and seminal vesicle invasion.
- **Side-specific nerve-sparing guidance**, with the risk in each zone of each side.
- **Lymph node dissection planning.**
- **Functional outcomes**, including how lifestyle and medical factors relate to recovery of continence and potency.

*Software by* **Aditya Dixit** · *Models by* **Daniel Ajabshir**

[Launch COMPASS Digital Twin →](https://urology-ai.github.io/digital-twin/)

## Walkthrough

The built-in sample case "High-risk GG4, PSMA-heavy" from the public preview.

<div class="walkthrough">
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/compass/00-welcome.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/compass/00-welcome.jpg" | relative_url }}" alt="Welcome" loading="lazy"></a>
  <figcaption><strong>Welcome.</strong> The public preview opens with a sample case; the full tool is for Mount Sinai clinicians.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/compass/01-demographics.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/compass/01-demographics.jpg" | relative_url }}" alt="Demographics and labs" loading="lazy"></a>
  <figcaption><strong>Demographics and labs.</strong> Age, PSA, prostate volume, and optional genomic and functional scores.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/compass/02-zone-map.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/compass/02-zone-map.jpg" | relative_url }}" alt="Zone map" loading="lazy"></a>
  <figcaption><strong>Zone map.</strong> MRI, biopsy, micro-ultrasound, and PSMA findings placed on each zone of the prostate.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/compass/03-predictions.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/compass/03-predictions.jpg" | relative_url }}" alt="Surgical plan and 3D prostate" loading="lazy"></a>
  <figcaption><strong>Surgical plan and 3D prostate.</strong> Expected pathology, side-specific nerve-sparing grades, and the lymph node dissection decision, next to the patient-specific 3D prostate.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/compass/04-zone-risk.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/compass/04-zone-risk.jpg" | relative_url }}" alt="Risk by zone" loading="lazy"></a>
  <figcaption><strong>Risk by zone.</strong> The 3D model coloured by extracapsular-extension risk in each zone.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/compass/05-nerve-sparing-plan.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/compass/05-nerve-sparing-plan.jpg" | relative_url }}" alt="Nerve-sparing plan" loading="lazy"></a>
  <figcaption><strong>Nerve-sparing plan.</strong> The planned approach on each side, shown on the model.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/compass/06-functional-outcomes.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/compass/06-functional-outcomes.jpg" | relative_url }}" alt="Functional outcomes" loading="lazy"></a>
  <figcaption><strong>Functional outcomes.</strong> Lifestyle and medical factors linked to recovery of potency and continence.</figcaption>
</figure>
</div>

*COMPASS is a research tool. It is not a medical device and does not replace clinical judgment. The case shown is a sample.*
