---
layout: post
categories: interviews
summary: "Adam Ierymenko talks about ZeroTier One, which creates flat virtual Ethernet networks of almost unlimited size. He describes how this lets people experiment with new ways of using networking."
title: "#2: Adam Ierymenko - ZeroTier One"
date: 2013-07-30 06:00:00
author: "Irina Bolychevsky"
url-mp4: http://redecentralize.net/video/zerotierone-with-adam-ierymenko.mp4
size-mp4: 99042528
url-webm: http://redecentralize.net/video/zerotierone-with-adam-ierymenko.webm
duration: 36:55
poster: http://redecentralize.net/video/zerotierone-with-adam-ierymenko.jpg
links: |
  <li><a href="https://www.zerotier.com/" target="_blank">ZeroTier website</a></li>
  <li><a href="http://blog.zerotier.com/post/58157836374/op-ed-internet-centralization-is-not-a-conspiracy" target="_blank">Follow up blog post on centralization causes</a></li>
  <li><a href="https://github.com/zerotier/ZeroTierOne" target="_blank">Github repository</a></li>
  <li><a href="http://blog.zerotier.com/" target="_blank">ZeroTier blog</a></li>
  <li><a href="http://adam.ierymenko.name/" target="_blank">Adam's homepage</a></li>
transcript: |
<p><span>Irina Bolychevsky:</span> Hello everybody, I’m Irina and today I’m talking to Adam Ierymenko, the creator of ZeroTier One. ZeroTier One is a virtual local area network for unlimited users, so you can bring thousands of people under one wireless connection allowing you to share files or play games. I’m really excited to have Adam here today - Hi Adam!</p>

<p><span>Adam Ierymenko:</span> Hey! I’m glad to be able to speak with you! So, to talk a little about what ZeroTier One is, it is, as you said, a virtual private network. The sort of one-liner is ‘literal social networking’. So, the idea is, for example, we’re on a Google Hangout right now and if we wanted to we could invite more people - 5, 6, 7 people - and have a big Google Hangout party with a lot of people viewing. ZeroTier One lets you do something like that, but with a virtual local area network, and it lets you do it up to very, very, very large sizes. Right now it’s in alpha.</p>

<p><span>Irina:</span> What sizes are we talking about here, Adam?</p>

<p><span>Adam:</span> I’ve done simulations where it’s scaled up to millions of users. It uses a peer-to-peer technology so it doesn’t require the network I run to actually handle all of that traffic. It actually causes nodes to connect directly with each other. If you go to blog.ZeroTier.com, there’s an article called ‘how then should it not work?’, which actually talks about what sorts of algorithmic things were done to make a LAN actually scale to these sizes and make it degrade in a way that remains useful and interesting to people. </p>

<p>There’s actually a technology that I developed called ‘implicit social switching’ - which sounds like a mouthful, but what it does in practice is the way an ordinary LAN works is, you send out a broadcast message on the LAN and everybody gets it. Obviously, this can’t work with 10,000,000 people on the same LAN. </p>

<p>So, what it does is send it out to people who you’ve recently communicated with, then it propagates with something called a ‘Graph Exportation Algorithm’ to people who you have recently communicated with. In practice, what this does is, if you and a dozen people are playing the same game on the LAN, then you’re also going to see each other’s iTunes shares. If you disconnect from that game, and everyone visits the same website on the LAN, then you’re going to see the iTunes shares of other people looking at that website. So you don’t waste time automatically configuring a sort of social network that works by craft propagation sort of stuff. I’m not going to go into all of the deep tech…</p>

<p><span>Irina:</span> Ok, so to focus on one of those points; what exactly is the implication of having the people you most recently communicated with? Is that specifically so you have a starting point?</p>

<p><span>Adam:</span> Well, the way it works is, any Point A can communicate to any Point B at any time, so if you have even a million people on the network, everyone can reach everyone else. What I’m referring to here is what I call ‘broadcasts’ which is where your computer will announce for example, that you’re running iTunes and that you have music available, or something like that. And it’s the broadcasts that are handled in this implicit social switching sort of way. It’s a way of… we’re getting into very technical stuff here, high level. It’s a way of scaling things up to very large sizes.</p>

