---
layout: post
title: "Easier Undo Traversal"
author: Alex Young
tags:
- undo
---

After making a lot of speculative changes in a file which didn't work out, I find myself undoing and redoing changes in quick succession.  It's easy to get lost in the undo tree, and Vim doesn't have any built-in features for easily seeing what each change in `:undolist` looks like.

There are plugins that can help, like [undotree.vim](http://www.vim.org/scripts/script.php?script_id=4177), but one small change I made in my workflow was to learn the `g+` and `g-` shortcuts.  All these Normal mode shortcuts do is go to the newer or older state.  A count can be used as well, but I usually find myself looking at each change until I find the one I want.

If you haven't yet mastered `:undolist` or Vim's time/tree-based undo system, take a look at [Vim 101: Undo](http://usevim.com/2012/07/27/vim101-undo/).
