---
layout: post
title: Using Pathogen with Git Submodules
author: Alex Young
tags:
- pathogen
- git
---

[Pathogen](http://www.vim.org/scripts/script.php?script_id=2332) (GitHub: [tpope / vim-pathogen](https://github.com/tpope/vim-pathogen), License: _Vim_, vim.org: [pathogen.vim](http://www.vim.org/scripts/script.php?script_id=2332)) by Tim Pope is a great tool for managing a collection of Vim plugins.  Combined with Git, it becomes a powerful solution for synchronising Vim settings between machines.  However, if you store your Vim configuration, or indeed, all of your dotfiles in Git, then submodules should be used.

Pathogen's documentation suggests adding plugins like this:

{% highlight sh %}
cd ~/.vim/bundle
git clone git://github.com/tpope/vim-fugitive.git
{% endhighlight %}

Since I keep `~/.vim` in a Git repository, then I do the following instead:

{% highlight sh %}
cd ~/.vim
git submodule init
git submodule add git://github.com/tpope/vim-fugitive.git bundle/vim-fugitive
git commit -m 'Added vim-fugitive'
git push
{% endhighlight %}

Now when I want to check out my Vim configuration on another machine, I just have to do the following:

{% highlight sh %}
git clone git@github.com:alexyoung/dotvim.git ~/.vim
cd ~/.vim
git submodule init
git submodule update
{% endhighlight %}

Git should then print out what submodules have been loaded:

> `Submodule path 'bundle/vim-fugitive': checked out '03e138c3496926b193402f4e1542f0a99924f999'`

It's worth trying this out using a free repository at [GitHub](https://github.com/) or [Bitbucket](https://bitbucket.org/) before committing your entire `~/.vim` to Git, just because it's potentially easy to make a mistake with submodules.  Practise it a little bit first, then share your Vim configuration with us in the comments.
