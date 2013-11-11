---
layout: post
title: "Script Roundup: Vim Processing 1.0, vim-gnote"
author: "Alex Young"
tags: 
- plugins
- scripts
- email
- processing
---

###Vim Processing 1.0

[Vim Processing](https://github.com/sophacles/vim-processing) has been updated to version 1.0.  It has the following new features:

* Compile and run processing sketches with `:make`, and full integration with the QuickFix window and Vim compiler directives
* Syntax updates for Processing 2.0
* Scripts to autogenerate syntax files for those using development versions of processing, or custom variants
* Full help documentation

The main features provided by the plugin are syntax highlighting, documentation, and integration with Vim's compiler support.

###vim-gnote

[vim-gnote](http://www.vim.org/scripts/script.php?script_id=4760) (GitHub: [Zuckonit / vim-gnote](https://github.com/Zuckonit/vim-gnote), License: _MIT_) uses Python to store notes in an IMAP mailbox.  To use it, set your username and password with `g:gnote_mail_username` and `g:gnote_mail_password`, then store files as notes with the `Gnote()` function.  The author recommends using this mapping:

{% highlight javascript %}
map <leader>gn <esc>: call Gnote() <cr>
{% endhighlight %}

The source of the plugin is basically a single file, so it's pretty easy to see how it works if you're interested.  And if you set your password in a configuration file, make sure it's not world/group readable.
