# Week 15 Readings 📖

**Digital Archives & Preservation | November 30 – December 6, 2026**

---

> <span style="font-size: 150%;">"The reason why this focus on media is a distraction is that the fundamental problem of digital preservation is economic, not technical. No-one wants to pay for preserving data that isn't earning its keep, pretty much the definition of archived data."</span>

---

## 🎯 In This Section

- **Colavizza & Jaillant (2026)**: AI ready: How to prepare archives for artificial intelligence, improve discoverability, and enhance access
- **Rosenthal (2025)**: Archival storage [Text of a talk delivered at the University of California, Berkeley, School of Information, Information Access Se
- **Park & Aghassibake (2026)**: Empowering immigrant library users through personal data literacy programming in public libraries

Each entry gives you the full citation, where to find it, what the text actually argues, and why it sits in this week. Read the entry, then read the text. Not the other way around.

---

## 1. Colavizza & Jaillant (2026)

**AI ready: How to prepare archives for artificial intelligence, improve discoverability, and enhance access**

> Colavizza, G., & Jaillant, L. (2026). AI ready: How to prepare archives for artificial intelligence, improve discoverability, and enhance access. Archives and Records: The Journal of the Archives and Records Association. https://doi.org/10.1080/23257962.2026.2675937

**Find it.** https://doi.org/10.1080/23257962.2026.2675937. Check Perusall/Canvas. The companion practitioner document is open access: Colavizza, G., & Jaillant, L. (2026), *AI preparedness guidelines for archivists*, Archives & Records Association (CC-BY), https://www.archives.org.uk/ai-preparedness-guidelines-for-archivists

Both texts come out of the FLAME project (AI for Libraries, Archives and Museums), led by Lise Jaillant at Loughborough University with Giovanni Colavizza at Copenhagen and Bologna. The practitioner guidelines were published by the Archives & Records Association (UK & Ireland) in February 2026 under CC-BY; the journal article is the underlying research argument. Read the guidelines first, since they are short, and use them as the map.

The central claim is stated as a condition, and the condition is what makes it a preservation argument rather than a technology argument: AI can support archival work, but only where collections have been deliberately made AI-ready. Readiness is a property of the collection and its documentation, not of the software, and it is built by archivists doing recognizably archival work.

The guidelines organize readiness around four pillars. **Completeness and excluded data** asks institutions to document the extent of digitization, the gaps, and the reasons material was excluded, so a user, human or machine, can understand what the collection is a sample of. **Metadata and access** prioritizes item-level metadata, provenance, narrative description, and explicit documentation of access conditions. **Data types and formats** asks that originals be preserved unaltered while standardized, well-documented derivative data is created in consistent formats suitable for computational use. **Application-specific metrics** asks that evaluation criteria be defined against a project's actual goals rather than borrowed from generic benchmarks. Three application areas are identified as most promising: draft metadata generation, sensitivity detection, and discovery interfaces built on retrieval-augmented generation.

Notice what this framework concedes and what it does not. It does not treat AI adoption as inevitable or costless; readiness is a precondition most collections do not meet, which is a way of slowing things down. But it does not open the question of refusal either. The first pillar is the ethically richest: an archive that documents what it excluded and why has produced a record of its own selection decisions, the raw material for someone later to critique them. Whether institutions will actually publish that documentation is a different question from whether they should.

:::{tip} Why it's here
This connects Block 4's AI ethics to Block 5's stewardship through the least glamorous and most consequential channel: description. It also answers a question implicit all term. What does ethical practice look like on a Tuesday morning? It looks like writing down what is not in the collection.
:::

---

## 2. Rosenthal (2025)

**Archival storage [Text of a talk delivered at the University of California, Berkeley, School of Information, Information Access Se**

> Rosenthal, D. S. H. (2025, March 14). Archival storage [Text of a talk delivered at the University of California, Berkeley, School of Information, Information Access Seminar]. DSHR's Blog. https://blog.dshr.org/2025/03/archival-storage.html

**Find it.** https://blog.dshr.org/2025/03/archival-storage.html

Rosenthal starts by pulling apart two things you probably treat as one. He walks through his own backup routine, then points out what it implies: the useful life of backup data is only the interval between the last backup and the recovery, so media lifespan is irrelevant to backups. Archival data he defines differently, as data that can no longer earn its keep on readily accessible storage. Archiving is therefore a move down the storage hierarchy that buys lower cost by accepting longer access latency. That definition carries his whole thesis. Archiving is an economic problem wearing a technical costume, and the idea he wants to kill is that the answer is quasi-immortal media.

He then takes apart the press cycle that produces headlines about storing every film ever made in a teacup. The market for archive-only media is tiny: LTO tape is under 1 percent of the media market in dollar terms, and OD-3, the most recent archive-only optical format, was cancelled in 2023 for want of buyers. The timescales are far longer than announcements suggest. Seagate's HAMR research began 26 years ago and is only now shipping to hyperscalers, silica research is 15 years old, and DNA storage research is 36 years old. The only end-to-end DNA storage drive ever demonstrated, from the Microsoft and University of Washington team in 2019, cost about $10,000 and took 21 hours to write and then read five bytes. Bit rot is also only one threat among many. Every medium has a specified unrecoverable bit error rate: typical disk is 10^-15, so reading a petabyte can produce up to eight errors, while LTO-9 tape is 10^-20 when new and degrades steeply with wear. Most errors users actually experience come from layers of the system above the media, which is why archives need erasure coding, and why a single copy on immortal media is still exposed to fire, flood, ransomware, insider attack, and loss of the encryption key.

The center of the talk is system cost. An IBM TS4300 tape robot starts at $20,000, and the forty cartridges to fill it cost about $4,000, so media is roughly 16 percent of capital expenditure before you count power, cooling, floor space, staff, and the maintenance contract. Facebook's optical racks held 10,000 Blu-Ray discs for one petabyte, and at about 80 cents a disc the media came to roughly $8,000 against far costlier robotics and drives. Kryder's Law, the exponential rise in bit density, then makes economic lifespan override technical lifespan. Hard drives are retired at five years even though the data on the platters is good for a quarter century, and Seagate built 25-year drives that nobody would pay extra for. Durable media do not help if the economics replace them anyway.

Where it lands is the cloud. Rosenthal reruns a pricing exercise he first did in 2019: ingest a petabyte over a month, store it for a year, retrieve it over a month. Adjusted to 2024 dollars, the 2019 totals were $132,263 for Amazon Glacier, $214,977 for Google Coldline, and $58,440 for Microsoft Archive. Six years later the same exercise gives $60,950 for Amazon S3 Glacier Deep Archive, $224,510 for Google Archive, and $62,200 for Microsoft Archive. Only Amazon passed Kryder's Law through to customers, at roughly 35 percent a year. Meanwhile lock-in, which he measures as the number of months of storage cost that a single month of full retrieval represents, rose from 13.8, 12.0, and 8.1 to 50, 175.6, and 20, with outbound bandwidth driving 77 percent of Amazon's figure. Since the economics only work at data-center scale, he concludes it will be a rare institution that can avoid cloud archival storage, and closes on the original LOCKSS insight, backed by Backblaze CTO Brian Wilson's finding that doubling drive reliability is worth only a tenth of one percent in extra cost: design for failure, buy cheap components, and keep many loosely coupled copies rather than one expensive durable one.

:::{tip} Why it's here
Colavizza and Jaillant tell you how to make archives usable by machines, and Park and Aghassibake tell you what data literacy owes the people whose data you hold. Both assume the bits will still be there. This is where you find out what that assumption costs, in dollars and in institutional dependency. It gives you the question that actually decides whether a preservation commitment is real: not what medium the material sits on, but who is paying the system cost every year for the next fifty years, and what happens when they stop. It also turns a technical fact into an ethical one. If the economics push your institution into a single cloud vendor with a lock-in of fifty months of storage costs, your promise to preserve a community's records has quietly become that vendor's pricing decision, and you should know that before you make the promise.
:::

> "The reason why this focus on media is a distraction is that the fundamental problem of digital preservation is economic, not technical. No-one wants to pay for preserving data that isn't earning its keep, pretty much the definition of archived data." ("Archival Storage Systems" section)

---

## 3. Park & Aghassibake (2026)

**Empowering immigrant library users through personal data literacy programming in public libraries**

> Park, H., & Aghassibake, N. (2026). Empowering immigrant library users through personal data literacy programming in public libraries. Library Trends, 74(3).

**Find it.** https://muse.jhu.edu/issue/56412. Project MUSE; check Perusall/Canvas. The issue is *Data Literacy: Navigating the Shift from Hype to Reality*, edited by Ben B. Chiewphasa (February 2026).

As above: I have verified this article exists, in which issue, and by whom; I have not read it, and what follows describes its position, not its findings.

It appears in a *Library Trends* issue whose framing is a corrective (data literacy moving from hype to reality), alongside pieces on critical data studies pedagogy, community data literacy, civic data literacy, and the state of data education in ALA-accredited programs. Park and Aghassibake's contribution is the one naming a specific population and setting: immigrant library users, public libraries, and *personal* data literacy as distinct from the research-data literacy that dominates academic library programming.

That distinction is why it belongs here. Research data literacy asks how to manage, describe, and preserve data you have produced. Personal data literacy asks what is being collected about you, by whom, under what authority, retained how long, and shareable with whom. For an immigrant patron in the United States in 2026 those are not abstract questions; they have immigration-enforcement consequences, and they turn a library's own retention practices into a live risk surface: circulation records, computer sign-in logs, program registration lists, wifi logs, vendor-side usage data.

Read against the other two readings the contradiction sharpens. Rosenthal's ethic is *keep more copies*. Colavizza and Jaillant's is *describe more completely*. A personal data literacy ethic for a population under surveillance risk points the other way: collect less, retain briefly, describe minimally, delete on schedule. All three are correct within their frames. Your job is to know which frame you are in, and that depends on whose data it is and what could be done to them with it.

:::{tip} Why it's here
Because it prevents the preservation week from becoming a week about objects, and because it connects directly to Block 2's privacy work and Block 3's equity work, which makes it one of the more efficient sources for the essay's two-block requirement.
:::

---

## Up Next

Now put the week to work: [Concepts & Questions](concepts-and-questions.md).