<p><span>Irina:</span> Let’s step back a tiny bit, Adam, why don’t you tell us a little about yourself and how you got to this point. What’s motivated you to build ZeroTier One?</p>

<p><span>Adam:</span> I guess a better question in terms of my background would be ‘what haven’t I done?’. I’ve done startup companies in technology, I’ve done independent startups. I’ve done machine learning, genetic algorithms, artificial intelligence, and network security for the US government. I’ve done biotech. I’ve done loads of different things.</p>

<p><span>Irina:</span> How old are you?</p>

<p><span>Adam:</span> 35. </p>

<p><span>Irina:</span> How do you have the time?</p>

<p><span>Adam:</span> The way you do that is you go into startups.  The average startup has the lifespan of 1-2 years, so when I send my resume out, I have 15 past positions pretty much all of which are out of business. So that’s how you do that. You do it by hopping around between startups. I live in Ashton North Carolina, but I used to live in Boston MA, which is much bigger for startups. I did a lot of that there.</p>

<p><span>Irina:</span> Have all these startups encouraged you to start your own thing?</p>

<p><span>Adam:</span> Yes. I’ve learned a lot about how it’s done. And I guess I’ve gotten kind of ‘seat of the pants MBA’ through that so I have some idea of how it’s done. The reason I created ZeroTier One is that I saw what a lot of people see, which is that I grew up with the Internet. I got on the Internet in 1993 when I was a kid, and watched it develop all the way to what it is now. I watched the capabilities and bandwidth increase. And I’ve seen what a lot of other people see, that it’s becoming more of a top down consumer medium, where you have small numbers of very big companies that own almost all the portals for communication. Almost all of our communication goes through that. I spent a lot of time (going all the way back to 2008) thinking ‘why is that? Why is it that when I want to send you a file I have to go to DropBox?’</p>

<p><span>Irina:</span> Why, when I email someone who lives next door, why does it get routed through America?</p>

<p><span>Adam:</span> Yes, or, for that matter, to have this conversation, why do we have to go to Google and back? So, I started asking these kinds of questions. I don’t actually believe that it’s some kind of ‘conspiracy’ to take the Internet over. I think that - although there might be people who want to do that - that’s not why it’s happening. I think the reason is… I go back to a philosopher of communications who is very well known among a lot of the earlier Internet pioneers. His name is was Marshall Mcluhan. One of his most favourite quotes is ‘The Medium is The Message’ and what that basically means is that things turn into what they are. Things evolve technologically, socially, to match and reflect their structure. If you build a system or medium that has a certain structure, for example radio - the structure of radio is you’ve got one guy sitting in a chair talking into a microphone - the community that’s going to grow up around that is going to look like that. It’s going to be very centralized, very pyramid shaped. If you build a system, you’re going to get a social system that coalesces around it that looks like the system you build. </p>

<p>Now, the original idea of the Internet was that it would be a point-to-point medium, where any computer could contact any computer. Fairly early in the story of that we ran into two problems. One which is currently being remedied is that Internet Protocol Version 4 (IPV4) does not have enough address space to give every single device in the world an address, so we had to introduce this thing called ‘Network Address Translation’ which is why you get a local network, and you don’t have a public IP, you have a private IP. That’s one thing. The other thing is when the Internet opened up (and I remember watching this because I was on the net at the time), all these systems that used to be like a small town where nobody locked the doors... when the internet opened up you had this influx of people (I’ll make an admission - people like me, I was a teenager at the time) who got on the Internet and started hacking things and so there was very quickly a need to implement a lot of security and to start locking doors so everybody got behind firewalls. What that means is that there were very good reasons why these two things were done, but what it did is create a network where it’s very difficult for the leaves of the tree to communicate directly between each other.</p>

<p><span>Irina:</span> So to just jump in, the lack of addresses meant that each device didn’t have its own identity so you couldn’t pinpoint that, or any specific device to connect to directly, so there was this need to route through this central network and servers?</p>

