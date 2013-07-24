---
layout: post
title: "Powerline Escape Fix"
author: "Alex Young"
tags: 
- powerline
- tips
---

Last week I wrote about [Powerline Alternatives](http://usevim.com/2013/07/19/airline/), and there was also a Hacker News thread about [vim-airline](https://news.ycombinator.com/item?id=6002518) where one of the posters had this [useful tip](https://news.ycombinator.com/item?id=6002518) about Powerline:

> The delay in leaving insert mode used to drive me nuts in vim-powerline. I posted an issue and the author pointed me to this helpful Vim config snippet as a workaround (original link gone as the vim-powerline issue tracker has been removed, so reposting as a gist): [https://gist.github.com/brendonrapp/5944296](https://gist.github.com/brendonrapp/5944296).

The issue is that [Powerline](https://github.com/Lokaltog/powerline) causes a delay when leaving Insert mode, but this can be fixed by changing the `InsertEnter` `timeoutlen` setting to 0:

> The time in milliseconds that is waited for a key code or mapped key sequence to complete.  Also used for CTRL-\ CTRL-N and CTRL-\ CTRL-G when part of a command has been typed.  Normally only 'timeoutlen' is used and 'ttimeoutlen' is -1.  When a different timeout value for key codes is desired set 'ttimeoutlen' to a non-negative number.

The Powerline author has posted this to [the project's growing documentation](https://powerline.readthedocs.org/en/latest/tipstricks.html).

This is the source for the fix:

{% highlight text %}
if ! has('gui_running')
  set ttimeoutlen=10
  augroup FastEscape
    autocmd!
    au InsertEnter * set timeoutlen=0
    au InsertLeave * set timeoutlen=1000
  augroup END
endif
{% endhighlight %}
