---
layout: post
title: "Script Roundup: vim-pipe, Query Command Complete"
author: "Alex Young"
tags: 
- plugins
- scripts
- completion
- shell
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###vim-pipe

[vim-pipe](http://www.vim.org/scripts/script.php?script_id=4130) (GitHub: [krisajenkins / vim-pipe](https://github.com/krisajenkins/vim-pipe)) by Kris Jenkins helps improve workflow by allowing a buffer to be run through a frequently used command whenever `<LocalLeader>r` is pressed.  This could be a syntax checker, or something that renders Markdown, or shell to run a database query.

The author has provided a terminal-friendly example using a Markdown parser and `lynx`:

{% highlight text %}
autocmd FileType mkd :let b:vimpipe_command="multimarkdown | lynx -dump -stdin"
{% endhighlight %}

###Query Command Complete

[Query Command Complete](http://www.vim.org/scripts/script.php?script_id=4132) (GitHub: [caio / querycommandcomplete.vim](https://github.com/caio/querycommandcomplete.vim), License: _PD_) by Caio Romão adds support for completion suggestions from any external command.  The author's example is email address completion by using it as a Mutt `query_command` wrapper.
