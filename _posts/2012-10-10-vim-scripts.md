---
layout: post
title: "How Do I Write Vim Scripts?"
author: "Alex Young"
tags: 
- plugins
- scripts
- scripting
---

It's actually quite difficult to use Vim _without_ writing a script.  We install plugins all the time, and the superficial complexity of the average plugin's source code may make writing Vim scripts seem impenetrable.  However, believe it or not you've probably already written a Vim script in the form of your vimrc file.

Each line in a vimrc file is executed as an Ex command line.  Everything from your vimrc to plugins is derived from these humble Ex origins.  However, since Vim 7, several more advanced language constructs have been added -- including datatypes such as Lists and Dictionaries and even object-oriented features.

Vim's scripting language is generally referred to as "Vim script", but "VimL" is a popular synonym.

###Documentation and Resources

The core Vim script documentation can be found in `:help usr_41`.  This help file introduces Vim script, covering the major language features and explaining how to write the two types of plugins (`:help write-plugin`).

Vim's documentation should be enough to get you started, but examples are always useful during development.  If you're looking for an easily browsable archive of Vim script source for example code, then leafing through [GitHub's VimL page](https://github.com/languages/VimL) is a little bit easier than downloading scripts from vim.org.

[Learning the vi Editor, VimL Script language](http://en.wikibooks.org/wiki/Learning_the_vi_Editor/Vim/VimL_Script_language) on Wikibooks has a no-nonsense introduction to Vim script that may appeal to programmers who just want to get a feel for the language.

[Learning the vi and Vim Editors, 7th Edition](http://shop.oreilly.com/product/9780596529833.do) has a chapter on Vim scripts -- it covers the major techniques used by plugin authors, but it's fairly short.

[A Byte of Vim](http://www.swaroopch.org/notes/Vim) by Swaroop C H, released under the CC BY-SA license, has a pretty solid section on writing Vim scripts.  Download the PDF and search for "Vim en:Scripting"..
