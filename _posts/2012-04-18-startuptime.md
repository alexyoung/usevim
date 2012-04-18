---
layout: post
title: "Improving Vim's Startup Time"
author: "Alex Young"
tags: 
- startuptime
- performance
---

Once you've installed [pathogen.vim](http://www.vim.org/scripts/script.php?script_id=2332) or [Vundle](http://www.vim.org/scripts/script.php?script_id=3458), installing Vim scripts becomes almost... addictive.  Eventually Vim's startup time may start to suffer.  Or perhaps you've installed a new OS and you can't work out why Vim is loading slowly.

Fortunately, recent versions of Vim come with the `--startuptime` command-line option:

{% highlight text %}
$ vim --startuptime vim.log
{% endhighlight %}

This file should contain a heading and a list of timing messages:

{% highlight text %}
times in msec
 clock   self+sourced   self:  sourced script
 clock   elapsed:              other lines

000.006  000.006: --- VIM STARTING ---
000.082  000.076: Allocated generic buffers
000.299  000.217: locale set
000.303  000.004: clipboard setup
000.308  000.005: window checked
000.787  000.479: inits 1
000.793  000.006: parsing arguments
000.793  000.000: expanding arguments
003.495  002.702: shell init
003.874  000.379: Termcap init
003.890  000.016: inits 2
003.996  000.106: init highlight
052.048  000.250  000.250: sourcing /usr/local/Cellar/vim/7.3.333/share/vim/vim73/syntax/syncolor.vim
{% endhighlight %}

The header is two lines and refers to each type of timing message.  It's easier to understand if it's broken down like this:

{% highlight text %}
 clock   self+sourced   self:  sourced script
052.048  000.250  000.250: sourcing /usr/local/Cellar/vim/7.3.333/share/vim/vim73/syntax/syncolor.vim

 clock   elapsed:              other lines
000.006  000.006: --- VIM STARTING ---
{% endhighlight %}

What can we do with this?  Well, let's try piping it through `sort -k 2` to easily find the slowest sourced scripts:

{% highlight text %}
$ cat vim.log | sort -k 2
387.346  100.634: loading plugins
169.582  145.276  005.804: sourcing /usr/local/Cellar/vim/7.3.333/share/vim/vim73/syntax/syntax.vim
230.845  206.734  039.239: sourcing $HOME/.vimrc
{% endhighlight %}

It's also worth launching Vim with different files so `--startuptime` measures what happens when a particular file type is read.

###Slow Start

Typing `:help slow-start` shows Vim's built-in guidance on startup performance -- it suggests checking if Vim was compiled with X11, because loading shared libraries might be taking a noticeable amount of time.  Starting Vim with `-X` will prevent Vim from trying to connect to an X server.

Loading the viminfo file can take a while too.  Running Vim with `-i NONE` will stop it from loading viminfo files.

It's also possible to load Vim without `~/.vimrc`.  This can be useful for determining if the problem is caused by your settings or the way Vim was built on your system:

{% highlight text %}
vim -u NONE --startuptime vim-NONE.log
{% endhighlight %}

###Profiling

Vim includes profiling tools that can be essential when debugging scripts.  This can be used from the command-line to measure how long each function takes when Vim is started:

{% highlight text %}
vim -c 'profile start vim.log' -c 'profile func *' -c 'q'
{% endhighlight %}

The `profile start` command expects a file name argument, and this file will be truncated and written to with debugging information.

###References

I found the startup time measurement with `profile` tip in this post by ZyX: [Profiling startup time](http://stackoverflow.com/a/8347244).
