---
layout: post
title: "Script Roundup: Markology, Nomad"
author: "Alex Young"
tags: 
- scripts
- plugins
- marks
- tmux
---

###Markology

[Markology](http://www.vim.org/scripts/script.php?script_id=4894) (GitHub: [jeetsukumaran / vim-markology](https://github.com/jeetsukumaran/vim-markology)) by Jeet Sukumaran shows marks for the current line in the sign column.  Marks can be added, deleted, and toggled, and you can jump between the marks in the current buffer.

It's built using parts of ShowMarks and Mark Tools:

> Like "ShowMarks", Markology provides visual representation of |marks| local to a buffer by placing a |sign| in the leftmost column of the buffer indicating the label of the mark and its location.

> Markology is activated by the |CursorHold| |autocommand| which is triggered every |updatetime| milliseconds.  This is set to 4000(4 seconds) by default.  If this is too slow, setting it to a lower value will make it more responsive.

###Nomad

[Nomad.vim](http://www.vim.org/scripts/script.php?script_id=4891) (GitHub: [buztard / vim-nomad](https://github.com/buztard/vim-nomad)) by Bastian Winkler allows Vim to query tmux for environmental variables, to help make working over ssh using plugins like [fugitive.vim](https://github.com/tpope/vim-fugitive) more seamless.

> suddenly, when you try to access a git+ssh remote or access the `quotestar` or `quoteplus` registers, things won't work as expected because with a new ssh connection some of your environment variables changed and Vim doesn't know about it. Fortunately tmux knows about these changes and this is where the nomad plugin kicks in. It queries tmux for the new values and updates your environment in Vim.

Being able to use `"*` register is really useful for those of us who instinctively access the system clipboard this way.
