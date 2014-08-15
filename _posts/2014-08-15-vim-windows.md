---
layout: post
title: "Vim in Windows Redux"
author: "Alex Young"
tags: 
- windows
- themes
- tools
---

Knowing that cmd.exe is nowhere near a modern Unix terminal and shell, I usually tell Windows Vim users to install gVim.  gVim feels fast and very close to the experience of gVim on Linux or MacVim.

One of the things I love about the Unix terminal workflow is tmux.  I've got so used to using it for multiple windows and split panes that I prefer it to most GUI environments.  It's not really just tmux though, it's the way I work on the command-line next to Vim.

The last few years has seen a renaissance in Windows shell development.  One example of this is [cmder](http://bliker.github.io/cmder/):

> Cmder is a software package created out of pure frustration over the absence of nice console emulators on Windows. It is based on amazing software, and spiced up with the Monokai color scheme and a custom prompt layout. Looking sexy from the start.

It's based on [ConEmu-Maximus5](https://code.google.com/p/conemu-maximus5/), which is a console emulator with tabs.  Lots of people have started to use Cmder to get a Unix-style Git setup working in Windows.

![cmder](/images/posts/cmder.png)

When I configure a new Unix system I use a script to invoke the package manager to install Vim and my favourite command-line tools.  Windows now has package managers too, and the program I use is called [Chocolatey](http://chocolatey.org/).  You can install Cmder with Chocolatey like this:

{% highlight text %}
cinst cmder
{% endhighlight %}

Once you've got Cmder and Vim installed, you might want to do some Windows specific tweaks to make things work really well.  Santiago Aguero has written two blog posts about this:

* [Get rid of windows console and embrace cmder](http://santiagoaguero.com/get-rid-of-windows-console-and-embrace-cmder/)
* [Vim in Windows: Part 1](http://santiagoaguero.com/vim-in-windows-part-1/)

Here's a screenshot after I downloaded Chocolatey and installed Cmder and Vim:

![Windows 8 Vim](/images/posts/windows8vim.png)

Notice the multiple tabs!

The Vim in Windows post was only published yesterday, so hopefully he'll keep posting more Windows specific Vim tricks.  It shows how to set up 256 colours with the [Bad Wolf theme](https://github.com/sjl/badwolf/), which looks very clear and usable to me.
