---
layout: post
title: "Plugin Roundup: vim-dasm, Vimified"
author: "Alex Young"
tags: 
- plugins
- scripts
- syntax-highlighting
- configuration
- vimrc
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###vim-dasm

[vim-dasm](http://www.vim.org/scripts/script.php?script_id=4038) (GitHub: [pksunkara / vim-dasm](https://github.com/pksunkara/vim-dasm)) by Pavan Kumar Sunkara provides syntax highlighting for the assembler in [0x10c.com](http://0x10c.com/).  The author also recommends setting indentation to two spaces:

{% highlight viml %}
au BufNewFile,BufReadPost *.dasm,*.dasm16 setl shiftwidth=2 expandtab
{% endhighlight %}

###Vimified

[Vimified](https://github.com/zaiste/vimified) by "Zaiste!" is basically a vimrc, bundled with Vundle and lots of plugins.  The author calls it a "Vim configration framework", and has been using it to make it easier for new members to join his development team.

There's a discussion on Hacker News about it: [Show HN: Vimified | Ultimate VIM configuration](https://news.ycombinator.com/item?id=3906598).
