---
layout: post
title: "Vim 101: Search and Replace on Multiple Files"
author: "Alex Young"
tags:
- vim101
- editing
- substitute
---

Last week I discussed how to use the [substitute and global commands](http://usevim.com/2012/03/30/search-and-replace/) for search and replace in Vim.  Once these commands have been mastered, they can be combined with argument list commands to apply them to multiple files.

###The Argument List

When Vim is started, multiple files can be specified in the command line.  This forms the _argument list_.  Starting Vim with `vim *.js`, then using the `:ls` command to list the buffers might display something like this:

![Vim buffer list screenshot](/images/posts/vim101-arglist-1.png)

Each file in the argument list has been added to the buffer list.  Typing `:arg` will display the argument list.  However, typing `:arg *.rb` will now add all files that match `*.rb` to the argument list, replacing the old argument list.  Typing `:arg` again will confirm this:

![Vim :arg screenshot](/images/posts/vim101-arglist-2.png)

Files can be appended to the argument list by using `:argadd`, and removed with `:argdel`.  These can be shortened to `:arga` and `:argd`.

###Running Commands on the Argument List

The `:argdo` command can be used to execute other commands for all files in the argument list.  Let's say I wanted to rename a variable across lots of files in a project, then all I'd have to do is use a `:substitute` command with `:argdo`:

{% highlight text %}
:argdo %s/cmd/command/ge
{% endhighlight %}

The `e` flag, which we haven't seen before, tells Vim to ignore errors that would otherwise be displayed for files with no matches.  Each buffer will be modified without saving any changes, so this pattern is usually combined with `:update` to write the files:

{% highlight text %}
:argdo %s/cmd/command/ge | update
{% endhighlight %}

In cases where all buffers or windows need to be updated, the `:bufdo` and `:windo` commands can be used.  I sometimes find myself using `:windo` when I'm editing a source file and the corresponding unit test in split windows.

###Further Reading

All of these commands and features have documentation in Vim's help system:

* `:help arglist`
* `:help :arg`
* `:help :argdo`
* `:help :bufdo`
* `:help :windo`
