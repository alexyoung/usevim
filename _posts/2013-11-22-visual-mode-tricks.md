---
layout: post
title: "Visual Mode Tricks"
author: Alex Young
tags:
- tutorials
- tips
- visual
---

My most-used Visual mode command is probably `gv`.  When in Normal mode, `gv` starts Visual mode but selects the previous area.  So if you had a selection you wanted to work on and lost it, perhaps by pressing `<Esc>`, then `gv` will restore the selection.

Sometimes you just want to skip back to the location of the previous section.  The `'<` mark allows you to do that: while in Normal mode, type `'<` and the cursor will skip back.  You can even use this mark to modify selections -- move the cursor to the desired location, then go into Visual mode with `v` and press `'<` to select up to the first line or character of the previously selected area.

If I'm being lazy I'll go into Visual Line mode with `V`, then select entire chunks of text by triggering a search for part of a line.  This can be efficient for moving or deleting methods or functions.

The fact you can combine motions and operators with Visual mode selections means it can be quite expressive for making high impact single edits.
