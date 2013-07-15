---
layout: post
title: "Script Roundup: npm.vim, sexy_scroller.vim"
author: "Alex Young"
tags: 
- plugins
- node
- scrolling
---

###npm.vim

If you don't use Node, you probably think [npm](https://npmjs.org/) is a flavour of the month hipster thing.  I'm not sure if that's true, but I like npm a lot, so I looked at Afshin Mehrabani's [npm.vim](http://www.vim.org/scripts/script.php?script_id=4652) (GitHub: [afshinm / npm.vim](https://github.com/afshinm/npm.vim)) with genuine interest.  This script is currently very simple -- `:Npm module` will install _module_.  There's nothing more to it, but the author has included documentation and packaged the plugin so it's easy to install with Pathogen and Vundle.

Hopefully he's using it as a placeholder for some cool time saving features that Node developers will enjoy soon...

###sexy_scroller.vim

[sexy_scroller.vim](http://www.vim.org/scripts/script.php?script_id=4646) (GitHub: [joeytwiddle / sexy_scroller.vim](https://github.com/joeytwiddle/sexy_scroller.vim)) is different to other smooth scrolling scripts, claims the author Joey Twiddle, because it provides easing, operates on general movements, and uses `winrestview`.

It has options for controlling the scrolling speed, easing function, and can be easily toggled with `:SexyScrollerToggle`.
