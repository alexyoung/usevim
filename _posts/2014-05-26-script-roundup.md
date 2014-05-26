---
layout: post
title: "Script Roundup: vital.vim"
author: "Alex Young"
tags: 
- scripts
- plugins
- scripting
---

###vital.vim

vital.vim (GitHub: [vim-jp / vital.vim](https://github.com/vim-jp/vital.vim), License: _NYSL_) from the Japanese Vim User Group is a collection of useful Vim functions.  It includes libraries for assertions, various data types, SQLite, options parsing, JSON, XML, and more.

Modules can be installed with `:Vitalize`, and functions can be imported with `vital#of`.

The modules are used internally to construct other modules.  For example, [JSON.vim](https://github.com/vim-jp/vital.vim/blob/master/autoload/vital/__latest__/Web/JSON.vim) builds on [Data.String](https://github.com/vim-jp/vital.vim/blob/master/autoload/vital/__latest__/Data/String.vim).

From what I can tell, most of the modules are written in Vim script rather than using another scripting language like Python.  The [XML.vim](https://github.com/vim-jp/vital.vim/blob/master/autoload/vital/__latest__/Web/XML.vim) module has Vim script functions for parsing XML trees and navigating the child nodes.
