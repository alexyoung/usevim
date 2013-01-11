---
layout: post
title: "Vim 101: The Core Skills"
author: "Alex Young"
tags: 
- vim101
---

If you're like me, when you learn something new you rush straight in without a strategy -- picking up things as you go, using newly learned skills for practical work as soon as possible.  The danger of this approach is you can miss out on some core skills, and develop bad habits.  So what are the essential skills required to learn Vim?

As an experiment, I decided to write a list of what I consider the core skills for working with Vim.  You can find the full list at the end of this article.  It doesn't contain _everything ever_ -- just the things I use on a daily basis.  It _will_ put you off from learning Vim!  In one sense it's long and intimidating, in other it's testament to just how ridiculously flexible and powerful Vim is.  However, you _can_ learn everything on this list.  Even being vaguely aware of the key topics will give you pointers on how to use Vim more productively.

Most books and tutorials focus on editing with Vim, but there's a lot more to daily work than editing.  To master Vim you need to optimise your entire workflow, and that means configuring the editor, navigating between files, and even visualising the structure of projects and their myriad components.

That gives us the following topics:

* Mastering Vim's modal nature (there's no escaping it!)
* Editing text with Vim
* Opening, saving, and closing files
* Managing multiple files

One thing people _always_ miss is learning how to use the help system properly.  Vim has tonnes of built-in help, and plugin authors are often pretty good about writing up help text:

* Using the help system properly
* Searching the help system
* Adding help from plugins

Fundamentally, editing text is concerned with learning the basics of Normal and Insert mode.  But there's a lot more to it than that:

* Navigation
* Text manipulation in Normal mode
* Text manipulation in Insert mode
* Searching and substitution
* Text selection in Visual mode

We can break this down even further:

* Navigation: word, line, file
* Entering modes effectively: `a`, `i`, `o`, etc.
* Text manipulation in Normal mode
* Text manipulation in Insert mode
* Searching and substitution, regular expression basics
* Text and block selection in Visual mode, text object selection, blockwise editing
* Completion

As programmers we're always reformatting text.  Learning efficient editing in Vim requires learning how to format files according to your chosen style:

* Switching between tabs and spaces
* Indentation settings
* Indenting selected text, entire files
* Auto-indentation and smart indentation

There's more to editing than just mastering Normal, Insert, and Visual modes, though.  There's also the wide range of repeating commands, and this includes the basic `.`, but also put/yank, registers, macros, undo, and undo branches.

* Yank, put, registers, and integrating with the system clipboard
* Repeating commands
* Macros
* Undo, undo branches

And, don't forget those best practices:

* Using `hjkl` instead of arrows
* Staying in Normal mode as much as possible
* Making edits that are easily repeated

What about things related to file navigation and editing multiple files in general?

* Opening, closing, and saving files
* Navigating files within a project
* Executing commands against open files with `:bufdo`
* Using tags files
* Buffers
* Windows
* Tab pages

Then there's also integration with the command-line, which can be used to invoke build systems or modify the current buffer's text in some way.

Because of Vim's modal nature, changing settings is extremely quick.  Rather than digging into deeply nested settings dialogs, you can quickly switch between tabs and spaces, turn on auto indent, and more:

* Familiarity with the basic settings
* Understanding `:set`
* Variables
* Syntax highlighting
* Colour schemes

###The Full Daunting List

Putting all of these things together creates a ridiculously daunting list that would drive anyone to Emacs, or the latest popular GUI editor (Sublime Text?).

Here's the full list:

* Getting Help
  - Using the help system properly
  - Searching the help system
  - Adding help from plugins
* Editing
  - Mastering Vim's modal nature
  - Navigation: word, line, file
  - Entering modes effectively: `a`, `i`, `o`, etc.  Also see `:help mode-switching`
  - Text manipulation in Normal mode
  - Text manipulation in Insert mode
  - Searching and substitution, regular expression basics
  - Text and block selection in Visual mode, text object selection, blockwise editing
  - Completion
* Formatting
  - Switching between tabs and spaces
  - Indentation settings
  - Indenting selected text, entire files
  - Auto-indentation and smart indentation
* Repeatability
  - Yank, put, registers, and integrating with the system clipboard
  - Repeating commands
  - Macros
  - Undo, undo branches
* File Management
  - Opening, closing, and saving files
  - Navigating files within a project
  - Executing commands against open files with `:bufdo`
  - Using tags files
* Buffers and Windows
  - Buffers
  - Windows
  - Tab pages
  - Invoking command-line programs
* Configuration
  - Familiarity with the basic settings
  - Understanding `:set`
  - Variables
  - Syntax highlighting
  - Colour schemes
* Best Practices
  - Using `hjkl` instead of arrows
  - Staying in Normal mode as much as possible
  - Making edits that are easily repeated

You can take this list, change it, distill it to things you want to learn, pick random items to practice.  As long as you occasionally look at the way you work with Vim and refine your most commonly used techniques you'll keep getting better.
