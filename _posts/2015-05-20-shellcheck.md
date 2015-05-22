---
layout: post
title: "ShellCheck"
author: "Alex Young"
tags: 
- scripts
- scripting
- shell
- tutorials
---

[ShellCheck](https://github.com/koalaman/shellcheck) is a static analysis tool for shell scripts.  Shell scripting isn't necessarily difficult, but the syntax is hard to get the hang of, particularly if you rarely write shell scripts.  ShellCheck is a Haskell program that runs through your scripts and provides warnings and suggestions for improvements.  It will help if you're a beginner, but it also catches more subtle issues that even more advanced users may miss.

![ShellCheck](/images/posts/shellcheck.png)

I ran it on a script I use for updating usevim images, and it noticed I was using `cat` where a redirection would have sufficed.

Jezen Thomas has written an article about using Vim with ShellCheck: [Shell Script Static Analysis in Vim](http://jezenthomas.com/shell-script-static-analysis-in-vim/).  Using his snippets you can get Vim to run ShellCheck every time Vim saves your script.  It'll open a quickfix window to display issues.

This is definitely worth trying out if you've ever found writing shell scripts difficult, or even if you just want to verify code you're trying out from sites like Stack Overflow!
