---
layout: post
title: "Search and Replace with Capture Groups"
author: "Alex Young"
tags: 
- motions
- substitute
---

Once you get comfortable with `:%s` for searching and replacing across an entire file, you can start to unlock more power by exploiting Vim's rich regular expression handling.  Coming from a GUI background, you might be tempted to look for a plugin to solve a seemingly general problem.  However, a deeper knowledge of regular expressions may be all you need.

Here's an example: bluMyst on reddit wanted to know how to [generalise search and replace](http://www.reddit.com/r/vim/comments/1rzj1w/how_do_i_do_a_mass_findandreplace_thats_more/) to add `\n"` to lines that start with `printf(`.  The solution suggested by "who00oot" was capture groups:

> Use capture groups. Search for `(printf("[^"]+)` and replace with `$1\n` (you may have to escape).

Then "dhruvasagar" suggested `\zs` and `\ze`.  These are known as _atoms_, and you can read about them in `:help \ze` and `:help \zs`.  The example for `\ze` in Vim's documentation is `end\ze\(if\|for\)` matches the "end" in "endif" and "endfor" -- this would allow you to avoid other words that start with "end", like "ended".

