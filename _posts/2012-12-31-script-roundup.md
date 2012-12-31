---
layout: post
title: "Plugins of The Year"
author: "Alex Young"
tags: 
- plugins
---

Looking back over the past 40 or so [script roundup posts](http://usevim.com/tags.html#plugins), it's impressive just how much activity there is in the Vim plugins community.  It really takes me no effort at all to find new and interesting scripts to write about.

Here are a few of my favourites that I covered in 2012.

###EasyMotion

[EasyMotion](http://www.vim.org/scripts/script.php?script_id=3526) (GitHub: [Lokaltog / vim-easymotion](https://github.com/Lokaltog/vim-easymotion)) by Kim Silkebaekken (who also wrote [Powerline](https://github.com/Lokaltog/vim-powerline)) helps make Vim's motions easier to visualise by highlighting the possible choices for motions like `f`:

It takes the `<number>` out of `<number>w` or `<number>f{char}` by highlighting all possible choices and allowing you to press one key to jump directly to the target.

![EasyMotion](/images/posts/easymotion.png)

The command to do this is `<Leader><Leader>f`.  Also, `<Leader><Leader>w ` triggers the word motion.  This is all fully documented and easily accessible from the GitHub repository.

###Clam

[Clam](http://www.vim.org/scripts/script.php?script_id=4000) (GitHub: [sjl / clam.vim](https://github.com/sjl/clam.vim), License: _MIT/X11_) by Steve Losh makes running shell commands on buffers extremely convenient.  He's made a [screencast of Clam](http://www.screenr.com/2Z18) so you can see how to use it, but basically buffers can be piped through shell commands and the contents replaced.

It doesn't _sound_ revolutionary, but the screencast sold me on it.

###Forms

![Forms](/images/posts/forms.png)

[Forms](http://www.vim.org/scripts/script.php?script_id=4150) (GitHub: [megaannum / forms](https://github.com/megaannum/forms)) by Richard Emberson is a user interface library that works in both text mode and GVim.  Once Forms and [self.vim](http://www.vim.org/scripts/script.php?script_id=3072) have been loaded, then all kinds of user interface elements can be created and managed.

Forms support labels, buttons, menus, and various layout styles.  They can be used with the mouse or keyboard.  The author has included lots of examples in the `autoload/forms/example` directory.  This actually seems like a convenient way of managing plugins with complex options, so it'll be interesting to see if it catches on.

###neocomplcache

[neocomplcache](http://www.vim.org/scripts/script.php?script_id=2620) (GitHub: [Shougo / neocomplcache](https://github.com/Shougo/neocomplcache), License: _MIT_) by Shougo Matsushita is a keyword completion plugin.  It supports configurable completion for quick matching, snippets, filenames, and registers.  It also enhances omni completion, and works with [VimShell](https://github.com/Shougo/vimshell).

The author's [readme on GitHub](https://github.com/Shougo/neocomplcache) has configuration examples and screenshots of each feature.

