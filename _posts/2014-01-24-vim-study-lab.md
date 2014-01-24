---
layout: post
title: "Vim Study Lab"
author: "Alex Young"
tags: 
- tutorials
---

In [Mastering Vim in Vim](http://nerds.weddingpartyapp.com/tech/2013/11/17/mastering-vim-in-vim/), a vimtutor-inspired method of learning Vim is discussed:

> The file, when sourced, turns the vim buffer into the vim study lab. The file consists of two parts. The first part is a hunk of vimscript that is executed when you source the file. It creates keyboard commands that make it easy to move the cards in the queues.

> The second part is the queues themselves, Study, and Known. (The idea is that once you know something so well that you don't need to study it anymore, you can move it into the Known queue, just to keep it around for posterity.) The queues simply consist of a command and some information about it.

You can download [master.vim](https://gist.github.com/gmccreight/7519289/raw/master.vim), then open it in Vim, and source it by typing `:so %`.  It works like a combination of a Vim script and a tutorial.  The tutorial is split into lessons known as cards, and you'll be shown lessons to try from three queues.

The script defines commands that can be used to move lessons into these queues.  There are two main queues, _Known_ and _Study_, and another for things you want to study soon.  If you feel like you've mastered one of the lessons, you can use `,k` to move it to the known queue, otherwise `,c` can be used to move it to a queue to practice it again soon.  If you feel more confident about a lesson, use `,,` to place it in the study queue.

I like this approach to practicing Vim, and I think it would help beginners if they were given a little bit of assistance in setting it up.
