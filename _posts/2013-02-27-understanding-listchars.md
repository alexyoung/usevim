---
layout: post
title: "Understanding 'listchars'"
author: "Alex Young"
tags: 
- listchars
- invisibles
---

I was [searching GitHub](https://github.com/search?p=1&q=listchars&ref=commandbar&type=Code) to see what weird and wonderful characters people use for their `'listchars'` setting.  This all started because I was [using a Chromebook](http://dailyjs.com/2013/02/25/chromebook-pixel-testing/), and the built-in shell had trouble displaying some of the characters I use for showing invisible characters.  Looking at my `.vimrc`, I realised my `'listchars'` setting hadn't been changed in years, and it was probably due a bit of refactoring.

The purpose of the `'list'` (`:help 'list'`) setting is to visualise tabs, spaces, and line endings.  The `'listchars'` setting (`:help 'listchars'`, abbreviation: `'lcs'`) determines the strings that will be used when list mode is active.  It includes just about everything a programmer generally needs for keeping track of pesky invisible characters:

* `eol`: The character to show at the end of each line
* `tab`: The characters used to show a tab.  Two characters are used: the second will be repeated for each space
* `trail`: Character to show for trailing spaces.  This is probably the thing most of us are looking for

There are more settings which are all documented, but these are the ones that are used the most often.  A typical `'listchars'` setting might look like this:

{% highlight text %}
set list lcs=trail:·,tab:»·
{% endhighlight %}

Using `set list` turns on list mode, and `lcs` has been used to show an interpunct for trailing spaces, and a guillemet for the first character of a tab.  Notice how the `tab` value has two characters.

This settings file uses an arrow symbol (`U+21b2`) to represent a new line: [lukemetz / vim](https://github.com/lukemetz/vim/blob/8466bdde18b0e33a000324fc22bb9092798dbe45/gvimrc).  This one uses some pretty crazy symbols like a star: [markhuge / dotfiles / vimrc](https://github.com/markhuge/dotfiles/blob/5492a2ac1361598034026eb6feb5f94904800de8/vimrc).  You don't have to use extended characters, though -- Vim's documentation has a simpler ASCII-friendly example that just uses hyphens and the greater-than sign.

