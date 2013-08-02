---
layout: post
title: "Include File Searches"
author: "Alex Young"
tags: 
- tags
- searching
---

Include file searches (`:help include-search`) can be useful for navigating around large files.  You can do things like:

* List the first line that contains the keyword under the cursor
* List all lines that match the keyword under the cursor
* Jump to the first line that contains the keyword under the cursor

Although this feature is tailored to C by default, it can be adapted to work with other languages with some configuration.

###Examples

<div class="image">
  <img src="/images/posts/onebdi.png" alt="" />
  <small>Displaying the first line that matches the keyword.</small>
</div>

Download [jquery-2.0.3.js](http://code.jquery.com/jquery-2.0.3.js) and open it in Vim.  Move the cursor to line 35 (`35G`) then move the cursor over `document` and press `[i`.  At the bottom of the screen you'll see `document = window.document,` -- Vim is indicating the first match of this keyword from the start of the file.  You can also try `]i` which shows the next match from the cursor's position.

Now move to line 38 and press `[I` (that's capital `i`) over `_jQuery`.  You will see two matches this time.

<div class="image">
  <img src="/images/posts/twobdi.png" alt="" />
  <small>Displaying all matches.</small>
</div>

This is pretty basic, but you'll notice this feature doesn't really need any specific programming language parsing support.  The commands we've looked at will even work with plain text.

###Included Files

What makes this feature useful for C programmers, though, is it will search through included files as well.  To configure how Vim loads files from the file system, you need to use `:set include="some pattern"`.  See `:set 'include'` for help.

I tried to make this work with Node's CommonJS module system.  I couldn't get it working, but I did find an article that includes some more advanced ideas for supporting CommonJS: [VimTip: complétion JavaScript](http://esquisses.clochix.net/2013/01/02/vimtips-js-autocomplete/).  It's really about completion, but the `.vimrc` example uses `'include'`, `'includeexpr'`, and `'suffixesadd'` to make Vim figure out the [Node's module loading rules](http://nodejs.org/docs/latest/api/modules.html#modules_all_together).

{% highlight text %}
function! JsIncludeExpr(file)
  if (filereadable(a:file))
    return a:file
  else
    let l:file2=substitute(substitute(a:file,'\\.js$','','g'),'$','/index.js','g')
    return l:file2
  endif
endfunction
function s:setJSOptions()
  set omnifunc=javascriptcomplete#CompleteJS
  set path+=./node_modules/**,node_modules/**
  set include=require(.\\zs[^'\"]*\\ze
  set includeexpr=JsIncludeExpr(v:fname)
  set suffixesadd=.js
endfunction
autocmd FileType javascript call s:setJSOptions()
{% endhighlight %}

So, remember that `[i` and `[I` can be useful, and can be bent to your will.
