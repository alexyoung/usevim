---
layout: post
title: "Book Review: Practical Vim"
author: "Alex Young"
tags: 
- books
- reviews
---

<img src="/images/posts/dnvim.png" style="float: right; margin: 0 0 10px 10px; border: 1px solid #ddd; padding: 4px" alt="Practical Vim cover" />

There aren't a lot of great books about Vim.  <a href="http://www.amazon.co.uk/gp/product/059652983X/ref=as_li_ss_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=059652983X&linkCode=as2&tag=da0b-21">Learning the vi and Vim Editors</a><img src="http://www.assoc-amazon.co.uk/e/ir?t=da0b-21&l=as2&o=2&a=059652983X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> published by O'Reilly is the most popular book, and while it's fairly detailed I've always felt it loses focus by including too much coverage of vi clones.  The content is dry, feeling more like a standard manual than an affable educational guide.

In contrast, [Practical Vim: Edit Text at the Speed of Thought](http://pragprog.com/book/dnvim/practical-vim) (<a href="http://www.amazon.co.uk/gp/product/1934356980/ref=as_li_ss_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=1934356980&linkCode=as2&tag=da0b-21">Amazon</a><img src="http://www.assoc-amazon.co.uk/e/ir?t=da0b-21&l=as2&o=2&a=1934356980" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />) by Drew Neil draws on the personality and experience of the author -- and this is a good thing.  There was a lot of excitement around this book, as the author is behind the popular [Vimcasts](http://vimcasts.org/) site.  Drew has done a lot to make Vim accessible to more popular, and he's distilled all of this in _Practical Vim_.

Those already confident with Vim may dismiss _Practical Vim_ when initially flicking through it.  The structure is a little bit like the cookbooks published by O'Reilly.  Rather than recipes, it uses tips.  On the surface, using a "tip" as the primary structural element is tricky because Vim users are all-to-familiar with tips -- how many of us search for tips on sites like vimwiki and Stack Overflow?  And, although I find cookbooks a lot of fun, particularly for moving beyond the basics when learning a programming language, they don't often age particularly well.  _Practical Vim_ will retain its usefulness for far longer than the average cookbook, because the tips are merely a conceit to present potentially difficult concepts and techniques in an accessible and practical manner.

Drew makes his case for the structure of the book in the front matter, and he's definitely managed to pull off a great approach to learning Vim.  The tips can be read in any order, although they progress from simple to advanced within each chapter.  For example, in _11. Macros_, the first tip is _Record and Execute a Macro_, then the last tip in this chapter is _Edit the Contents of a Macro_.  A tip is used to present the fundamental concept, then this concept is explored and brought to its logical conclusion as the chapter progresses.

When working with Vim there are often multiple ways to solve a particular editing problem.  Drew presents a central argument that the arguably best way to perform an editing operation is to use a repeatable sequence of operations.  When deleting two words, is it better to use `d2w` or `dw.`?  Drew would argue that `dw.` is better, because pressing `.` again will cause Vim to repeat `dw`, and repeating commands can be easier than counting (or avoiding edge cases).

This "repeatability argument" is one of Drew's key techniques, and he reinforces it throughout the book with examples that apply to other aspects of working with Vim.

###Conclusion

I read a lot of computer books, and I can usually tell when they're written by bad writers with good editors.  Publishing companies seem content to hire experts with poor English skills purely because they value the expert's knowledge and opinions more than their ability to write.

What you have here is a rare gem: a computer book written by somebody who knows how to write, who is also passionate and well-versed in the subject matter.  Drew uses poignant similes to illustrate difficult concepts, while maintaining the right tonal balance between formality and approachability.

This is a book that teaches Vim to existing Vim users.  If you have a working knowledge of Vim but are looking to really master it, then _Practical Vim_ is currently the best book available.
