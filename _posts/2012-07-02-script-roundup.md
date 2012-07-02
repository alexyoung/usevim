---
layout: post
title: "Script Roundup: Cycle.vim, numbers.vim, Clutch"
author: "Alex Young"
tags: 
- plugins
- scripts
- numbering
- hardware
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###Cycle.vim

Zef Houssney's [Cycle.vim](https://github.com/zef/vim-cycle) allows lists of words to be cycled through.  It has some [built-in cycle groups](https://github.com/zef/vim-cycle/blob/master/plugin/cycle.vim), but it's pretty easy to add new ones:


{% highlight viml %}
call AddCycleGroup(['one', 'two', 'three'])
{% endhighlight %}

Pressing `<C-a>` will cycle the word under the cursor.  Filetype matching is also supported, for cycling words specific to certain programming languages:

{% highlight viml %}
call AddCycleGroup('ruby', ['class', 'module'])
call AddCycleGroup(['ruby', 'eruby', 'perl'], ['else', 'elsif'])
{% endhighlight %}

###numbers.vim

[numbers.vim](http://myusuf3.github.com/numbers.vim/) (GitHub: [myusuf3 / numbers.vim](https://github.com/myusuf3/numbers.vim/), License: _MIT_) by Mahdi Yusuf changes line numbering schemes based on the current editor mode:

> This plugin will alternate between relative numbering (normal mode) and absolute numbering (insert mode) depending on the mode you are in.

###VIM Clutch

[VIM Clutch](https://github.com/alevchuk/vim-clutch) (License: _CC BY-SA 3.0_) by Aleksandr Levchuk is a hardware pedal for Vim:

> When the pedal is pressed down, the pedal types "i" causing VIM to go into Insert Mode. When released, it types `<Esc>` and you are back in Normal Mode.

The author explains how to build and program the hardware.  The hardware is largely off the shelf, but it had to be hacked to support sensing when the pedal is released.
