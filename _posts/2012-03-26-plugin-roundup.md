---
layout: post
title: "Plugin Roundup: vim-pomodoro, diff-toggle, vim-addon-commenting"
author: "Alex Young"
tags: 
- plugins
- gtd
- vimdiff
---

### vim-pomodoro

[vim-pomodoro](https://github.com/mnick/vim-pomodoro) (vim.org: [vim-pomodoro](http://www.vim.org/scripts/script.php?script_id=3979), License: _MIT_) by Maximilian Nickel is a tool for working using the [Pomodoro time management technique](http://www.pomodorotechnique.com/).  `:PomodoroStart [pomodoro_name]` starts a new pomodoro, then after the timer has ended a dialog will prompt you to take a break.  It'll also automatically ask if a new pomodoro should be started.

![vim-pomodoro screenshot](/images/posts/vim-pomodoro.png)

It can be integrated with system-level notifications, and has settings for the time of a pomodoro task and more.

### diff-toggle

[vim-diff-toggle](https://github.com/twe4ked/vim-diff-toggle) (vim.org: [diff-toggle](http://www.vim.org/scripts/script.php?script_id=3973), License: _Vim_) by Odin Dutton adds some shortcuts to diff editing.

Pressing `<Space>` will toggle the first character of the current line between `+` and space characters.  The author intends this to aid adding files using `git add --edit`.

### vim-addon-commenting

[vim-addon-commenting](https://github.com/MarcWeber/vim-addon-commenting) (vim.org: [vim-addon-commenting](http://www.vim.org/scripts/script.php?script_id=3977), License: _Vim_) by Marc Weber is a fork of Tim Pope's [vim-commentary](https://github.com/tpope/vim-commentary) that can toggle comments on blocks of code based on indentation level.

Pressing `\\` will comment out a block based on the indentation level of each line of code.  It takes a count argument, and can comment using motions.

Languages can be added using the following:

{% highlight viml %}
let g:vim_addon_commenting = {'force_filetype_comments': {'php': ['#',''], 'c' : ['/*','*/']}}
{% endhighlight %}

The indentation behaviour is what differentiates it from Tim Pope's original plugin, it's worth trying both if you're looking for something in this area.
