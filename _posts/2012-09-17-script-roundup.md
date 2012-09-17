---
layout: post
title: "Script Roundup: Another Vim Addon Manager, layoutManager"
author: "Alex Young"
tags: 
- plugins
- scripts
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###Another Vim Addon Manager

[another-vim-addon-manager](https://github.com/Juev/another-vim-addon-manager) by Evsyukov Denis uses Ruby and [Rake](http://rake.rubyforge.org/) as a way to install Vim scripts.  It uses a file called `plugins.yaml` to define the required repository URLs:

{% highlight yaml %}
---
- https://github.com/tpope/vim-pathogen
- https://github.com/scrooloose/nerdtree
- https://github.com/vim-scripts/L9
- https://github.com/mileszs/ack.vim
{% endhighlight %}

By default, a YAML file is created that includes Pathogen -- this is the default way plugins are managed.  In that sense, this addon manager is a wrapper around Pathogen.

###layoutManager

[layoutManager](http://www.vim.org/scripts/script.php?script_id=4217) by Alexandre Viau allows tabs, templates, and windows to be named and manipulated in a similar way to panels in a GUI IDE.  Text can be sent to specific named windows -- one window could contain compiler output, another could display the code, while a further window displays a text-based menu of build operations.

The author has included an example layout file in the project's documentation that opens various tabs and windows, then writes text to them.
