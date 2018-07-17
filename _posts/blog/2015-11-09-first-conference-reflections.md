---
layout: article
categories: blog
summary: "A quick writeup and overview of the first redecentralize conference from 2015. Written for the FLOSS newsletter in Nov 2015, reproduced here in its former glory"
title: "First Conference Reflections"
date: 2015-11-09
author: "shevski"
---

Last month we organised the first [Redecentralize.org conference](http://redecentralize.org/conference)! A full weekend, held in London with invited speakers and projects, all scheduled and planned [unconference](https://en.wikipedia.org/wiki/Unconference) style to get discussions, collaborations and ideas going. 

The topic? Technology that shapes society.

The challenge? Alternatives to monopolies. Mass privacy, security and an equal open web which represents the interests of its users.
We had a fantastic venue and breakfast, courtesy of [ThoughtWorks](https://www.thoughtworks.com/)  along with delicious ethical food and Saturday drinks sponsored by the excellent  [FLOSS](http://www.flossuk.org/) and [Ethereum](https://ethereum.org/)  folks. 

The conference was attended by a really lovely group of people and mix of projects. Everything from protocols to user friendly self hosting apps and products to community movements to data ownership platforms to standards.

Have a look at the [storify of the tweets over the weekend!](https://storify.com/shevski/redecentralize-conference-56260bb90da26bd07337bb99) [Link no longer works due to Storify dying a brutal centralist death, so try the [twitter hashtag](https://twitter.com/search?q=%23redecentralize&src=typd) instead] 

I was interested to see the progress made in the space of self hosting, data ownership & easy encryption. A number of projects were in this space - I particularly liked the idea of  [CloudFleet](https://cloudfleet.io/) , which has yet to launch, and is a small simple device you plug in at home that comes with  [MailPile](https://www.mailpile.is/)  (simple web email client with encryption build it) and a calendar & contacts app installed. It automatically generates your private/public keys and handles encryption and syncing / backup between it and your devices. 

[Cozy](https://cozy.io/)  have been hard at work since we  [interviewed them in January last year](http://redecentralize.org/interviews/2014/01/30/11-benjamin-cozycloud.html) and now have a comprehensive google import that lets you transfer all your data to your Cozycloud instance (you need a server or hosting provider) and then connect it to bank feeds and other apps. This is a great platform from which to control your own data and see what’s possible - although it’s currently all unencrypted. 

Incidentally, when it comes to self hosting, I recently got myself a  [Sandstorm](http://sandstorm.io/)  instance and have been playing around with installing apps. It’s actually pretty user friendly and fun (once you get over needing to run your own server) - but still missing cool apps like  [shout-irc](http://shout-irc.com/)  which is the one I’m really keen to run. And crucially, usable email, calendar & contact list apps which encrypt by default. If I had these, I would be a happy lady. 

Back to the conference: the new cool kids in town are of course [Ethereum](https://ethereum.org/) and [IPFS](http://ipfs.io/). I’ll also add [Backfeed](http://backfeed.cc/) to the group and all three are really interesting, have a huge following, potentially work well together and were all represented at the conference.

Ethereum is a platform for building decentralised application that are run by all ethereum nodes. They’ve invented their own programming language for running general scripts (“smart contracts”) on the blockchain and corresponding crypto-currency - ether. They had a great triple bill of [talks](http://redecentralize.org/conf2015/2016/07/19/05-wtf-is-ethereum-really.html), covering everything from the historical backdrop by the inimitable Vinay Gupta, a friendly overview and demo by Gavin Wood ([who we’d interviewed about Ethereum a year ago](http://redecentralize.org/interviews/2014/09/23/18-gavin-ethereum.html) !) and a great talk from Jutta Steiner on [practical applications and Provenance](http://redecentralize.org/conf2015/2016/07/19/06-decentralizing-in-the-real-world-jutta.html). 

A version of all the videos with slides will be coming over the next few days on the  [redecentralize website](http://redecentralize.org/)  and  [youtube channel](https://www.youtube.com/user/redecentralize) ! 

Backfeed is also blockchain based. It’s a protocol for encoding human consensus to get decentralised ownership and governance (decision making, remuneration and collaboration) on the blockchain through reputation. You can think of it as adding a social reputation based layer to the decentralised applications on ethereum.

This creates the potential for massive truly decentralised organisations where hundreds of people take actions and are rewarded financially (with cryptocurrency) and with ownership / greater decision making by the actions they take. Contracts on the blockchain allow for decentralised obligations and agreements to be dispensed automatically in a trusted fashion that cannot be gamed or abused. This could eliminate a many overhead costs: infrastructure, checks and balances, multiple management layers as well as creating true collaboration.

[IPFS](http://ipfs.io/)  is a new hypermedia distribution protocol & peer-to-peer distributed file system which can be used as the storage layer in the above model. It uses content addressing (a cryptographic hash of the content as its address instead of location as in the case of http) which allows for faster downloading bit-torrent style of content from numerous peers and permanent versioning of content and data that does not depend on the initial uploader’s server / computer to remain available. Ian gave a great  [overview](http://redecentralize.org/conf2015/2016/09/07/14-ipfs.html) of the issues with the current http based system and how IPFS resolves these. 

My instinct is that to succeed in some kind of decentralisation or distribution of power, we not only need novel capabilities, but network power. We must challenge the walled garden business model by giving users what they want - the ability to choose their application and still be able connect together and keep their network independently of any provider. For that, we need open standards. In addition to creating an equal open playing field that empowers individuals, standards can help smaller market shares and networks pool together to challenge larger monopolies.

At the conference,  [Matrix](http://matrix.org/)  participated in both the speed geeking, lightning talks, held a session and wrote a [blog post on the event](http://matrix.org/blog/2015/10/19/redecentralize-conference-taking-back-the-net/) ! It’s designed as an open standard for decentralised communication. They’ve also built bridges to existing popular apps like slack which you can experience from their pretty new app: [vector.im](http://vector.im/). [Now riot.im !]

[SoLID](https://github.com/solid)  - a standard and conventions for building privacy preserving apps that leave data in control of the user on a linked data platform, is also aiming to provide an open API standard that it hopes will fuel the whole ecosystem. Andrei and Nicola from the team  [talked about the importance of data ownership](http://redecentralize.org/conf2015/2016/08/31/11-solid.html) and showed off what they’ve been working on. 

In general, I remain somewhat skeptical since I’m really looking for an adoption strategy and usable apps that have shipped. Standards and protocols only work when they have mass adoption. You can enforce this if you hold a majority market share of users, at which point a strategy isn’t necessary, but if you don’t enjoy such privilege you cannot simply rely on your solution being ‘right’ - it needs to be simple while providing enough value to get over the switching cost inertia or the tendency to hack together one’s own solution. I am optimistic though :)

Lastly, we had a lot of great sessions that were not about specific technologies or protocols. We heard from  [CyberSalon](http://www.cybersalon.org/)  who are  [developing a digital bill of rights](http://redecentralize.org/conf2015/2016/04/05/02-lightning-talks-digital-bill-of-rights.html) , Max with brilliant anecdotes for why you should decentralise and on  [keeping data for 80 years](http://redecentralize.org/conf2015/2016/04/09/03-keeping-data-for-80-years-pies.html) , Francis led a session to discover the  [best file syncing and backup storage solution](http://www.flourish.org/2015/11/syncbackup-workshop-at-redecentralize-conference/)  (the happiest person was copying files by hand),  [exploring privacy, compliance and usability](http://redecentralize.org/conf2015/2016/08/31/10-hiproject.html)  by the new non-profit  [Hi:project](http://hi-project.org/)  a lovely round table discussion on how to spread important, but unpopular ideas -  [learning from the vegan movement](http://redecentralize.org/conf2015/2016/08/31/12-tales-from-the-vegan-movement.html) and an action packed history of [10 years of standards failure](http://redecentralize.org/conf2015/2016/09/07/13-ten-years-of-standards-failure.html).

There was more, much more and this is just my snapshot. Watch the #redecentralize tag on twitter,  [sign up to the newsletter](http://redecentralize.us7.list-manage1.com/subscribe?u=e695b0ee388925f96abc28c36&id=8718aeab17)  and  [discussion list](https://github.com/redecentralize/swarm/wiki/Email-list)  and get involved in taking back the net! 

