---
layout: post
title: "MacVim in Yosemite"
image: "/images/posts/yosemite.png"
author: "Alex Young"
tags: 
- mac
- macvim
---

![Yosemite](/images/posts/yosemite.png)

If you've updated to Mac OS X Yosemite MacVim won't display a window, then try reinstalling it with `brew install macvim`.  There's a discussion about it on the [macvim issues page](https://code.google.com/p/macvim/issues/detail?id=508).  The latest release is quite old (Snapshot 73), which you can download directly from here: [b4winckler / macvim / releases](https://github.com/b4winckler/macvim/releases).  Using `brew cask install` displays an error saying you should use `brew install macvim`.  

The GitHub pull requests for MacVim include this one: [Refactor/adapt to yosemite #45](https://github.com/b4winckler/macvim/pull/45).  It has UI modifications, like updating the close button and changing the new tab icon.

MacVim in Yosemite currently looks OK, and will get the new full screen behavior on the maximise button.  There do seem to be [issues](https://code.google.com/p/macvim/issues/detail?id=514) with [full screen](https://code.google.com/p/macvim/issues/detail?id=518), so you might be better off with the iTerm/vim combination for now.

