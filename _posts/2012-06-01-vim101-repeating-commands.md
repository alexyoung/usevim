---
layout: post
title: "Vim 101: Repeating Commands"
author: "Alex Young"
tags:
- vim101
- repeating
---
<div class="aside">
<strong>Hint:</strong> To make your Vim look the same as my screenshots, download <a href="https://gist.github.com/e5d5ce6488ed066a657d">usevim-vimrc</a> and run Vim with <code>vim -u usevim-vimrc</code>.
</div>

Most types of commands can be repeated in Vim.  Mastering the basic ways to repeat commands is a good way of building up your skills to prepare for another killer feature: macros.

First, the most commonly used repeat command is probably `n`.  In Normal mode search for text with `/`, then press `n` to repeat the search.  `N` will do this in reverse.

![Search and repeat with n](/images/posts/vim101-search-repeat-n.gif)

The substitute (`:s`) command can also be repeated by typing `&`.  However, if you just want to see what the change will do at each match, then it can often be more efficient to use the `c` flag with a global substitution, like this:

{% highlight text %}
:%s/example/Example/gc
{% endhighlight %}

Vim will prompt for confirmation and highlight the match, so it's easy to see if the change is what was intended.

Typing `.` will repeat the last _text changing_ command.  This can be useful when programming -- I find myself using it when I want to append a method call in an unpredictable pattern.

![Repeat text change with .](/images/posts/vim101-dot-repeat.gif)

In this example, I want to add `.html_safe` to certain places in the file.  I've typed it once already, pressed `<Esc>`, then used various motion commands to move to other locations where I want to append `.html_safe`.  This example was inspired by a week of painful Ruby on Rails 2 to 3 upgrades, where I found myself using Vim's macros to perform huge amounts of editing with little effort -- I'll write about macros soon in this series.

All of these commands work with counts as well, so typing `2.` will perform a text change twice.

There are more ways to repeat various operations in Vim, but before I start getting too deep for a beginner's introduction, I'll leave you with one more.  Typing `@:` in Normal mode will repeat the last command-line.  That means anything you've typed starting with `:` can be repeated very easily.
