---
layout: post
title: "Color Coded: A Plugin for Semantic Highlighting"
author: "Alex Young"
tags: 
- highlighting
- plugins
---

The author of [color_coded](https://github.com/jeaye/color_coded) has really gone the extra mile to implement more semantic highlighting for the C family of languages.  To provide real-time tagless highlighting, it actually uses a self-contained clang 3.6.0 (due to bugs in clang).  It works with C, C++, and Objective-C.

It highlights as you type, which means it has to know how your program is built.  You can add a `.color_coded` file to your project to give it compiler options.

This plugin adds highlighting groups, and these new groups are based on libclang's internals.  The groups can be found in [after/syntax/color_coded.vim](https://github.com/jeaye/color_coded/blob/master/after/syntax/color_coded.vim).

Using color_coded requires more work than the average plugin because it has a compiled component, and you'll need to manually compile it:

{% highlight text %}
cd ~/.vim/bundle/color_coded
./configure && make
{% endhighlight %}

That means whenever you update it you should recompile it.  Also, if you're using Mac OS X the author suggests using a recent version of MacVim, installed with Lua support.  There are full instructions in the readme.

