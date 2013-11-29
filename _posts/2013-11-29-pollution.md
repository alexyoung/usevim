---
layout: post
title: "Avoiding Modelines with scripts.vim"
author: "Alex Young"
tags: 
- git
- scripts.vim
- modeline
---

I don't like `.gitignore` files very much.  For general things I want Git to ignore, like `.DS_Store` and `*.sw?`, I prefer to use `~/.gitignore_global`.  Similarly, rather than using modelines to improve filetype detection I use `.vim/scripts.vim`.

Here's an example: I have a Node project that has command-line scripts that I've written in JavaScript.  The scripts are named without `.js`: `bin/chpass`, `bin/run_migration`, etc.  These files start with `#!/usr/bin/env node`, but Vim doesn't know they're JavaScript so the syntax highlighting is off.

I could add a modeline, like this: `// vim: set ft=javascript`.  The problem with that is I've now added an editor-specific line.  What if other people on my team use Emacs or Sublime Text?

A better solution is to use `.vim/scripts.vim`:

{% highlight text %}
if did_filetype()
  finish
endif
if getline(1) =~# '^#!.*/bin/env\s\+node\>'
  setfiletype javascript
endif
{% endhighlight %}

The `getline` function is used to compare the first line of the file against a regular expression that looks for scripts that use `node` (source: <http://stackoverflow.com/a/8891619/306167>).

For more about `scripts.vim`, take a look at [:help new-filetype-scripts](http://vimdoc.sourceforge.net/htmldoc/filetype.html).
