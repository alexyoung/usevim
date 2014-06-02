---
layout: post
title: "Script Roundup: caniuse.vim, Joyent Plugin List"
author: "Alex Young"
tags: 
- scripts
- plugins
- scripting
---

###caniuse.vim

If you're writing CSS and can't remember what browsers support a given feature, then you probably switch to a browser and open [caniuse.com](http://caniuse.com).  A new alternative is [caniuse.vim](http://www.vim.org/scripts/script.php?script_id=4951) (GitHub: [zoeesilcock / vim-caniuse](https://github.com/zoeesilcock/vim-caniuse)) by Zoee Silcock.

You can trigger a search from Normal mode by using `<leader>ciu`.  You can also use a command: `:Caniuse border-radius`.

If you're writing a lot of CSS then this might improve your workflow.

###Joyent's Vim Plug List

I randomly stumbled on a list of Node plugins, curated by Joyent: [Vim-Plugins](https://github.com/joyent/node/wiki/Vim-Plugins).  This includes lots of useful plugins if you write JavaScript and Node.

One of the obvious Node-related projects is [Node.vim](https://github.com/moll/vim-node), which adds a useful `gf` shortcut that opens files using the same logic as Node's module system.
