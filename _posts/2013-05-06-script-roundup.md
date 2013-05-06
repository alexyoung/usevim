---
layout: post
title: "Script Roundup: MarkMyWords, breeze.vim"
author: "Alex Young"
tags: 
- plugins
- html
- bookmarks
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a>.
</div>

###MarkMyWords

MarkMyWords (GitHub: [dahu / MarkMyWords](https://github.com/dahu/MarkMyWords), License: _Vim_) by Barry Arthur allows you to create bookmarks for files and Vim's documentation.  Creating a bookmark is as simple as typing `:MMWMarkLine`, and jumping to a bookmark is performed with `:MMWSelect <tag>`.

The bookmarks are saved in `markmywords.tags`, so anything you save should be available between sessions.

###Breeze

[Breeze](http://www.vim.org/scripts/script.php?script_id=4569) (GitHub: [gcmt / breeze.vim](https://github.com/gcmt/breeze.vim), License: _MIT_) by Giacomo Comitti is a plugin for working with HTML.  It has EasyMotion-inspired navigation, tag matching, element highlighting, and DOM navigation.

When jumping between tags, Breeze will annotate them with a letter that can be used to trigger a jump.  Opening and closing tags are highlighted for the current cursor, but the author notes that this might be inefficient for large files.  The DOM navigation supports tree-based navigation, so you can invoke things like `BreezeNextSibling` and `BreezeLastChild`.

