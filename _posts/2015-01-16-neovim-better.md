---
layout: post
title: "Geoff Greer on NeoVim vs. Vim"
author: "Alex Young"
tags: 
- neovim
- vim
---

Geoff Greer has been writing about Vim and the issues with its codebase, and how NeoVim aims to fix everything.  He wrote [Floobits](https://github.com/Floobits/floobits-vim) for Vim, which is a collaborative editing plugin.  During the development of Floobits, Geoff ran into several issues that were caused by Vim's scripting API.  He now claims, in [Why Neovim is Better than Vim](http://geoff.greer.fm/2015/01/15/why-neovim-is-better-than-vim/), that the only good thing about Vim is the interface:

> Every other aspect of Vim is irredeemable. The codebase is atrocious. The plugin API is cumbersome and restrictive. The dev community is apathetic. The benevolent dictator is averse to change. There is no chance of fixing these problems.

His complaints directly relate to the motivations behind the NeoVim project:

> Vim's plugin API is just plain bad. First, all plugin code runs synchronously. That means if any plugin's code is executing, Vim's UI is frozen. This makes many types of plugins difficult or impossible to implement.

I'm pretty sure I remember Thiago Arruda creating a fork for Vim which added asynchronous forking, and this ended up being the start of the NeoVim fundraising project.

But it's not just the plugin API that bothers him, it's also the internals:

> I started programming in C almost 20 years ago. Vim is, without question, the worst C codebase I have seen. Copy-pasted but subtly changed code abounds. Indentation is haphazard. Lines contain tabs mixed with spaces. Source files are huge. There are almost 25,000 lines in eval.c. That file contains over 500 `#ifdefs` and references globals defined in the 2,000 line globals.h.

In the course of writing this blog I've looked at Vim's source for clarification on certain behaviours, and I struggled to follow the source due to the large files and inconsistent style.

> Many of Vim's `#ifdefs` are for platforms that became irrelevant decades ago: BeOS, VMS, Amiga, Mac OS Classic, IRIX

As an ex-Amiga user even I don't take issue at this.  If I wanted Vim for an Amiga computer, I could build an older release.

> Complexity stemming from cross-platform support may be excusable, but even something as simple as reading keyboard input is a nightmare in Vim. Stepping through with a debugger will result in call stacks such as `inchar()` in getchar.c calling `ui_inchar()` in ui.c, which calls `mch_inchar()` in os_unix.c, which calls `WaitForChar()`, which calls `RealWaitForChar()`.

I've done this!  I couldn't follow it and gave up, and felt like I was either stupid or Vim's source had some design issues.

> Some want Vim to be similar to Sublime Text: A flexible, extensible text editor for developers. Some (including BDFL Bram Moolenaar) are afraid of Vim becoming an IDE.

I think frustration with the leader of an open source project is natural, but Geoff really pushes the dictator simile in this post.  I'm not in a position to assess Bram's behaviour on pull requests, but my opinion on NeoVim is it's an interesting project that's worth your time.  Many open source projects that I depend on have come under fire due to their management, and this has occasionally resulted in fruitful new directions.

If you're interested in following Geoff's technical thread about Vim's source issues, then take a look at the [Vim Hall of WTF](http://geoff.greer.fm/vim/).
