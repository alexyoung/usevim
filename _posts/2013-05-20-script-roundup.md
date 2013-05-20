---
layout: post
title: "Script Roundup: vim-bgimg, CoVim"
author: "Alex Young"
tags: 
- plugins
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a>.
</div>

###vim-bgimg

[vim-bgimg](http://www.vim.org/scripts/script.php?script_id=4585) (GitHub: [ynkdir / vim-bgimg](https://github.com/ynkdir/vim-bgimg)) by Yukihiro Nakadaira makes your dreams come true... if your dreams are to give gVim its own wallpaper.  It only works on Windows (it uses Gdi32.dll), but if you like this you might also like the same author's [vim-paint](http://www.vim.org/scripts/script.php?script_id=3457).

###CoVim

CoVim (GitHub: [FredKSchott / CoVim](https://github.com/FredKSchott/CoVim)) by Fred K. Schott is a collaborative editing plugin for Vim.  It requires Python 2.5+, Python support in Vim, and the Twisted library.

Once it's installed, a server must be started with `:CoVim start`.  Clients can then connect by using `:CoVim connect`.

> Work on CoVim started almost a year ago. I wanted to explore this concept of a shared classroom note-taking platform (someone should still do that, by the way) while my project partner Sam Haney wanted to explore something a bit more well-known and dependable. We decided to meet each other halfway, and CoVim was born.

There are more details in the [CoVim announcement post](http://www.fredkschott.com/post/50510962864/introducing-covim-collaborative-editing-for-vim).
