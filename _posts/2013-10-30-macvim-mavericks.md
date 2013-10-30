---
layout: post
title: "MacVim Updated for Mavericks"
author: "Alex Young"
tags: 
- mac
- macvim
---

![Mavericks](/images/posts/mavericks.png)

Björn Winckler has released MacVim builds for Mac OS 10.9 (Mavericks): <https://github.com/b4winckler/macvim/releases>.  Mavericks is a free upgrade, and as usual Björn won't be maintaining MacVim for previous releases of Mac OS.

> Since I've upgraded my Mac to OS X 10.9 I will from now only be maintaining binaries for this version of OS X.  If anybody wants to provide binaries for OS X 10.6 (which I used to build for) then please let me know.

If you run this release from the terminal you'll see some `CGContextErase` errors:

> Unfortunately there is no equivalent function to replace the deprecated one so it requires using a whole new approach to text rendering.

> I find the best way to work around the warnings is to start MacVim from the Finder and leave it running (i.e. you can close windows, but not quit the whole app).  Then you can open files from Terminal without any warnings (or at least, that used to be the case).

-- [Björn Winckler, MacVim mailing list](https://groups.google.com/d/msg/vim_mac/dipbWXyUX1s/Vb2YSEoUChIJ)

Douglas Drumond contributed [Lion builds of MacVim](https://github.com/eee19/macvim/releases), which is useful, but Lion users are eligible for the free upgrade.  It looks like most Macs purchased after 2007 should be able to run Mavericks.
