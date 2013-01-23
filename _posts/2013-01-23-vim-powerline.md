---
layout: post
title: "The New Powerline"
author: "Alex Young"
tags: 
- plugins
---

[Powerline](https://github.com/Lokaltog/powerline) has been rewritten in Python.  The old Vim script version is still available at [Lokaltog / vim-powerline](https://github.com/Lokaltog/vim-powerline).  There was a discussion last year, [Port core code to Python](https://github.com/Lokaltog/vim-powerline/issues/193), where Lokaltog (Kim Silkebækken) discussed the merits of porting the core of Powerline to Python.  As a result, the same statusline effect can be applied elsewhere: Zsh, Bash, and tmux are all supported.

The only slight wrinkle in this new version, however, is Python on Macs.  The [Powerline installation instructions](http://lokaltog.github.com/powerline/overview.html#installation) have the innocuous line: `pip install git+git://github.com/Lokaltog/powerline`.  Let's just say if you're using a Mac, you may be in for a bit of extra work.  It's possible your Vim has been built with a different Python than the one `pip` uses.  You might have even installed Python with [Homebrew](http://mxcl.github.com/homebrew/), and you could have even installed Vim Homebrew as well.  Either way: your particular environment might not work out of the box.

If you do have problems running the new Powerline, this comment in the GitHub repository explores it in some detail: [Mac OSX 10.8.2 (Fails to load properly)](https://github.com/Lokaltog/powerline/issues/39#issuecomment-12137109).  The thing to do is type `:python import sys; print(sys.path)` from within Vim to determine which [site-packages](http://docs.python.org/2/install/index.html) folder should be used to install the Powerline Python module.

And your old Powerline fonts won't work anymore.  I found after I eventually convinced a Mac with Apple's Vim and Python 2.7 to load Powerline, I was presented with question marks rather than fancy symbols.  I had to [patch some fonts](http://lokaltog.github.com/powerline/fontpatching.html#font-patching) again:

> Warning The code points have changed in this version of Powerline! This means that you either have to patch your font again, or change the glyphs Powerline uses in your user configuration.

The funny thing is, even patching fonts is a pain on a Mac.

If you're prepared to put the effort in, the new Powerline can be cool (particularly if you're a tmux user), but it's going to take a significant amount work if you're using Mac OS X.
