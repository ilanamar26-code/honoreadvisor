export const webflowServiceItemsEn = [
  {
    slug: "expratriation-emirats",
    href: "/en/services/expratriation-emirats",
    title: "UAE relocation",
    description: "Plan your move, residency, and Exit Tax preparation."
  },
  {
    slug: "human-resources-consulting",
    href: "/en/services/human-resources-consulting",
    title: "Company setup & UAE visa",
    description: "Incorporation, structuring, and visas aligned with your project."
  },
  {
    slug: "exit-tax",
    href: "/en/services/exit-tax",
    title: "Exit Tax filing",
    description: "We manage the Exit Tax filing and follow-up with the authorities."
  },
  {
    slug: "testament-difc",
    href: "/en/services/testament-difc",
    title: "DIFC Will registration",
    description: "Drafting and registration of a DIFC-compliant will."
  },
  {
    slug: "regime-fiscal-des-impatries",
    href: "/en/services/regime-fiscal-des-impatries",
    title: "Inbound expatriate tax regime",
    description: "Support for the French inbound expatriate regime (impatriation)."
  },
  {
    slug: "gestion-de-la-plus-value-immobiliere-des-non-residents",
    href: "/en/services/gestion-de-la-plus-value-immobiliere-des-non-residents",
    title: "Non-resident real estate capital gains",
    description: "Capital gains reporting and optimization for non-residents."
  },
  {
    slug: "declaration-2074---cessions-de-parts-des-non-residents",
    href: "/en/services/declaration-2074---cessions-de-parts-des-non-residents",
    title: "Form 2074 - share disposals",
    description: "Share disposal filing support for non-residents."
  },
  {
    slug: "declaration-dimpot-sur-la-fortune-immobiliere",
    href: "/en/services/declaration-dimpot-sur-la-fortune-immobiliere",
    title: "French real estate wealth tax (IFI)",
    description: "We handle your IFI filing and optimization strategy."
  },
  {
    slug: "structuration-de-societe-internationnale",
    href: "/en/services/structuration-de-societe-internationnale",
    title: "International company structuring",
    description: "Structuring aligned with your tax and business goals."
  },
  {
    slug: "obtention-de-certification-de-residence-fiscale-aux-emirats",
    href: "/en/services/obtention-de-certification-de-residence-fiscale-aux-emirats",
    title: "UAE tax residency certificate",
    description: "Guidance to obtain the UAE Tax Residency Certificate (TRC)."
  },
  {
    slug: "fiscalite-immobiliere-aux-emirats",
    href: "/en/services/fiscalite-immobiliere-aux-emirats",
    title: "UAE real estate taxation",
    description: "Tax impact review for UAE real estate assets."
  },
  {
    slug: "residence-fiscale",
    href: "/en/services/residence-fiscale",
    title: "Tax residency determination",
    description: "Residency analysis and evidence framework."
  },
  {
    slug: "fiscalite-immo-france",
    href: "/en/services/fiscalite-immo-france",
    title: "French real estate taxation",
    description: "Rental income, capital gains, and wealth tax guidance."
  },
  {
    slug: "digital-transformation",
    href: "/en/services/digital-transformation",
    title: "Non-resident income tax filing",
    description: "We prepare and file non-resident income tax returns."
  },
  {
    slug: "financial-planning-and-analysis",
    href: "/en/services/financial-planning-and-analysis",
    title: "Returning to France",
    description: "Tax consequences and structuring for a return to France."
  }
] as const;

export const webflowServiceDetailsEn: Record<
  string,
  { title: string; description: string; bodyHtml: string }
