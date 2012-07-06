---
layout: post
title: "Vim 101: Completion Compendium"
author: "Alex Young"
tags:
- vim101
- completion
---

Vim has context-sensitive completion, based on the current mode.  When in Insert mode, there's actually a whole slew of completion types (`:help ins-completion`).  The one most people know is `CTRL-P`: keyword completion (`:help i_CTRL-P`).  This finds the previous match for a word that starts with the characters in front of the cursor -- `CTRL-N` is the opposite and will find the next match.  Pressing the return key will insert the match, and pressing `CTRL-P/N` again will cycle through the completion menu.

This example shows the difference: typing _eng_ then `CTRL-P` matches _engines_, while `CTRL-N` matches _engine_:

![Vim 101: Completion, CTRL-P and CTRL-N](/images/posts/vim101-completion-ctrl-pn.png)

These commands look for matches based on the `complete` option (`:help 'complete'`).  The default value is `.,w,b,u,t,i` -- let's break that down:

* `.`: The current buffer
* `w`: Buffers in other windows
* `b`: Other loaded buffers
* `u`: Unloaded buffers
* `t`: Tags
* `i`: Included files

###Working with the `complete` Option

The `complete` option is just a comma-separated list, so flags can be easily added or removed.  Typing `:set complete` will display the current list.  Typing `:set complete+=k` will add dictionary scanning, and `:set complete-=k` will remove it.  Incidentally, if you really want `CTRL-P` to scan a dictionary file, then try `:set dictionary=/usr/share/dict/words`.  Multiple dictionaries can be used as well.

The `completeopt` setting controls how completions will appear.  It's another comma-separated list, and the default is `menu,preview`.  Other editors often prioritise the longest match, so I've seen a lot of people use the `longest` option.

###The `i_CTRL-X` Sub-Mode

When in Insert mode, typing `CTRL-X` actually triggers a sub-mode that accepts several commands.  For example, typing `CTRL-X CTRL-L` will cause Vim to complete an entire line:

![Vim 101: Completion, CTRL-X CTRL-L](/images/posts/vim101-completion-line.gif)

These Insert mode completion commands can be quite useful -- I don't want `CTRL-P` to match based on the dictionary, but I don't mind doing this occasionally by typing `CTRL-X CTRL-K`.  See `:help ins-completion` for a full list of these commands.

###Omni Completion

Omni completion supports filetype-specific completion, so it's greatly suited to programming.  Here I've told Vim to use an omni function (`omnifunc`) and I'm using `filetype plugin` to turn on filetype detection and load plugins based on the current file:

{% highlight viml %}
filetype plugin on
set omnifunc=syntaxcomplete#Complete
{% endhighlight %}

Now programming-language specific completion is available by typing `CTRL-X CTRL-O`:

![Vim 101: Omni Completion](/images/posts/vim101-completion-omni.png)

This behaves a lot like the SDK-based completion found in graphical IDEs.
