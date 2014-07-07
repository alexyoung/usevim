---
layout: post
title: "Script Roundup: limelight.vim, Gist.vim"
author: "Alex Young"
tags: 
- scripts
- plugins
---

###limelight.vim

[limelight.vim](https://github.com/junegunn/limelight.vim) is a WriteRoom-style plugin that has an additional feature: the active section or paragraph is highlighted.  It dims paragraphs using colour calculations, and you can control this using some variables:

{% highlight text %}
" Color name (:help cterm-colors) or ANSI code
let g:limelight_conceal_ctermfg = 'gray'
let g:limelight_conceal_ctermfg = 240

" Color name (:help gui-colors) or RGB color
let g:limelight_conceal_guifg = 'DarkGray'
let g:limelight_conceal_guifg = '#777777'

" Default: 0.5
let g:limelight_default_coefficient = 0.7
{% endhighlight %}

It also has support for [Goyo.vim](https://github.com/junegunn/goyo.vim).

###Gist.vim

I recently wrote about a Gist plugin, and Keith Smiley sent in his solution: [Gist.vim](https://github.com/Keithbsmiley/gist.vim).  This one requires Python and [has detailed documentation](https://github.com/Keithbsmiley/gist.vim/blob/master/doc/gist.txt).

To use it, you should set your credentials in `~/.netrc`.