<p><span>Adam:</span> Yes, that created a second barrier. So, there are ways of getting around that. ZeroTier One does some of that but it’s very difficult. It’s very technically complex and difficult to engineer, so in practice what it did is it created a network where the natural tendency is for information to only be able to flow up the tree. If we visualize the tree upside down… it’s only able to flow up the tree to larger and larger nodes, so going back to Mcluhen’s theory of ‘the medium is the message’, then network address translation and firewalls created a medium which inherently favours monopoly, because that’s the easiest way for us to ‘meet’. Google can create a giant branch on the tree which we can both access very easily so it creates a natural tendency for things to actually develop that way. A whole bunch of companies have popped up to exploit this of course, but it’s not that these companies made it this way, it’s that that’s how the system has evolved.</p>

<p><span>Irina:</span> And I guess a lot of the tech now heavily favours it, so it’s very difficult to do things differently?</p>

<p><span>Adam:</span> Right.</p>

<p><span>Irina:</span> But ZeroTier One though, it’s not a replacement for the traditional model, is it? It’s something that sits on top.</p>

<p><span>Adam:</span> No, it’s not intending to replace the internet. Going back to your question, to go full circle, the reason it was created and the intent behind it is to allow people to join networks that are more like the way the internet was intended originally to be, so when you get onto ZeroTier One and you join one of these giant LANs, you’re now on a flat network with all the other users and you can now communicate horizontally between any node and any other node the way you could on the early internet. </p>

<p><span>Irina:</span> OK. So when you say, just to unpack this a little bit more, when you talk about a flat network, do you mean there’s no need to go up the chain of bigger and bigger companies in order to communicate?</p>

<p><span>Adam:</span> Yes. The way it looks to your computer is when you join a LAN (you could even call them GANs - Global area networks), or a ZeroTier One Network, to your computer it looks like you’ve plugged into a LAN with all those other people. So, it looks like that from your computer’s point of view (if you’re a techno-geek, head over to Zerotierone.com and you can follow the link to GitHub and you can download the source, build it and get online right now). Once it’s more mature and out of alpha, I’m going to have apps that you can click and install on your computer with a pretty UI that people who aren’t so geeky can use, but right now if you get online you’ll be able to see other people’s iTunes shares. You’ll be able to play games that run over LANs. Things like that, as if you were all in the same room, even though you could be on different continents. </p>

<p>The technology underlying that is actually a peer to peer network but going back to the question of what ZeroTier One is… It has sort of a defined mission statement. I’m trying to stay on mission with it and not trying to duplicate the functionality of a whole bunch of other things that already exist, for example it’s not Tor and it’s not a privacy tool per se, so it doesn’t give you better privacy than a regular IP address gives you. Also, it’s not exactly a mesh net, so it’s not totally decentralized. The way it works is on what are called ‘supernodes’. These nodes can rapidly find each other and establish communication. Now, it is open source and the supernodes run the exact same code as the other nodes so if you want to take a look at the source code, you’re welcome to do that.</p>

<p><span>Irina:</span> How do these supernodes work? How do they get set up?</p>

<p><span>Adam:</span> Right now I run them on cloud providers. The only thing that’s different about a supernode is that it’s designated as such, and it’s always online, and always online at the same location, and it’s got a lot of bandwidth.</p>

<p><span>Irina:</span> So, that makes it more reliable… at the moment you’re not dependent on all of the users to be online for the network to stay online?</p>

<p><span>Adam:</span> Right. That’s more a sort of mesh net. There’s a theory in computer science called the CAP theorem. If you Google it, you’ll find the wiki page. The CAP theorem deals with databases, but I think there’s a kind of corollary that you can say about computer networks. For computer networks to be able to find each other, they have a characteristic not unlike a database. So I have a, I can’t call it a theorem because I haven’t formally proven it, but I have a conjecture that you have an engineering trade-off where it’s efficiency, security, and decentralization - pick two. I might not be the only person that observation, that may actually be an already known thing.</p>

<p><span>Irina:</span> I think it’s great. And you’ve picked efficiency and security. </p>

