---
layout: post
title: "Editing Macros"
author: "Alex Young"
tags: 
- macros
- repeats
---

Sometimes people ask me "what's the point of macros in Vim?"  I think of macros as repeatable complex commands: they're a lot like functions.  I find them indispensable due to the fact you can easily manipulate them as strings, pulling them in and out of registers at will.

Macros are really just registers that you can replay at a different point in the file.  Knowing that, you can start to manipulate macros on another level.

For example, imagine you've got a macro recorded in the `q` register.  Type `"qp` to paste it to the current buffer.  Now edit the text, and yank it back into a register.  You could do this with a visual selection, or something like `^"qy$` to yank the entire line into `q`.

With the ability to paste and edit macros, you can not only modify them but also visualise them to understand how they're being applied.

