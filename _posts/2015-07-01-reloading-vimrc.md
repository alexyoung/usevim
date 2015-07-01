---
layout: post
title: "Reloading Your vimrc"
author: "Alex Young"
tags: 
- vimrc
---

If you're tinkering with Vim's config, did you know you can easily reload the settings file without restarting Vim? You basically just need to "source" the settings file: `:source ~/.vimrc`. You can use the abbreviated command, so it's just `:so ~/.vimrc`. If you use a plugin manager like Vundle and keep the list of plugins in `~/.vimrc`, then you'll need to source it after changing the list of installed plugins. There's no need to quit and restart!

Once you get the hang of this, you'll find you just open vimrc during editing sessions, without opening a new terminal and a fresh Vim to edit something.

There's a really cool section in [Learn Vimscript the Hard Way](http://learnvimscriptthehardway.stevelosh.com) about [editing your vimrc](http://learnvimscriptthehardway.stevelosh.com/chapters/07.html) that suggests creating some handy mappings for opening and reloading the settings file.

Also, if you're bogged down with a long settings file, why not [use folds to tidy it up](http://usevim.com/2012/05/09/clean-vimrc/)? And if you're not too sure about folds, then [I wrote an introduction to them](http://usevim.com/2012/08/31/vim101-folding/) back in 2012.

