---
layout: post
title: "Vim 101: Movement in Command-line Mode"
author: "Alex Young"
tags:
- vim101
- editing
- command-line-mode
---

Vim's **command-line mode** doesn't receive much attention, but it's useful to learn some of the more efficient ways to navigate text when it's active.  Command-line mode is used to enter commands prefixed with a `:`, search patterns, and filter commands.

Basic movement is performed with the arrow keys -- left and right move the cursor one character at a time.  Most people struggle when modifying a previously typed command, but there are ways to move around more quickly.

For example, let's say I want to write a new file, but I've accidentally typed in an edit command:

{% highlight text %}
:e ~/Documents/Code/project/file.c
{% endhighlight %}

Since the buffer has been edited, an error will be displayed:

{% highlight error %}
E37: No write since last change (add ! to override)
{% endhighlight %}

A novice may press the up arrow to get back to the previously typed command, then press the left arrow key until the cursor has moved to the `e` at the start of the line so it can be changed to `w`.  That feels extremely uncomfortable and is a lot more work than it needs to be.

The more efficient alternative is to press `CTRL-B` to instantly move to the *beginning* of the line.  Conversely, `CTRL-E` can be used to move to the end of the line.

As mentioned last week, `CTRL-R` also works in command-line mode.  This can be used to insert the value of a register.

Word movement and various command-line completion options are available, and this is all documented in [:help cmdline](http://vimdoc.sourceforge.net/htmldoc/cmdline.html#Command-line).

###tmux

If these shortcuts don't seem to work, try [the tmux window option](http://superuser.com/a/402084): `set-window-option -g xterm-keys on` with this in your `~/.vimrc`:

{% highlight viml %}
if &term =~ '^screen'
  " tmux will send xterm-style keys when its xterm-keys option is on
  execute "set <xUp>=\e[1;*A"
  execute "set <xDown>=\e[1;*B"
  execute "set <xRight>=\e[1;*C"
  execute "set <xLeft>=\e[1;*D"
endif
{% endhighlight %}
