---
layout: post
title: "Script Roundup: Merginal"
author: "Alex Young"
tags: 
- scripts
- plugins
- scripting
- git
---

###Merginal

[Merginal](http://www.vim.org/scripts/script.php?script_id=4955) (GitHub: [idanarye / vim-merginal](https://github.com/idanarye/vim-merginal)) by Idan Arye is a Git branch merge tool.  It has an interactive UI for viewing branches, checking out branches, merging branches, and solving merge conflicts.

The branch list supports some keyboard commands, including `R` to refresh the buffer list, and `M` to merge the branch under the cursor into the currently checked out branch.

I like tools that help me step through merge conflicts because it's usually something that I struggle with when working in feature branches.  I often use vimdiff as a mergetool, but even then I find it hard to visualise changes in certain file types -- XML regularly breaks my brain.
