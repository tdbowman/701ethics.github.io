# Week 15: Concepts & Questions 🗝️

**Digital Archives & Preservation | November 30 – December 6, 2026**

---

## 🗝️ Key Concepts

| Term | What it means |
|------|---------------|
| **Bit rot** | a process randomly flipping stored bits at a constant small probability per unit time; the residual failure mode remaining even if every correlated cause were eliminated (Rosenthal, p. 50). |
| **Bit half-life** | the time after which there is a 50% probability a given bit has flipped; Rosenthal's proposed metric, because MTTDL relates to time but not bits and UBER relates to bits but not time (p. 50). |
| **MTTDL (mean time to data loss)** | the vendor reliability figure shown to be uninformative, since it averages failure times without saying how much data each event destroys (pp. 47–50). |
| **Silent data corruption** | file content changing in storage with no explanation and no recorded error; documented at scale in the CERN and NetApp studies (pp. 50–51). |
| **Common-mode failure** | why replicating across identical systems is much weaker than replicating across diverse ones: one software bug damages the same data in every copy (p. 51). |
| **Scrubbing / auditing replicas** | regularly reading and verifying copies to detect damage and repair from a good replica; without it, extra replicas add little to bit half-life (pp. 51–52). |
| **AI-readiness** | the condition in which a collection's documentation, metadata, provenance, and formats suffice for computational use; a property of the collection, not the software (Colavizza & Jaillant, 2026). |
| **Excluded data documentation** | recording the extent of digitization, its gaps, and why material was left out, so users understand what the digitized collection is a sample of (ARA guidelines, pillar 1). |
| **Derivative data** | standardized, well-documented, consistently formatted versions created for computational use while originals are preserved unaltered (ARA guidelines, pillar 3). |
| **Personal data literacy** | competence regarding data collected *about* a person, as distinct from data produced *by* a researcher (Park & Aghassibake, 2026). |

All terms from all sixteen weeks are collected in the [Glossary](../glossary.md).

---

## 💬 Annotation & Discussion Prompts

These are written for **Perusall**. Each one points at something specific and each one is arguable, which is the point: annotation credit comes from advancing a conversation, not from summarizing a paragraph.

1. Rosenthal writes that "we are never going to know whether the systems we use are good enough" (p. 50). What should a library's public-facing preservation policy say, given that this is true? Is honesty here a service to users or an invitation to withdraw funding?
2. Mark the passage where Sun disclaimed all liability for data on a system advertised with a 2.4-million-year MTTDL (p. 48). What does the gap between a marketing claim and a warranty tell you about reading *any* vendor's assurances, including a discovery vendor's claims about an AI feature?
3. Annotate the four AI-readiness pillars. Which would be hardest for an under-resourced institution to satisfy, and does that difficulty make the framework a standard or a barrier to entry?
4. The excluded-data pillar asks archives to document what they left out. Is that documentation an act of transparency or of self-incrimination? Does the difference matter?
5. Rosenthal's remedy is more copies, audited more often; Park and Aghassibake's population may be safest when less is kept. Find where the two ethics are most directly opposed and propose a decision rule.
6. Rosenthal asks storage services to prove they still hold your data by computing a digest over a nonce plus the object (p. 54). What is the equivalent challenge you could pose to a system claiming to have assessed your ethical reasoning?
7. Annotate a passage in any of this week's readings where an obligation to preserve conflicts with an obligation to a living person. Say which wins, and on what grounds.

---

## 🔗 Connections

- **Scenario:** Your capstone report and synthesis form are due Sunday, December 6, and this week is the reason to treat that report as an *artifact* rather than a verdict. Before you upload, do three things: save your own copies of every Block 1–4 JSON export (Rosenthal's replication principle, applied to yourself); write down what you know about how the integrator computes its composite score and what you do not (the completeness pillar, applied to your evidence base); and note what the report retains about you and where it lives (personal data literacy, applied to your own record). Each of those is a paragraph of Part 1 already written.
- **Final essay:** Week 15 gives you the strongest argument against over-trusting a generated number. Rosenthal's demonstration that a plausible, precise, confidently stated reliability figure can be unfalsifiable in principle transfers directly: a dimension score is likewise plausible, precise, confidently stated, and, unless the integrator's method is published, unverifiable. Use him for that structural argument, not merely as a colorful analogy.
- **Threads back:** This closes the loop on Block 2. The privacy policy you drafted there made commitments about what would be collected and retained; this week asks whether those commitments are technically achievable, whose interests they serve, and what it would cost to keep them for a century.

---

## 📚 Going Deeper

Optional, and genuinely optional. These are also good places to find a final-essay angle.

- Conway, P. (2010), "Preservation in the age of Google," *Library Quarterly*, 80(1), 61–79. The retired Week 15 anchor, still in the project as `PreservationGoogle.pdf`; its distinction between "digitization for preservation" and "digital preservation," and its four dilemmas (environmental, quality, nonbook, expertise), remain the clearest short statement of the resource-allocation problem.
- Digital Preservation Coalition, https://www.dpconline.org/. Home of the *Digital Preservation Handbook*, Technology Watch Reports, and the "Bit List" of digitally endangered species.
- iPRES proceedings, https://ipres-conference.org/. The annual international digital preservation conference, openly published; a version of Rosenthal's argument was first presented there in 2008.
- FLAME project outputs including *Navigating AI for Cultural Heritage Organisations* (UCL Press, 2025), https://doi.org/10.14324/111.9781800088375. Open access, and the fullest current statement of the Jaillant group's position. ---

---

## Up Next

On to Week 16: [Professional Reflection & Future Vision](../week-16-futures/professional-reflection-and-future-vision.md).
