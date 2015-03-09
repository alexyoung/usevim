---
layout: post
title: "EnhancedDiff"
author: "Alex Young"
tags: 
- scripts
- git
- diff
---

![Default and patience](/images/posts/defaultpatience.png)

The [EnhancedDiff plugin](http://www.vim.org/scripts/script.php?script_id=5121) (GitHub: [chrisbra/vim-diff-enhanced](https://github.com/chrisbra/vim-diff-enhanced), License: _Vim_) by Christian Brabandt is a plugin for showing diffs with the patience algorithm.  You can see this by running `git diff --patience`, and you might find it useful for cases where the standard diff algorithm fails to match lines after large changes:

> Under those circumstances a diff algorithm can occasionally become 'misaligned' in that it matches long sections of curly brackets together, but it winds up correlating the curly brackets of functions in one version with the curly brackets of the next later function in the other version.

This was written by the author of the patience algorithm in a [git mailing list post](http://git.661346.n2.nabble.com/Bram-Cohen-speaks-up-about-patience-diff-td2277041.html).  There's a good [Stack Overflow post](http://stackoverflow.com/questions/4045017/what-is-git-diff-patience-for) that explores the patience algorithm, and Christian's readme has screenshots that compare both versions.

