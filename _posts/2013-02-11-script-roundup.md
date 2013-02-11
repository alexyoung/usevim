---
layout: post
title: "Script Roundup: YouCompleteMe, JavaScript Libraries Syntax"
author: "Alex Young"
tags: 
- plugins
- completion
- syntax
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###YouCompleteMe

[YouCompleteMe](http://valloric.github.com/YouCompleteMe/) (GitHub: [Valloric / YouCompleteMe](https://github.com/Valloric/YouCompleteMe), License: _GPL3_) by Strahinja Val Markovic got a huge amount of attention last week (it's quickly approaching 1000 GitHub stars).  It's a fuzzy code completion engine, and can use Clang-based semantic completion for C-family languages (including Objective-C).

Completion is invoked automatically, so it behaves more like GUI IDEs rather than Vim's built-in style of handling completion.  The `<Tab>` key can be pressed to accept a match or cycle through results.  The matching algorithm is based on the order of characters in a string, so a given sequence of characters can appear interleaved with other characters as long as the order they appear is the same.

You'll need a build system to install YouCompleteMe, and it can be compiled with or without support for semantic matching in C languages.  The documentation covers all of this and more, including configuration and detailed command explanations.

###JavaScript Libraries Syntax

[JavaScript Libraries Syntax](http://www.vim.org/scripts/script.php?script_id=4428) (GitHub: [othree / javascript-libraries-syntax.vim](https://github.com/othree/javascript-libraries-syntax.vim), License: _MIT_) by Wei-Ko Kao provides syntax highlighting for some well-known client-side JavaScript libraries.  Support for jQuery, Underscore, and Backbone is included.

This is useful because working with JavaScript using the default Vim installation isn't optimum -- it's solid, but there's room for improvement.  The author has made the plugin modular so it's easy to add new syntax files.

