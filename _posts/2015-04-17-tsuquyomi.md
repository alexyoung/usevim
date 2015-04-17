---
layout: post
title: "TypeScript with Tsuquyomi"
author: "Alex Young"
tags: 
- vim
- typescript
---

If you're searching for the perfect Vim TypeScript plugin, then there's a new one called [Tsuquyomi](http://www.vim.org/scripts/script.php?script_id=5151) (GitHub: [Quramy/tsuquyomi](https://github.com/Quramy/tsuquyomi), License: _MIT_) by Yosuke Kurami.  It uses TSServer, which comes with TypeScript, and provides omni completion, symbol navigation, compiler errors, and identifier renaming.  It requires [vimproc](https://github.com/Shougo/vimproc.vim), which is used for asynchronously executing commands.

Tsuquyomi works with [tsconfig.json](https://github.com/Microsoft/TypeScript/wiki/tsconfig.json), so when it runs the TypeScript compiler it'll take your global options into account.  It also supports showing outlines of the file using [Unite](https://github.com/Shougo/unite.vim) and [unite-outline](https://github.com/Shougo/unite-outline).

For most TypeScript programmers, Tsuquyomi feels like a complete solution.  The [documentation is pretty good](https://github.com/Quramy/tsuquyomi/blob/master/doc/tsuquyomi.txt), so as long as you can install TypeScript and vimproc you should be able to get it working.
