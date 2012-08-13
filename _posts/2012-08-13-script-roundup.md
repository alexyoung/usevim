---
layout: post
title: "Script Roundup: pb.vim, SyntaxRange"
author: "Alex Young"
tags: 
- plugins
- scripts
- filetype
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###pb.vim

[pb.vim](http://www.vim.org/scripts/script.php?script_id=4157) (GitHub: [troydm / pb.vim](https://github.com/troydm/pb.vim), License: _Vim_) by Dmitry Geurkov is a wrapper around the standard Mac OS X `pbcopy` and `pbpaste` commands.  It can also work with a remote host by setting `let g:pb_command_prefix = 'ssh remotehost '`.

Also related is [How to Copy and Paste with Tmux on Mac OS X](http://robots.thoughtbot.com/post/19398560514/how-to-copy-and-paste-with-tmux-on-mac-os-x), which demonstrates how to use `reattach-to-user-namespace` to get Vim and tmux working together nicely.

###SyntaxRange

[SyntaxRange](http://www.vim.org/scripts/script.php?script_id=4168) by Ingo Karkat allows ranges within a buffer to use a different syntax, or ignore the current syntax based on the buffer's `filetype`.  This is ideal for working with files that mix different types of syntax, like Markdown blog posts with code samples.

Typing `:[range]SyntaxIgnore` will ignore the current `filetype` for the range, and `:[range]SyntaxInclude {filetype}` will change it to another `filetype`.
