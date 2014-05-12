---
layout: post
title: "Script Roundup: characterize.vim"
author: "Alex Young"
tags: 
- scripts
- plugins
---

###characterize.vim

Did you know `a` has a character code of 97, and `A` is 65?  Sometimes I need to look up character codes for things like keyboard shortcuts in web interfaces, and in such cases I usually print out the events and look at the character codes.

With Vim you can press `ga` over a character, which also shows hex and octal values.  [characterize.vim](https://github.com/tpope/vim-characterize) by Tim Pope adds some additional values as well:

* Unicode character names: `U+00A9 COPYRIGHT SYMBOL`
* Vim digraphs (type after `<C-K>` to insert the character): `Co`, `cO`
* Emoji codes: `:copyright:`
* HTML entities: `&copy;`

HTML entities will be useful to web developers, and Vim digraphs are cool if you're writing Vim scripts like Tim.  The emoji codes are used by certain chat services.
