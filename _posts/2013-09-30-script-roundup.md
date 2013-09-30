---
layout: post
title: "Script Roundup: Projections.vim, Unstack.vim"
author: "Alex Young"
tags: 
- plugins
- scripts
---

###Projections.vim

If you like [Rails.vim](https://github.com/tpope/vim-rails) then you might be interested in Projections.vim (GitHub: [malkomalko / projections.vim](https://github.com/malkomalko/projections.vim), License: _Vim_) by Robert Malko.  It brings the workflow ideas from Rails.vim to other languages by using a JSON file to map between a target language and the MVC style of development used by Rails.

It's mostly useful as a project navigation tool: if you want to open a model file then `:Emodels model` will work.  The prefix, `E`, can be changed to open in a split (`S`) or tab (`T`).

Files can be created based on templates.  The templates are just strings in the configuration file, so a model for a JavaScript project might be `module.exports = function() {\n};\n`.

###Unstack.vim

[Unstack.vim](http://www.vim.org/scripts/script.php?script_id=4677) (GitHub: [mattboehm / vim-unstack](https://github.com/mattboehm/vim-unstack), License: _Vim_) by Matthew Boehm is a script for parsing stack traces and opening each of the referenced files in split windows.

It currently supports Python, Ruby, C#, Perl, and Go.  This seems like the ideal library to use when doing test-driven development, because it should cut down the amount of time you spend hunting through stack traces for the sources of crashes.