<p><span>Adam:</span> Yes, with a heavy emphasis on efficiency. The idea is, is that if you want to get on ZeroTier One and you want to talk to someone else, it pretty much happens instantly. And, there’s a guarantee that if both of you are online, it’s going to pretty much happen instantly. In order to do that, it’s most efficient to have some fixed points that are like anchors. That is kind of always there. Now, it does use encryption, and the encryption is end-to-end, so for example, I can’t read your traffic. Your traffic is actually encrypted, but you and the other party will use those fixed anchors to find each other and establish a direct connection and it happens very quickly. It happens almost as fast as if you just ping a system on the open internet.</p>

<p>Going back again to ‘what is it’, I actually don’t see it so much as a direct decentralization tool in the same way that a meshnet is. Its goal is not to do the same thing as the meshnet in the sense of creating a network that is a mesh that no one can take down because it doesn’t have any centre. There are other really good projects doing that. I look at it more of as a deperimeterization tool, and that term comes from a fellow named Paul Simmons who’s also in the UK. He is more of a corporate IT security and CIO person. When he talks about it, he’s approaching it more from that point of view. What deperimeterization means is getting rid of the firewall, getting rid of network address translation, having devices just occupy a flat network the way they did in the beginning before the internet got big.</p>

<p><span>Irina:</span> Ok, and so in terms of the less technical, what is the benefit of getting rid of the firewall? Why is this a problem?</p>

<p><span>Adam:</span> There are 3 benefits, really. I have one of Paul Simmons’ talks links on the ZeroTier One blog. The benefit that he talks about is agility. Like, right now, if I’m in an office and I want to communicate with a computer in another office, we have to set up all kinds of complicated firewall rules, or VPNs and all sorts of things. It’s really complicated, time-consuming and annoying. So it’s like ‘Oh, so we might as well just use Dropbox!’ That then brings us to the second thing, which is that, with the Internet being built  the way that it is with firewalls in the way, it inherently favours monopolization. And then the third benefit, I think, is enabling us to do new things. </p>

<p>Computer networking has only been around really, on a large scale, for 20 years. I mean, it existed before that, but in a way that most people could use it - for 20 years. I find it really hard to believe that we have done anything more than just scratch the surface of what can be done with computer networks. So, one of my hopes with ZeroTier One is that I’ve created a laboratory where people can install this thing and they can hop on these giant virtual LANs, and they can prototype using the exact same IP networking protocols that they’re used to programming with, but with entirely new things that you can’t even really think about on the open Internet because Firewalls and NAT are in the way and you can never build them.</p>

<p><span>Irina:</span> Is there a concrete example of these ‘entirely new things’?</p>

<p><span>Adam:</span> Imagine if all of the apps that run on your computer, like a Adobe Photoshop, software engineering tools, word processors- all of these things. Imagine if they were able to export a web API almost like the way a lot of large web services do. So, you start up MS Word, and it actually opens a port on your system and makes available an API (application programming interface) where any apps - anywhere in the world, if they had an authorization key from you, could connect to it and interact with it. So, then we could have things like collaborative editing, collaborative debugging of software. I could start up MS Word over here, you could start it up over there, and we could edit the same document. </p>

<p><span>Irina:</span> And instead of, say, doing this through Google Docs (which means sitting on a central server)...</p>

<p><span>Adam:</span> Which means that somebody can get into Google’s systems and spy on you if they wanted to.</p>

<p><span>Irina:</span> So the difference is that you both have this application and the fact that you’re connected through a flat network means that by exposing these API, you can kind of talk to each other in real-time?</p>

<p><span>Adam:</span> You can connect directly. Why is it that, if I want to send you a file- if I’m in North Carolina, and you’re in London- why does the file have to go through California, then all the way back to London? Why can’t I just send it directly? Because everything’s in the way…</p>

<p><span>Irina:</span> But when you say ‘directly’, this is still routed through these supernodes presumably?</p>

<p><span>Adam:</span> Well, the way it works is that the supernodes are just locators. If you get into the technical details of how the protocol works, when you first try to communicate with somebody, it tries to communicate through a supernode. Then, once it finds them, the two nodes use a bunch of sophisticated network protocols to do what’s called NAT traversal, where they establish a direct connection. What happens is, you’re only communicating through the supernode for about 3 seconds. If you ping someone, you can actually see this happen. You can see the ping time drop and the reason that happens is you’re no longer going through the supernode.</p>

<p><span>Irina:</span> So, your computer will be connecting directly to my computer?</p>

