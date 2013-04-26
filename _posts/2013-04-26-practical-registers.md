---
layout: post
title: "Practical: Joining and Splitting Text"
author: "Alex Young"
tags: 
- practicals
- repeats
- join
- macros
---

The `J` (`:help J`) command is the kind of thing that seems suboptimal when initially learning Vim, but I find I use it with surprising regularity:

> Join [count] lines, with a minimum of two lines.  Remove the indent and insert up to two spaces (see below).

I even used it to join the previous lines after I pasted them from Vim's manual!  The weird thing is, there's no equivalent "split" command.  You might be tempted to split text on a single line using a regular expression, and while that does the job there are other ways to do it.  Let's look at one method that uses registers as an excuse to practice working with registers and repeats.

What we need to do is record a key sequence into a register and then execute it as needed.  Let's say you've got some HTML that you'd like to split:

{% highlight html %}
&lt;th&gt;id&lt;/th&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Age&lt;/th&gt;&lt;th&gt;Location&lt;/th&gt;
{% endhighlight %}

To split this text, we first need to look for a pattern.  Each newline should be inserted after `>`, but that could split in the middle of a tag.  How about moving the cursor to `/` and then `>`?

That can be done using `f`, with `f/f>`.  To add a carriage return afterwards, all we need to do is go into insert mode using `a` (to append text after the cursor position), and then press return.

The result is `f/f>a<CR>`.

To repeat it, record it first using `q`: `qqf/f>a<CR><Esc>q` -- although that looks ridiculous, you can now repeat the operation with `@q`.  Subsequent repeats can be applied with `@@`, which means "repeat the previous register".

This command can be broken down as follows:

* `qq`: Record typed characters into register `q`
* `f/`: Move to the next forward slash
* `a`: Go into insert mode, and append text after the current cursor position
* `<CR>`: This is where you press return to insert the newline
* `<Esc>`: Go back to Normal mode
* `q`: Stop recording

The register can be executed with arguments, so typing `2@q` after the initial edit made during recording will cause the rest of the lines in the example to be split.

Granted, a regular expression might seem simpler (and you can also repeat regular expressions), but executing registers can get you out of some tricky editing spots!
