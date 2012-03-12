---
layout: post
title: "Plugin Roundup: EasyColour, TabMan, cd-hook"
author: "Alex Young"
tags:   
- plugins
- colours
- tabs
---

<div class="intro">
Send in your Vim plugins for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

### EasyColour

[EasyColour](http://www.cgtk.co.uk/vim-scripts/easycolour) (GitHub: [abudden / EasyColour](https://github.com/abudden/easycolour), vim.org: [EasyColour](http://www.vim.org/scripts/script.php?script_id=3950)) by Al Budden helps write colour schemes.  Rather than using VimL, EasyColour themes look like this:

{% highlight text %}
Dark:
    Normal:White,DarkBlue
    Statement:Yellow,#F6E8D0,Red,Undercurl
    Keyword:White
    Comment:SeaGreen,Style=Bold
{% endhighlight %}

### TabMan

![TabMan screenshot](/images/posts/tabman.png)

[TabMan](https://github.com/kien/tabman.vim) (vim.org: [tabman.vim](http://www.vim.org/scripts/script.php?script_id=3960)) by Kien offers more ways to navigate between tabs and windows.  `<leader>mt` or `:TMToggle` will display TabMan's interface, and focus can be gained with `<leader>mf` or `:TMFocus`.

I've been using it while working, and I noticed that it updates automatically, which is extremely convenient.  It really helps keep tabs on lots of tabs.

### cd-hook

[cd-hook](https://github.com/richoH/cd-hook) (vim.org: [cd-hook](http://www.vim.org/scripts/script.php?script_id=3918)) by Rich Healey is a small plugin for triggering actions when changing directories.  It's basically a wrapper around `chdir` which can be used with `:Cd`.

The author's example usage is to trigger vim-rvm by adding the command using `autocmd User chdir Rvm` -- useful for Ruby developers who don't like leaving Vim.