> = {
  "regime-fiscal-des-impatries": {
    title: "Inbound expatriate tax regime",
    description: "Assess your eligibility for the French impatriate tax regime.",
    bodyHtml: `<h2>The impatriate regime</h2><p>The French impatriate regime (Art. 155B CGI) applies to employees recruited from abroad or transferred to France within a group. It can significantly reduce taxation during the first 8 years in France.</p><h3>We help you:</h3><ul role="list"><li>Verify eligibility and required documentation</li><li>Optimize the application of the regime</li><li>Assess tax impacts in France and abroad</li><li>Prepare and file compliant tax returns</li></ul>`
  },
  "gestion-de-la-plus-value-immobiliere-des-non-residents": {
    title: "Non-resident real estate capital gains",
    description: "Capital gains reporting and optimization for non-residents.",
    bodyHtml: `<h2>Capital gains rules for non-residents</h2><p>We guide you through the French rules applicable to non-resident capital gains on real estate, ensuring compliant reporting and optimized outcomes.</p><h3>Our support:</h3><ul role="list"><li>Calculation methodology and documentation</li><li>Optimization strategy within the legal framework</li><li>Full preparation and filing of declarations</li></ul>`
  },
  "declaration-2074---cessions-de-parts-des-non-residents": {
    title: "Form 2074 - share disposals",
    description: "Share disposal filing support for non-residents.",
    bodyHtml: `<h2>Form 2074 overview</h2><p>Form 2074 is required for non-residents selling shares in French companies. We assist in calculation, compliance, and filing.</p><h3>We provide:</h3><ul role="list"><li>Capital gain computation</li><li>Tax optimization within French rules</li><li>Preparation and submission of Form 2074</li></ul>`
  },
  "declaration-dimpot-sur-la-fortune-immobiliere": {
    title: "French real estate wealth tax (IFI)",
    description: "We handle your IFI filing and optimization strategy.",
    bodyHtml: `<h2>IFI filing for non-residents</h2><p>We assess taxable assets, optimize the declaration, and manage IFI filings while maintaining full compliance.</p><h3>Key steps:</h3><ul role="list"><li>Asset scope and valuation review</li><li>Debt deductibility and applicable caps</li><li>Preparation and filing support</li></ul>`
  },
  "structuration-de-societe-internationnale": {
    title: "International company structuring",
    description: "Structuring aligned with your tax and business goals.",
    bodyHtml: `<h2>International structuring</h2><p>We help design a cross-border structure that supports growth while keeping tax exposure controlled and compliant.</p><h3>Our work includes:</h3><ul role="list"><li>Jurisdiction analysis and rationale</li><li>Operational and tax compliance guidance</li><li>Documentation and governance alignment</li></ul>`
  },
  "obtention-de-certification-de-residence-fiscale-aux-emirats": {
    title: "UAE tax residency certificate",
    description: "Guidance to obtain the UAE Tax Residency Certificate (TRC).",
    bodyHtml: `<h2>TRC process</h2><p>The Tax Residency Certificate is essential to apply the France–UAE treaty and reduce withholding exposure. We guide you through the full TRC process.</p><h3>We assist with:</h3><ul role="list"><li>Eligibility assessment</li><li>Document collection and preparation</li><li>Submission and follow-up</li></ul>`
  },
  "fiscalite-immobiliere-aux-emirats": {
    title: "UAE real estate taxation",
    description: "Tax impact review for UAE real estate assets.",
    bodyHtml: `<h2>Real estate in the UAE</h2><p>We evaluate the tax consequences of UAE real estate investments from a France–UAE perspective, including treaty impacts and French reporting obligations.</p><h3>Our support:</h3><ul role="list"><li>Impact assessment by asset type</li><li>France reporting obligations</li><li>Long-term structuring advice</li></ul>`
  },
  "expratriation-emirats": {
    title: "UAE relocation",
    description: "Prepare your move and secure your tax position.",
    bodyHtml: `<h2>Preparation before departure</h2><p>Relocation requires a clear tax strategy and careful documentation. We assess residency criteria and Exit Tax implications to avoid surprises.</p><h3>What we deliver:</h3><ul role="list"><li>Departure tax risk analysis</li><li>Exit Tax filing support</li><li>Evidence package for non-residency</li></ul>`
  },
  "residence-fiscale": {
    title: "Tax residency determination",
    description: "Residency analysis and evidence framework.",
    bodyHtml: `<h2>Residency is the core issue</h2><p>Being a UAE resident does not automatically make you a non-resident in France. We document facts and build the evidence required to secure your status.</p><h3>Our approach:</h3><ul role="list"><li>Residency test review</li><li>Evidence and documentation plan</li><li>Ongoing compliance guidance</li></ul>`
  },
  "fiscalite-immo-france": {
    title: "French real estate taxation",
    description: "Rental income, capital gains, and wealth tax guidance.",
    bodyHtml: `<h2>French real estate for non-residents</h2><p>We help optimize rental income taxation, capital gains, and IFI exposure for assets held in France.</p><h3>We cover:</h3><ul role="list"><li>Holding structure analysis</li><li>Annual filing obligations</li><li>Transmission planning</li></ul>`
  },
  "digital-transformation": {
    title: "Non-resident income tax filing",
    description: "We prepare and file non-resident income tax returns.",
    bodyHtml: `<h2>Non-resident income tax</h2><p>We manage your French income tax filings as a non-resident and optimize outcomes within the legal framework.</p><h3>Our support:</h3><ul role="list"><li>Return preparation and filing</li><li>Optimization opportunities</li><li>Treaty application review</li></ul>`
  },
  "financial-planning-and-analysis": {
    title: "Returning to France",
    description: "Tax consequences and structuring for a return to France.",
    bodyHtml: `<h2>Planning a return to France</h2><p>We evaluate tax impacts of your return, assess the impatriate regime, and build a compliant transition plan.</p><h3>We help you:</h3><ul role="list"><li>Understand future obligations</li><li>Review structuring options</li><li>Prepare filings and documentation</li></ul>`
  },
  "human-resources-consulting": {
    title: "Company setup & UAE visa",
    description: "Incorporation, structuring, and visas aligned with your project.",
    bodyHtml: `<h2>UAE company setup</h2><p>We define the right structure for your activity, then manage incorporation and related residency visas.</p><h3>Our support:</h3><ul role="list"><li>Structure selection</li><li>Incorporation and licensing</li><li>Visa and Emirates ID process</li></ul>`
  },
  "exit-tax": {
    title: "Exit Tax filing",
    description: "We manage the Exit Tax filing and follow-up with the authorities.",
    bodyHtml: `<h2>Exit Tax essentials</h2><p>Exit Tax is a required declaration when moving tax residency out of France. We structure the filing and help secure payment deferral when applicable.</p><h3>We handle:</h3><ul role="list"><li>Eligibility assessment</li><li>Initial filing and follow-up</li><li>Deferral requests and monitoring</li></ul>`
  },
  "testament-difc": {
    title: "DIFC Will registration",
    description: "Drafting and registration of a DIFC-compliant will.",
    bodyHtml: `<h2>Secure your assets in the UAE</h2><p>DIFC Will registration provides a clear legal framework for succession planning. We help prepare and register the will with the DIFC.</p><h3>Our scope:</h3><ul role="list"><li>Family and asset review</li><li>Drafting and structuring</li><li>Registration process support</li></ul>`
  }
};
