---
layout: post
title: "MacVimFramework"
author: "Alex Young"
tags: 
- mac
- objective-c
---

Here's an interesting project for Objective-C developers: [MacVimFramework](https://github.com/qvacua/macvim), a fork of MacVim that allows you to use a MacVim view in your own applications.  To use it, you'll need to link against `PSMTabBarControl.framework` and `MacVimFramework.framework`.

There's an example of how to use it: [MMAppDelegate.m](https://github.com/qvacua/macvim/blob/master/src/MacVim/MinimalMacVim/MMAppDelegate.m).  The author Tae Won Ha, notes the framework isn't necessarily a well-designed Objective-C framework, but the embedded source from Vim has minimal changes.
