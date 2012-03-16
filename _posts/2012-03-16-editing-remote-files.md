---
layout: post
title: "Vim 101: Editing Remote Files"
author: "Alex Young"
tags:   
- vim101
- ssh
---

Vim supports transparent remote file editing through `netrw`.  It's available by default when `nocompatible` is enabled -- for more help on setting it up have a look at `:help netrw-start` and `:help netrw-activate`.

Editing a remote file is simple:

{% highlight text %}
$ vim scp://server/file
{% endhighlight %}

Other protocols are supported, including FTP and WebDAV.  I generally use this with ssh to quickly edit files on a remote server.

### SSH Tips

I configure the servers I use regularly so connecting to them, whether with Vim or the `ssh` command, takes a minimal amount of keystrokes.  This can be done by adding entries to `~/.ssh/config`:

{% highlight text %}
host shortname
  User alexy
  Hostname shortname.example.com
  Port 9372
{% endhighlight %}

Rather than typing `vim scp://alexy@shortname.example.com:9372/.vimrc`, I can now type `vim scp://shortname/.vimrc` to edit the Vim settings on one of my servers.

### Vim Client/Server

If Vim is compiled with the `+clientserver` option, it can accept remote commands.  This is generally true for GUI versions of Vim, so if your system has gvim or MacVim, try this in a terminal:

{% highlight text %}
$ mvim --servername example
$ mvim --servername example --remote-send 'ihello from the terminal'
{% endhighlight %}

Running this on a Mac with MacVim installed caused it to open a window with a new document, then switch to Insert mode and type a short message.

Vim's `--remote-send` option makes a lot of labour-saving scripting tasks possible.  For an example of this, take a look at [Vim and the terminal](http://www.scarpa.name/2011/03/22/vim-and-the-terminal/) by Michael Scarpa.
