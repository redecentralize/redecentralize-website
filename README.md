Redecentralize.org website
==========================

This is the code for the website of redecentralize.org

Please do send pull requests and/or file bugs.

Your pull requests will be checked by Travis that they compile in Jekyll, the software we use to generate the website from its source.

[![Build Status](https://travis-ci.org/redecentralize/redecentralize-website.png)](https://travis-ci.org/redecentralize/redecentralize-website)


Setting up local development
============================

The website is made using Jekyll, which converts simple templates into HTML.
Github supports it automatically, so this keeps things simple.

This will run a Jekyll server on your local machine, rebuilding the 
site every time you change a source file.

`LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8 jekyll server --watch`


Adding a new entry to Radar
===========================

1. Create it in `_radar`, include the app's icon in `assets/images/radar`.

2. Deploy that by pushing to Github.

3. Tweet out to people, e.g. https://twitter.com/redecentralize/status/840249882048909312

4. Send out a MailChimp mailing, by copying the last one. Putting a good picture from the app's graphics or community at the top is important!

5. Schedule Tweets on Hootsuite for the next week or so.

6. Announce on #redecentralize:matrix.org and Redecentralize Slack.


Publishing a new interview
==========================

0. Ideally get a transcript ahead of time by emailing the transcript
person a direct link to the (unlisted) video on Youtube.

1. Make it public on Youtube. Then on something.redecentralize.org server
(Ross can give access) 

```
cd /opt/vgrab
. bin/activate
./vgrab.py
```

It'll download the video from Youtube with the right name.  Go to
/var/www/redecentralise.net/video and check the file is there. You will need
the slugified title (i.e. the filename, to use in URLs), and size of the MP3
later.

2. Make a new file in `redecentralize-website/_posts/interviews`.
Based on the date you are going to be published. Carefully edit
everything in the file. Spend ages on making a good description.

Run jekyll (as described above) to check everything looks right and the video
plays OK.

3. If you're not publishing yet, commit and push this in a branch.
As soon as you push to the gh-pages it will go live.

When it is live, check video plays fine, and the RSS feed looks good
and so on.

4. Tweet it out. Schedule Tweets in Hootsuite for the next couple of weeks
to push it at least a bit more.

5. Mailchimp it out - you can duplicate newsletter from last time and edit the
title, teaser, picture and link.




