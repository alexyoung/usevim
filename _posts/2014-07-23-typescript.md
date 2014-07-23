---
layout: post
title: "Vim and TypeScript"
author: "Alex Young"
tags: 
- scripts
- languages
---

TypeScript has a rich type system that can be used by compilers and IDEs to infer things about method and object usage.  If you write TypeScript in Visual Studio, then you get IntelliSense completion and hints as you work.  Due to the design of the language, the hints can actually help you how to use and navigate around code.

Vim's [Omni completion](http://vimdoc.sourceforge.net/htmldoc/version7.html#new-omni-completion) supports several languages, including C and JavaScript, but it can't do deeper IntelliSense-like completion and documentation.

The way people usually solve this is to run a "server" that can index your code, providing language-specific features that Vim doesn't support.  Then a Vim script is used to send queries to the server.  [typescript-tools](https://github.com/clausreinke/typescript-tools) by Claus Reinke does exactly that, with its TypeScript server (tss).

The server handles dependencies, so you can quickly jump between references, get completion menus, and open files with completion.

There's also a [Typescript Syntax project for Vim](https://github.com/leafgarland/typescript-vim) by Leaf Garland.  TypeScript actually looks OK with the JavaScript highlighter, but this syntax file handles lambdas and type descriptions properly.
