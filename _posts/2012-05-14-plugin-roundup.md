---
layout: post
title: "Plugin Roundup: vim-pasta, License Loader"
author: "Alex Young"
tags: 
- plugins
- scripts
- put
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###vim-pasta

[vim-pasta](https://github.com/sickill/vim-pasta) by Marcin Kulik will cause text to automatically reindent when pasted.  The standard `p` and `P` commands are remapped in Normal and Visual mode:

> Basically it opens new, properly indented line (with `o` or `O`) in the place you're pasting to then it pastes the text with `]p`. The result is nicely indented code with relative indentation between pasted lines preserved.

Filetypes can be black/white-listed if required.  I'd probably use this to blacklist Markdown files for writing, for example.

###License Loader

[License Loader](http://www.vim.org/scripts/script.php?script_id=4064) (GitHub: [vim-scripts / license-loader](https://github.com/vim-scripts/license-loader)) by "zpcat" is a small wrapper for easily inserting software licenses with the author, email, and dates already filled out.

Why do I mention it?  Well, one of my gripes when writing for sites like DailyJS is authors forget to include licensing, which actually matters to those of us working with open source in a commercial environment.  Anything that helps people make licensing clear is a good thing.
