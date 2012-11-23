---
layout: post
title: "Vim 101: Auto Settings"
author: "Alex Young"
tags: 
- vim101
- options
---

Over the last few weeks I've been writing about `:set` and `:setlocal`, but I haven't yet touched on how Vim sets options itself.  I don't usually find myself getting into a mess trying to visualise how I arrived at a particular cocktail of settings, but it's useful to have a generalised picture of how Vim loads settings when starting up and opening files.

When Vim starts, it reads the `.vimrc` found in `$HOME` or `$VIM`, depending on your platform.  This file is a list of Ex commands, and after they're processed plugin scripts are loaded.  Other files are also read -- the entire process is documented in detail under `:help initialization`.

Another way options are set is when a file is opened using autocommands.  Autocommands associate files with commands, which means anything can happen when any file is opened.  This is typically used to associate editor settings with specific programming languages.  `FileType` can also be used, so I have this in my `.vimrc`:

{% highlight text %}
au FileType ruby setlocal nocindent
{% endhighlight %}

The full command is `:autocommand`, but it's often abbreviated to `:au`.

Finally, files themselves can contain commands known as _modelines_ (`:help modeline`).  These are usually written as code comments.  You'll sometimes notice teams of developers using modelines when they've decided to use Vim as their in-house editor, and it can also be a useful way to force a file to look the intended way when sharing code snippets.

After setting options, it's possible to write them to your `.vimrc` file using `:mkvimrc` (`:mkv`).  This writes the current key mappings, changed options, and the `:version` command to `.vimrc` in the current directory.  This is documented in the manual under `:help save-settings`.

To read more about how settings are automatically set, read `:help auto-setting`.
