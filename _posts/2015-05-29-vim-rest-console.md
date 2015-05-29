---
layout: post
title: "Vim REST Console"
author: "Alex Young"
tags: 
- scripts
- plugins
- web
- rest
---

[Vim REST Console](http://www.vim.org/scripts/script.php?script_id=5182) (GitHub: [diepm/vim-rest-console](https://github.com/diepm/vim-rest-console), License: _MIT_) is a plugin for sending and viewing HTTP requests from RESTful services.  It uses cURL, and allows you to type URLs and then get responses back in a separate window.

To make a request, you need to be in a buffer with a file type of "rest": `:set ft=rest`.  Then, type the protocol and hostname on one line, followed by the HTTP method and path on another:

{% highlight text %}
http://localhost:9200
GET /_cat/nodes?v
{% endhighlight %}

Once you're ready type the trigger key to make the request, which is `C-j` by default.  The results will be displayed in a split window.

You can also include JSON for POST requests:

{% highlight text %}
http://localhost:9200
POST /testindex/testtype
{
  "key": "new key",
  "value": "new value"
}
{% endhighlight %}

The plugin has some optional configuration values -- you can change the trigger key with `g:vrc_trigger`, turn on SSL certificate checking, and change the default `Content-Type` header.
