---
layout: post
title: "Irregular Expressions"
author: "Alex Young"
tags: 
- regex
- patterns
---

Believe it or not, Vim's regular expressions are unique.  They're not Perl-compatible regular expressions, or even POSIX regular expressions.  Many tools that you use day to day as a programmer use the Perl compatible (PCRE) C library.  It's BSD licensed and widely adopted.  Also, programming languages themselves often use Perl-derived regular expressions.

Therefore, it's not surprising that Vim's non-standard pattern matching language brings puzzlement to newcomers, but it's simply a question of heritage.  Vim is derived from vi, which evolved from ed.  Now, ed itself dates back to 1971, when it was created by Ken Thompson, who also created Unix.  So the next time someone bemoans Vim for not supporting PCRE, you can say "so what? Did Larry Wall invent Unix as well?!"

In Vim's version of the universe, we have "patterns", and they have some interesting irregularities next to PCRE.  While I was researching this post, I found [Vim Regexes by Andrew Radev](http://andrewradev.com/2011/05/08/vim-regexes/) that introduces Vim's regular expression modes, keyword patterns.  This is a great introduction to some of the features that make Vim's patterns unique.  He also references [Refining search patterns with the command-line window](http://vimcasts.org/episodes/refining-search-patterns-with-the-command-line-window/) on Vimcasts.org, which is a tutorial that will help you build complex search patterns.

It's not just the pattern implementation that's different -- the way searches are invoked is worth learning about as well.  You probably know that when in Normal mode, pressing `/` allows a pattern to be entered, and that `?` searches in the opposite direction.  However, even this simple command can be coaxed to behave differently to a simple text search.  Typing `/search/2` will look for the text _search_ and then place the cursor two lines below the match.  Negative numbers can be used as well.

Other offsets are also supported -- using `e` specifies a character offset.  For example, searching for `/example/e-1/` will leave the cursor on _l_ (without the offset it would have landed on the first _e_).

Vim's implementation of patterns is unique, yet compatible enough with Perl-style regular expressions that you should be able to master the basics if you've used other implementations.  However, learning the search commands (`/`, `?`) and their additional options unlocks powerful capabilities.  If you're new to Vim, then check out `:help usr_27.txt` for a guided walkthrough on search commands and patterns.

