---
layout: post
title: "Vim 101: Registers"
author: "Alex Young"
tags:
- vim101
- editing
- registers
---

It's possible to use Vim without learning about registers, but to be really productive it's worth spending some time to understand how actions and commands use them.

There are several groups of registers.  Typing `help :registers` will display these.  To see all of the current registers that are in use, type `:reg`:

![Vim 101: Register list](/images/posts/vim101-registers-1.png)

The `*` register is my system clipboard -- here it contains the text "Vim 101: Registers".  The `.` register stores what I just typed -- this is a read-only register.  Pressing escape to enter normal mode then typing `yy` will "yank" this line.  Typing `:reg` again will now show "Hello" in register `0`.

###Unnamed Register

Whenever text is deleted or yanked, the unnamed register will be filled.  If I type "Zaphod" then move the cursor over the letter "d" and press `x` to delete it, then the unnamed register will now contain the "d".  Typing `:reg` will confirm this -- the `""` register will show the letter "d".

The unnamed register is used as the default argument to many commands, which makes them quick to type.  If I want to move a line I'll often find myself typing `dd` to delete the line, then `p` to put it somewhere else.  These commands can be combined with a named register, which is where registers start to really shine.

###Numbered Registers

The `0` register is useful, because it'll always contain the value of the last yank command.  Other commands, such as `d`, cause the unnamed register to be overwritten.  The distinction between `0` and the unnamed register is useful if you often yank text without a named register as a quick way of copy and pasting.

Consider the following sequence of key presses:

* `yy` -- Yank a line
* Move to a different line
* `p` -- Put the line

This is a convenient way to copy and paste a line somewhere else.  Most people learn this quite early on and use it regularly.  However, confusion quickly arises when a line is deleted before putting the line:

* `yy` -- Yank a line
* Move to a different line
* `dd` -- Delete the line
* `p` -- Put the deleted line

In the last step, most people would expect the original yanked line to appear, but the deleted line does instead.  Armed with our knowledge of the `0` register we could have done this:

* `yy` -- Yank a line
* Move to a different line
* `dd` -- Delete the line
* `0p` -- Put the deleted line from register `0`

###Named Registers

When I'm working I sometimes find myself rearranging code, but I don't want to lose it and may want to paste it multiple times.  This is the perfect time to use a named register to store chunks of code.

Typing `"ayy` will yank the current line into register `a`.  Typing `"ap` will put it somewhere else.

Compare that to the previous example where `yy` was used to yank the current line into the unnamed register.  Simply prepending `"a` specifies that register `a` should store the result of `yy`.

These commands all work with visual mode as well.  In normal mode, press `v` to enter visual mode, and then make a selection.  Press `"ay` to yank the selection.

###Viminfo

What's even more amazing about registers is they're stored in `~/.viminfo`.  That means when Vim has been quit and then loaded again, all of the populated registers will still be available.

###Conclusion

This brief tutorial should give you enough ammunition to get started with Vim's registers.

There are actually more registers than the ones I've mentioned here, and various useful quirks to their behaviour.  Read `:help registers` to learn more.
