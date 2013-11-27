---
layout: post
title: "Using Vim as a Password Manager"
author: "Alex Young"
tags: 
- encryption
---

A few weeks ago I wrote about Vim's built-in cryptographic features in [Protect Notes with Vim Encryption](http://usevim.com/2013/11/01/vim-encryption/).  In [Using Vim as your Password Manager](http://stelfox.net/blog/2013/11/using-vim-as-your-password-manager/), Sam Stelfox writes about an iteration on this idea -- using Vim for encrypting passwords:

> Using this personally required me coming up with a pseudo-file format that would allow me to quickly and easily find the credentials I needed.

> You'll notice I also used this to keep track of whether an account had physical information tied to it. When I moved this made it very quick for me to search for accounts that I needed to update with my new mailing address.

> As with many solutions this "temporary" one became more and more permanent as my motivation to build the Passpack competitor dwindled. My problem had been solved and I was no longer compelled to put any effort into a solution.

The basic idea is to use a text file with a simple format that is encrypted using `:set cryptmethod=blowfish` and `:X` to save the file.  I liked Sam's idea about attaching physical address information to make address changes easier to deal with.
