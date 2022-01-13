---
layout: article
categories: blog
summary: "When Google announced the retiring of Reader, once again I found
myself doing the cloud service shuffle. While many looked to Feedly
as the heir apparent of Google Reader, I decided to take control and
end the cycle of shepherding my data from one cloud service to the
next"
title: "Taking Back the Cloud with ownCloud"
author: "dknestaut"
date: 2014-01-27 08:00:00

---

When Google announced the retiring of Reader, once again I found
myself doing the cloud service shuffle. While many looked to Feedly
as the heir apparent of Google Reader, I decided to take control and
end the cycle of shepherding my data from one cloud service to the
next. Up to this point, I was a card-carrying Google fanboy complete
with a Chromebook, Android tablet, and Android phone. In theory,
leaving Google would be easy given its data liberation policy, but
just because I could gather my data and leave, how practical would
leaving be? How much of the Google experience could I replicate
using non-centralized alternatives? Beyond that, what practical
solutions could I find for someone like myself, a person who is
familiar with computers, Windows, and Linux, but not a code-weilding
programmer and hacker?

To make things practical, I set a goal of leaving one centralized
service a month. This would give me time to research alternatives,
learn how to implement them, and work out the bugs. To start, I
looked at ownCloud, an open source project designed to empower
people to self-host their own cloud services. At its core, it offers
many popular cloud services such as live document editing, photo
galleries, calendars, contacts, and file syncing. Its open API
allows developers to extend ownCloud's functionality and include
things like an RSS reader, bookmarks, music streaming, and more.
With ownCloud, it looked like I could replace most of my centralized
cloud services without much hassle.

### Installing ownCloud


OwnCloud is designed to run on a server, so after arming myself with
some tutorials, I dug an old desktop out of my closet, installed
Ubuntu Server 12.04, and added the official ownCloud repositories.
Once the server was set up, installing ownCloud was as easy as an
apt-get command. The initial launch of ownCloud prompts the user to
select a user name and password. Advanced users can select to run
ownCloud on SQLite, MySQL, or PostgreSQL. The default is SQLite.

### Overview

The extensibility of ownCloud is one of its strengths. Much like
Google, ownCloud can serve as a cloud-based data hub for local
programs, or it can serve as a browser-based desktop. Numerous user
accounts can be created and ran on a single instance making ownCloud
not only a good solution for a personal cloud, but a cloud for the
whole family, or even a business.

In addition to the instance on the server, ownCloud also offers
desktop software to sync files across computers. Apps for Android
and iOS extend some functionality to mobile devices. Support for
standards like webDAV, calDAV, cardDAV, and Ampache allow users to
access their data through a variety of applications.

### ownCloud Files vs. Google Drive

File synchronization is the main focus of ownCloud, and it's done
well on the web interface. When users log in, they are first
presented with a file explorer showing the contents of their main
directory. From the web interface, users can download, delete,
rename, or even share files. The sharing feature allows users to
share files with other ownCloud users, or share them publicly on the
web with a URL that ownCloud generates. Files can be password
protected, and file permissions can even be revoked after a set
date.

In addition to the web interface, files on ownCloud can be handled
on the desktop through a mounted network share, or through file
synchronization software. The ownCloud desktop client is available
for Linux, Windows, and Mac. Installation is pretty easy and
requires users to enter the URL of their ownCloud instance and
credentials. For the security-conscious, users can select an SSL
connection, as well as an option for the password to not be stored
on the local computer. The only thing to watch out for is the
default settings of the desktop client. Initially, it is set to
mirror all of ownCloud's files onto the desktop computer. Although
this was desirable for my PC where I had plenty of room for all my
files, I had to stop the synchronization, remove the mirror sync,
and set up individual directories for synchronization on my laptop
with a 64 GB SSD.

The Windows version of the desktop client is particularly nice. It
alerts users when new versions are available. If the user elects to
update, the application removes the old version and installs the new
version with little input from the user. File synchronization is
dependable, albeit a little slow compared to competitors like Google
Drive or Dropbox.

