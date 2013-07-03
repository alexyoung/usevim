---
layout: post
title: "Holy Light"
author: "Alex Young"
tags: 
- background
- colours
- mac
---

[Holy Light](https://github.com/Dinduks/vim-holylight) by Samy Dindane is a plugin for Macs that changes the `background` variable based on the amount of ambient light recorded by Mac's light sensor.

The sensor is interrogated using a binary program, the source of which can be found here: [holylight-checker.mm](https://gist.github.com/Dinduks/5899561).  The program works by connecting to Apple's LMU I/O service (`AppleLMUController`), and then grabbing the current brightness value.  If the value is less than a threshold (1000000) then the background is switched to `dark`.

The `'background'` value can be set manually with `:set background=light` and `:set background=dark` (`:help 'background'`, abbreviation: `bg`).  Vim tries to pick colours that will look good on a dark/light background.
