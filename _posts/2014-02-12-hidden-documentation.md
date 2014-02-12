---
layout: post
title: "Hidden Documentation"
author: "Alex Young"
tags: 
- git
---

Mislav Marohnić wrote [Every line of code is always documented](http://mislav.uniqpath.com/2014/02/hidden-documentation/), an article about figuring out the reasoning behind confusing code:

> As it turns out, this line--more specifically, the change which introduced this line--is heavily documented with information about why it was necessary, why did the previous approach (referred to by a commit SHA) not work, which browsers are affected, and a link for further reading.

He gives some examples with Vim and [Fugitive](https://github.com/tpope/vim-fugitive), detailing the exact keystrokes needed to use `:Gblame` to compare buffers against files on GitHub.

I often find myself using Git from within Vim, and I like this use of `:Gblame`.  If you haven't used Fugitive before and you're collaborating on a project, then you should definitely try installing it and typing `:Gblame` just to see the basic usage.  Like Mislav I usually find the source of the bad code was me, but the commit logs are still useful!
