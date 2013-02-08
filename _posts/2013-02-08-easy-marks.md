---
layout: post
title: "Vim 101: Practicing Marks"
author: "Alex Young"
tags: 
- vim101
- marks
---

Recently I've had several experienced Vim users tell me that they don't use marks.  Mastering marks is just a question of practice, and the easiest way to get the hang of them is by using two commands:

* `:marks`: This will list all of the current marks
* `''`: Move to the position before the latest jump

Looking at `:marks` periodically will help you visualise how marks work.  The `''` command will potentially improve your workflow: it causes the cursor to move to the position before the previous _jump_.

Jumps are actually a class of motions.  Motions are commands that move the cursor.  When you move the cursor, Vim stores the previous position, and the previous position can be accessed with `''`.

Let's say you're editing a unit test and there's an error on line 43.  The `G` command can be used to move to line 43 so you can fix the issue.  At that point, you can skip back to the previous line with `''`.  That fits into a compiler or test-based workflow quite nicely: discover error, skip to line number, fix, skip back.

I wrote a more detailed introduction to marks in [Vim 101: Marks](http://usevim.com/2012/05/04/marks/), but if you're struggling to fit marks into your workflow then just try mastering `''` first.  By looking at the output of `:marks` and `:jumps` (abbreviation: `:ju`), you'll be able to see how marks relate to jumps and how in turn motions relate to jumps.

