---
layout: post
title: "Vimtronner"
author: "Alex Young"
tags: 
- javascript
- node
- games
---

![Vimtronner](/images/posts/vimtronner.gif)

[Vimtronner](https://github.com/carbonfive/vimtronner) from Carbon Five is an online multiplayer game for learning Vim.  It requires [Node](http://nodejs.org/), and the controls are entirely based around Vim's commands.

You can start a game by pressing `i`, and the movement keys are `hjkl`.  It's run as a command-line tool which accepts switches for things like listing games, and running a local server.

The server is basically a web app that uses WebSockets, so you could technically install it on a service like Heroku.
