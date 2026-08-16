# Week 5 Readings 📖

**Data Management & Ethics | September 21 – 27, 2026**

---

> <span style="font-size: 150%;">"The default approach/setting should be that users are opted out of library services until they explicitly choose to opt in."</span>

---

## 🎯 In This Section

- **NISO (2015)**: NISO consensus principles on users' digital privacy in library, publisher, and software-provider systems (NISO Privacy Principles)
- **Salo (2024)**: Data ethics in library learning analytics
- **Yoose & Shockey (2024)**: Navigating risk in vendor data privacy practices: An analysis of Springer Nature's SpringerLink
- **Cyrus (2026)**: [Title not established.]
- **Lyon (2016)**: Transparency: The emerging third dimension of open science and open data

Each entry gives you the full citation, where to find it, what the text actually argues, and why it sits in this week. Read the entry, then read the text. Not the other way around.

---

## 1. NISO (2015)

**NISO consensus principles on users' digital privacy in library, publisher, and software-provider systems (NISO Privacy Principles)**

> National Information Standards Organization. (2015). NISO consensus principles on users' digital privacy in library, publisher, and software-provider systems (NISO Privacy Principles). NISO. ISBN 978-1-937522-70-4.

**Find it.** https://www.niso.org/publications/privacy-principles (open access, CC BY-SA 4.0)

**In the course project.** `NISO Privacy Principles.pdf`

Published December 10, 2015, funded by the Andrew W. Mellon Foundation, and drafted by a working group that deliberately mixed sides: ProQuest, Elsevier, EBSCO, Ex Libris, and OCLC alongside ALA's Office for Intellectual Freedom, the Electronic Frontier Foundation, the Library Freedom Project, and university libraries. That composition explains both the document's authority and its limits: it is what libraries and vendors could agree to. The preamble concedes that "certain personal data are often required in order for digital systems to deliver information," then asserts a shared obligation across all three parties.

The twelve principles: (1) **Shared privacy responsibilities**, meaning anyone with access to library data accepts responsibility and should be trained; (2) **Transparency**: non-technical statements naming what is collected, why, who has access, how it is stored and secured, when it may be disclosed and to whom, and retention or deletion policy; (3) **Security**: encryption at rest and in motion, prompt patching, access control, security training, documented breach reporting and incident response, configuration auditing; (4) **Data collection and use**, weighing benefit against impact on the right to privacy, with heightened scrutiny for data on race, gender, socioeconomic class, and ability; (5) **Anonymization**, under which PII is retained in identifiable form only as long as operationally necessary, with the explicit caveat that anonymization "may not completely eliminate the risk of re-identification"; (6) **Options and informed consent**; (7) **Sharing data with others**; (8) **Notification of privacy policies**, with no retroactive application of changes without consent; (9) **Supporting anonymous use**; (10) **Access to one's own user data**, including review, correction, deletion; (11) **Continuous improvement**; (12) **Accountability**, with periodic reviews or audits "preferably by independent third parties," the conclusions of which "should be available to libraries on request."

The glossary is not decoration. Its definitions of *personal activity data*, *library user* (explicitly including staff and volunteers), *third parties*, and *data at-rest / in-use / in-motion* are the terms of art you will need in a contract negotiation.

:::{tip} Why it's here
NISO is the hinge of the block. The ALA interpretation does not restate a security standard; it points here. Principle 12's audit-availability clause is the hook Yoose and Shockey try to pull on, and Salo uses Principle 4's sensitive-data categories as her benchmark.
:::

> "The default approach/setting should be that users are opted out of library services until they explicitly choose to opt in." (Principle 6, Options and Informed Consent)

---

## 2. Salo (2024)

**Data ethics in library learning analytics**

> Salo, D. (2024). Data ethics in library learning analytics. Journal of Librarianship and Scholarly Communication, 12(1), Article 16245. https://doi.org/10.31274/jlsc.16245

