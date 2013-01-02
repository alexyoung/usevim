---
layout: post
title: "VimClojure Winding Down"
author: "Alex Young"
tags: 
- plugins
- clojure
---

In [On the state of VimClojure](https://groups.google.com/d/topic/vimclojure/B-UU8qctd5A/discussion), Meikel Brandmeyer recommends using Tim Pope's [foreplay.vim](https://github.com/tpope/vim-foreplay) and Sung Pae's [vim-clojure-static](https://github.com/guns/vim-clojure-static) as an alternative to VimClojure, because he intends to step back from the project:

> "That all said I still have some ideas on Clojure tooling I want to experiment with. So I will continue to work on the interactive part of VimClojure, but things will probably move in a much slower pace compared to the other projects."

So it's not exactly time to say goodbye to VimClojure, but the author himself is recommending moving to other projects.

The ensuing discussion on the state of VimClojure is positive, and some posters have expressed an interest in keeping the [vimclojure](https://groups.google.com/forum/?fromgroups=#!forum/vimclojure) group alive for discussions relating to Vim and Clojure in general.

If you're not a Lisp developer, it's hard to appreciate the importance of VimClojure.  It stems from [Emacs SLIME](http://common-lisp.net/project/slime/).  To understand why SLIME is useful, read [Like Slime, for Vim](http://technotales.wordpress.com/2007/10/03/like-slime-for-vim/) by Jonathan Palardy:

> "Let me present the dilemma another way: irb [a Ruby REPL] is great to get answers quick but it is also temporary because you know nothing you do in irb will be saved. However, the moment you start living in a text editor, you give up a lot of the power of REPL. Or, at least, your REPL becomes 10 seconds instead of 1 second. That changes the way you work. And that explains why Slime exists."

It's natural that Clojure developers may gravitate to [Emacs](http://dev.clojure.org/display/doc/Getting+Started+with+Emacs), but there are several Vim plugins that help integrate Vim's workflow with interactive programs.  There's a [Getting Started with Vim](http://dev.clojure.org/display/doc/Getting+Started+with+Vim) page in clojure.org's documentation where several people have posted useful links to projects like [Conque](http://www.vim.org/scripts/script.php?script_id=2771).  Also, [Vim Pipe](https://github.com/krisajenkins/vim-pipe) is a more recently developed plugin that should work well with a Clojure shell.

