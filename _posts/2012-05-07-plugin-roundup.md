---
layout: post
title: "Plugin Roundup: gitvimrc.vim, Sauce"
author: "Alex Young"
tags: 
- plugins
- scripts
- git
- vimrc
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###gitvimrc.vim

[gitvimrc.vim](http://www.vim.org/scripts/script.php?script_id=3993) (GitHub: [vim-scripts / gitvimrc.vim](https://github.com/vim-scripts/gitvimrc.vim)) by Joel Nothman is a small script that attempts to load a `.vimrc` file local to the current repository's root when loading a buffer from that repository.  This could be used to keep an entire team's style consistent.

It might be worth setting `secure` if you plan on using this with untrusted open source projects.

###Sauce

As an alternative to `vimrc` management, [Sauce](http://www.vim.org/scripts/script.php?script_id=3992) (GitHub: [joonty / vim-sauce](https://github.com/joonty/vim-sauce), License: _MIT_) by Jon Cairns helps manage multiple settings files, which can be used on a per-project basis.  For example, running `:Sauce MyProject` would load the settings associated with `MyProject`.

Sauce is designed to be used to manage all aspects of the associated settings files, from creation to deletion.  Using it this way means it's easy to list all of the current settings files, they're effectively centralised.
