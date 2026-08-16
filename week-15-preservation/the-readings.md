# Week 15 Readings 📖

**Digital Archives & Preservation | November 30 – December 6, 2026**

---

> <span style="font-size: 150%;">"Our inability to compute how many backup copies we need to achieve a reliability target is something we are just going to have to live with. We are not going to have enough backup copies, and stuff will get lost or damaged." (p. 52)</span>

---

## 🎯 In This Section

- **Colavizza & Jaillant (2026)** — AI ready: How to prepare archives for artificial intelligence, improve discoverability, and enhance access
- **Rosenthal (2010)** — Keeping bits safe: How hard can it be
- **Park & Aghassibake (2026)** — Empowering immigrant library users through personal data literacy programming in public libraries

Each entry gives you the full citation, where to find it, what the text actually argues, and why it sits in this week. Read the entry, then read the text. Not the other way around.

---

## 1. Colavizza & Jaillant (2026)

**AI ready: How to prepare archives for artificial intelligence, improve discoverability, and enhance access**

> Colavizza, G., & Jaillant, L. (2026). AI ready: How to prepare archives for artificial intelligence, improve discoverability, and enhance access. Archives and Records: The Journal of the Archives and Records Association. https://doi.org/10.1080/23257962.2026.2675937

**Find it.** https://doi.org/10.1080/23257962.2026.2675937 — Perusall/Canvas. The companion practitioner document is open access: Colavizza, G., & Jaillant, L. (2026), *AI preparedness guidelines for archivists*, Archives & Records Association (CC-BY), https://www.archives.org.uk/ai-preparedness-guidelines-for-archivists

Both texts come out of the FLAME project (AI for Libraries, Archives and Museums), led by Lise Jaillant at Loughborough University with Giovanni Colavizza at Copenhagen and Bologna. The practitioner guidelines were published by the Archives & Records Association (UK & Ireland) in February 2026 under CC-BY; the journal article is the underlying research argument. Read the guidelines first — they are short — and use them as the map.

The central claim is stated as a condition, and the condition is what makes it a preservation argument rather than a technology argument: AI can support archival work, but only where collections have been deliberately made AI-ready. Readiness is not a property of the software. It is a property of the collection and its documentation, and it is built by archivists doing recognizably archival work.

The guidelines organize readiness around four pillars. **Completeness and excluded data** asks institutions to document the extent of digitization, the gaps, and the reasons material was excluded, so a user — human or machine — can understand what the collection is a sample of. **Metadata and access** prioritizes item-level metadata, provenance, narrative description, and explicit documentation of access conditions. **Data types and formats** asks that originals be preserved unaltered while standardized, well-documented derivative data is created in consistent formats suitable for computational use. **Application-specific metrics** asks that evaluation criteria be defined against a project's actual goals rather than borrowed from generic benchmarks. Three application areas are identified as most promising: draft metadata generation, sensitivity detection, and discovery interfaces built on retrieval-augmented generation.

Notice what this framework concedes and what it does not. It does not treat AI adoption as inevitable or costless; readiness is a precondition most collections do not meet, which is a way of slowing things down. But it does not open the question of refusal either. The first pillar is the ethically richest: an archive that documents what it excluded and why has produced a record of its own selection decisions — the raw material for someone later to critique them. Whether institutions will actually publish that documentation is a different question from whether they should.

:::{tip} Why it's here
This connects Block 4's AI ethics to Block 5's stewardship through the least glamorous and most consequential channel: description. It also answers a question implicit all term — what does ethical practice look like on a Tuesday morning? It looks like writing down what is not in the collection.
:::

---

## 2. Rosenthal (2010)

**Keeping bits safe: How hard can it be**

> Rosenthal, D. S. H. (2010). Keeping bits safe: How hard can it be? Communications of the ACM, 53(11), 47–55. https://doi.org/10.1145/1839676.1839692

**Find it.** https://doi.org/10.1145/1839676.1839692

**In the course project.** `KeepingBitsSafe.pdf`

:::{warning} Verification note
In the project: KeepingBitsSafe.pdf — Fallback. The Fall 2026 list called for Rosenthal (2025) as a replacement. STATUS: UNVERIFIED — I confirmed Rosenthal remains active and posted on archival storage in 2025 on DSHR's Blog, but could not confirm a 2025 publication functioning as a successor to this article. Use the 2010 text unless the instructor supplies a newer citation.
:::

Rosenthal starts with a deliberately concrete target: keep one petabyte for one century with a 50% chance that every bit survives undamaged. He then shows nobody can tell you whether any system meets it.

