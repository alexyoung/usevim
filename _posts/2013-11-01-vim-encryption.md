---
layout: post
title: "Protect Notes with Vim Encryption"
author: Alex Young
tags:
- tutorials
---

![Vim encryption](/images/posts/vim-encryption.gif)

Did you know Vim has built-in encryption?  All you need to do to use it is to master the single command `:X`.

When you've got an open buffer, before saving type `:X` in Normal mode.  Vim will prompt you for an encryption key twice.  Then you can save the file with `:w`.

If you `cat` the file on the command-line you'll see that it now consists of some kind of binary data, prefixed with the `VimCrypt` header.  This header allows Vim to see that the file is encrypted -- when you try to open it again Vim will prompt for the encryption key.

If you type `:set cryptmethod` (alias: `cm`, help: `'cryptmethod'`) Vim will display the default encryption algorithm.  The default is `zip` which isn't very strong.  It's good enough to hide your diary from casual snoopers, but you may prefer the `blowfish` method which is stronger.

This simple method of encrypting files might be suitable for hiding things like notes -- things you don't want other people to read too easily.  It's convenient and easy to use, and I think it's surprising to find that Vim supports it out of the box.
