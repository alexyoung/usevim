---
layout: post
title: "Custom Motions Part 1"
author: "Alex Young"
tags: 
- motions
- operators
---

I'm doing a talk about custom motions at the next [Vim London](http://www.meetup.com/Vim-London/) meetup, which I'm looking forward to.  Why did I pick the topic "custom motions"?  Well, mainly because it'll force the audience to revise modes, operators, motions, and Vim's grammar.

Drew Neil is one of the organizers of this group, and I'm going to use his [Practical Vim](http://pragprog.com/book/dnvim/practical-vim) book as a reference.  Not specifically to explain custom motions -- mainly because it contains useful quotes that explain the underlying concepts.  For example:

> If we think of Vim as a finite-state machine, then Operator-Pending mode is a state that accepts only motion commands.  It is activated when we invoke an operator command...

I like the idea of Vim being a [finite-state machine](http://en.wikipedia.org/wiki/Finite-state_machine).  Operator-Pending mode is a "here be dragons" moment for many Vim users, particularly when opening `:help omap-info` for the first time.  However, thinking about it like this makes it easier to visualise what Vim is doing.

The most interesting thing about this topic is *motions aren't strictly customisable*.  To explain why, consider the distinction between text objects and motions.  Try to guess which of these commands uses a text object or a motion:

* `daw`: Delete a word
* `dw`: Delete word
* `dd`: Delete one line

The first uses a text object: `aw` (a word).  The second uses a motion, because it's the `d{motion}` command.  The last deletes the line into a register, the full form is `["x]dd`.

When trying to understand motions, always come back to this: *motions move the cursor*.

I wanted to know how these command were implemented, so I looked at Vim's source and found the following:

* `daw`: Implemented in `src/normal.c`, under `nv_object` (the `case` statement)
* `dw`: Line 1933 of `src/ops.c` in my commit, look for `else... (void)del_bytes`
* `dd`: See `src/ops.c` ("Imitate the strange Vi behaviour...")

Digging further into `normal.c`:

{% highlight c %}
/*
 * Handle word motion commands "e", "E", "w" and "W".
 * cap->arg is TRUE for "E" and "W".
 */
    static void
nv_wordcmd(cap)
    cmdarg_T	*cap;
{
{% endhighlight %}

This is invoked when `w` is pressed by the `nv_cmd` command table where every Normal and Visual command is present.

This is why I said "motions aren't strictly customisable" -- they're hardwired into the source.  You can't easily hook into _exactly the same_ underlying behaviour.  However, Vim is pathologically customisable, so when hardened Vim users talk about "custom motions" what they're referring to is adding mappings to Operator-Pending mode.

###Operator-Pending Mode

I wrote about [Operator-Pending mode](http://usevim.com/2012/12/05/omap/) a few weeks ago, so take a look at that post for a light introduction.  By using the `:omap` command, you can add custom key sequences that will be invoked _between when an operator is invoked_ and when the _motion would be applied_.  Going back to basic Vim grammar, operator commands look like this:

{% highlight text %}
[operator]{motion}
{% endhighlight %}

Both the operator and the motion can accept an optional count command: `2d3w` deletes six words (`:help operator`).

This is one way of adding custom-motion-like behaviour.  Defining a map with `:omap` will be invoked after an operator like `d` or `c` and will work as expected.

The general form of `:omap` is `:omap shortcut commands` -- note that the shortcut can include `<Leader>`.

###Real-World Custom Motions

To create redistributable custom motions that other people can make use of takes a lot more work than just using `:omap`.  For example, [camelcasemotion](http://www.vim.org/scripts/script.php?script_id=1905) by Ingo Karkat uses several techniques to support both motions and text-objects:

* The plugin's functionality is implemented using functions
* The functions take into account modes and allow for count arguments
* The `search()` function is called to move the cursor
* Functions provided by the plugin are then mapped with `:omap`

The reason `search()` is so useful for creating custom motions is it can search backwards, forwards, move to the end of the match, and won't change the search history or highlights.

###Summary

Writing solid custom motions involves a wide gamut of Vim skills:

* A deep understanding of operators, motions, and text objects
* Using `:omap` to map shortcuts
* A mastery of `search()` and related functions
* Incredible regular expression skills
* Vim scripting, including writing functions

Although not everyone will be faced with the need to write custom motions, a casual review of the subject is useful to most Vim users.

