---
layout: article
categories: blog
summary: "We’ve heard about the consequences of mass personal data mining — from manipulating elections to exploiting people’s neuroses. Companies keep basing their business models around tracking their users and selling that data. Data breaches and unsavory uses of all this information clearly infringe personal privacy, but what’s the alternative beyond becoming a cave-dwelling hermit?"
title: "Are Personal Data Stores about to become the NEXT BIG THING?"
date: 2018-10-04
author: "shevski"
footer: |
  <p>
    This article also appeared <a rel="alternate" href="https://medium.com/@shevski/are-personal-data-stores-about-to-become-the-next-big-thing-b767295ed842">on medium.com</a>.
  </p>
---

Written by [Irina](https://twitter.com/shevski) and [Simon Worthington](https://twitter.com/51M0NW).

![Personal Data Store providers we assessed](/assets/images/posts/pds.jpg)
Personal Data Store providers we assessed

We’ve heard about the consequences of mass personal data mining — from manipulating elections to exploiting people’s neuroses. Companies keep basing their business models around tracking their users and selling that data. Data breaches and unsavory uses of all this information clearly infringe personal privacy, but what’s the alternative beyond becoming a cave-dwelling hermit?

One that’s come up time after time is the Personal Data Store (PDS) model. This post looks into some leading solutions and assesses the prospects.

Our hypotheses
When we started our research, there was a number of concerns and assumptions we wanted to test. Our worries were that PDSs:

* Don’t have a market and adoption figures are low.
* Are too much hard work (either for non-technical users or in terms of time and effort to be one’s own data broker).
* Don’t provide any advantage to the user over existing models apart from privacy (a.k.a [“what new superpower does it give me?”](https://www.ben-evans.com/benedictevans/2017/5/24/not-even-wrong-ways-to-dismiss-technology)).
* Don’t integrate with existing social platforms where people’s network lives.
* Are unrealistic and will fail to deliver major privacy and data control shifts.

## What we found

The market for personal data stores is fairly immature — there’s a proliferation of different products and frameworks that refer to themselves as “personal data stores”, “personal data markets” and other variants on this theme. Their feature sets vary wildly, but one concept links them together — they offer to store the user’s personal data and allow the user to give controlled access to other organisations.

This is different to “personal clouds”, which focus on storing data for the sole use of the user. We won’t talking about personal clouds in this post because they don’t solve the problem of organisations collecting data about you for their own use. The market for personal clouds is much more mature, with notable examples being [Cozy](https://cozy.io/en/), [Freedom Box](https://www.freedomboxfoundation.org/), [NextCloud](https://nextcloud.com/) and [My Cloud](https://www.mycloud.com/).

## How does a personal data store work?

Instead of data about us belonging to siloed internet monopolies, PDSs promise to give back control to users, enabling them to ‘own’ their data and control access through granular permissions. The exact notion of “ownership” used varies and not all providers provide clear legal frameworks. Some take copies of data from existing companies (similar to the ‘personal cloud’ model) in addition to storing self-asserted data. The basic idea is that you put in data about you and evidence of your identity (using passports and bank statements) which you can let others access or indirectly use in order to provide you services.

There are two important sides of the PDS market: the users who the are the subjects of the data, and the organisations who want to use it (and currently collect and control it). To understand this, we looked at what problems each PDS provider claims to solve, their sell to users and companies and anything we could find around business models and adoption figures.

## Review of PDS providers

### SoLID

[SoLiD](https://github.com/solid/solid) is a proposed set of conventions and tools for building decentralized Web applications based on [Linked Data](http://www.w3.org/DesignIssues/LinkedData.html) principles.

**Problem they’re addressing**: [Account proliferation, data lock-in, no interoperability between apps](https://solid.github.io/intro-to-solid-slides/#26).

**Offer to individuals**: “True data ownership” — choose where your data is stored and who can access it. Avoid lock-in by being able to change providers and retain access to data.

**Offer to organisations**: As a developer of applications you can benefit from existing data users have already created/stored — thereby having an addressable market without needing to build up network first.

**Business model**: Tim Berners-Lee just [announced a commercial venture](https://medium.com/@timberners_lee/one-small-step-for-the-web-87f92217d085) to support Solid. Business model and pricing have not yet been announced. Code for Solid is open source and has been in development for over 3 years.

### MyDex

[MyDex](https://pds.mydex.org/) is “a hyper-secure storage area and service so you can manage your personal data your way, from any aspect of your life.”

**Problem they’re addressing**: Not articulated.

**Offer to individuals**: Store attributes, not random data. Individual’s data is kept “safe”, private and users can use their data to get useful insights. Individuals can provide data or “proofs” to others, for a limited time and purpose. Individual’s data is always available to them any time.

**Offer to organisations**: Orgs get access to information on how the data was collected. They can trust data because Mydex verifies its source. Orgs can use exchange of verified data to increase convenience for customers.

**Business model**: Free for individuals. For organisations, there’s a £10k set-up, and a cost of 15p per individual connected +25% after first year, + 4% of fees paid by individuals for access.

### Digi.me

[Digi.me](https://digi.me/) “lets you import and use the data about you scattered around your apps and websites” and “take control of the data powering your digital life”.

**Problem they’re addressing**: “Rather than competing on the ability to collect data, we enable third-parties to compete on the value they can deliver to a person from using their data in a transparent and mutually beneficial way”

**Offer to individuals**: Digi.me does not access or hold an individual’s data — it helps them make a copy of their data across many accounts including social media, health, finance etc. Once imported, they can search and browse that data and let apps built to integrate with Digi.me access it.

**Offer to organisations**:. Create data-driven apps with access to thousands of fields of accurate, normalised data provided directly by users. Comply with GDPR consent requirements for data processing. Differentiate your trustworthiness by embracing new user-centric rules for data sharing and privacy. Access and process data securely on device or during a session to avoid risks and costs of storing raw sensitive data

**Business model**: “For startups that have raised less than $10M or that have less than $1M revenue, the Get Data service may be used at no cost. Data transfer fees: the lesser of $0.10 per data transfer, max $3.00 per user/app/year; or 7.5% revenue share on fees you charge for your app or app-related service. More than 250K monthly users qualify for discounts.”

### Hub of all Things

“With a [Hub of All Things](https://hubofallthings.com/), a person can legally own the rights to their personal data, and benefit from all the many apps and personal AI tools that draws from all of their personal information, no matter where they are created”

**Problem they’re addressing**: Organisations have all the control. User agreements are too dense to understand. People can’t own their own data because they don’t own their own database.

**Offer to individuals**: HATs allow individuals to get value out of their data (possibly as a collective). Efficiency: collect data once, use it everywhere. Ability to revoke access when no longer desired.

**Offer to organisations**: Avoid the risk of protecting/sharing personal data. Reduce dev time by using auth and account creation. Reduce dev time by using HAT API instead of a database. Get access to users who are bought into the HAT ecosystem. Leverage user trust in HAT ecosystem

**Business model**: £4.99/month or £50/year after for individuals.

### OpenPDS

[Open PDS with SafeAnswers](http://openpds.media.mit.edu/) is a framework allowing users to collect, store, and give fine-grained access to their data all while protecting their privacy.

**Problem they’re addressing**: Individuals want to manage and understand their personal data, but can’t because they don’t have access to it. Technical interoperability is not enough because there are too many disparate data sources. Not all people who want access to data have altruistic motives, and individuals need to be kept safe from them.[“Aggregate and anonymous location data can dramatically improve society.”](http://hd.media.mit.edu/wef_globalit.pdf) Coarse or blurred datasets provide little anonymity/it’s extremely difficult to anonymize data whilst retaining value.

**Offer to individuals**: Subjects need new rights to data ownership. Individuals can control data through which answers their PDS gives out and to whom.

**Offer to organisations**: No offer to data consumers/organisations.

**Business model**: No [GitHub](https://github.com/HumanDynamics/openPDS) updates for 2 years. No product you can sign up to or use, but some thinking has clearly gone into this previously.

### Meeco

[Meeco](https://meeco.me/) was “created with the purpose to empower people to own and benefit directly from their personal data. Reward is not just about money; it is what matters to you. Meeco is about helping you gain the insight and have the data to negotiable better outcomes for you and your family”.

**Problem they’re addressing**: Potential benefits/profit from personal data is only available to businesses and not the subject of the data. Picture of our real likes and preferences is incomplete, leading to badly tailored or irrelevant content/adverts.

**Offer to individuals**: “Securely manage all your personal data and exchange it on your terms”. Your personal data is valuable — a “currency”. Data is most valuable to others when it’s accurate and up to date. Meerco won’t sell your data, but will help you sell it / get value out of it. “Up until now the power to capture, analyse and profit from personal data has resided with business, government and social networks. What if you and I had the same power?”

**Offer to organisations**:. Consumer trust in organisations to safeguard their data is low, and Meeco is able to restore that trust. Regulation makes data collection harder, and Meeco makes this easier. Live API enables “2-way access to data and verified attributes directly with the customer”.

**Business model**: Free for consumers, paid access to API/labs for business.

## Analysis

The common threads are that a PDS would ensure your personal data:
* would not be lost when the company pivots, is bought up, goes bankrupt or decides to delete or suspend your account since you maintain it.
* would not be as vulnerable to misuse, exploitation or data breaches since you hold the data and can revoke access.
* can be kept accurate and up to date more easily from once central location.

Potentially, there’s also the eventual benefit that you have greater transparency on how decisions are made about you since you can see what data is accessed (particular relevant for banking, government, insurance, advertising, etc).


## Concerns

It’s been many years since some of these projects were released, yet despite growing interest in online privacy, no personal data store has seen significant mass-market penetration. In general we found few figures on adoption. So what’s not working?

Our hypothesis is two-fold: firstly, new technologies are driven by how they give users new abilities, but PDSs don’t seem to offer substantial new functionality. They may provide extra privacy, but at the cost of making existing workflows harder. There’s not enough evidence that privacy matters above other features for when mass-market users choose products and services.

It’s also unclear how this privacy is enforced. Data ownership makes sense if the user’s copy of the data is recognised as the authoritative source, and they have control over how every other copy of it is used. In a world where countless companies already have data about us, this would mean moving to new services and convincing existing companies to change strategy.

Secondly, the market is under catering to organisations — few PDSs provide a compelling reason for companies and organisations to integrate and use a PDS. So far, the key value presented to organisations in being part of a PDS ecosystem is access to users who trust the system, but if there is minimal user uptake, organisations have little incentive to be involved.

What we see is the classic adoption problem: users won’t adopt because they can’t do anything useful, and organisations won’t adopt because there aren’t any users and they have nothing to gain themselves.

## What might drive PDS adoption?

There have been a number of recent developments that can drive PDS adoption.

Regulation like GDPR provides a potential incentive since it places major burdens and restrictions on companies processing (collecting, storing, using) personal data which can be bypassed through the use of a PDS.

As more transactions and traditional services become digital, the need to verify user’s identity and attributes about them, such as address, age and solvency in a standard and frictionless way will drive the use of identity providers. This is something many PDS services could add to their offering. There are legal requirements that need to be met for KYC/AML and a growing numbers of standards, so it’s likely that identity verification will be commoditised and companies will look to be integrating external solutions instead of developing their own.

## Questions and recommendations

PDS’s need to focus on the needs of both types of users — individuals and companies. There has to be compelling offers to both sides of this market.

We did not test how easy it was to set-up any of these PDSs and use them in a real service or for individual users. A next step would be to carry out user research on individuals and companies. This should explore how on-boarding could work and what pain-points and opportunities exist for individuals and companies in using PDSs.

Some questions to consider: how can we actually make use of the potential privacy benefits and data ownership that PDSs deliver? Legislation has been an enabler for citizen privacy in the past — what sort of policies could we enact today? What existing regulation and policies can be used to drive adoption? And lastly, what are the real world needs that PDSs could meet?
