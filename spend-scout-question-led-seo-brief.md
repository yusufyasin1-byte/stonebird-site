# Spend Scout Question-Led SEO Brief

Review date: 2026-06-25
Site area: `stonebird-website/labs/spend-scout`
Primary product name: Spend Scout: Expense Tracker

## Verdict

Yes, we should use the method from the video, but only in the disciplined version:

- Build pages around real buying questions and comparison intent.
- Keep each page specific enough to be useful on its own.
- Connect every page back to the Spend Scout product hub.
- Avoid thin FAQ spam, exaggerated ranking promises, or claims we cannot prove.
- Treat structured data as clarification for search engines, not as the strategy itself.

The existing Stonebird site already has a good foundation: a Spend Scout hub plus intent pages for private tracking, no-bank-login tracking, manual iPhone tracking, cash spending, multi-currency spending, and Apple Pay Shortcuts. The next useful move is not "more keywords." It is a small set of sharper pages where Spend Scout has a credible answer.

## Guardrails

- Do not claim we can "force Google" to rank the site.
- Do not publish hundreds of question pages.
- Do not use FAQ schema as the main tactic. Google removed FAQ rich result support in 2026, so FAQs should exist for readers, not as a rich-result hack.
- Do not make competitor claims without checking the current public product pages first.
- Do not imply direct Wallet scraping, bank sync, live FX, investment tracking, subscription management, or automated account aggregation.
- Keep pages static, fast, and dependency-free.

## Recommended Page Queue

### 1. Spending Forecast App

Proposed URL:
`/labs/spend-scout/spending-forecast-app`

Search intent:
People who do not just want an expense log. They want to know whether they are on pace to overspend before the month ends.

Why it fits:
This is Spend Scout's strongest native wedge. It is more ownable than generic "expense tracker" terms and it supports the core product promise.

Draft title:
`Spending Forecast App for iPhone | Spend Scout`

Draft meta description:
`Spend Scout forecasts where your monthly spending is heading before the month is over. Track expenses privately on iPhone with no bank login and no subscription.`

Hero copy:
`Most budget apps show what already happened. Spend Scout turns your logged spending into a monthly forecast so you can adjust before overspending becomes a month-end surprise.`

Core sections:
- What a spending forecast app should show
- How Spend Scout projects month-end spending
- Why forward-looking budgets beat backward-looking reports
- Privacy: no bank login, no account creation
- Related links to private tracking, manual iPhone tracking, and cash spending

Best CTA:
`Review Spend Scout`

Implementation priority:
Highest.

### 2. YNAB Alternative for Manual Expense Tracking

Proposed URL:
`/labs/spend-scout/ynab-alternative-manual-expense-tracking`

Search intent:
People who like intentional budgeting but want a simpler, manual-first iPhone tracker without a subscription-heavy posture.

Why it fits:
YNAB is a high-awareness comparison term. Spend Scout should not pretend to replace full envelope budgeting. It should position itself as lighter, private, forecast-led tracking.

Draft title:
`YNAB Alternative for Manual Expense Tracking | Spend Scout`

Draft meta description:
`Looking for a simpler YNAB alternative? Spend Scout is a private iPhone expense tracker for manual logging, monthly spending forecasts, cash, cards, and Apple Pay Shortcuts.`

Hero copy:
`If you want the awareness of manual budgeting without running a full budgeting system, Spend Scout gives you a faster path: log spending, see your pace, and know where the month is heading.`

Core sections:
- Spend Scout is not full zero-based budgeting
- Where Spend Scout is simpler
- Manual logging without bank connection
- Forecast-led monthly awareness
- When YNAB is still the better fit

Required honesty:
Say YNAB may be better for people who want full envelope/category planning, shared household budgeting, or deeper budget methodology.

Implementation priority:
High, after the forecast page.

### 3. Mint Alternative Private Expense Tracker

Proposed URL:
`/labs/spend-scout/mint-alternative-private-expense-tracker`

Search intent:
People displaced from Mint-style personal finance tracking who want something simpler and more private.

Why it fits:
"Mint alternative" is still a persistent search behavior. Spend Scout should not pretend to be an account aggregator. The page should make the privacy tradeoff explicit.

Draft title:
`Mint Alternative for Private Expense Tracking | Spend Scout`

Draft meta description:
`Spend Scout is a private Mint alternative for people who want iPhone expense tracking without bank login, account aggregation, or subscription pressure.`

Hero copy:
`Spend Scout is not a bank dashboard. It is a private iPhone expense tracker for people who want to understand spending without connecting accounts.`

Core sections:
- What Mint users usually miss
- What Spend Scout does differently
- No bank login or aggregator dependency
- Cash, cards, Apple Pay Shortcuts, receipts, and currencies
- When a bank-sync app is still the better fit

Required honesty:
Do not frame Spend Scout as a full net-worth or investment dashboard.

