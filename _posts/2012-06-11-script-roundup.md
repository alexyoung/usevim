---
layout: post
title: "Script Roundup: EasyMotion"
author: "Alex Young"
tags: 
- plugins
- scripts
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###EasyMotion

[EasyMotion](http://www.vim.org/scripts/script.php?script_id=3526) (GitHub: [Lokaltog / vim-easymotion](https://github.com/Lokaltog/vim-easymotion)) by Kim Silkebaekken (who also wrote [Powerline](https://github.com/Lokaltog/vim-powerline)) helps make Vim's motions easier to visualise by highlighting the possible choices for motions like `f`:

It takes the `<number>` out of `<number>w` or `<number>f{char}` by highlighting all possible choices and allowing you to press one key to jump directly to the target.

![EasyMotion](/images/posts/easymotion.png)

The command to do this is `<Leader><Leader>f`.  Also, `<Leader><Leader>w ` triggers the word motion.  This is all fully documented and easily accessible from the GitHub repository.
