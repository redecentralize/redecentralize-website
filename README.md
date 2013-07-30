redecentralize-website
======================

This is the code for the website of redecentralize.org

Please do send pull requests and/or file bugs.

Some notes for maintenance
==========================

Convert from mp4 to webm
------------------------

```sh
ffmpeg -i adam-zerotierone.mp4 adam-zerotierone.webm`
```

Extract poster frame
--------------------

```sh
ffmpeg -i 01-ntoll-drogulus.mp4 -ss 00:00:05 -vcodec mjpeg -vframes 1 01-ntoll-drogulus.jpeg
```

