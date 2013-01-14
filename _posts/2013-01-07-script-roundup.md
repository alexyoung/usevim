---
layout: post
title: "Script Roundup: vim-steam, File Pirate"
author: "Alex Young"
tags: 
- plugins
- games
- navigation
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###vim-steam

[vim-steam](http://www.vim.org/scripts/script.php?script_id=4368) (GitHub: [raphaelr / vim-steam](https://github.com/raphaelr/vim-steam), License: _New BSD_) by Raphael Robatsch is capable of launching your Steam games, with tab completion!  It uses Ruby to parse and launch the games -- if you look at the source the [vdf.treetop](https://github.com/vim-scripts/vim-steam/blob/master/ruby/vim-steam/vdf.treetop) file is a [Treetop grammar](http://treetop.rubyforge.org/syntactic_recognition.html) for pulling out titles from Steam's cache.

It currently works in Windows, but the author is also working on Linux support.

###File Pirate

[File Pirate](http://www.vim.org/scripts/script.php?script_id=4384) (GitHub: [nfd / filepirate](https://github.com/nfd/filepirate), License: _MIT_) by Nicholas FitzRoy-Dale is a fuzzy file finder designed purely for speed.  It requires Python, and works using a window that appears at the top of the screen.  It doesn't automatically reindex files when directories change, so you'll have to press `CTRL-R` to make it update them.  It is, however, asynchronous -- searching an indexing runs in the background, so you can continue to use Vim without it blocking.

If you want to use it, make sure you follow the full installation instructions because it requires something to be compiled in `filepirate/plugin`.  Once it's set up, pressing `<Leader>-T` will invoke File Pirate, and searches will be performed in real time.

Overall I was impressed with the indexing speed.  I usually use [ctrlp.vim](http://kien.github.com/ctrlp.vim/) for this, which performs searches very quickly in general.  Nicholas says File Pirate is good at indexing large directories:

> There are lots of these sorts of plugins already. I wrote this one because I am currently working with a large directory structure (~50000 files) and existing plugins were very, very slow. File Pirate is fast -- for 50k files, you shouldn't notice any delay when performing a search.

