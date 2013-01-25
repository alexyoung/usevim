---
layout: post
title: "Vim 101: Preview Window"
author: "Alex Young"
tags: 
- vim101
- tags
- ctags
- windows
- preview-window
---

Continuing on from last week's [Vim 101 on tags](http://usevim.com/2013/01/18/tags/), another useful element to a tag-based workflow is the preview window (`:help preview-window`).  There's only ever one preview window per tab page, and it can be used to display tag definitions without interruption.

Typing `:ptag tagname` will open the preview window for "tagname".  If you follow through last week's tutorial using Vim's source, you could type `:ptag curbuf` to see the definition of `EXTERN buf_T` in `src/globals.h`.  When the window opens, it won't steal focus, which makes it essential for quickly looking up function signatures without wrecking your concentration when you need to navigate back.

If you type `:ptag` again, Vim will display "tag 1 of 2 or more" (this will be automatically displayed when there's no other message).  Typing `:ptnext` or `:ptprevious` allows you to navigate between the matching tags.

![ptag demonstration](/images/posts/vim101-ptag.gif)

Even better, `CTRL-W }` will open `:ptag` with the tag under the cursor.  Pressing `CTRL-W z` will close the preview window once you're done.

<table>
<tbody><tr>
<th>Command</th>
<th>Short Alias</th>
<th>Description</th>
</tr>
<tr>
<td><code>:ptag [tag]</code></td>
<td><code>:pta</code></td>
<td>Open a tag in the preview window</td>
</tr>
<tr>
<td><code>CTRL-W }</code></td>
<td></td>
<td>Open a tag under the cursor</td>
</tr>
<tr>
<td><code>:ptnext</code></td>
<td><code>:ptn</code></td>
<td>Go to the next matching tag</td>
</tr>
<tr>
<td><code>:ptprevious</code></td>
<td><code>:ptp</code></td>
<td>Go to the previous matching tag</td>
</tr>
<tr>
<td><code>:pclose</code></td>
<td><code>:pc</code></td>
<td>Close any open preview windows</td>
</tr>
<tr>
<td><code>CTRL-W z</code></td>
<td></td>
<td>Close any open preview windows</td>
</tr>
</tbody></table>

This table show an overview of the basic preview window commands.

