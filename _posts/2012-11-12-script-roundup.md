---
layout: post
title: "Script Roundup: multichange.vim, vim-detailed"
author: "Alex Young"
tags: 
- plugins
- substitution
- themes
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###multichange.vim

> Don't be shy about renaming things as you work.

_-- From [Organizing Go code](http://blog.golang.org/2012/08/organizing-go-code.html)_

[multichange.vim](http://www.vim.org/scripts/script.php?script_id=4309) (GitHub: [AndrewRadev / multichange.vim](https://github.com/AndrewRadev/multichange.vim)) by Andrew Radev is a plugin that makes renaming things a lot easier.  By typing `:Multichange`, the plugin enters a mode that causes word changes to propagate through the current buffer.

This plugin is based on [vim-markmultiple](https://github.com/adinapoli/vim-markmultiple), which has a [screencast](http://www.youtube.com/watch?v=deGhhILp2PY&feature=youtu.be) that nicely illustrates how that particular plugin works.

###vim-detailed

In a time when people are [arguing syntax highlighting should be turned off](http://www.kyleisom.net/blog/2012/10/17/syntax-off/), [vim-detailed](http://www.vim.org/scripts/script.php?script_id=4297) (GitHub: [rking / vim-detailed](https://github.com/rking/vim-detailed)) provides another option: more colours!

> So many 256-color schemes merely shift the palette around, displaying only 8 colors (even though they're a *different* set of 8 colors than default). This scheme is more detailed than that. Your eyes will learn to pick up on subtler patterns without requiring as much from your conscious mind. Instead of the goal being merely looking cool, the goal is to maximize info bandwidth from the computer to the brain.

This plugin can be enabled with `:colo detailed`, but is currently limited to Ruby only.  The author is looking into adding support for more languages, and adding a "light" version.
