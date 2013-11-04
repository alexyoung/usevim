---
layout: post
title: "Script Roundup: Cosco.vim, vim-airline-tomato"
author: "Alex Young"
tags: 
- plugins
- scripts
---

###Cosco.vim

[Cosco.vim](http://www.vim.org/scripts/script.php?script_id=4758) (GitHub: [lfilho / cosco.vim](https://github.com/lfilho/cosco.vim), License: _MIT_) by Luiz Gonzaga dos Santos Filho automatically inserts semicolons in Vim.  It appends, substitutes, or removes commas or a semicolons based on context.

It's designed with JavaScript in mind, but the author notes it should work with any language.  It adds a function called `cosco#commaOrSemiColon`, so it can be set up to trigger when `,` or `;` is pressed.

Interestingly, this plugin includes unit tests written with [vim-unittest](https://github.com/h1mesuke/vim-unittest).

###vim-airline-tomato

[vim-airline-tomato](https://github.com/Zuckonit/vim-airline-tomato) by "Zuckonit" is an extension for [Airline](https://github.com/bling/vim-airline) that adds timers for those that work according to the [Pomodoro Technique](http://pomodorotechnique.com/).

The time interval can be changed with `let g:tomato#interval`, and the rest time can be set with `let g:tomato#rest_time = 20 * 60`.  It also allows the notification text to be changed for reminders and rests.

