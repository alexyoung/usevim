---
layout: post
title: "Vim 101: Search as a Motion"
author: "Alex Young"
tags: 
- vim101
- motions
- operators
- search
---

The search command, `/`, is actually a motion, which means it can be used with operators.  Any operator can be combined with search just by typing the desired search and pressing return.

For example, when in Normal mode, `d/,<CR>` will delete up to a comma.  Although `dt,` would be more efficient, there are times when a search is more specific and useful than the other motions.

Much like last week's [HTML editing with text objects](http://usevim.com/2013/03/01/vim-101-text-objects-for-html), understanding how this works in terms of Vim's grammar gives you a greater understanding that can improve your productivity.  The lesson is simply that `/` can work as a motion, because motions are just instructions that move the cursor in some way.