On the Linux side, the desktop client has come a long way since I
started using it. It's reliance on CSync made the synchronization
slow and prone to creating sync conflicts. I especially had a lot of
trouble with files from applications that auto-saved. Since the
recent upgrade to desktop version 1.5, I've stopped noticing
conflicts piling up in my synchronized folders. The client's speed
has also improved much, but it is still slow to notice changes and
synchronize them.

To switch from Google Drive to ownCloud Files, I simply downloaded
the contents of my Google Drive, then set the ownCloud desktop
client to start synchronizing the appropriate directories.

![Screen shot of ownCloud Files](/assets/images/posts/2014/owncloud/ownCloud%20Files.png)

### ownCloud Documents vs. Google Documents

One of the things I missed most about leaving Google was the collaborative features of Google Documents. New in ownCloud 6 is the ownCloud Documents app. It gives ownCloud users the ability to create and collaboratively edit ODT documents live in a browser. Collaboration is as simple as inviting users through sharing a link or granting permission to another ownCloud user. Collaborators show up in a sidebar. There is no integrated chat feature. The editing functions in ownCloud Documents are limited, but they are largely in line with the offerings of Google Documents. OwnCloud Documents only supports ODT. Although plain text files can be edited in ownCloud, they cannot be done so collaboratively. Also, ownCloud Documents lacks the ability to handle spreadsheets, presentations, or drawing. Some of the features, such as an Impress viewer, are available as extensions.

To switch to ownCloud Documents, I didn't have to do a thing. My
documents were made available to me once I started synchronizing
them through the desktop client.

![Screen shot of ownCloud Documents](/assets/images/posts/2014/owncloud/ownCloud%20Documents.png)

### Pictures vs. Picasa

OwnCloud Pictures is pretty much just that. Every image file
available to ownCloud is gathered inside the Pictures app.
Directories that contain images are presented as galleries. Clicking
on a gallery opens it up and presents the user with a collection of
large, thumbnail photos. These photos can be viewed inside the
browser with a picture viewer, arranged in a slide show, or shared
with a link. There are no editing functions available.

Switching to ownCloud Pictures involved downloading my photos from
Picasa, then uploading them to ownCloud through the desktop client.

![Screen shot of ownCloud Pictures](/assets/images/posts/2014/owncloud/ownCloud%20Pictures.png)

### ownCloud Calendar vs. Google Calendar

These two services are quite similar. OwnCloud Calendar can be
accessed through a browser, shared with others, or accessed through
calDAV or iCalendar. The web interface is usable, but its features
aren't immediately obvious. For example, there is no **New** button
for creating an event. This is done by clicking on a date. Any date.
The user is then presented with a pop-up window in which the details
can be filled out. The web interface supports multiple layouts such
as month-view, week-view, and agenda-view.

Switching to ownCloud calendar involved exporting my calendars from
Google Calendar in ICS format, then uploading each ICS file to
ownCloud Files. From the ownCloud file browser, clicking on an ICS
file opened a dialog that allowed me import my events.

![Screen shot of ownCloud Calendar](/assets/images/posts/2014/owncloud/ownCloud%20calendar.png)

### ownCloud Contacts vs. Google Contacts

OwnCloud Contacts works like Google Contacts. When opened, ownCloud
Contacts displays the contents of the user's address book in list
format. Clicking on a name in the list opens the contact in business
card-like format. Users can upload photos of contacts, add
favorites, and edit fields. Clicking on a contact's email address
will launch the default email program. Clicking on a contact's
physical address will supposedly bring up the address on a map, but
this feature didn't work in my Firefox browser.

Switching to ownCloud contacts was as simple as downloading my
Google Contacts into a VCF file, then using the import feature in
the ownCloud Contacts app.

### ownCloud Apps

The above features cover only the default settings of ownCloud. For
those who wish for more extensibility, ownCloud offers an open API
for developers to create extensions and add functionality. By
clicking on the "Apps" button, ownCloud users can add features like
bookmark syncing, Firefox sync, an RSS reader, task list management,
music streaming, and more. As the collection of extensions grows, so
does the user's ability to replace centralized cloud services with
personal cloud services under one's own control.

![Screen shot of ownCloud Apps](/assets/images/posts/2014/owncloud/ownCloud%20Apps.png)

