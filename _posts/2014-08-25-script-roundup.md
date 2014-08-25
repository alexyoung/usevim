---
layout: post
title: "Script Roundup: a_indent, Session-Viminfo-Management"
author: "Alex Young"
tags: 
- scripts
- plugins
- 
---

###a_indent

[a_indent](http://www.vim.org/scripts/script.php?script_id=5008) (GitHub: [caigithub / a_indent](https://github.com/caigithub/a_indent)) by Colin Cai is a plugin for manipulating code blocks.  It's relatively language agnostic because it scans for blocks based on indentation.

Typing `am` selects the current code block, and `ai` selects code based on the current level of indentation.  There are also some jump commands, like `M` for jumping to the next block with the same level of indentation.

I usually select blocks based on brackets with `%`, which is the motion for matching brackets.  This isn't always that convenient, however, because I have to first move to the nearest bracket.

###Session-Viminfo-Management

[Session-Viminfo-Management](http://www.vim.org/scripts/script.php?script_id=5005) by Brant Chen is a plugin that attempts to improve `:mksession` and `:wviminfo`.  It can automatically load and save session and viminfo files when entering or leaving Vim.

To help manage these files, it employs the concept of a 'workspace'.  You can manually save and load workspaces with `:Savews` and `:Loadws`.  These commands support filenames, so you can output the session data to separate files if required.
