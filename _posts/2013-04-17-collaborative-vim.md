---
layout: post
title: "Collaborative Vim"
author: "Alex Young"
tags: 
- plugins
- collaboration
---

There are a few emerging solutions appearing for collaborating with Vim.  The most obvious solution, which people are actually using for serious work, is to set up a server with your code, tmux, and Vim.  In [How We Use tmux for Remote Pair Programming](http://pivotallabs.com/how-we-use-tmux-for-remote-pair-programming/), Joe Moore of Pivotal Labs talks about how to set this up and why he prefers this approach.  Although it would be equally trivial to connect using GUI desktop sharing, the text-based approach has its own advantages:

> Due to network latency GUI-based desktop screen sharing was intolerably slow for coding. tmux made network latency a non issue. My personal experience was that tmux + Vim was so fast when working remotely that it was usually indistinguishable from coding locally.

If you're remote pair programming, you could get a cheap virtual machine somewhere, set up tmux and Vim, then hand out ssh keys so people can connect to the same tmux instance safely.

###Netbeans Protocol

[VimSync](https://github.com/clehner/vimsync) is a plugin that uses [node-vim-netbeans](https://github.com/clehner/node-vim-netbeans) to allow Vim instances to communicate using the [Netbeans Protocol](http://vimdoc.sourceforge.net/htmldoc/netbeans.html).  This project is written using [Node](http://nodejs.org/), which is well-suited to this type of network-oriented project.

###Etherpad

"Guyzmo" has created a proof-of-concept [Etherpad client for Vim](https://github.com/guyzmo/vim-etherpad).  Etherpad is a web-based real-time editor primarily designed for collaboration, which was bought by Google a few years ago.  There are lots of open source derivatives, and [etherpad.org](http://etherpad.org/) holds new rewrite of the original, which like _node-vim-network_ is implemented with Node.

Altough some web-based collaboration tools, like Google Drive, show the cursor of each user, _Etherpad client for Vim_ doesn't currently do this.  I wondered if it could be combined with code from [vim-multiple-cursors](https://github.com/terryma/vim-multiple-cursors) to allow multiple colour-coded cursors to be displayed in each client.

If you're looking to pair program or do live collaboration in Vim, it seems like the best solution right now is to use tmux.  The new generation of Node-powered projects are interesting, and I'll be watching that space with interest.
