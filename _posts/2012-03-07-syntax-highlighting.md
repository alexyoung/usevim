---
layout: post
title: "Introduction to Syntax Highlighting"
author: "Alex Young"
tags:
- tutorials
- syntax-highlighting
- ftdetect
- ftplugin
---

There are good reasons to have a working knowledge of Vim's syntax highlighting system: perhaps you don't like the way a certain file type is handled, or maybe you'd like to add support for a new language or file format.  It's also possible to fix or replace the built-in highlighting files in cases where they don't work for you -- the Markdown highlighting in my distribution doesn't work too well with embedded HTML or GitHub-flavoured Markdown (I use Tim Pope's [vim-markdown](https://github.com/tpope/vim-markdown) instead).

### Syntax Files

Syntax files usually end in `.vim`, and can contain any Ex command.  That means it's possible to use several files to deal with complex situations, or reuse syntax highlighting between different file types:

{% highlight viml %}
runtime! syntax/other.vim
{% endhighlight %}

This can be useful for template languages -- I noticed that Tim Pope's Markdown highlighting files load the syntax for `html.vim`.

### File Type Detection

Syntax highlighting files can be distributed with `ftdetect` and `ftplugin` directories to help automatically detect file types.  The `ftdetect` directory usually contains a file with a suitable autocommand for detecting the file type:

{% highlight viml %}
au BufRead,BufNewFile *.example set filetype=example
{% endhighlight %}

For a full example, see `:help ftdetect` in Vim.

### Syntax Groups

Text is categorised based on nestable groups that inherit each parent group's attributes.  Following the naming convention for group names is useful, because it allows colour schemes to apply the same colours to multiple languages.

For example, in the `javascript.vim` syntax file, comments are matched like this:

{% highlight viml %}
syn match   javaScriptLineComment      "\/\/.*" contains=@Spell,javaScriptCommentTodo
syn region  javaScriptComment        start="/\*"  end="\*/" contains=@Spell,javaScriptCommentTodo
{% endhighlight %}

Opening a file and typing `:hi Comment ctermfg=blue` will change comments in this language, and many others, to blue.

Notice how `region` and `match` are used with the `syntax` command.  Regions can span multiple lines, else the `oneline` argument can be supplied to limit where the region applies.  Take a look at `:help syn-region` and `:help syn-match` for more.

### Synchronising

I've occasionally run into issues where a syntax file has caused a glitch that convinces Vim that every subsequent line in a file should be highlighted with an incorrect style.  Why would this happen, and how can it be avoided?  To write solid syntax highlighting files, it's important to realise how Vim redraws documents.  Vim wants to be able to redraw from any point in a file, and this means the current state of syntax highlighting is important.

Looking at the JavaScript syntax highlighting file, we can see the following:

{% highlight viml %}
syn sync fromstart
syn sync maxlines=100

if main_syntax == "javascript"
  syn sync ccomment javaScriptComment
endif
{% endhighlight %}

By using `syn sync fromstart`, Vim will always parse the file from the start, unless `maxlines` is reached, in which case this number of lines back will be pasred.  This is done for performance reasons -- imagine parsing a file with hundreds or thousands of lines of code all the time.

The `ccomment` option tells Vim to use C-style comments for synchronisation.  Vim is aware of C-style comments, and will combine this with the `javaScriptComment` group to detect if a line is within a comment.

### Modifying Existing Syntax Highlighting

Modifying existing syntax highlighting files doesn't mean editing the `syntax.vim` files on your system, or duplicating them in `~/.vim`.  Instead, create a `~/.vim/after/syntax` directory.

Let's say we want JavaScript comments that start with `BUG` to be highlighted.  The standard `javascript.vim` will do this for `// TODO` and `// FIXME`, so let's add `// BUG` as well.  Open `~/.vim/after/syntax/javascript.vin` and add this:

{% highlight viml %}
syn keyword javaScriptCommentTodo      BUG contained
{% endhighlight %}

Now I get a different colour for comments that start with `// BUG`.

And yes, the `after` directory is special: read more in `:help after-directory`.

### Conclusion

I've only scratched the surface of working with Vim syntax highlighting here, but the built-in documentation is excellent.  It's worth attempting to fix any syntax highlighting issues you have -- I often find myself adding things to the `after` directory to handle special cases that the author of syntax highlighting files can't predict.

### References

* [Vim after-directory](http://vimdoc.sourceforge.net/htmldoc/options.html#after-directory)
* [Vim syntax](http://vimdoc.sourceforge.net/htmldoc/syntax.html)
* [Making a custom Vim Syntax file](http://blog.h3rald.com/making-a-custom-vim-syntax-file)

