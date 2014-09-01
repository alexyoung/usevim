---
layout: post
title: "Script Roundup: C64.vim, autorepeat.vim"
author: "Alex Young"
tags: 
- scripts
- plugins
- colours
---

###C64.vim

![C64.vim](/images/posts/vim_C64.png)

[C64.vim](http://www.vim.org/scripts/script.php?script_id=5015) is a colour scheme that uses the 16 preset colours available on a Commodore 64.  Of course, you'll need to run this through a CRT display to really appreciate it, but at least you don't have to load it from a cassette tape.

###autorepeat.vim

[autorepeat.vim](http://www.vim.org/scripts/script.php?script_id=5011) (GitHub: [daisuzu / autorepeat.vim](https://github.com/daisuzu/autorepeat.vim)) by Daisuke Suzuki is a plugin to repeatedly execute a command until a key is pressed.

It has two settings: `g:autorepeat_timeout`: and `g:autorepeat_interval`.  The repeat interval is 50ms, which strikes me as a little fast, but that depends on how you want to use it.  I tried it with `dd` and it promptly erased my test file, so I'm thinking it's more suited to navigation.
