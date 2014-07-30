---
layout: post
title: "A Vim-inspired Mac Window Manager"
author: "Alex Young"
tags: 
- scripts
- plugins
- mac
---

In Mac OS X, window management is pretty horrible.  If you switch between a laptop and external monitor display, then the windows seem to get squashed and you have to manually resize them.  Also, maximise is purely advisory and rarely does what you might expect.  I just pressed maximise in Finder and it made the window thinner, so who knows how it's supposed to work.

That means power users install "window managers".  They're not window managers like the X11 type, they're utilities for making window positioning more bearable.  I use [Spectacle](http://spectacleapp.com/) so I can quickly maximise iTerm, and occasionally fill two windows across the left and right portions of the screen.  Spectacle is open source, and it's customisable as well.

![Spectacle](/images/posts/spectacle-mac.png)

There's also [Slate](https://github.com/jigish/slate) which has more focus on being scriptable.  You can configure it with a JavaScript file, and it's probably easier to sync this to your dotfiles than Spectacle's config.

"hannesr" on Hacker News recently submitted [a Vim-like Mac window manager](https://news.ycombinator.com/item?id=8108132), which looks cool in the video.  I never thought of setting Spectacle to use hjkl/etc., which is weird because I have tmux set up like that.  However, this video shows a window manager that uses Vi grammar for commands, so you can type `2b` to move focus two windows back, or `o50y` to move the window half way down the screen.  I think that command translates as "origin 50% y".

I think "WinMan" looks like a worthwhile iteration on the idea of Mac OS X window managers, and I'd definitely prefer Vim-like movement over Spectacle's more Apple-inspired shortcuts.