<p><span>Adam:</span> You know, I just thought of a very good way of explaining it. It’s kind of like DNS. The way DNS works is, instead of having to memorize numerical IP addresses, I can enter Google.com and it just looks up where Google is, and I go there. This is kind of like that. If I want to communicate with your computer, first we go through the supernode, then the supernode lets us find each other's actual locations. Once we find this, we can just connect directly. </p>

<p><span>Irina:</span> So it’s always end-to end encrypted?</p>

<p><span>Adam:</span> Yes. If I’m sitting at the supernode, I can’t read your traffic. I just see a bunch of encrypted stuff go back and forth. I do know that you’re talking, but I don’t know what you’re talking about. </p>

<p><span>Irina:</span> What kind of encryption do you use?</p>

<p><span>Adam:</span> The actual algorithm used (I’ve actually got an article on the wiki about that), is something called elliptic curve Diffie-Hellman to do the key-change, and it uses an algorithm called Salsa-20 with a 256-bit key. If you go to the wiki, I’ve got links to the algorithms. The wiki doesn’t have much on it right now but it has something called a Deep Technical FAQ, which right now is the only section that’s about encryption because people were asking me about that. So, go to wiki.zerotier.com, and you can read all about it.</p>

<p><span>Irina:</span> So, what are the implications on privacy? At the moment ZeroTier One doesn’t have any private networks, so everyone’s essentially on the same network, which is public. What implications does that have?</p>

<p><span>Adam:</span> Like I said, it’s not trying to duplicate the functionality of other tools. So, if you want something that totally hides your location on the Internet, and you want to have strong privacy, then you should check out something like TOR, or I2P, or something like that. This doesn’t require that you identify yourself. You don’t have to make an account on ZeroTier.com if you don’t want to. In fact, it’s in Alpha and there’s no mechanism for making an account yet anyway, so you don’t have to tell me who you are if you don’t want to. But like I say, it doesn’t offer any better privacy protection than just getting on the internet through your ISP. ZeroTier One is more about capability. It’s more about letting you connect and do things in a more flat, many-to-many kind of way than it is about privacy specifically. </p>

<p>The fact that it uses encryption means that I can’t read your traffic so that protects your privacy to some extent.</p>

<p><span>Irina:</span> But the metadata, that we’re having a conversation will be visible?</p>

<p><span>Adam:</span> If you want to hide that, you’ll have to use TOR or something like that.  Then there would be no way to actually locate the node that was communicating. </p>

<p><span>Irina:</span> So what’s next for ZeroTier One? Are there people using it now?</p>

<p><span>Adam:</span> There are anywhere from a dozen to a couple dozen online. The biggest things I’ve noticed people doing are playing games, and listening to each other’s iTunes music shares. Well, I couldn’t see what these people we’re doing, but that’s what they told me.</p>

<p><span>Irina:</span> What kind of games were they playing?</p>

<p><span>Adam:</span> Minecraft, and I think someone got the old, original version of Starcraft running over it, but I’m not sure how they did that. Some people were playing old Quake. Right now, if you download the alpha, there’s only one virtual-LAN which is called Earth and it’s exactly what it sounds like. So when you download and install the alpha, you get dumped onto one virtual-LAN with everyone else.</p>

<p>As far as the future goes, the next thing to be done with it is the ability to create multiple virtual-LANs, so you could go to the website, make an account, and you could create a virtual-LAN for your city, so if you wanted to have a network called ‘London’, you could create that, and people in London could join and they could collaborate, or you could create a network for a certain interest, like Minecraft, or even just a network for yourself (i.e. me and my friends). That’s what I mean by Literal Social Networking. I’ve thought about things like Facebook and Google+ integration where you could install a Facebook plugin and you could have a button that says ‘Join This Person’s Network’, you click it, and you’re now on the network with them.</p>

<p>I also have some commercial aspirations with this without it actually being a startup, so my current thought (this may change depending on how things go), is to charge for the ability to create private, invite-only networks. You can create, join and use public networks for free but if you want to create a network which is invite-only, which is something a lot of businesses might want to do then you have to sign up for a certain amount per month, then you can create these invite-only networks.</p>

