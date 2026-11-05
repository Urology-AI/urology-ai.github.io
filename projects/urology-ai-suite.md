---
layout: default
title: "Urology AI Suite"
permalink: /projects/urology-ai-suite/
---

[← All projects]({{ "/projects" | relative_url }})

# Urology AI Suite

The Urology AI Suite connects the lab's prostate cancer tools into one clinical pathway. A clinician follows one patient through each tool in turn. Each tool does its own step, then opens the next one with the case already filled in.

1. **ePSA**: baseline risk, then the actual PSA and MRI, compared with what was recommended.
2. **e-Biopsy**: the biopsy prediction from PSA, MRI and PSA density, then the actual pathology compared with the prediction.
3. **Active Surveillance or COMPASS**: Grade Group 1–3 continues to Active Surveillance, and Grade Group 4–5, or a decision for surgery, continues to surgical planning in COMPASS.

Predicted and actual results travel with the case, so every tool shows the same record. Patients can be compared side by side.

**Privacy.** A case holds clinical values only, with a random code so the same patient can be matched across tools. It has no field for a name, record number or date of birth. Cases move inside the link and are kept in the clinician's own browser. They can be moved between tools with an export file.

[Open the suite →](https://suite.urology.edu.eu.org/) *(Mount Sinai sign-in)*

## Walkthrough

The patients shown are examples.

<div class="walkthrough">
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/suite/01-suite-home.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/suite/01-suite-home.jpg" | relative_url }}" alt="Suite home" loading="lazy"></a>
  <figcaption><strong>Suite home.</strong> Start a new patient, or open saved cases.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/suite/02-pathway-full.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/suite/02-pathway-full.jpg" | relative_url }}" alt="The pathway" loading="lazy"></a>
  <figcaption><strong>The pathway.</strong> Each tool, what it asks, and where the biopsy result routes the case.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/suite/03-epsa.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/suite/03-epsa.jpg" | relative_url }}" alt="ePSA" loading="lazy"></a>
  <figcaption><strong>ePSA.</strong> Baseline, actual PSA and actual MRI, each compared with what was recommended, then on to e-Biopsy.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/suite/04-ebiopsy.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/suite/04-ebiopsy.jpg" | relative_url }}" alt="e-Biopsy" loading="lazy"></a>
  <figcaption><strong>e-Biopsy.</strong> The prediction, the actual pathology, how they compare, and where the case goes next.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/suite/05-as.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/suite/05-as.jpg" | relative_url }}" alt="Active Surveillance" loading="lazy"></a>
  <figcaption><strong>Active Surveillance.</strong> Pathology arrives filled in, with the record so far beside the guideline tier.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/suite/06-compass.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/suite/06-compass.jpg" | relative_url }}" alt="COMPASS" loading="lazy"></a>
  <figcaption><strong>COMPASS.</strong> The same patient and record, ready for surgical planning.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/suite/07-side-by-side.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/suite/07-side-by-side.jpg" | relative_url }}" alt="Patients side by side" loading="lazy"></a>
  <figcaption><strong>Patients side by side.</strong> Predicted against actual across patients, with how often each step agreed.</figcaption>
</figure>
</div>

*Decision support and education only. These tools do not diagnose prostate cancer or replace a clinician's judgment. Research use only.*
