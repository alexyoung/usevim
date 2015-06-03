---
layout: post
title: "Set Complete"
author: "Alex Young"
tags: 
- completion
- customisation
- spelling
- keyword-completion
---

When in Insert mode, you can trigger completion for a word by using `CTRL-P`.  This cycles forward through the list of matches -- `CTRL-N` goes backwards.  The documentation for the `complete` (`:help 'complete'`) has options for configuring the behaviour of these commands, and I also wrote about it in [Vim 101: Completion Compendium](http://usevim.com/2012/07/06/vim101-completion/).

I'll show you a few useful things you can do with `'complete'`.  Let's look at what `complete` options you've got set in Vim.  To see them, type `:set complete`.  I see the following: ` complete=.,w,b,u,t,i`.  This breaks down to:

* `.`: Scan the current buffer
* `w`: Scan buffers from other windows
* `b`: Scan buffers from the buffer list
* `u`: Scan buffers that have been unloaded from the buffer list
* `t`: Tag completion
* `i`: Scan the current and included files

You probably instinctively know what Vim is doing when you press `CTRL-P` -- it shows matches for things that it has "seen" during the current session.  But you can actually make it do some pretty cool things that aren't the default settings.

Let's just focus on `i` for a second -- what does "included files" mean? It'll actually search all files that it thinks has been included according to C semantics:

![Completion for included files](/images/posts/vim-include-search.png)

Sometimes, however, you might not want this: if your program has lots of system includes and the completion results become polluted with things that aren't useful to you.  You can get rid of `i` with `:set complete=.,w,b,u,t`, or just `:set complete-=i`.

This works for other languages as well -- if you're editing Ruby and have `require('net/http')` in the current file, then it'll show `get` as a match for `Net::HTTP.g`, as defined by `... usr/lib/ruby/2.0.0/net/http.rb`.  Exactly what files are searched is defined by `'include'` -- in a Ruby file you'll see something like `include=^\s*\<\(load\>\|require\>\|autoload\s*:\=["']\=\h\w*["']\=,\)`.

Another thing you can with `'complete'` is match dictionary words.  To do this, use `:set complete+=kspell`.  You can also use `k{dict}` to scan a different dictionary.  I actually like using this with Markdown files.

Finally, if you get tired of typing `complete`, the acronym is `cpt`.