**Find it.** https://doi.org/10.31274/jlsc.16245 (open access). Author postprint and data dictionary: https://osf.io/g6y3z/

Salo audits the published library learning-analytics literature. The genre uses student "behavioral-exhaust data" to correlate library use with student success, and it took off after ACRL's 2010 *Value of Academic Libraries* report. She gathered artifacts by citation-chain aggregation from that report through LISTA, Google Scholar, Web of Science, and Scopus, plus targeted sweeps of the Library Assessment Conference and four analytics-heavy journals. After winnowing to projects using non-self-reported data about students and asking a research question about library use and student success, she arrived at **62 eligible projects documented in 102 artifacts** (73 journal articles, 13 conference papers or slidedecks, 7 gray-literature items, 4 book segments, 3 magazine articles, 2 theses), 46 conducted in the United States.

The findings are the argument. Data collected: major or program in 41 projects (66%), year in program 38 (61%), gender 34 (55%), race and/or ethnicity 27 (44%), circulation to specific students 22 (35%), age 19 (31%), proxy-server data 17 (27%), socioeconomic status 13 (21%). Outcomes assessed: GPA in 47 (76%), retention 23 (37%). Ethics review (RQ2): of 46 US projects, 11 passed IRB review, 4 were declared exempt, and **31 mentioned no institutional review at all**; of 16 non-US projects, one did. Privacy risk (RQ3): all but three projects mixed library-origin data with outside data; 24 shared patron library-use data outside the library; 11 contained data documenting the *subject of patron inquiry* through specific items circulated or databases consulted, eight of those on fully identified subjects. Reidentifiability: 35 projects (56%) analyzed fully identified data with no deidentification claim; 15 published a variable applying to 30 or fewer subjects; six contained the full "Sweeney trifecta" of age or date of birth, gender, and geolocation. Student expectations (RQ4): only 11 of 62 informed students of the specific research; only **5 obtained informed consent**. Benefit (RQ5): only **5 projects (8%) claimed any concrete present or past benefit to the library**, and in no case was that benefit money or staff.

Her conclusion is directed at publishers, because she argues they are the last enforceable checkpoint: IRBs do not review information-privacy risk and often decline "assessment" projects; professional bodies have no enforcement mechanism; many academic libraries have no privacy policy of their own. She calls for editorial data-ethics guidelines, rejection of non-conforming work, and expressions of concern or retraction for already-published work. She also names "dragnet enrollment" (silently enrolling an entire described cohort with neither sampling nor consent) as likely unpublishable even where defensible as internal assessment.

:::{tip} Why it's here
This reading will make you uncomfortable, and it should. It demonstrates that a profession can hold a sincere privacy ethic, publish extensively, pass institutional review where review exists, and still produce work that violates its own stated values, because no one in the chain was assigned the job of checking. Her coding scheme is also a usable audit instrument for any project you are ever asked to join.
:::

> "[L]ibrarianship would ideally assume a priori that identified or reidentifiable patron data is ineligible for reuse outside the specific operational context of its collection and use." (Introduction and literature review)

---

## 3. Yoose & Shockey (2024)

**Navigating risk in vendor data privacy practices: An analysis of Springer Nature's SpringerLink**

> Yoose, B., & Shockey, N. (2024). Navigating risk in vendor data privacy practices: An analysis of Springer Nature's SpringerLink. SPARC. https://doi.org/10.5281/zenodo.13886473

**Find it.** https://doi.org/10.5281/zenodo.13886473 (open access, CC BY 4.0). Announcement: https://sparcopen.org/news/2024/sparc-releases-second-vendor-privacy-report-urging-action-to-address-concerns-with-springerlink-data-privacy-practices/

The second in SPARC's vendor privacy series, produced with Becky Yoose of LDH Consulting Services; the first analyzed Elsevier's ScienceDirect (2023, https://doi.org/10.5281/zenodo.10078609). The method is a documentary and technical audit of a single platform: read the vendor's stated privacy policies and third-party disclosures, then observe what the live site actually does.

The headline finding is that **approximately 200 named third parties are permitted to collect information from users of SpringerLink**, alongside additional unlisted companies found only in the authors' public website analysis. SPARC frames SpringerLink as "a case study in the encroachment of the broader surveillance-based data brokering economy into academic systems" (the same framing applied to ScienceDirect, where the concern was data flowing toward RELX's LexisNexis business).

