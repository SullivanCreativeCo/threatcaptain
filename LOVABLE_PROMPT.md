Build a complete single-page landing site for "ThreatCaptain" — a quantitative cyber risk analysis platform. This is NOT a generic SaaS template. It should feel like a premium, dark, data-driven command center. Think Bloomberg Terminal meets cybersecurity. No stock photos. No generic hero images. No pricing section anywhere.

## Brand & Design System

- **Logo**: Use a compass icon (from lucide-react) next to the text "ThreatCaptain" where "Captain" is cyan colored
- **Color palette**: Deep navy background (#0a0e1a), cyan (#22d3ee) as primary accent, teal (#2dd4bf) as secondary, amber (#fbbf24) for warnings, red (#f87171) for critical risk, slate grays for text
- **Typography**: Inter font, tight tracking on headings, relaxed line-height on body
- **UI style**: Glass morphism cards (semi-transparent backgrounds with backdrop blur and subtle cyan borders), subtle grid pattern overlay on alternating sections, NO rounded bubbly shapes — everything should feel sharp, precise, tactical
- **Animations**: Use framer-motion for scroll-triggered fade-in-up reveals on every section. Stagger card animations. Keep it smooth and professional, not bouncy.

## Navigation (sticky, glass morphism)

Links: Platform, Methodology, Insights, About
CTA button: "Request Demo" (outlined, cyan)
Mobile: hamburger menu with animated slide-down panel
On scroll: background becomes more opaque glass effect

## Section 1: Hero

Split layout — left side text, right side a CUSTOM animated radar visualization.

Left side:
- Small pill badge: "Quantitative Cyber Risk Analysis" with a pulsing green dot
- Headline: "Navigate risk with precision, not guesswork" — the word "precision" should have a cyan-to-teal gradient
- Subtext: "ThreatCaptain transforms cyber risk into quantifiable financial metrics. Chart your course through the threat landscape with data-driven models that boards and executives actually understand."
- Two buttons: "Request a Demo" (solid cyan-to-teal gradient) and "Our Methodology" (outlined)
- Stats row below: "$4.2B+ Risk Quantified" | "10K+ Scenarios Modeled" | "98.6% Model Accuracy"

Right side:
- Build a canvas-based radar animation using a React useEffect with requestAnimationFrame
- Draw 4 concentric circle rings with very subtle cyan strokes
- Draw 8 radial lines from center
- Animate a rotating sweep line (like a real radar) with a trailing gradient cone
- Scatter 12-14 small dots ("blips") that slowly orbit — color them by risk: red for high risk (>0.7), amber for medium (0.4-0.7), cyan for low (<0.4)
- Each blip should have a subtle glow halo
- Small cyan dot at dead center

Gradient fade at the bottom of the hero transitioning into the next section.

## Section 2: Features (id="platform")

Section label: "The Platform" (cyan, uppercase, small)
Heading: "Risk analysis that speaks in dollars, not adjectives"
Subtext: "Move beyond heat maps and color-coded matrices. ThreatCaptain delivers probabilistic risk models that quantify exposure in terms your CFO and board already operate in."

6 cards in a 3-column grid (2 cols on tablet, 1 on mobile). Each card is a glass morphism card with:
- An icon in a small cyan-tinted square
- Bold white title
- Slate gray description text

The 6 features:
1. BarChart3 icon — "Financial Risk Quantification" — "Translate threat scenarios into dollar-value impact estimates using Monte Carlo simulations and loss exceedance curves."
2. Target icon — "Threat Scenario Modeling" — "Model specific attack vectors against your environment with probabilistic outcomes based on real-world breach data."
3. TrendingUp icon — "Risk Trend Analysis" — "Track how your risk posture evolves over time with continuous reassessment and dynamic scoring algorithms."
4. Shield icon — "Control Effectiveness Scoring" — "Measure the quantitative impact of each security control on your overall risk reduction portfolio."
5. PieChart icon — "Executive Reporting" — "Auto-generate board-ready reports that frame cyber risk in financial terms stakeholders understand."
6. Layers icon — "Multi-Framework Alignment" — "Map quantitative outputs to NIST CSF, ISO 27001, FAIR, and CIS — bridging compliance with real risk insight."

Stagger the card entrance animations.

## Section 3: Methodology (id="methodology")

Grid background pattern on this section.
Section label: "Methodology"
Heading: "From threat intel to financial clarity"
Subtext: "A rigorous four-phase process grounded in FAIR methodology and actuarial science, adapted for real-time cyber risk analysis."

4 cards in a horizontal row (stacks on mobile) connected by dashed lines between them:

1. "01" label — Crosshair icon — "Threat Identification" — "We catalog threat scenarios relevant to your industry, assets, and attack surface using curated threat intelligence feeds and MITRE ATT&CK mappings."
2. "02" — Calculator icon — "Probabilistic Modeling" — "Each scenario is modeled with probability distributions derived from breach frequency data, vulnerability telemetry, and control-state analysis."
3. "03" — LineChart icon — "Loss Quantification" — "Monte Carlo simulations produce loss exceedance curves that express risk as annualized financial exposure — not vague severity labels."
4. "04" — FileText icon — "Actionable Reporting" — "Results are distilled into decision-grade dashboards that map risk reduction to investment, enabling ROI-driven security strategy."

## Section 4: Dashboard Preview (id="insights")

Section label: "Risk Intelligence"
Heading: "Your threat landscape, quantified"

Build a fake dashboard mockup inside a glass card with a macOS-style window chrome (three colored dots: red, amber, green + a fake URL bar showing "threatcaptain.app/dashboard").

Inside the dashboard, two columns:

LEFT (2/3 width) — "Annualized Loss Exposure by Scenario":
5 horizontal bar charts that animate their width on scroll into view:
- "Ransomware (double extortion)" — $8.4M — red color
- "Business email compromise" — $4.2M — amber color
- "Cloud misconfiguration breach" — $6.1M — orange color
- "Insider threat (data exfil)" — $3.2M — cyan color
- "Third-party supply chain" — $5.8M — purple color

Each bar shows the label on the left, dollar amount on the right, and an animated fill bar beneath.

RIGHT (1/3 width):
- A semicircular gauge SVG showing a "Composite Risk Score" of 72 — the arc should animate from 0 to 72 on scroll, colored with a gradient from cyan (low) through amber (medium) to red (high)
- Below the gauge: a small glass card with "Key Metrics":
  - Total ALE: $27.7M
  - 95th Percentile Loss: $14.2M
  - Risk Reduction (YoY): -18.4%
  - Control Coverage: 84.2%

## Section 5: About (id="about")

Two-column layout.

LEFT — narrative text:
- Section label: "About ThreatCaptain"
- Heading: "Charting a course through uncertain waters"
- Paragraph 1: "Security teams have been navigating with broken compasses — qualitative risk ratings that don't translate to business decisions. ThreatCaptain provides the instruments to measure what matters: the probability and financial impact of the threats you face."
- Paragraph 2: "We don't sell fear. We deliver clarity. When you can put a number on risk, you can make rational decisions about where to invest, what to accept, and how to communicate it to the people who control budgets."

RIGHT — 4 credential cards (2x2 grid):
1. Award icon — "FAIR Certified" — "Our methodology is built on the Factor Analysis of Information Risk framework — the international standard for cyber risk quantification."
2. Users icon — "Built by Practitioners" — "Founded by CISOs and actuarial analysts who have managed risk programs for Fortune 500 enterprises and critical infrastructure."
3. Globe icon — "Industry Agnostic" — "Healthcare, financial services, energy, tech — our models are calibrated with sector-specific loss data for accurate quantification."
4. BookOpen icon — "Research-Backed" — "Every model parameter is grounded in peer-reviewed research, real breach data, and continuously validated against observed outcomes."

## Section 6: CTA (id="contact")

Centered text, large ambient cyan blur behind it.
Heading: "Ready to quantify your cyber risk?" — "cyber risk" in cyan gradient
Subtext: "Schedule a walkthrough with our team. We'll show you how ThreatCaptain models your specific threat landscape and translates it into financial terms your leadership team can act on."
Two buttons: "Schedule a Demo" (solid gradient, with ArrowRight icon) linking to mailto:demo@threatcaptain.com, and "Contact Sales" (outlined) linking to mailto:info@threatcaptain.com

## Footer

Simple single-row footer with border-top divider:
- Left: Compass icon + "ThreatCaptain" logo text
- Center: Platform, Methodology, About, Contact links
- Right: © 2025 ThreatCaptain. All rights reserved.

## Critical Instructions

- Do NOT add any pricing section, pricing cards, or pricing mentions anywhere
- Do NOT use placeholder images or stock photos — all visuals are built with code (canvas, SVG, CSS)
- Do NOT use default Lovable/shadcn card styles that look template-y — use the custom glass morphism style described above
- Every section should animate in on scroll using framer-motion
- The radar canvas must be a real animated canvas element, not a static image
- Use lucide-react for all icons
- Make it fully responsive
- The overall feel should be: dark, precise, data-rich, nautical-influenced but corporate — like a risk analyst's command bridge, not a pirate ship
