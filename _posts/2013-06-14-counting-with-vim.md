---
layout: post
title: "Counting and Calculating with Vim"
author: "Alex Young"
tags: 
- substitute
- searching
- simple-change
- registers
- expressions
---

I was working with a particularly unfriendly SQL dump file which was raising errors indicating that my data had the wrong amount of columns.  To figure out what was going on, I used Vim to count the number of columns and then corrected the data using a substitution command.

To count the number of columns, I used `%s/,//gn`.  The `n` flag causes `:substitute` to return the number of matches without actually performing any changes.  The data itself had columns separated by commas, so all I needed to search for was a single comma.  For more on flags, see `:help :s_flags`.

![Counting with Vim](/images/posts/counting-with-vim.png)

The results are displayed at the bottom of the screen, and read `12 matches on 1 line` -- in the screenshot I've used `s/,//gn` instead of `%s`.

I also find myself regularly needing to increment or decrement numbers in Vim.  This crops up when I'm working with array indexes, or sequential IDs from a database.  When in Normal mode, the `CTRL-A` command will increment the number under the cursor, and `CTRL-X` will decrement it.  These commands accept a `[count]` argument, so if you type `4 CTRL-A` Vim should add 4 to the number under the cursor.  Be careful if you're using tmux or screen -- in those cases you should able to type `CTRL-A a`.

If you need to perform quick calculations, you can use the _expression register_. While in Insert mode, type `CTRL-R =` and the cursor will turn into a double quote (`"`).  Whatever you type next will be evaluated as an expression, and this includes basic calculations.  The prompt isn't specifically for equations, it's Vim script.  For more on `CTRL-R`, see `:help i_CTRL-R`, and for more on expressions see `:help expression-syntax`.
