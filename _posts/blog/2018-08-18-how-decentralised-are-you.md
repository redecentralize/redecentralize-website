---
layout: article
categories: blog
summary: "As the decentralisation movement grows, I consider the characteristics of decentralisation, what decentralisation is a tactic for, why and what work still needs to happen to re-decentralize the digital world."
date: 2018-08-18 08:00:00
author: "shevski"
---

As the decentralisation movement grows, I consider the characteristics of decentralisation, what decentralisation is a tactic for, why and what work still needs to happen to re-decentralize the digital world.

## Decentralisation has gone mainstream

Between Tim Berners-Lee raising the call to arms to [re-decentralize the web](https://www.wired.co.uk/article/tim-berners-lee-reclaim-the-web), Mozilla, Internet Archive and other institutions pledging support, to the incredible financial success of blockchain and cryptocurrency projects — decentralisation is increasingly sexy.

(If you haven’t seen the hype, some of the mainstream coverage includes the [New Yorker covering ‘the mission’ in 2013](https://www.newyorker.com/tech/elements/the-mission-to-decentralize-the-internet) to the [Guardian calling decentralisation ‘the next big step’](https://www.theguardian.com/technology/2018/sep/08/decentralisation-next-big-step-for-the-world-wide-web-dweb-data-internet-censorship-brewster-kahle) earlier this month and [Make Use Of wondering if blockchains are the answer](https://www.makeuseof.com/tag/decentralized-internet-blockchain/)).

Yet, what does decentralisation actually mean? Does it only apply to technology or is governance more important? Who gets to call themselves decentralised and does it matter?

The number of times I’ve heard ‘it’s decentralised’ as a reason to use or move to a particular application or platform recently, is impressive. All kinds of crypto/blockchain companies are branding themselves as ‘decentralised’ — every day there’s a new decentralised social network, decentralised file storage solution, decentralised identity app, decentralised syncing, contract management, health data sharing, dating service, avocado delivery — all decentralised! As if decentralisation is something wonderful and worthwhile in and of itself. Yet, when I ask ‘why does that matter?’ or ‘how are you decentralised?’ the answers tend to be very different and even inconsistent with the actual business proposition people are working on. How did we get here and what’s beyond the hype?

Decentralisation means different things to different people. When [Francis](https://twitter.com/frabcus) and I picked [Redecentralize](http://redecentralize.org/) to name our decentralisation-promoting side project 6 years ago, it was precisely because we cared about a number of things: privacy, competition and resilience. It wasn’t just about one solution (such as encryption) that we wanted to promote, it was a set of values: freedom, autonomy, collaboration, experimentation. Those values were tied up to the original spirit of the open web and net — the sense of freedom and possibility that we wanted to remind people of, and protect.

As decentralisation becomes more popular, those values and goals are getting lost as the community fractures into [various roles](https://medium.com/@shevski/when-movements-go-mainstream-9c73d5613927). We need a way to distinguish and assess decentralisation meaningfully.

## First, what does decentralisation actually mean?

At its most basic level, it is a distinction between a centralised hub and spoke model and a distributed connected network:

![squiggles](/assets/images/posts/redecentralisation.jpg)
I drew this myself. You’re welcome.

Some people distinguish between ‘decentralised’ and ‘distributed’ — I’m talking about the general idea of decentralisation that encompasses distributed, federated and decentralised systems. This post is about the characteristics of decentralisation and the outcomes and implications of those characteristics rather than the specific configuration. (For more discussion on types of decentralisation, Vitalik wrote a great post on [‘the meaning of decentralisation’](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) last year).

While the diagrams are a simplification, they do immediately suggest certain characteristics. The centralised system on the left obviously has one much more important or powerful node — the middle one. All the other nodes depend on it to reach each other. It will know about all communication in the network. It’s a central point of failure and a central point of control. If you contrast this with the diagram on the right — which nodes are more important there? It’s hard to tell. Most nodes have multiple routes to other nodes. It seems like a more resilient system, but it’s harder to know how you can quickly make sure all nodes have the same information at once.

What we need is a more formal way to assess if something counts as ‘decentralised’.

## Characterististics of decentralisation

The key characteristic I propose is that a system is decentralised to the extent it distributes power. Specifically, the distribution of control, knowledge and capability between many users. What does this look like?

**Control** is about ensuring user choice — adapting to user preferences and giving users decision making power. It’s fundamentally about autonomy. Decentralised control looks like end-users having a choice between service providers and not being forced into accepting terms and conditions that exploit them due to a lack of alternatives (see Facebook). This also looks like users having the freedom to adapt and customise the products and services they use to their specific needs. It looks like being able to opt out of targeted advertising or choosing to store your data locally. It looks like having applications that don’t require an internet connection to work.

**Knowledge** is about access to data and information. Knowledge distribution avoids information asymmetry and helps people recognise dependencies and the consequences of their choices. Decentralised knowledge looks like users having local copies of their data, being able to export data or choose to store the authoritative copy of their data locally. It looks like users understanding how the services they use actually work and their business models (for example whether it is advertising based, personalised advertising, selling your profile and preferences to external advertisers, something else etc). It looks like users being able to have private conversations and share photos securely with end-to-end encryption where the content of communication cannot be accessed or deleted by external organisations. It can look like the company providing the service not knowing or storing the metadata of who contacts who and when.

**Capability** is about infrastructure — the storage, processing and computation power needed to run systems and services. In a centralised model these are either all in the same place or in a small number of places controlled by one company. This creates a central point of failure both in the event of natural disasters (hurricanes, floods, earthquakes) and attacks (whether virtual such as data breaches, data taps, denial of services attacks, or physical destruction and manipulation). Centralisation often means that people’s data, which we rely on and want to protect (such as our conversations, photos and work), can be compromised or even lost. Privacy can be easier to compromise in central systems. A decentralised approach tends to be more resilient, but also offers greater control and knowledge distribution. It looks like apps which work offline, users being able to communicate, collaborate or share data across devices [without mobile networks](https://redecentralize.org/interviews/2013/08/14/04-paul-serval.html) or wifi through peer-to-peer networks or user data federating across a network (e.g. mastodon.social).

## Why decentralise?

Importantly, decentralisation in and of itself is neither good or bad. It depends on the context and what is being decentralised. Decentralisation can bring new capabilities, privacy and flexibility or surveillance, inefficiency and waste. **How and why it is done, matters.**

Not all things need decentralising. Unlike some, I don’t think code should be law. I like the law. It has been iterated on and developed and tested over thousands of years by millions of people. I would trust British Law above even a dozen smart contract developers. (Disclaimer: I’ve worked in tech for over 10 years, but never in law).

Institutions have value and not all expertise can or should be replaced by an immutable list and algorithmic consensus. However, in many other aspects, we desperately need to redecentralise and serve people, not corporations, much better. Even so, simply decentralising in some fashion does not magically bring about utopia. Much of the rhetoric of blockchain and other ‘decentralisation’ startups offer no plausible way from where we are today to the autonomous secure empowered world of decentralisation via their service or application. Let’s be intentional and clear about what changes we want to realise and what exactly it might take to get there. If you’re not building all of it, then be clear on what else will need to happen. We will most likely succeed as an ecosystem, not as one ‘killer app’.

This brings me back to how and why decentralisation is done, matters. And for me, the meaning and value of decentralisation is closely related to the purpose and expected outcomes of it. That means understanding the problem, articulating an alternative and roadmap for how we get there and testing the roadmap and showing it’s better by tracking the impact.

Everybody in the decentralisation space needs to do this.

## Understanding the problem

Centralised systems lead to increasingly monotonous and unaccountable power. Over time this encourages exploitation and disinterest in user needs. Take Facebook for example, a platform that on the face of it is designed to help people digitally connect with their friends and family — share photos, talk, organise events and keep in touch. If my needs were a genuine priority then I should be able to share and showcase my photos from flickr or talk to my friends using my favourite app (such as telegram, signal or wire) — which would be most convenient for me. If Facebook cared about connecting people, it would not have dropped xmpp support — an open instant messaging protocol that allowed people to choose their own interface (mine was pidgin!) and from one place and talk to anyone using gchat, facebook, AIM, msn or jabber. Instead, Facebook’s interface and functionality is optimised around keeping me scrolling and in-app as long as possible since their business model depends on selling my attention.

Amazon has become a near monopoly for buying things online with their brand recognition, efficiencies of scale and great customer service. As real-world bookshops close down and everyone else sells on amazon marketplace, few have the infrastructure, supply chains, funds or brand to be able to compete any more. When there are no alternatives, why be cheaper? Why have great customer service? Users have little choice or control and Bezos (the owner of Amazon) is the richest person on the planet. Instead of thousands of independent flourishing businesses, we have one very very very rich man.

Centralisation makes it easy to undermine privacy and use personal information in ways individuals cannot control. As the Snowden revelations showed us, Governments tap network cables and can curtail freedom of speech. Digital monopolies now hold unbelievable amounts of data on us which can be used to manipulate us into spending money, but potentially also to impersonate, blackmail or silence.

## An alternative

Keeping power accountable requires alternative competing sources of power which are independent. This could be government, assuming government is there to represent the interests of the many above the few. It could be alternative companies and services. It could be many people choosing together.

An alternative, decentralised world is one of:

* **Choice, diversity and competition** - where many different business models and structures co-exist beyond the ‘winner takes all’ surveillance capitalism model (which depends on closed networks which don’t integrate or talk to each other). Centralised models, especially with data selling / advertising business models, have been deeply explored and within any new vertical often one or two winners take all and price out new competitors. This is uninspiring compared to the wealth of innovation that might be possible with local organisations tailoring their offering to particular sectors, cultures, interests and preferences. The same open source software can be provided in different configurations and alternative service standards to fit different user needs, budget and cultural context. It’s a world where providing ethical and environmentally friendly products and delivery services is possible and discoverable.
* **Resilience** - where our valuable data and services are persistent and safe from companies being bought, new management decisions, natural disaster or hacking. No more losing your journal or portfolio gallery when a company is bought up by a monopoly.
* **Autonomy and privacy** - where we control what kinds of terms and conditions we’re willing to agree to. A world where people can opt out of data sharing or choose to pay for their social network — choosing security and no adverts while still being able to communicate with friends using different providers. A world where end-to-end encryption works seamlessly.

## How do we make it happen?

We all can contribute!

At [Redecentralize.org](https://redecentralize.org/) we’re encouraging viable alternatives that work together (‘small pieces loosely joined’). This means ensuring that decentralised products and services are usable and work well with other privacy preserving user centered services and products. A key goal of redecentralize is to promote decentralised projects and platforms and bring people working in this space together through events and discussion forums.

Secondly, open protocols and regulation that incentivises or enforces their use is vital. The beginnings of this already exist in the data portability requirements of GDPR. Open protocols allow for collaboration between different and competing products and services, giving the user maximum flexibility and control without losing access to others in their network. The forced exclusion of closed proprietary protocols over network type services (such as social networks or marketplaces like amazon, airbnb, uber) has led to monopolies and lack of innovation and should be consigned to history.

Lastly we all have a role to play to disrupt the surveillance capitalism business model by choosing with our wallets and spending money on respectful software. A promising path may be to have payment built into how things work (cryptocurrency style) so that when you use IPFS and help store content you collect Filecoin you can then spend on the applications and services you value.

## Conclusion

Decentralisation in and of itself, is unlikely to achieve all the outcomes that many people in the decentralisation movement care about. Yet it does offer a powerful way to tackle the problems of digital monopolies, growing inequality and loss of autonomy in our societies. Decentralisation incentivises power to be distributed across users. It’s an alternative infrastructure and way of being that creates space for autonomy, collaboration and local control. So, let’s be explicit about the change we want to see and test the impact.

Decentralised governance (knowledge and control in this model) is vital and must be considered alongside infrastructure and capacity. Let’s assess projects on all three characteristics of decentralisation and treat technology as a powerful tool to get us to a better world, but by no means the only intervention needed!
