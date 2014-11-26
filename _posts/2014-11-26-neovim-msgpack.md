---
layout: post
title: "NeoVim and Atom"
author: "Alex Young"
tags: 
- neovim
- atom
---

One of NeoVim's promises is a "better GUI architecture".  That means you can access NeoVim over a lightweight protocol that allows it to act as a text manipulation engine.  From what I understand, this will be supported by the [Msgpack-RPC interface](http://neovim.org/doc/user/msgpack_rpc.html):

> At this point, only plugins use msgpack-rpc, but eventually even user interaction will be achieved through the protocol, since user interfaces will be separate programs that control a headless Nvim instance.

Rather than using Vim emulators in GUI editors and IDEs, you could use plugins that map from the GUI tools directly to NeoVim.  The first project that I've seen to attempt to take advantage of this is [carlosdcastillo/vim-mode](https://github.com/carlosdcastillo/vim-mode), which basically turns Atom into a NeoVim client.  The author has a [YouTube video](https://www.youtube.com/watch?v=lH_zb7X6mZw) that demonstrates the main features: keys are mapped to NeoVim in real time, and the results of edits are passed back.

This project is based on [atom/vim-mode](https://github.com/atom/vim-mode), which is a Vim emulation layer for the Atom editor.  This is a lot more code than Carlos's version, which is definitely encouraging.

Vim does have a [client-server](http://vimdoc.sourceforge.net/htmldoc/remote.html) mode, which I've seen people using for things like remote pair programming.  NeoVim's Msgpack-RPC interface is quite different to this, however.

If you want to read more about NeoVim, [newsletter 4 is out](http://neovim.org/news/2014/nov/) which covers the recent activity in the project.  This includes the news that you can install NeoVim with Homebrew! (`brew tap neovim/homebrew-neovim`)
