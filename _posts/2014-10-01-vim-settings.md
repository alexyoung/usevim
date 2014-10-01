---
layout: post
title: "Project Specific Settings with Vim"
author: "Alex Young"
tags: 
- articles
- tutorials
---

When I started using Vim for my day job -- beyond server config editing and quick text file notes -- one thing I struggled with was the project management side of things.  Visualising projects and quickly navigating files seemed more painful than some of the IDEs that I'd grown used to, so I was constantly trying different project management plugins in Vim.

If you work on several projects at any one time, then it can be nice to have project-specific settings.  This might be something as simple as different code formatting styles, but it could be more complex build system configuration as well.

In [Project Specific Settings with Vim](http://writtenby.adriengiboire.com/articles/2014-09-30-projects-specific-settings-with-vim/), Adrien Giboire writes about using `.exrc` files.  You have to `set exrc` to make this work, and it comes with caveats -- if someone commits an `.exrc` with malicious commands then you could be in trouble.  Adrien explains all of this and also how he uses it with real projects.
