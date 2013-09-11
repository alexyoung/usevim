---
layout: post
title: "Vim for Erlang Development"
author: "Alex Young"
tags: 
- erlang
- tutorials
---

[How to use Vim for Erlang Development](http://blog.erlware.org/2013/09/09/how-to-use-vim-for-erlang-development/) by Martin J. Logan, who wrote Erlang and OTP in Action, introduces a familiar cocktail of Vim scripts tailored for Erlang development.

If you read on towards the end, however, there are some good tips based on the author's workflow.  I liked this tip about using marks to indent awkward sections:

> vimerl will auto-indent for you as you type. But if you come across a line that you want to indent try typing `==`. Let's say you want to indent a block of code. Simple, mark the line that starts the block with `ma` then go to the end of the block and tell vimerl to indent to the mark as such: `='a`. Now if your whole file is a mess then try `gg` to go to the beginning of your file and then `=G` to indent all the way to the end. You can do this all in one step as in `gg=G`.

