---
layout: post
title: "Better Encryption in Vim"
author: "Alex Young"
tags: 
- encryption
- community
---

Using Vim as a [password manager](http://usevim.com/2013/11/27/password-manager/) seems to be popular, but the built-in encryption options are limited.  If you look at `:help 'cryptmethod'` you'll see options for zip and blowfish, with zip as the default.

[Stephen Braithwaite](https://groups.google.com/d/msg/vim_dev/9QMcIfK0Og8/LPEF8a_qyZcJ) asked on the Vim development list if AES support was desired:

> I am a programmer, and would like to add AES to available encryptions, which currently is mostly only blowfish.
> Would such an addition be welcome?
> Would such a patch contributed by me be acceptable?
> Or are there good reasons why Vim should have only blowfish, and the original encryption available in Vim which is known to be broken, and whose name I have forgotten?

Bram Moolenaar responded indicating more encryption methods are welcome, but naturally the patch would require careful review.  I think it would be cool to have AES with Vim, so let's see if anyone takes up the challenge!
