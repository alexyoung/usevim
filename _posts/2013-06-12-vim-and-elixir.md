---
layout: post
title: "Vim and Elixir"
author: "Alex Young"
tags: 
- plugins
- languages
- elixir
---

![Elixir](/images/posts/elixir.png)

My mental landscape is dotted with the decaying husks of half-learned programming languages.  The latest of these is [Elixir](http://elixir-lang.org/), a functional programming language built on Erlang VM:

> It is a dynamic language with flexible syntax with macros support that leverages Erlang's abilities to build concurrent, distributed, fault-tolerant applications with hot code upgrades.

While it's fun to try out new languages, it can be a painful process if the tools aren't up to snuff.  Fortunately, like [Go](http://golang.org/misc/vim/), the Elixir authors were quick to write syntax files and plugins for popular editors.  [Vim Elixir](https://github.com/elixir-lang/vim-elixir) includes syntax highlighting, filetype detection, and auto indentation.  It's hosted on GitHub, so it's easy to install with Pathogen or Vundle.

![A vial of Elixir](/images/posts/elixir-file.png)

The highlighting looks clean and Omni completion seems to work as well.

There's also [mix.vim](https://github.com/mattonrails/vim-mix), which adds support for Elixir's build tool.  Typing `:Mix` will run the default mix task, or a command if one is supplied as the first argument.  Other handy functions are included, like `:Mdeps get` for updating out of date dependencies.

So, if you're interested in trying out Elixir, you're good to go with Vim.
