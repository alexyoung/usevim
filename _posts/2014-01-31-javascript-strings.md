---
layout: post
title: Making JavaScript Strings
author: Alex Young
tags:
- javascript
- plugins
---

![Vim Stringify](/images/posts/vim-stringify.gif)

When I was at [Vim London](http://www.meetup.com/Vim-London/) on Tuesday, Jack Franklin gave a [talk about writing plugins](http://vimeo.com/85341794).  He said that when you find things you can automate, you feel like you've given yourself superpowers.

Vim-stringify (GitHub: [29decibel / vim-stringify](https://github.com/29decibel/vim-stringify), License: _GPL_) is a good example of such a plugin, because it helps deal with something I hate about JavaScript: the lack of multiline string support.  If you're crafting HTML fragments, or SQL statements, pasting them into a JavaScript file requires an annoying extra step.  You have to wrap each line with a quote, and use concatenation to join the strings:

{% highlight javascript %}
var sql = '';

sql += 'SELECT * FROM users ';
sql += 'WHERE role = "admin" ';
sql += 'AND permissions = "read" ';
sql += 'LIMIT 10';
{% endhighlight %}

Mike Li's plugin is small: it basically uses `substitute` to replace each line with quotes and `+`:

{% highlight viml %}
function! Stringify() range
  for linenum in range(a:firstline, a:lastline)
    let replaceSub = "'\\1'\ +"
    if a:lastline == linenum
      let replaceSub = "'\\1'"
    endif
    let newline = getline(linenum)
    " escape single quote
    " \\\\ is \
    " \= means previous char is optional
    let newline = substitute(newline, "\\\\\\='", "\\\\\\\'", 'g')
    " add single quotes and plus
    let newline = substitute(newline,'\(\S.*\)', replaceSub ,'g')
    call setline(linenum, newline)
  endfor
endfunction
{% endhighlight %}

You may want to map this to a `<Leader>` mapping... Or perhaps not!  There are apparently a lot of unused keys in Vim that you can use for convenient mappings.  Some people are even saying `<Leader>` is lame.  For more on that, see Drew Neil's [Follow my leader talk](https://vimeo.com/85343734).
