---
layout: post
title: "Vim 101: Quick Movement"
author: Alex Young
tags:   
- vim101
- movement
---

This is the first _Vim 101_ post, in which we take a look at fundamental Vim techniques.  If you're a beginner or would like to brush up on fundamental skills, then this is the series for you.

When I'm trying to teach people Vim, I find they're often confused about how to efficiently move around within files.  Using GUI editors with mousewheels or trackpad gestures can feel fast, and GUI versions of Vim support this.

However, cursor movement in Vim is typically controlled with the keyboard.  Quickly moving around can feel awkward at first, but there are many ways to move the cursor and screen that become second nature before long.

### Screen Positioning

In command mode, I often find myself scrolling the screen by half increments using `ctrl u` and `ctrl d`.  The equivalent full screen commands are `ctrl f` and `ctrl b`.  Page up and page down may also work depending on your configuration.

Pressing `z` and then return will move the current line to the top of the screen.  A number will move that line number to the top of the screen, so pressing `50z` and then return will make the top of the screen start at line 50.  Conversely, `z.` will move the current line to the centre of the screen, and `z-` will move to the bottom.

To move within a screen without scrolling it, `H` is useful because it'll move the cursor to the top line.  `M` shifts it to the middle, and then `L` moves it to the last line.

All of these commands are easy to remember with some simple mnemonics:

* <strong>u</strong>p
* <strong>d</strong>own
* <strong>f</strong>orward
* <strong>b</strong>ack
* <strong>H</strong>ome
* <strong>M</strong>iddle
* <strong>L</strong>ast

### Word Movement

To move to the end of the next word, use `e`.  The opposite is `b`, which moves backwards a word.  The `w` command also moves forwards, but leaves the cursor at the start of the word.

Typing `E`, `W`, or `B` will perform a similar operation, but won't count symbols or punctuation as separate words.  When I'm programming I find myself using these versions.

### Text Block Movement

To move to the beginning of the next or previous sentence, `(` and `)` can be used.  Paragraphs can be navigated using `{` and `}`.  The definition of a paragraph is based on nroff macros (read `man nroff` if you want to figure out what that means).  This generally works quite well for navigating between large space-separated blocks in a programming language.

Another useful command is `%`, which moves to the next or previous related item.  Items include brackets, opening and closing c-style comments, and C preprocessor conditionals.  I find myself using `%` a lot depending on the programming language.

### Line Movement

Typing `44G` would move to the 44th line in the file.  `G` goes to the last line, and `gg` goes to the first line.

The useful thing about this command is typing `` moves back to the last position.  This also moves back to the last edit if an edit was made, or the position before a search was started.

### Character Movement

The `f` and `F` commands are extremely useful for navigating within a line.  Pressing `f{char}` will move the next occurrence of `{char}` within the current line.  Meanwhile, `F` will move backwards.  A numerical count argument can also be supplied, so `2f:` will go to the second occurrence of `:` after the current cursor position.

To move before the matching character, `t` and `T` can be used.  The last `ftFT` can be repeated by pressing `;`.

### Conclusion

It's hard to get used to these commands, but try making your own mnemonics to memorise them, or create your own cheat sheet.  Most people get comfortable with a subset that suit their workflow.

Remember that `:help command` will display detailed help for all of these commands -- for example, `:help f`.
