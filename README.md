Redecentralize.org website
==========================

This is the code for the website of redecentralize.org

Please do send pull requests and/or file bugs.

Your pull requests will be checked by Travis that they compile in Jekyll, the software we use to generate the website from its source.

[![Build Status](https://travis-ci.org/redecentralize/redecentralize-website.png)](https://travis-ci.org/redecentralize/redecentralize-website)


Setting up local development
============================

Bootstrap is a git submodule (in vendor/bootstrap), so you need to run this or
the file will be missing locally.

`git submodule init; git submodule update`

The website is made using Jekyll, which converts simple templates into HTML.
Github supports it automatically, so this keeps things simple.

This will run a Jekyll server on your local machine, rebuilding the 
site every time you change a source file.

`LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8 jekyll server --watch --port 4343`

