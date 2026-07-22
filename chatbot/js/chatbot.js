/* ==========================================================================
   Online Digital Fortress — Chatbot Logic
   All answers are derived solely from the book "Online Digital Fortress"
   by Greg R. Traver. Each answer cites the chapter where the full detail lives.
   ========================================================================== */

(function () {
  "use strict";

  /* ----- Knowledge base -------------------------------------------------- */
  // Each entry: { id, question (the suggested label), keywords[], answerHTML, reference }
  const KNOWLEDGE = [
    {
      id: "triple-shield",
      question: "What is the Triple Shield Architecture, and why do I need it?",
      keywords: [
        "triple shield", "three companies", "three entities", "three llc",
        "architecture", "what is", "why do i need", "structure", "framework",
        "creator management holding", "how many entities", "protect"
      ],
      answerHTML:
        "<p>The Triple Shield Architecture is the heart of the Digital Fortress model — a framework built on <strong>separation, clarity, and lawful flow</strong>. It uses exactly <strong>three limited liability companies</strong>: the <strong>Creator LLC</strong> (the revenue engine that faces customers, processes payments, and absorbs day-to-day risk), the <strong>Management LLC</strong> (the operational nervous system that coordinates contractors, vendors, and systems), and the <strong>Holding LLC</strong> (the quiet vault that owns every enduring piece of intellectual property and the equity in the other two entities).</p>" +
        "<p>Each entity has one primary purpose, one primary domain of risk, and one primary reward pathway. When they function together, you gain control, stability, and scalability <em>without</em> sacrificing asset protection. A single LLC mixes operational exposure with your most valuable IP — so a single dispute can threaten the entire enterprise. The Triple Shield contains each risk at the layer where it originates.</p>",
      reference: "Find the full framework in <strong>Chapter Two — The Triple Shield Architecture</strong>, with each company built in depth in Chapters Three (Creator), Four (Management), and Five (Holding)."
    },
    {
      id: "three-companies-roles",
      question: "What does each of the three companies actually do?",
      keywords: [
        "roles", "what does each", "creator company", "management company",
        "holding company", "function", "purpose", "which one", "difference",
        "what does the creator do", "what does the holding do"
      ],
      answerHTML:
        "<p>Each company has one singular purpose:</p>" +
        "<p><strong>Creator LLC — earns.</strong> It is the revenue engine: it sells digital products, processes payments, delivers to customers, and absorbs the front-line risk of refunds, chargebacks, and platform disputes. Money flows <em>through</em> it; it is never meant to store wealth. Think of it as the cash register, not the vault.</p>" +
        "<p><strong>Management LLC — organizes.</strong> It is the operational nervous system: it handles contractors, vendors, marketing agencies, advertising costs, and recurring services. Every vendor and contractor relationship runs through Management, so a vendor dispute stays walled off from customer revenue and IP.</p>" +
        "<p><strong>Holding LLC — endures.</strong> It exists for one purpose: to <em>own</em>. It holds trademarks, copyrighted content, course materials, domain names, software, equity in Creator and Management, and long-term reserves. It does not sell, advertise, or contract with customers. It licenses IP down to Creator in exchange for a royalty.</p>",
      reference: "See the comparison in <strong>Chapter Two</strong>, and the full treatment of each role in <strong>Chapter Three</strong> (Creator), <strong>Chapter Four</strong> (Management), and <strong>Chapter Five</strong> (Holding)."
    },
    {
      id: "flow-of-money",
      question: "How does money flow between the three entities?",
      keywords: [
        "money flow", "flow of money", "inter-company", "royalty", "management fee",
        "how does money move", "transfer", "distributions", "weekly", "cash flow",
        "flow architecture", "how are they connected"
      ],
      answerHTML:
        "<p>Revenue enters through the <strong>Creator</strong> and is deliberately distributed upward on a disciplined rhythm. A representative month: Creator earns $100,000 in revenue, pays the <strong>Management</strong> LLC roughly $25,000—$30,000 for marketing, administrative, and systems services, and pays a <strong>10% royalty</strong> ($10,000) to the <strong>Holding</strong> LLC for use of the licensed IP and brand. Each transaction is documented through inter-company agreements, each entity records income and expense separately, and each bank account is distinct.</p>" +
        "<p>The book stresses <strong>weekly or biweekly</strong> distribution — no idle capital should sit in Creator longer than needed for operating liquidity. A founder who lets $400,000 accumulate in Creator because transfers feel tedious has left that entire sum fully reachable by the one entity a plaintiff is permitted to sue. The architecture existed; the rhythm did not — and the result is nearly indistinguishable from having no architecture at all.</p>",
      reference: "The full flow model is in <strong>Chapter Six — Inter-Company Flow Architecture</strong>; the banking rhythm and cash discipline are detailed in <strong>Chapter Three</strong>, Section III (Banking and Cash Discipline)."
    },
    {
      id: "why-not-single-llc",
      question: "Why not just use one LLC and a big insurance policy?",
      keywords: [
        "one llc", "single llc", "single entity", "insurance", "why not one",
        "do i really need three", "is insurance enough", "policy", "shortcut",
        "series llc", "two companies"
      ],
      answerHTML:
        "<p>The book addresses this directly. Two common shortcuts fall short:</p>" +
        "<p><strong>One LLC + insurance:</strong> Insurance is a contractual promise from a third party to pay under narrowly drawn conditions, subject to exclusions and the insurer's incentive to minimize payout — it responds <em>after</em> a loss, and only within the boundaries the policy anticipated. Structure works differently: it ensures entire categories of value were <em>never reachable by the claim in the first place</em>. Insurance and the Triple Shield are two independent lines of defense; insurance alone is one line that depends on the insurer's willingness to honor it.</p>" +
        "<p><strong>Series LLC / only two entities:</strong> Many states either don't recognize series LLCs or haven't tested them in court, so a judge may collapse the whole series into one entity. And stopping at two (say, Creator + Holding, skipping Management) recovers the IP protection but none of the firebreak Management provides — the common vendor dispute still lands directly on Creator, alongside customer revenue.</p>",
      reference: "See the comparison of shortcuts in <strong>Chapter Two</strong>, and the warning about building only two entities in the same chapter's section 'What Happens When Only Part of the Architecture Is Built.'"
    },
    {
      id: "holding-jurisdiction",
      question: "Where should I form the Holding company, and why?",
      keywords: [
        "where to form", "jurisdiction", "wyoming", "delaware", "nevada",
        "holding company where", "what state", "formation", "charging order",
        "privacy", "best state", "domicile"
      ],
      answerHTML:
        "<p>The book recommends <strong>Wyoming</strong> for the Holding company. Wyoming, the first state to recognize the LLC form, offers a combination that fits Holding's purpose precisely: <strong>strong charging-order protection, no state income tax, low annual fees, and a state government that has consistently prioritized privacy</strong> for LLC members.</p>" +
        "<p>For Holding especially, charging-order protection is close to the entire point of the jurisdictional choice: it limits a creditor who wins a personal judgment against you to a lien on distributions the LLC chooses to make — rather than letting them seize your ownership interest or force a sale of the underlying assets. Delaware offers unmatched corporate case law (better if you anticipate outside investors or a public offering), and Nevada offers real privacy but tends to cost more for a comparable structure. The book's guidance: use Wyoming for the quiet, privacy-protected, inexpensive-to-maintain vault.</p>",
      reference: "See <strong>Chapter Five</strong> (Legal Formation Principles) and the jurisdiction comparison in <strong>Chapter Seven — Legal Formation and Compliance</strong>."
    },
    {
      id: "creator-formation",
      question: "How do I set up the Creator company correctly?",
      keywords: [
        "how to set up creator", "creator company", "form creator", "creator llc",
        "ein", "bank account", "merchant account", "creator formation",
        "set up the revenue", "starting creator", "build creator"
      ],
      answerHTML:
        "<p>Form the Creator as a <strong>separate LLC with its own EIN, bank account, merchant account, and accounting ledger</strong> — never sharing accounts with the other entities. The name may reference the holding brand, but the legal entity must stand alone, and <em>every</em> invoice, terms-of-service, and affiliate contract must list the Creator LLC (not your personal name) as the contracting party. A liability shield is an active discipline enforced document by document, and it fails at the first document that skips it.</p>" +
        "<p>The mission of Creator is to generate revenue — money flows <em>through</em> it, not into permanent storage. Weekly or biweekly, distribute funds up to Management (operational expenses), to Holding (royalties), and to owner draw. No idle capital should remain in Creator longer than required. Keep three risk zones in mind: payment-infrastructure risk (account freezes), customer-interaction risk (disputes), and platform-dependency risk (social or e-commerce suspensions) — which is exactly why Creator must never also hold your accumulated wealth or IP.</p>",
      reference: "The full step-by-step formation is in <strong>Chapter Three — Designing the Creator Company</strong>, Sections I—IV; the completion checklist is at the end of the chapter."
    },
    {
      id: "management-company",
      question: "What is the Management company for, and when do I need it?",
      keywords: [
        "management company", "management llc", "what is management for",
        "contractors", "vendors", "operations entity", "when do i need management",
        "advertising agency", "vendor dispute"
      ],
      answerHTML:
        "<p>The Management LLC is the enterprise's <strong>coordinating system</strong> — the firebreak deliberately positioned between the operational chaos of vendor relationships and the more sensitive layers above it. It handles contractors, marketing agencies, advertising costs, and recurring services: anything that supports scale but also creates operational liability.</p>" +
        "<p>Here is why it matters: a founder who runs an advertising agency contract through the Creator (because that's the account everyone invoices) ends up with a vendor dispute sitting directly alongside customer revenue and delivery operations. The same dispute, routed through a dedicated Management LLC that invoices Creator a flat monthly fee, stays a dispute <em>between two business entities</em> — entirely walled off from Creator's customers and payments. The book is clear: Management is <em>not</em> the least important of the three. For any founder with a meaningful contractor or vendor footprint, it is frequently the layer that prevents the most common type of dispute from ever reaching the parts of the business worth protecting.</p>",
      reference: "See <strong>Chapter Four — Building the Management Infrastructure</strong>; the advertising-agency example originates in <strong>Chapter Two</strong>."
    },
    {
      id: "ip-protection",
      question: "How do I protect my intellectual property inside this structure?",
      keywords: [
        "intellectual property", "ip", "protect ip", "trademark", "copyright",
        "course content", "ownership of content", "license", "assignment",
        "who owns", "brand assets", "register"
      ],
      answerHTML:
        "<p>Intellectual property is created through the Creator and <strong>perfected within the Holding</strong> company. When new content, logos, or branding are developed, ownership-assignment agreements transfer them <em>upward</em> to Holding. Once Holding owns them, those assets are licensed <em>back</em> to Creator for use in commerce — Creator pays a royalty fee, and Holding receives it as protected, passive income.</p>" +
        "<p>Before licensing anything to the outside world, register the protectable assets: trademarks for brand and product names, copyrights for curriculum, code, and design (the book notes registration is about $65 and is 'a no brainer,' since it's a prerequisite for statutory damages and attorney's fees against infringers), and domains under Holding's registrar accounts. Maintain an up-to-date asset register and signed chain-of-assignment documents, reviewed annually — this converts a potential months-long ownership reconstruction into a five-minute lookup.</p>",
      reference: "See <strong>Chapter Five</strong>, Section IV (Intellectual Property Transfer and Licensing) and Section VIII (Auditing and Record-Keeping); the licensing mechanics are in <strong>Chapter Ten</strong>, Section VII."
    },
    {
      id: "licensing-monetization",
      question: "How can I monetize my IP through licensing?",
      keywords: [
        "licensing", "monetize", "monetization", "royalty income", "license my course",
        "passive income", "sell my course", "license to others", "royalties",
        "licensing out", "licensees"
      ],
      answerHTML:
        "<p>Licensing turns structure into harvest. The Holding company <em>owns</em> the IP; the Creator <em>uses</em> it under license to generate active revenue; the Management company <em>administrates</em> licensing activity. Licensing expands reach <em>without expanding risk</em> — others use what you own; ownership stays in Holding.</p>" +
        "<p>Common forms include a <strong>non-exclusive, term-based license</strong> (multiple educators pay an annual fee — the most predictable recurring revenue), an exclusive license within a territory, perpetual, or joint-venture licenses. A sample model: external licensees pay Holding roughly <strong>15—25% of gross revenue</strong>, while the internal Creator-to-Holding royalty is about 10% (the external rate is higher because a licensee is paying to skip years of your developmental risk). A worked example: a curriculum licensed to twelve educators at $18,000 each, at 20% royalty, sends $43,200 a year into Holding's reserves — and that scales through intellectual distribution, not personal exhaustion. Crucially, the book distinguishes <em>licensing</em> (you keep ownership, earn recurring royalties) from <em>selling</em> the asset outright (a single lump sum that forfeits the asset forever).</p>",
      reference: "The full monetization model is in <strong>Chapter Ten — Licensing and Monetization</strong>, especially Sections III—VI and the worked royalty example."
    },
    {
      id: "tax-strategy",
      question: "How does the tax and financial strategy work across the entities?",
      keywords: [
        "tax", "taxes", "tax strategy", "financial", "bookkeeping", "accounting",
        "s-corp", "s corp election", "royalty income tax", "passive income tax",
        "separate books", "reconcile", "cpa"
      ],
      answerHTML:
        "<p>The framework treats finances not only as numbers but as narrative. The architecture itself is the first tax move: royalty payments from Creator to Holding and service fees from Creator to Management are legitimate, deductible-to-the-payer and reportable-to-the-receiver transactions — but they must be priced at a level a reasonable, unrelated party would accept. A 10% royalty on gross revenue is defensible; a royalty invented after the fact to shift income into a lower-taxed entity invites exactly the scrutiny the structure was built to avoid.</p>" +
        "<p>On tax classification: a default LLC passes all profit through to your personal return (subject to self-employment tax); an <strong>S-Corp election</strong> lets you take a reasonable salary while remaining profit passes through without the extra self-employment tax — worth it once profit is high enough to justify the added payroll administration, but not necessarily at the very beginning. Each entity needs its own books, reconciled monthly, consolidated only for your own oversight. Royalty income in Holding is classified as <em>passive</em> revenue — often taxed differently than active, self-employment-taxed income.</p>",
      reference: "The full treatment is in <strong>Chapter Eight — Financial Systems and Tax Strategy</strong>; the S-Corp timing decision is also addressed in <strong>Chapter Seven</strong>, Section V."
    },
    {
      id: "legal-formation",
      question: "What are the legal formation and compliance steps I must not skip?",
      keywords: [
        "legal formation", "compliance", "operating agreement", "annual report",
        "registered agent", "ein", "bank accounts", "filing", "compliance binder",
        "annual meeting", "good standing"
      ],
      answerHTML:
        "<p>Each of the three LLCs needs its own Articles of Organization, a unique IRS-issued <strong>EIN</strong> (never share EINs between entities), dedicated bank accounts, and an <strong>Operating Agreement</strong> defining ownership and roles. Use a professional registered agent — not your home address (the agent's address becomes public record the moment you file). Holding should be domiciled in a privacy-strong state like Wyoming.</p>" +
        "<p>Ongoing compliance is the maintenance that keeps the walls standing: file each entity's annual report on time, pay franchise/annual fees, hold an annual member meeting and record minutes (even as sole member — this is the contemporaneous evidence a court looks for in any veil-piercing analysis), document inter-company payments through dated invoices, and keep a <strong>compliance binder</strong>. A lapsed annual report can trigger administrative dissolution — meaning your liability shield may be considered lapsed for that window. The book is blunt: the cost of compliance should never be judged by its sticker price, but by the size of the protection that price is quietly purchasing.</p>",
      reference: "The complete checklist and the compliance calendar rhythm are in <strong>Chapter Seven — Legal Formation and Compliance</strong>, Sections III, V, and VIII."
    },
    {
      id: "liability-shield",
      question: "What keeps the liability shield from being pierced?",
      keywords: [
        "liability shield", "pierce the veil", "veil piercing", "commingling",
        "undercapitalization", "keep the shield", "protect personal assets",
        "piercing", "veil", "personal liability"
      ],
      answerHTML:
        "<p>The liability shield — the legal wall between personal life and business — stays intact through three virtues: <strong>documented distinction, consistent conduct, and adequate capitalization</strong>. The most common ways it fails are <em>commingling</em> personal and business funds, <em>undercapitalizing</em> the entity, failing to observe corporate formalities, and using the entity for personal rather than business purposes.</p>" +
        "<p>A single bank account for all activity is the fastest route to an unraveled structure even when the entities are properly filed: if revenue, royalties, contractor payments, and personal draws all flow through one account, no court will believe the entities are genuinely independent regardless of what the formation documents say. The diagnostic question the book asks: over the past twelve months, has any personal expense ever been paid from a business account, or any business expense from a personal account, without a documented, promptly corrected reimbursement? If the honest answer involves hesitation, the shield has already sustained a small crack.</p>",
      reference: "See <strong>Chapter Nine — Liability Shield Maintenance</strong>, especially the section on what the shield means and how it remains intact."
    },
    {
      id: "scaling",
      question: "How do I scale the business without increasing my exposure?",
      keywords: [
        "scale", "scaling", "grow", "growth", "expand", "new product",
        "second creator", "scale without exposure", "partnerships", "scaling revenue",
        "add a product", "expand the business"
      ],
      answerHTML:
        "<p>Scaling is not adding volume — it is adding <em>walls</em> to the fortress. The standard startup mentality says 'move fast and break things'; the Digital Fortress model says grow deliberately, adding new, cleanly separated layers rather than cracks to existing ones.</p>" +
        "<p>When demand for a flagship course outgrows one team, the disciplined move is to form a <strong>new, dedicated Creator entity</strong> for the new product line, licensing the same underlying IP from the same Holding company — and authorizing the existing Management company to take on the added administrative load. The wrong move is dropping a second, unrelated product line into the existing Creator, commingling two customer bases and two sets of legal exposure so a dispute in one threatens the other. Revenue streams scale by forming new, dedicated Creator entities rather than overloading one. For partnerships, use written joint-venture agreements specifying each party's role — 'partnership thrives best inside boundaries, not beyond them.'</p>",
      reference: "The full scaling doctrine is in <strong>Chapter Eleven — Scaling Without Exposure</strong>; the new-Creator-for-new-product principle is also in <strong>Chapter Three</strong>, Section X."
    },
    {
      id: "exit-legacy",
      question: "How do I eventually exit or hand off the fortress?",
      keywords: [
        "exit", "legacy", "sell the business", "succession", "exit plan",
        "hand off", "acquisition", "estate", "trust", "retire", "transition",
        "sell creator", "what happens when i leave"
      ],
      answerHTML:
        "<p>An exit plan defines how the structure continues after you step away — a sale, a succession to heirs or partners, or a transition into a foundation. The architecture makes a uniquely valuable exit possible: you can <strong>sell the Creator's operating assets while Holding retains ownership of the IP</strong>, so the buyer licenses the brand back from you and you continue receiving royalties indefinitely. That third option — sell what needed selling, keep what deserved keeping — is only available to a founder whose IP was never entangled with the operating entity in the first place.</p>" +
        "<p>Valuation rewards the discipline: 'buyers pay double for peace' — a well-documented, low-friction, low-risk business commands a materially higher price. The practical test the book recommends long before any exit: could the enterprise run at its current quality for <strong>90 consecutive days with you entirely unreachable</strong>? And the final audit — legal compliance, tax clearance, updated contracts, a full intangible-asset list with registered proof — is best understood not as a new discipline but as the culmination of every annual maintenance ritual you were already supposed to be doing. Holding is the vehicle for legacy transfer: its ownership can move into a family trust, avoiding probate and public disclosure.</p>",
      reference: "The complete exit and legacy plan is in <strong>Chapter Twelve — Exit and Legacy</strong>, especially Sections III, IV, V, and IX (the 90-day test)."
    },
    {
      id: "common-mistakes",
      question: "What are the most common mistakes this structure is built to prevent?",
      keywords: [
        "mistakes", "common mistakes", "errors", "what goes wrong", "what not to do",
        "avoid", "pitfalls", "structural mistakes", "problems"
      ],
      answerHTML:
        "<p>The book names five common structural mistakes the Triple Shield is built to cure:</p>" +
        "<p>1. <strong>Mixing operational exposure with intellectual property</strong> — building the course or brand first, then never migrating it out of the entity that processes payments.<br>" +
        "2. <strong>Using one bank account for all company activity</strong> — the fastest route to an unraveled structure even when entities are properly filed.<br>" +
        "3. <strong>Hiring contractors directly under a revenue entity</strong> — a vendor dispute becomes entangled with customer-facing operations.<br>" +
        "4. <strong>Placing all brand assets in the company that processes payments</strong> — storing the vault inside the storefront.<br>" +
        "5. <strong>Lacking royalty flows between entities</strong> — converting a defensible arm's-length relationship into something that looks like an owner moving money between pockets.</p>" +
        "<p>The architecture cures these not by magic but because each entity exists specifically to prevent one of these failure patterns from ever forming.</p>",
      reference: "See the section 'Common Structural Mistakes Corrected by the Model' in <strong>Chapter Two — The Triple Shield Architecture</strong>, and the Holding-specific mistakes in <strong>Chapter Five</strong>, Section IX."
    },
    {
      id: "faith-stewardship",
      question: "How does faith and stewardship fit into the business structure?",
      keywords: [
        "faith", "stewardship", "christian", "biblical", "god", "purpose",
        "parable of the talents", "ethics", "spiritual", "ministry", "values"
      ],
      answerHTML:
        "<p>In the Digital Fortress, structure is not mere compliance — it is <strong>stewardship</strong>. Faith-driven entrepreneurs understand that order reflects integrity: segregation of duties, transparent records, and clean legal boundaries honor both enterprise and ethics. The Creator entity is framed as a temporary custodian ('the hand, not the chest'), and the parable of the talents frames its role — the productive servant is praised for putting entrusted resources to use and returning a multiplied yield, not for hoarding them. The Holding company represents rest and preservation: 'God created work and then sanctified rest.'</p>" +
        "<p>The book consistently pairs the legal and financial mechanics with this posture: pricing should honor human dignity ('value equals or exceeds cost'), licensing should be 'multiplication without manipulation,' and a portion of Holding's accumulated wealth can be directed toward charitable work or a ministry foundation — 'the fortress becomes a conduit of grace.' Ownership, ultimately, is treated as tenancy: 'ownership belongs to God; stewardship belongs to us.'</p>",
      reference: "See the 'Beyond Compliance' and 'Creator as Steward, Not Owner' sections in <strong>Chapters Two and Three</strong>, the spiritual logic of preservation in <strong>Chapter Five</strong>, Section V, and the theology of legacy in <strong>Chapter Twelve</strong>, Section II."
    },
    {
      id: "what-is-the-book",
      question: "Who is the Online Digital Fortress for, and what does the book cover?",
      keywords: [
        "what is the book", "who is it for", "audience", "who should read",
        "about the book", "overview", "what does it cover", "is it for me",
        "online business", "course creators", "coaches"
      ],
      answerHTML:
        "<p><em>Online Digital Fortress: Stop Building a Business That Can Be Taken From You</em> by Greg R. Traver is a defensive blueprint for serious digital founders — course creators, educators, and coaches whose revenue is growing faster than their infrastructure; consultants, agencies, and digital operators managing contractors, systems, and platform risk; IP-rich founders who want to protect, license, and monetize what they've built; and stewardship-minded entrepreneurs who care about lawful order and durable legacy.</p>" +
        "<p>It is built <strong>specifically for online-only operations</strong> — if your business involves storefronts, warehouses, or in-person service delivery, this is not your framework. The twelve chapters move from the foundation (why a single entity fails, the Triple Shield) through building each of the three companies, the connective discipline of flow, legal formation, financial systems, and liability maintenance, and outward to licensing, scaling, and finally exit and legacy.</p>",
      reference: "See the 'A Word Before We Begin' and 'The Doctrine at a Glance' sections at the opening of the book, and the Table of Contents listing all twelve chapters."
    },
    {
      id: "not-legal-advice",
      question: "Is this book legal or tax advice?",
      keywords: [
        "legal advice", "tax advice", "is this advice", "disclaimer",
        "professional", "attorney", "cpa", "is it legal advice", "guarantee"
      ],
      answerHTML:
        "<p>No. The book states plainly that it is <strong>for informational and educational purposes only and does not constitute legal, tax, or financial advice</strong>, and that reading it does not create an attorney-client, CPA-client, or advisory relationship. Every principle — the entity structure, the tax treatment, the licensing mechanics — reflects general patterns drawn from established business, legal, and tax practice. Every founder's circumstances differ enough that general patterns must be adapted under the guidance of <strong>a licensed attorney and a qualified CPA in your own jurisdiction</strong>, not copied directly from the pages.</p>" +
        "<p>As the author writes: 'A blueprint is not a building. This book is the blueprint. The professionals you engage, and the discipline you bring to construction, are what actually build the fortress.'</p>",
      reference: "See the 'A Word Before We Begin' disclaimer at the front of the book; professional guidance is reinforced throughout, including in Chapters Seven and Eight."
    }
  ];

  /* ----- The 5 featured suggested questions (variable / rotating) -------- */
  // A larger pool from which 5 are shown; rotates on each page load for variety.
  const FEATURED_POOL = [
    "triple-shield",
    "three-companies-roles",
    "flow-of-money",
    "why-not-single-llc",
    "holding-jurisdiction",
    "ip-protection",
    "licensing-monetization",
    "exit-legacy",
    "common-mistakes",
    "scaling"
  ];

  /* ----- Helpers --------------------------------------------------------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function normalize(s) {
    return String(s || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  }

  // Score a question against the knowledge base; return best match above threshold.
  function findAnswer(query) {
    const q = normalize(query);
    if (!q) return null;
    const tokens = q.split(" ").filter(Boolean);
    let best = null;
    let bestScore = 0;

    KNOWLEDGE.forEach((entry) => {
      let score = 0;
      // Exact phrase matches carry strong weight
      entry.keywords.forEach((kw) => {
        const k = normalize(kw);
        if (!k) return;
        if (q.indexOf(k) !== -1) {
          score += k.split(" ").length * 3 + 2;
        }
      });
      // Token overlap (lighter weight)
      tokens.forEach((t) => {
        entry.keywords.forEach((kw) => {
          const kws = normalize(kw).split(" ");
          if (kws.indexOf(t) !== -1 && t.length > 2) score += 0.5;
        });
      });

      if (score > bestScore) {
        bestScore = score;
        best = entry;
      }
    });

    // Threshold: require a meaningful match
    if (bestScore < 2.5) return null;
    return best;
  }

  /* ----- Render ---------------------------------------------------------- */
  function appendMessage(role, html, isTyping) {
    const wrap = el("div", "msg " + role);
    const avatar = el("div", "avatar", role === "bot" ? "🛡️" : "You");
    const bubble = el("div", "bubble", isTyping ? '<span class="typing"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>' : html);
    wrap.appendChild(avatar);
    wrap.appendChild(bubble);
    body.appendChild(wrap);
    body.scrollTop = body.scrollHeight;
    return bubble;
  }

  function botAnswer(entry) {
    const html =
      entry.answerHTML +
      '<div class="ref">📖 ' + entry.reference + "</div>";
    appendMessage("bot", html);
  }

  function botFallback(userText) {
    const html =
      "<p>Thank you for your question. That specific point isn't something I can answer with confidence from the book alone, so I don't want to give you anything that isn't grounded in <em>Online Digital Fortress</em>.</p>" +
      "<p>Here are a few areas the book <em>does</em> cover in depth — try one of the suggested questions, or rephrase your question around these themes:</p>" +
      "<p style=\"margin-bottom:4px;\">• The Triple Shield Architecture &amp; the role of each company</p>" +
      "<p style=\"margin-bottom:4px;\">• How money flows between the entities &amp; royalty payments</p>" +
      "<p style=\"margin-bottom:4px;\">• Forming the Creator, Management, and Holding companies</p>" +
      "<p style=\"margin-bottom:4px;\">• Protecting &amp; licensing intellectual property</p>" +
      "<p style=\"margin-bottom:4px;\">• Legal formation, compliance, taxes, and the liability shield</p>" +
      "<p style=\"margin-bottom:4px;\">• Scaling without exposure, and exiting with a legacy</p>" +
      "<p style=\"margin-top:10px;\">You can also submit your question through the form below, and I'll route it to the author's team for a fuller answer.</p>";
    appendMessage("bot", html);
  }

  /* ----- Simulate typing then answer ------------------------------------ */
  function answerAfterTyping(entry, userText) {
    const typingBubble = appendMessage("bot", "", true);
    const msgEl = typingBubble.closest(".msg");
    setTimeout(function () {
      msgEl.remove();
      if (entry) {
        botAnswer(entry);
      } else {
        botFallback(userText);
      }
    }, 650);
  }

  /* ----- Suggested questions (5, variable) ------------------------------- */
  function renderSuggested() {
    const grid = $(".suggested-grid");
    grid.innerHTML = "";
    // Pick 5 distinct from the pool, shuffled for variety
    const pool = FEATURED_POOL.slice();
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
    }
    const chosen = pool.slice(0, 5);
    chosen.forEach(function (id, idx) {
      const entry = KNOWLEDGE.find((e) => e.id === id);
      if (!entry) return;
      const btn = el("button", "suggested-btn",
        '<span class="num">' + (idx + 1) + "</span>" + entry.question);
      btn.addEventListener("click", function () {
        handleUserInput(entry.question, true);
      });
      grid.appendChild(btn);
    });
  }

  /* ----- Handle user input ---------------------------------------------- */
  function handleUserInput(text, isFromSuggested) {
    const clean = String(text || "").trim();
    if (!clean) return;
    appendMessage("user", clean.replace(/</g, "&lt;"));
    const entry = findAnswer(clean);
    answerAfterTyping(entry, clean);
  }

  /* ----- Init ------------------------------------------------------------ */
  let body;
  document.addEventListener("DOMContentLoaded", function () {
    body = $(".chat-body");

    // Greeting + suggested questions
    appendMessage(
      "bot",
      "<p>Welcome to the <strong>Online Digital Fortress</strong> assistant. I answer questions based <em>solely</em> on Greg R. Traver's book — protecting your digital business through the Creator, Management, and Holding company framework.</p>" +
      "<p>Pick a suggested question below to see a brief answer, or ask your own and I'll point you to where the book covers it in full.</p>"
    );

    renderSuggested();

    // Form submission
    const form = $("#chat-form");
    const input = $("#chat-input");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      handleUserInput(text, false);
      input.value = "";
      input.style.height = "auto";
    });

    // Auto-grow textarea
    input.addEventListener("input", function () {
      input.style.height = "auto";
      input.style.height = Math.min(input.scrollHeight, 120) + "px";
    });

    // Enter to send (Shift+Enter for newline)
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        form.requestSubmit();
      }
    });

    /* ----- Reader submission form --------------------------------------- */
    const readerForm = document.getElementById("reader-submit-form");
    if (readerForm) {
      readerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("r-name").value.trim();
        const email = document.getElementById("r-email").value.trim();
        const question = document.getElementById("r-question").value.trim();
        const status = document.getElementById("r-status");
        if (!name || !email || !question) {
          status.style.color = "var(--fortress-error)";
          status.textContent = "Please complete your name, email, and question.";
          return;
        }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
          status.style.color = "var(--fortress-error)";
          status.textContent = "Please enter a valid email address.";
          return;
        }
        status.style.color = "var(--fortress-success)";
        status.innerHTML =
          "✓ Thank you, " + name.replace(/</g, "&lt;") + ". Your question has been received " +
          "and the Online Digital Fortress team will respond with an answer drawn from the book.";

        // Persist the submission locally so it can be retrieved/exported later.
        try {
          const key = "odf_submissions";
          const list = JSON.parse(localStorage.getItem(key) || "[]");
          list.push({
            name: name,
            email: email,
            topic: document.getElementById("r-topic").value,
            question: question,
            submittedAt: new Date().toISOString()
          });
          localStorage.setItem(key, JSON.stringify(list));
        } catch (err) { /* localStorage may be unavailable */ }

        readerForm.reset();

        // Also surface the submission in the chat thread for visibility.
        const inChat =
          '<p><strong>Question submitted by ' + name.replace(/</g, "&lt;") + ":</strong> " +
          question.replace(/</g, "&lt;") + "</p>" +
          '<div class="ref">💬 Routed to the Online Digital Fortress team. You\'ll receive a book-grounded answer by email.</div>';
        appendMessage("bot", inChat);
      });
    }
  });
})();
