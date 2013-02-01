---
layout: post
title: "Vim 101: Fancy Tags"
author: "Alex Young"
tags: 
- vim101
- tags
- ctags
- windows
---

Two weeks ago I wrote a [Vim 101 on tags](http://usevim.com/2013/01/18/tags/), which introduced the basics for working with Vim's tag navigation tools.  Something that I hinted at was using tags to help visualise a project's structure.  Although Vim's raw editing operations are incredibly powerful, some of us need help in trying to visualise the structure of a project, and to navigate around it.  I often find it takes a few hours or even days to get to grips with an already established code base.

There are several popular plugins designed to help visualise code through the use of tags.  One such project, [Tagbar](http://majutsushi.github.com/tagbar/) (GitHub: [majutsushi / tagbar](https://github.com/majutsushi/tagbar), License: _Vim_, Vim.org: [Tagbar](http://www.vim.org/scripts/script.php?script_id=3465)) by Jan Larres displays a tag browser at the side of the screen.  It automatically generates tags for the current file, and shows a menu of functions and methods, classes, and even things like macros if you're working with C.

I usually find I'll break out Tagbar when I'm trying to figure out the overall structure of files within a new project.  Then once I've got a feel for it I'll switch back to a combination of tag navigation and searching.

This screenshot is of Tagbar displaying Vim's source:

![Tagbar with Vim's source](/images/posts/vim-101-tagbar-1.png)

And this screenshot shows it being used with a Ruby on Rails project:

![Tagbar with a Rails project](/images/posts/vim-101-tagbar-2.png)

Notice that Tagbar figures out that I want to see things like classes and methods in Ruby, and macros and structs in C.

The sidebar is displayed or hidden by typing `:TagbarToggle`, and the author suggests creating a shortcut by adding this to your `.vimrc`:

```
nmap <F8> :TagbarToggle<CR>
```

Tagbar's source has built-in support for displaying the right language constructs for several languages, including ASP, C, C++, HTML, Java, Lisp, Lua, PHP, Python, Ruby, SQL, and even Vim script.  The author has also written up some tips on getting it working with languages that don't play well with ctags: [Tagbar: Support for additional filetypes](https://github.com/majutsushi/tagbar/wiki).

A very similar plugin is [taglist.vim](http://vim-taglist.sourceforge.net/) (GitHub: [vim-scripts / taglist.vim](https://github.com/vim-scripts/taglist.vim), Vim.org: [taglist.vim](http://www.vim.org/scripts/script.php?script_id=273)) by Yegappan Lakshmanan.  It's similar to Tagbar, but supports less versions of the ctags utility, so you may find it harder to install.  The [taglist.vim FAQ](http://vim-taglist.sourceforge.net/faq.html) has answers to common installation problems.

If you're looking for more to read about tags, there's a Vim Tips Wiki page that covers [browsing programs with tags](http://vim.wikia.com/wiki/Browsing_programs_with_tags).  I recommend using Tagbar as a way to get to grips with tags, because I've found it's easy to install and use.