Implementation priority:
High.

### 4. Monarch Money Alternative Without Bank Login

Proposed URL:
`/labs/spend-scout/monarch-money-alternative-no-bank-login`

Search intent:
People evaluating premium personal finance tools but uncomfortable with bank linking or subscription complexity.

Why it fits:
This is more niche than Mint and YNAB, but it is closer to a high-intent user who cares about privacy and recurring cost.

Draft title:
`Monarch Money Alternative Without Bank Login | Spend Scout`

Draft meta description:
`Spend Scout is a no-bank-login expense tracker for iPhone. Track spending manually, forecast your month, and keep your data private without account aggregation.`

Hero copy:
`Some people want a full financial command center. Others just want to know whether this month is getting away from them. Spend Scout is built for the second group.`

Core sections:
- Full finance dashboard vs focused expense tracker
- No bank login
- Manual-first tracking
- Monthly forecast
- When Monarch-style tools make more sense

Required honesty:
Say clearly that Spend Scout is not a full household finance dashboard, net-worth tracker, or investment tracker.

Implementation priority:
Medium.

### 5. Best Expense Tracker for Apple Pay Shortcuts

Proposed URL:
`/labs/spend-scout/best-expense-tracker-apple-pay-shortcuts`

Search intent:
People looking for a practical way to make Apple Pay spending visible in an expense tracker.

Why it fits:
We already have an Apple Pay Shortcuts page. This new page should be either a stronger replacement or a more buyer-oriented companion. Do not create duplicate content.

Draft title:
`Best Expense Tracker for Apple Pay Shortcuts | Spend Scout`

Draft meta description:
`Spend Scout helps track Apple Pay spending through an on-device Shortcuts workflow. No Wallet scraping, no bank login, and no third-party transaction aggregator.`

Hero copy:
`Apple Pay is fast, but spending can become invisible. Spend Scout uses a reviewable Shortcuts-based handoff so wallet purchases can become part of your monthly forecast.`

Core sections:
- What Apple allows and does not allow
- Shortcuts-based capture, not Wallet scraping
- Fields worth logging
- Review before saving
- How the forecast uses Apple Pay entries

Required honesty:
Do not imply direct Wallet history access.

Implementation priority:
Medium, only if we either merge or clearly differentiate it from the existing Apple Pay page.

## Pages To Avoid For Now

- `subscription-management-app`
- `investment-tracking-app`
- `bank-sync-budget-app`
- `automatic-expense-tracker`
- `best-budget-app-for-couples`
- `receipt-scanner-app` unless receipt Smart Fill is ready and accurately described
- Any page targeting "free Mint clone" or "YNAB but free" language

These either misrepresent the product, attract the wrong user, or create support debt.

## Suggested Internal Link Model

Hub:
`/labs/spend-scout`

Foundation pages already live:
- `/labs/spend-scout/private-expense-tracker`
- `/labs/spend-scout/no-bank-login-expense-tracker`
- `/labs/spend-scout/manual-expense-tracker-iphone`
- `/labs/spend-scout/cash-spending-budget-app`
- `/labs/spend-scout/multi-currency-expense-tracker`
- `/labs/spend-scout/apple-pay-expense-tracking-shortcuts`

New pages should link back to:
- Spend Scout hub
- Spending forecast page
- Private expense tracker
- No-bank-login expense tracker
- Manual iPhone tracker

The hub should gain one restrained "Compare and learn" section once at least two comparison pages exist.

## Page Template

Each new page should use this structure:

1. Hero with product icon, clear title, and one accurate promise.
2. Three-card value block using existing `ss-cluster-card` styles.
3. A direct "best fit / not best fit" section.
4. A short explanatory section answering the actual search question.
5. Related pages block.
6. Human FAQ section, visible on page.
7. Structured data only when it matches visible content.
8. Sitemap entry with image metadata.

## Review Decisions Needed

1. Approve the first implementation batch:
   - Recommended: `spending-forecast-app`, `ynab-alternative-manual-expense-tracking`, `mint-alternative-private-expense-tracker`

2. Decide whether comparison pages should name competitors in H1s:
   - Recommended: yes, but with honest fit/not-fit framing.

3. Decide whether to keep the existing Apple Pay page as-is:
   - Recommended: keep it for now, and only add a buyer-oriented Apple Pay page if Search Console later shows Apple Pay impressions worth expanding.

4. Decide whether to add screenshots or keep using the current OG/product icon assets:
   - Recommended: use current assets until final App Store screenshots are locked.

## Implementation Notes

- No new framework or dependency is needed.
- Reuse the existing static HTML page pattern.
- Reuse `ss-cluster-hero`, `ss-cluster-grid`, `ss-cluster-card`, `ss-related-grid`, and `ss-faq-list`.
- Update `sitemap.xml` for every published page.
- Validate JSON-LD after edits.
- Run a local static server for visual QA before publishing.
