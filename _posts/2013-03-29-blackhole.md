---
layout: post
title: "The Black Hole Register"
author: "Alex Young"
tags: 
- motions
- operators
- registers
- yank
---

<a href="http://www.flickr.com/photos/nasablueshift/5446350648/" title="Giant Ring of Black Holes by NASAblueshift, on Flickr"><img src="http://farm6.staticflickr.com/5135/5446350648_6ac8e61f1a.jpg" width="530" height="440" alt="Giant Ring of Black Holes"></a>

Once you've got used to using the `y` command to yank text, it's easy to use the unnamed register when perhaps a _named_ register would be more useful.

For example, typing `yw` will yank the word under the cursor into the unnamed register.  Subsequent yanks or deletes will change this register, so it's easy to lose the text that was in there.

There are ways around this.  One approach is to use the _black hole_ register, `"_`.  Typing `"_dw` will delete the word under the cursor without changing the unnamed register.  Help can be found for this command by typing `:help "_`.

The black hole register can be used in other ways too -- a selection in Visual mode can be deleted by typing `"_d`, and a paragraph can be deleted with `"_d}` -- it works just the same way as the `d` operator normally does with motions.

###Copying a Register

If you've realised the unnamed register contains something you might need later, it's actually possible to copy it.  Typing `:let @a=@""` will copy the unnamed register to `a`, which could then be _put_ with `"ap`.  Typing `:reg` will show the registers, so you can get an idea of what you did before you try to change any text.

The next time you've yanked some text that you'd rather keep, remember the black hole register and the fact registers can be copied with `let`.

