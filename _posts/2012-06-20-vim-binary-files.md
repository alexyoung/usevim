---
layout: post
title: "Editing Binary Files with Vim"
author: "Alex Young"
tags:
- binary
- xxd
- shell
---

When I saw Tim Pope's excellent [vim-afterimage](https://github.com/tpope/vim-afterimage) script, it reminded me that Vim is completely capable as a binary file editor.  Opening a file with `-b` or running `:set binary` makes Vim more suitable for editing binary files:

* `textwidth` and `wrapmargin` are set to 0
* `modeline` and `expandtab` are turned off
* The `fileformat` and `fileformats` options won't be used
* Files will be written using single line endings

###Navigation

When navigating binary files, `[count]go` is useful because it moves the cursor to a byte offset.  To get the current location, use `g CTRL-G` which displays the current column, line, word, character and byte.

###Visualisation

![xxd](/images/posts/vim-xxd.png)

[Another good tip](http://vim.wikia.com/wiki/Improved_hex_editing) is to convert files to the hexdump format using `:%!xxd`.  It's actually possible to convert a binary to hexdump, edit it, then convert it back to binary using xxd's `-r` (revert) flag.

###Binary Diffs

![vimdiff xxd](/images/posts/vimdiff-xxd.png)

By using anonymous pipes (supported by bash and zsh), it's fairly easy to get Vim to diff files by redirecting the output of `xxd`:

{% highlight text %}
vimdiff <(xxd bin_file_1) <(xxd bin_file_2)
{% endhighlight %}
