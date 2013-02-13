---
layout: post
title: "Language-Specific Settings"
author: "Alex Young"
tags: 
- go
- settings
- ftplugin
- setlocal
---

I like the idea that programmers should be eclectic:

> eclectic [iˈklektik]: **adjective** deriving ideas, style, or taste from a broad and diverse range of sources: her musical tastes are eclectic.

Playing around with different languages, libraries, and systems can lead to new ideas.  One of my favourite programming languages for experimentation has always been Lisp: nobody pays me to use it, but I enjoy it nonetheless.

Some languages or language communities have strict ideas about formatting.  One example of this is the [Go](http://golang.org/) language -- it comes with the `gofmt` program for formatting your source files according to their rules.  If you want to experiment with Go, you might find your current settings aren't quite suited to it, particularly if you've got this in your `.vimrc`:

{% highlight text %}
set tabstop=2
set shiftwidth=2
set expandtab
{% endhighlight %}

I think this trend has come from the sheer amount of prominent Ruby developers that share their `.vimrc` files on GitHub, and it's definitely easier for new Vim users to use someone else's settings.  The [thoughtbot dotfiles](https://github.com/thoughtbot/dotfiles) are a good example of that particular trend.

So what do you do if you're a fellow eclectic programmer, prone to experimenting with languages that don't quite fit the Ruby world view?  Fortunately, Vim has a solution for this, and it's covered in the Vim wiki under [Keep your vimrc file clean](http://vim.wikia.com/wiki/Keep_your_vimrc_file_clean).

The basic principle is to add a `.vim/ftplugin/language.vim` file with the settings for a specific programming language.  The settings in these files will be loaded _after_ your `.vimrc`.  Vim has file type detection support, so when you start editing a given file, specific settings can be loaded based on the file type.

Simply dropping `set` commands into `.vim/ftplugin/language.vim` won't work, however.  If you switch between, say, Go and JavaScript files, you'll end up with Go settings when you're editing JavaScript.  The trick is to use `setlocal`.  Off the top of my head, I'd say something like this should work for `.vim/ftplugin/go.vim`:

{% highlight text %}
setlocal ai ts=8 sw=8 noexpandtab
{% endhighlight %}

This is much easier than trying to use `autocmd` in your main `.vimrc`.

The next time you're testing out an unfamiliar programming language, remember `.vim/ftplugin` and `setlocal` and you should get Vim ready in no time.
