---
layout: post
title: "Vim 101: Indentation"
author: Alex Young
tags:   
- vim101
- indentation
---

Some programmers are extremely sensitive about formatting.  Perfectionists, sticklers, pedants -- call them what you will, they'll always be there to reformat entire source files to confuse an otherwise comprehensible Git history.  Admittedly, I do like source files to be perfectly formatted, even down to whitespace.  Even if you're completely relaxed about source formatting, you'll still need to master the basics of Vim's built-in indentation capabilities.

###Configuring Indentation

The `expandtab` option causes Vim to insert with spaces instead of tabs.  The exact number of spaces can be set using `softtabstop`.  The `shiftwidth` should also be set because this controls how many spaces will be used with `autoindent`.

The average `.vimrc` might look like this:

{% highlight viml %}
set expandtab
set shiftwidth=2
set softtabstop=2
{% endhighlight %}

If you're working with tabs then the number of spaces used to visually represent the tab character can be set with `tabstop`.

Two characters usually appeals to Ruby and certain JavaScript developers.  If you work with both Ruby and Python, then you may like to use `autocmd` to change the settings based on the current file's language:

{% highlight viml %}
autocmd FileType python setlocal expandtab shiftwidth=4 softtabstop=4
{% endhighlight %}

The `setlocal` only applies the setting to the current buffer or window.  That means Vim is easily capable of handling settings for multiple file types at the same time.

###Automatic Indentation

By setting `autoindent`, Vim will add indentation as lines of code are entered.  Although most people seem content with this setting, it's actually very simple -- it just copies the indentation level from the previous line.

Conversely, `smartindent` is triggered when starting a new line.  Various languages are supported, and I find it works well for the languages I use on a daily basis.

These options can be disabled by adding `no`: `set noautoindent`.  They're also aliased to shorter commands:

{% highlight viml %}
set ai
set noai
set si
set nosi
{% endhighlight %}

###Reformatting Commands

The `=` command will format lines based on a motion.  It also works with Visual mode:

* `=5j`: Format five lines
* `CTRL-V`, select lines, `=`: indent the selected lines.  This also works with the mouse if [mouse input](http://usevim.com/2012/05/16/mouse/) has been configured

Vim will use its internal formatting function unless `indentexpr` has been specified.  Some languages have specific rules for formatting, so people write indentation files for Vim to better support them.

If a line needs to be indented, then pressing `>>` will indent it, and `<<` will do the reverse.  A motion can be supplied as well, so `>3j` will indent the next three lines.  I find visually selecting a line then using `>` very useful, because it accepts a count argument: `CTRL-V`, make selection, `2>` will indent two levels over the selection.