<p><span>Irina:</span> So, almost like the GitHub model?</p>

<p><span>Adam:</span> Yes, actually exactly like the GitHub model! That’s my current thought, which may change depending on how the market turns out. My hope is that it will put a little bit of support behind this because I think it’s important that, if decentralized and deparamertrized networking is to actually grow to the point where it can make a difference in the way the internet is structured, I think it’s important that it gets a little bit of money and momentum behind it. People have to eat, and there’s only so much lone hackers can do, and we’re going to have to get some momentum behind this if we’re actually going to do things differently. </p>

<p><span>Irina:</span> Ok, that leads me onto my ‘closing’ question, or set of questions which is, how do people get involved? If people want to help out, or get started, how do they do that? And lastly, what do you dream of in 5, 3 years’ time, what do you want to see?</p>

<p><span>Adam:</span> How can people get involved? If you’re a non-techy person, you could go to zerotier.com and subscribe to the blog, add the blog to your feed-reader. It’s actually a Tumblr hosted blog, so you can follow it there if you want. You can read about it, and I’m going to be posting things to the blog as things develop. </p>

<p>If you’re more of a technical kind of person, like a coder, or an IT person, you can go there and click through to the source code on GitHub. I would love it if people try this out, try to do things with it and post bug-reports if things don’t work. I’m kind of pleased - so far there have been very few very major bugs, but maybe that means not enough people have tried it out because it’s pretty hard to build software that doesn’t have a lot of bugs in it. So tell me where the bugs are, tell me where there are issues on GitHub. If you want to chip-in to the code base, you can. It right now has a big development tree going on. There’s one that’s my Dev branch which is quite ahead of the existing branch where I’m adding automatic configuration of multiple networks, so the next thing that’s going to happen is, the website is going to get a sign-up button which you can click and create accounts, set up networks and all that kind of thing. </p>

<p>And what is my vision, or what is my hope? By the end of the year, I hope to have it in BETA, and I hope to have some actual paid subscribers actually using this. Then, I’m debating back and forth whether I want to continue to bootstrap it, or go for something like Kickstarter or angel investment. I haven’t decided yet, but I may try to go for something like that. But in terms of features, especially if I can get a little support behind it, the next steps would be Geo-awareness. So, what would happen if you wanted to be on a LAN with everyone within 100 miles of you? You could do all sorts of cool things like that which I think would be both very fun for people, for example, ‘Oh a LAN for everyone within one mile of me - I can see all my neighbours!’, and also it would be interesting in terms of developing entirely new kinds of things which we can do with networks, because a lot of people when I read about people getting away from the centralized model, people are thinking ‘oh, we need to compete with Facebook, we need to compete with Google’, but I’m actually more interested in looking at what can we do that’s never been done before? What can we do that’s totally new, because like I said, I find it really hard to believe that the web, and websites are the only thing you can do with a computer network.</p>

<p><span>Irina:</span> So, for you, if millions of people are using it, people could find new and inventive ways, to collaborate, communicate and work together, and it’s not going to be ruled by the central network like it is at the moment?. </p>

<p><span>Adam:</span> Right! And one thing I didn’t mention is that one of my goals with this that I want this to be very easy for people to use. When it goes into BETA, it’s going to be an app that you can just install on your computer, it has a graphical user interface, and you can click ‘join network’ and you’re on. That’s it. </p>

<p><span>Irina:</span> Music to my ears!</p>

<p><span>Adam:</span> Right now you have to be a geek, because it’s in source-code form, but you won’t have to be a geek when it’s in BETA or live.</p>

<p><span>Irina:</span> Ok, brilliant, well, I think we’ve run out of time, so Adam, thank you so much for your time. This has been fascinating for me, and I hope for other people. Hopefully we will catch up with you soon and see how it’s all going.</p>

<p><span>Adam:</span> Of course, maybe we could talk about the side issue of ‘what could we do with flat networks?’ because I have some ideas there too. I guess that’s one of my long-term dreams. If this kind of thing could get more momentum, then I could develop more stuff that really leverages what you can do with flat networks.</p>

<p><span>Irina:</span> Excellent, well, we will  have to talk about that, then!</p>
---