The argument that matters pedagogically is about **auditability** rather than any single tracker. To understand how patron data may be used, a librarian would have to read those two hundred third-party policies, a corpus the authors estimate would "likely stretch into the thousands of pages," complicated by broken links to several of them at publication. Significant expertise and capacity would be needed to interpret them and trace downstream uses. Few libraries, if any, have resources to closely review even one vendor and its third parties, which "further exacerbat[es] the power asymmetry between vendors and libraries." The report closes with suggested short- and long-term actions, and SPARC maintains a Privacy & Surveillance Community of Practice to carry the work forward. Read it directly against NISO Principle 12: this is what happens when a library tries to exercise a right to independent audit without independent audit infrastructure.

:::{tip} Why it's here
It converts the abstract vendor problem into a countable one. The ALA interpretation tells you to negotiate audit rights; this shows the scale of what you would be auditing. Nowhere else in the block is it clearer that library privacy is now largely a procurement question.
:::

> "[U]ser tracking that would be unthinkable in a physical library setting now happens routinely through publisher platforms." (SPARC announcement summarizing the report's finding, October 3, 2024)

---

## 4. Cyrus (2026)

**[Title not established.]**

:::{warning} Not assignable as it stands
This title appears on the Fall 2026 revision list, but no published record matching it could be found. No summary has been written for it, and nothing here should be cited. See [Editorial Notes](../editorial-notes.md).
:::


## 5. Lyon (2016)

**Transparency: The emerging third dimension of open science and open data**

> Lyon, L. (2016). Transparency: The emerging third dimension of open science and open data. LIBER Quarterly, 25(4), 153–171. https://doi.org/10.18352/lq.10113

**Find it.** https://doi.org/10.18352/lq.10113 (open access, CC BY 4.0)

**In the course project.** `Lyon.2016.Transparency.pdf. SUPERSEDED by Salo (2024). Retained because the file is in the project and the instructor may fall back to it.`

Lyon proposes adding a third axis, **transparency**, to a two-dimensional model of open science built on *access* and *participation*. The policy half assembles transparency language from the OECD principles for access to publicly funded research data, the 2009 US Transparency and Open Government memorandum, the Royal Society's *Science as an Open Enterprise*, the RCUK Common Principles on Data Policy, the G8 Open Data Charter, and the 2015 ICSU accord. The research-process half surveys reproducibility work: the retraction literature (Fang, Steen, and Casadevall, where 43% of a sample were retracted for fabrication or falsification), the Reproducibility Project in Cancer Biology, and registered replication reports.

The contribution most relevant to LIS is vocabulary: a **transparency action** (a specific intervention in the research lifecycle: describe, identify, share), a **transparency agent** (a role, exemplified by the data librarian, data archivist, data steward), and a **transparency tool** (software and frameworks such as the Open Science Framework or DMPTool). She names four areas for LIS engagement: institutional policy and library leadership, advocacy and training, research infrastructures, and workforce development, including redesigning iSchool curricula to produce "transparency-savvy LIS graduates." Where it now reads differently: Lyon positions the librarian as ethical guarantor of other people's research; Salo shows the librarian as a researcher whose own work fails that standard.

:::{tip} Why it's here
Retained as fallback and foil. If you read it, read it for the transparency-agent role, then ask whether Salo's sixty-two projects were agents or subjects of that role.
:::

> "Transparency is generally viewed positively, in particular within the settings of institutional or organizational audits, external scrutiny for research malpractice and demonstrating accountability to funding bodies." (Section 4, p. 161)

---

## Up Next

Now put the week to work: [Concepts & Questions](concepts-and-questions.md).
