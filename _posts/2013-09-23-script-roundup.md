---
layout: post
title: "Script Roundup: vim-emoji, fontdetect"
author: "Alex Young"
tags: 
- plugins
- scripts
---

###vim-emoji

![Vim emoji](/images/posts/vim-emoji.png)

If you're using a Mac, you're probably familiar with [emoji](http://en.wikipedia.org/wiki/Emoji).  [vim-emoji](http://www.vim.org/scripts/script.php?script_id=4725) (GitHub: [junegunn / vim-emoji](https://github.com/junegunn/vim-emoji)) by Junegunn Choi makes it easier to work with emoji in Vim.  The author's examples include settings for Git Gutter.

The plugin provides a function that can be used to look up an emoji symbol, like this: `emoji#for('small_blue_diamond')`.  That means you could tie it into anything you want: perhaps a `:boom:` for `FIXME` comments...

###fontdetect

Some plugins and settings benefit from special casing based on the current font.  I dimly recall running into this when writing small scripts that enhance the old Powerline.  [fontdetect](http://www.vim.org/scripts/script.php?script_id=4723) (GitHub: [drmikehenry / vim-fontdetect](https://github.com/drmikehenry/vim-fontdetect)) by Michael Henry tries to improve on Vim's `getfontname` function.

{% highlight text %}
if fontdetect#hasFontFamily("DejaVu Sans Mono") 
  let &guifont = "DejaVu Sans Mono 14" 
endif 
{% endhighlight %}

It should work with GTK, Mac OS X, and Windows, so it might help you add a bit of portability to more extreme uses of textual UIs.

