---
layout: post
title: "Vim for GitHub"
author: "Alex Young"
tags: 
- javascript
- github
---

If you liked the look of [Vim.js](http://usevim.com/2013/12/13/vimjs/), then you might be surprised to know that the web-based editor GitHub uses can be coaxed into a Vim mode.  I discovered this after reading a post by [Lauris Dzilums about the Ace editor](http://lauris.h-s.io/2013/12/13/github-vim-editor/) that GitHub uses:

> You can press CTRL+, or CMD+, (depends on your OS) to access Ace's settings menu and enable Vim mode there (screenshot). The menu itself works ok, but sadly the Vim mode doesn't, because some required JavaScript files are not available from GitHub.

Lauris provides a JavaScript snippet that you can paste into your browser's developer console to switch GitHub's editor into Vim mode.  This also means [you can also enable Vim mode when editing a gist](https://groups.google.com/forum/#!msg/ace-discuss/MItU-g3Qxjc/o_EeehjM9MYJ).

I tried it out and I found it capable enough -- the Ace editor is what [Cloud9 IDE](https://c9.io/) uses, and I used the Vim mode there a fair bit when I was test driving the service.

The next time you find yourself having to edit a file directly on GitHub, then you should be able to use Vim-style shortcuts instead of struggling with the defaults!
