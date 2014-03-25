---
layout: post
title: "Script Roundup: Pterosaur, Arrow Key Repurpose"
author: "Alex Young"
tags: 
- scripts
- plugins
- firefox
- arrow-keys
---

###Pterosaur

[Pterosaur](http://www.vim.org/scripts/script.php?script_id=4895) (GitHub: [ardagnir / pterosaur](https://github.com/ardagnir/pterosaur), License: _AGPL_) by James Kolb allows Firefox to use Vim for text inputs.  It's built using [Pentadactyl](http://5digits.org/pentadactyl/), which is a Vim-inspired add-on.

It currently has some quirks and bugs, but the author has put troubleshooting tips into the readme.

###Arrow Key Repurpose

[Arrow Key Repurpose](http://www.vim.org/scripts/script.php?script_id=4900) (Bitbucket: [atimholt / arrowkeyrepurpose](https://bitbucket.org/atimholt/arrowkeyrepurpose)) by Tim Holt changes the arrow keys to do some things that you might find more useful:

* `<Left>`: Unindents current line or selection by one level.
* `<Right>`: Indents current line or selection by one level.
* `<Up>`: If the line above the current cursor position or selection is empty (or contains only white space), deletes it.
* `<Down>`: Adds an empty line below the current cursor position or selection.

There are aliases for shift-arrows too, [check the documentation for more details](https://bitbucket.org/atimholt/arrowkeyrepurpose/src/f22714b92c011216e6464f654e084220ffbe01e3/doc/ArrowKeyRepurpose.txt?at=default).
