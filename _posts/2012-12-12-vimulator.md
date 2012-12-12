---
layout: post
title: "Vimulator"
author: "Alex Young"
tags: 
- visualisation
---

![Vimulator](/images/posts/vimulator.png)

The [Vimulator](http://thoughtbot.github.com/vimulator/) (GitHub: [thoughtbot / vimulator](https://github.com/thoughtbot/vimulator), License: _MIT_) project by [thoughtbot](http://www.thoughtbot.com/) is a simulation of certain Vim features that provides a novel way to visualise how edits are made.  In the [blog post about Vimulator](http://robots.thoughtbot.com/post/37640918060/vimulator), George Brocklehurst describes the reasons behind its creation:

> "Vim's just not designed for demonstrations, and for a beginners talk at a Stockholm Vim meetup I needed something that looked a little less magical. The solution was to write Vimulator, a JavaScript Vim simulator that's designed to explain each key stroke as it happens and delay the effect on the text long enough for a casual observer to see what's going on."

It doesn't implement everything -- George says around 40 Normal mode commands have been implemented.  It's just enough to be able to demonstrate basic Vim usage effectively.

George also describes how he wrote tests for Vimulator -- he used macros to generate the commands to drive the unit tests in a predictable and accurate manner.

There are other thoughtbot resources for learning Vim at [learn.thoughtbot.com](https://learn.thoughtbot.com/).
