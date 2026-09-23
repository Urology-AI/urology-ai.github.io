---
layout: default
title: "e-Biopsy"
permalink: /projects/e-biopsy/
---

[← All projects]({{ "/projects" | relative_url }})

# e-Biopsy

e-Biopsy is the next step after ePSA. For a man whose PSA was raised and who has had an MRI, it estimates the chance of a prostate cancer that needs treatment (Grade Group 2 or higher) and helps him prepare for the biopsy conversation with his urologist. It supports shared decision-making; it does not make the decision.

It asks for three things, all found on a standard PSA report and MRI report:

1. The latest **PSA** result.
2. The MRI **PI-RADS** score.
3. The **prostate volume** (optional, but it makes the estimate more accurate).

It has a **patient view**, a one-minute guided flow in plain language, and a **clinician view** for reviewing several patients at once. Nothing entered is stored.

*Created by* **Aditya Dixit**, **Yashaswini Agarwal Gahalot**, and **Neelanchal Gahalot**  
*Validation by* **Kacagan Coskun** and **Pradhan Erena** — Clinical Fellows

[Launch e-Biopsy (Mount Sinai) →](https://biopsy.urology.edu.eu.org/)

## Walkthrough

An example patient: PSA 6.2 ng/mL, PI-RADS 4, prostate volume 45 mL.

<div class="walkthrough">
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/e-biopsy/01-welcome.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/e-biopsy/01-welcome.jpg" | relative_url }}" alt="Welcome" loading="lazy"></a>
  <figcaption><strong>Welcome.</strong> What e-Biopsy does and the three things it asks for.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/e-biopsy/02-psa.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/e-biopsy/02-psa.jpg" | relative_url }}" alt="PSA" loading="lazy"></a>
  <figcaption><strong>PSA.</strong> The most recent PSA result.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/e-biopsy/03-pirads.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/e-biopsy/03-pirads.jpg" | relative_url }}" alt="PI-RADS" loading="lazy"></a>
  <figcaption><strong>PI-RADS.</strong> The MRI score, with each option explained in plain language.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/e-biopsy/04-volume.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/e-biopsy/04-volume.jpg" | relative_url }}" alt="Prostate volume" loading="lazy"></a>
  <figcaption><strong>Prostate volume.</strong> Optional; improves the estimate.</figcaption>
</figure>
<figure class="walk-step">
  <a href="{{ "/assets/img/projects/e-biopsy/05-result.jpg" | relative_url }}" target="_blank" rel="noopener"><img src="{{ "/assets/img/projects/e-biopsy/05-result.jpg" | relative_url }}" alt="Result" loading="lazy"></a>
  <figcaption><strong>Result.</strong> A plain-language estimate and whether a biopsy is worth discussing.</figcaption>
</figure>
</div>

*e-Biopsy is not a diagnosis and does not replace medical advice. The patient shown is an example.*
