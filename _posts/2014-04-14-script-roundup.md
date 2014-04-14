---
layout: post
title: "Script Roundup: vim-heroku, heroku-remote, heroku-binstubs"
author: "Alex Young"
tags: 
- scripts
- plugins
- github
---

###vim-heroku

[vim-heroku](http://www.vim.org/scripts/script.php?script_id=4915) (GitHub: [tpope/vim-heroku](https://github.com/tpope/vim-heroku), License: _Vim_) by Tim Pope is a [Heroku Toolbelt](https://toolbelt.heroku.com/) wrapper.  It provides a `:Hk` command that wraps around the Toolbelt but also [hk](https://github.com/heroku/hk).

_hk_ is a faster Heroku command-line client, which is by Heroku but is unsupported and has to be installed from source.  It's written with Go and supports zsh and bash completion.

That means if you've got `hk` and vim-heroku, you can get tab completion in Vim as well.

If you're heavily invested in Heroku and general Vim-laziness, then you might also like [heroku-remote](https://github.com/tpope/heroku-remote) which helps manage multiple Git remotes for Heroku applications.  This is useful if you've got different environments -- I usually have a staging environment, for example.

[Heroku binstubs](https://github.com/tpope/heroku-binstubs) is yet another Heroku script by Tim Pope that helps to avoid having to type `--app app-staging` all the time.  This is one of those annoyances with Heroku that I've never figured out myself.
