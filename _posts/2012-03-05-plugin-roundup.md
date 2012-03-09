---
layout: post
title: "Plugin Roundup: ghcmod.vim, vim-instant-markdown, vim-smartpunc"
author: "Alex Young"
tags:   
- plugins
- text
- haskell
- markdown
---

<div class="intro">
Send in your Vim plugins for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###ghcmod.vim

![ghcmod](/images/posts/ghcmod.png)

[ghcmod.vim](https://github.com/eagletmt/ghcmod-vim) (License: _BSD3_) by eagletmt aids Haskell development with the following features:

* Display of sub-expressions (`ghc-mod type`)
* Display of error/warning messages and their locations (`ghc-mod check`, `ghc-mod lint`)
* Shows expansion of splices (`ghc-mod expand`)

The author has written up several ways to customise the plugin in the [ghcmod wiki](https://github.com/eagletmt/ghcmod-vim/wiki/Customize).

### vim-instant-markdown

[vim-instant-markdown](https://github.com/suan/vim-instant-markdown), by Suan-Aik Yeo, can display real-time rendered Markdown in a browser while it's being edited in Vim.  The plugin itself is relatively lightweight, but it requires a working Ruby _and_ Node installation.  The project's README has installation instructions that assume these dependencies are met.

The author has tested it in Mac OS and Linux, but is looking for help with the Linux version:

> One annoyance in Linux is that there's no way to reliably open a browser page in the background, so you'll likely have to manually refocus your vim session everytime you open a Markdown file. If you have ideas on how to address this I'd love to know!

### vim-smartpunc

[vim-smartpunc](https://github.com/kana/vim-smartinput) (License: _MIT/X_) by Kana Natsuno automatically pairs punctuation.  Brackets, curly braces, quotes, and various language constructs are closed automatically.  Also, pressing a backspace will remove the entire completion.

Vim 7.3+ is required, and the plugin comes with relatively detailed documentation: [vim-smartpunc HTML documentation](http://vim-doc.heroku.com/view?https://raw.github.com/kana/vim-smartpunc/master/doc/smartpunc.txt).

_Note:_ This plugin was renamed to _vim-smartinput_.  Thanks to Daniel Hofstetter for noticing!
