---
layout: post
title: "The Importance of the Home Row"
author: "Alex Young"
tags:   
- hjkl
- essays
- keyboard
---

> Jobs also decided to eliminate the cursor arrow keys on the Macintosh keyboard. The only way to move the cursor was to use the mouse. It was a way of forcing old-fashioned users to adapt to point-and-click navigation, even if they didn't want to.

-- <a href="http://www.amazon.co.uk/gp/product/1408703742/ref=as_li_ss_tl?ie=UTF8&tag=da0b-21&linkCode=as2&camp=1634&creative=19450&creativeASIN=1408703742">Steve Jobs: The Exclusive Biography</a><img src="http://www.assoc-amazon.co.uk/e/ir?t=da0b-21&l=as2&o=2&a=1408703742" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />, by Walter Isaacson

GUI versions of Vim are often configured to use similar keyboard shortcuts to the windowing system.  [MacVim](http://code.google.com/p/macvim/), for example, uses Apple's conventional keyboard shortcuts for many operations including managing tabs and saving files.  This generally means the habit of using arrow keys persists.

Eventually, people learn a bit more about Vim and ask: why `hjkl`?

![IBM Model M](/images/posts/ibmkeyboard.png)

The experienced Vim hacker barely moves his hand from the home row, so it's only natural that the cursor motion keys, `hjkl`, are situated here.  Originally, `hjkl` was used because older keyboards didn't have dedicated arrow keys:

> \[vi\] was written by Bill Joy for use on an Lear-Siegler ADM-3A terminal, which places arrow symbols on these letters since, like the original Mac shown above, it did not have dedicated arrow keys on the keyboard.

-- [Wikipedia: HJKL keys](http://en.wikipedia.org/wiki/HJKL_keys#HJKL_keys)

However, it's hard to argue the appeal of 'hjkl' to people who are not trained touch typists.  Self-taught programmers are often self-taught typists -- this can lead to a typing style with a tendency to drift from the home row.  Fortunately there are ways to learn touch typing without going back to school.  I dimly remember fitting Mavis Beacon Teaches Typing into my daily routine, and there are now web-based alternatives that are free to use.

It's even possible to use `hjkl` in Mac OS, and I wrote about this here: [A vim-friendly Mac Keyboard](http://alexyoung.org/2012/01/15/vim-keyboard/).  I use `fn`+`hjkl` as my cursor keys in Mac OS, but I'd be lying if I didn't admit to coveting a dark grey [Happy Hacking Professional 2](http://elitekeyboards.com/products.php?sub=pfu_keyboards,hhkbpro2&pid=pdkb400b).

Once you've mastered `hjkl`, arrow keys can be remapped to less-used but equally useful commands.  And, other Unix tools use the same keys, or can be configured to do so.  Like Steve Jobs many Vim users eliminate or repurpose arrow keys, but for very different reasons.
