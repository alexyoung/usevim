---
layout: post
title: "Script Roundup: Write.vim, sha3.vim"
author: "Alex Young"
tags: 
- plugins
- scripts
- cryptography
- writing
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###Write.vim

Although Vim is naturally optimised for writing software, I actually use it as a general purpose editor for all kinds of writing.  [Write.vim](http://www.vim.org/scripts/script.php?script_id=4249) (GitHub: [Soares / write.vim](https://github.com/Soares/write.vim), License: _Vim_) by Nate Soares is an attempt to cater to this need.  When in "writer mode", set by typing `:WriteOn`, Vim is configured to move screen-wise, hide line numbers, and turn spell checking on.

###sha3.vim

There's [been a lot of talk](http://www.schneier.com/blog/archives/2012/10/keccak_is_sha-3.html) about SHA-3 recently, since NIST announced that [Keccak](http://keccak.noekeon.org/) has been selected as SHA-3.  [sha3.vim](http://www.vim.org/scripts/script.php?script_id=4258) by Yukihiro Nakadaira is a port of `Keccak-simple32BI.c` to Vim.  Saving [gist: 3848180](https://gist.github.com/3848180) to `~/.vim/autoload/` will install it, and SHA-3 hashes can be generated with `sha3#sha3_512('foo')`.