The first move dismantles vendor reliability claims. He takes Sun's claim of a mean time to data loss of 2.4 million years for the ST5800 and shows MTTDL is close to meaningless as a guarantee: a system where three of ten units lose data in year one and the rest survive millions of years satisfies that number. He also notes Sun's terms and conditions disclaimed all liability for data loss. Such figures are not experimental results but projections from models — and he examines the state of the art, the Pergamum project at UC Santa Cruz, to show the models assume what every real-world study contradicts: that disk and sector failures are uncorrelated, that always-on failure rates translate to mostly-off usage, that disks are the only failing component, that the software is bug-free, and that operator error, insider abuse, and external attack do not exist. Models, he concludes, estimate the *minimum* loss rate.

The second move is worth memorizing. MTTDL relates to time but not bits; the unrecoverable bit error rate relates to bits but not time — so the profession lacks even the metric it needs. He simplifies: imagine all correlated causes eliminated, leaving only *bit rot*, a process flipping bits randomly at a constant small rate. Treat bits like radioactive atoms and you get a *bit half-life*. The petabyte-for-a-century requirement translates to a bit half-life of 8×10^17 years — roughly 60 million times the current estimated age of the universe. Benchmarking a system against that in one year would require writing and verifying an exabyte, costing ten times more than the system you were considering.

The third move is empirical and grim. The CERN study wrote about 9.7×10^16 bytes into a broad range of enterprise storage and checked them over six months; about 1.92×10^8 bytes suffered silent corruption, two-thirds of it persistent — roughly 1.2 in a billion bytes permanently corrupted in half a year, implying current enterprise storage would need to improve by a factor of at least a billion. A parallel NetApp study of over 1.5 million drives found more than 400,000 silent corruption incidents, over 30,000 undetected until RAID restoration.

The conclusions are practical and modest: replicate across multiple, ideally *different* storage systems, because identical systems share common-mode failures; audit (scrub) replicas to detect damage and repair from good copies; accept that scrubbing itself costs bandwidth and adds risk. He ends by asking storage APIs to support end-to-end integrity checks including a nonce prepended to the data before the digest is computed, so a service cannot fake a correct answer by remembering the digest you gave it — a small, precise demand for verifiability that is the engineering cousin of explicability.

:::{tip} Why it's here
Because it models intellectual honesty about the limits of one's own field, written by someone who spent a decade building preservation systems. Rosenthal does not conclude that preservation is impossible; he concludes we should stop pretending we know, and design accordingly. That is exactly the posture you need when a system hands you a number about yourself.
:::

> "Our inability to compute how many backup copies we need to achieve a reliability target is something we are just going to have to live with. We are not going to have enough backup copies, and stuff will get lost or damaged." (p. 52)

---

## 3. Park & Aghassibake (2026)

**Empowering immigrant library users through personal data literacy programming in public libraries**

> Park, H., & Aghassibake, N. (2026). Empowering immigrant library users through personal data literacy programming in public libraries. Library Trends, 74(3).

**Find it.** https://muse.jhu.edu/issue/56412 — Project MUSE; check Perusall/Canvas. The issue is *Data Literacy: Navigating the Shift from Hype to Reality*, edited by Ben B. Chiewphasa (February 2026).

As above: I have verified this article exists, in which issue, and by whom; I have not read it, and what follows describes its position, not its findings.

It appears in a *Library Trends* issue whose framing is a corrective — data literacy moving from hype to reality — alongside pieces on critical data studies pedagogy, community data literacy, civic data literacy, and the state of data education in ALA-accredited programs. Park and Aghassibake's contribution is the one naming a specific population and setting: immigrant library users, public libraries, and *personal* data literacy as distinct from the research-data literacy that dominates academic library programming.

That distinction is why it belongs here. Research data literacy asks how to manage, describe, and preserve data you have produced. Personal data literacy asks what is being collected about you, by whom, under what authority, retained how long, and shareable with whom. For an immigrant patron in the United States in 2026 those are not abstract questions; they have immigration-enforcement consequences, and they turn a library's own retention practices — circulation records, computer sign-in logs, program registration lists, wifi logs, vendor-side usage data — into a live risk surface.

Read against the other two readings the contradiction sharpens. Rosenthal's ethic is *keep more copies*. Colavizza and Jaillant's is *describe more completely*. A personal data literacy ethic for a population under surveillance risk points the other way: collect less, retain briefly, describe minimally, delete on schedule. All three are correct within their frames. Your job is to know which frame you are in, and that depends on whose data it is and what could be done to them with it.

:::{tip} Why it's here
Because it prevents the preservation week from becoming a week about objects, and because it connects directly to Block 2's privacy work and Block 3's equity work — making it one of the more efficient sources for the essay's two-block requirement.
:::

---

## Up Next

Now put the week to work: [Concepts & Questions](concepts-and-questions.md).
