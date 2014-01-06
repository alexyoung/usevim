---
layout: post
title: "Script Roundup: calendar.vim, Vizardry"
author: "Alex Young"
tags: 
- plugins
---

###calendar.vim

calendar.vim (GitHub: [itchyny / calendar.vim](https://github.com/itchyny/calendar.vim), License: _MIT_) by itchyny is a calendar for Vim that supports various views (day, week, month, year), and can even get events from Google Calendar and Google Task.  The only dependency is curl (or wget) for accessing the web APIs.

The calendars can be displayed in split views by using the `-split` option -- for example: `:Calendar -view=year -split=vertical -width=27`.  It even has Vim-friendly keys.

###Vizardry

[Vizardry](http://www.vim.org/scripts/script.php?script_id=4818) (GitHub: [ardagnir / vizardry](https://github.com/ardagnir/vizardry), License: _AGPL v3_) is potentially the most user friendly Vim plugin manager.  Why?  Well, it supports GitHub for searching and installing plugins without even having to resort to using a browser.  Just type `:Invoke` with a keyword.

> Remember back in the dark ages of 2013? When you had to search for vim plugins like a wild animal, using your browser?

> In 2014, you can just type `:Invoke <keyword>` and vizardry will automatically search github for the plugin you want and install it for you.

To remove plugins you'll need to banish them.  Type `:Banish keyword` to do that.  There's also `:Scry` for viewing a list of installed plugins.

