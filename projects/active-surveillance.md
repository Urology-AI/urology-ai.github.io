---
layout: default
title: "Active Surveillance Tool"
permalink: /projects/active-surveillance/
---

[← All projects]({{ "/projects" | relative_url }})

# Active Surveillance Tool

A clinical decision-support tool for men with low- to intermediate-risk prostate cancer on active surveillance. It follows the Tewari Active Surveillance Program pathway, from the first positive biopsy through enrollment and ongoing monitoring, and helps clinicians see when a patient's disease trajectory warrants reclassification and intervention. The goal is to reduce both over-treatment and missed progression.

The tool has two sides:

- **Patients** get guideline-based education about active surveillance.
- **Clinicians** get the step-by-step clinical pathway (initial risk stratification, pre-enrollment verification, and the standard surveillance protocol) and a calculator that brings together biopsy, PSA, imaging, genomic, and PSMA findings into a surveillance recommendation and monitoring schedule.

*Developed by* **Aditya Dixit** · *Data by* **Yashaswini Agarwal**

[Launch Active Surveillance Tool →](https://as.millionstrongmen.com/)

## Walkthrough

An example patient with Grade Group 1 disease.

<div class="walkthrough">
<figure class="walk-step">
  <img src="{{ "/assets/img/projects/active-surveillance/01-welcome.jpg" | relative_url }}" alt="Welcome" loading="lazy">
  <figcaption><strong>Welcome.</strong> Separate entry points for patients and clinicians.</figcaption>
</figure>
<figure class="walk-step">
  <img src="{{ "/assets/img/projects/active-surveillance/02-pathway.jpg" | relative_url }}" alt="Clinical pathway" loading="lazy">
  <figcaption><strong>Clinical pathway.</strong> The Tewari Active Surveillance protocol as a guided, step-by-step pathway.</figcaption>
</figure>
<figure class="walk-step">
  <img src="{{ "/assets/img/projects/active-surveillance/03-calculator.jpg" | relative_url }}" alt="Calculator" loading="lazy">
  <figcaption><strong>Calculator.</strong> Biopsy and clinical data, with optional genomic, PSMA, MRI feature, and risk-factor sections.</figcaption>
</figure>
<figure class="walk-step">
  <img src="{{ "/assets/img/projects/active-surveillance/04-patient-entered.jpg" | relative_url }}" alt="Entering the patient" loading="lazy">
  <figcaption><strong>Entering the patient.</strong> Grade Group, cores, PSA, and prostate volume; PSA density is calculated automatically.</figcaption>
</figure>
<figure class="walk-step">
  <img src="{{ "/assets/img/projects/active-surveillance/05-result.jpg" | relative_url }}" alt="Result" loading="lazy">
  <figcaption><strong>Result.</strong> A surveillance recommendation with a clinical summary of the entered data.</figcaption>
</figure>
</div>

*For clinical decision support only; it does not replace clinical judgment. The patient shown is an example.*
