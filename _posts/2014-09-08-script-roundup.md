---
layout: post
title: "Script Roundup: Browserlink"
author: "Alex Young"
tags: 
- scripts
- browser
- plugins
---

###Browserlink

Browserlink (GitHub: [jaxbot / browserlink.vim](https://github.com/jaxbot/browserlink.vim), License: _MIT_) by Jonathan Warner is a plugin to show a live preview of a Vim buffer in a browser.  You can also evaluate selections of JavaScript, and the author demonstrates this with something that looks like a HTML5 game.

> Browserlink is very simple. The plugin itself hooks autocommands for file changes (and other things) to the provided functions. The functions connect through HTTP to a node.js backend, which your webpage connects also to. The entire process happens extremely fast.

The source for the Node server is here: [brolink.js](https://github.com/jaxbot/browserlink.vim/blob/master/brolink/brolink.js).  It uses WebSockets to perform realtime updates, and it looks like it should run on Windows as well.

There are a lot of browser preview scripts for Vim, but they're not usually real-time, so I think Browserlink is worth checking out.
