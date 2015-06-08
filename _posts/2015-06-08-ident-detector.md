---
layout: post
title: "Indent Detector"
author: "Alex Young"
tags: 
- indentation
- scripts
- plugins
---

What's the worst culprit for bad indentation that you've ever seen? For me Xcode springs to mind. Maybe Xcode isn't inherently bad, but somehow when I open projects authored with it in Vim I see a ridiculous mix of tabs and spaces that makes no sense. I think it downplays the importance of keeping tab settings the same as the rest of your team. It really makes understanding diffs and pull requests on GitHub a messy process.

I recently found [Indent Detector](http://www.vim.org/scripts/script.php?script_id=5195) (GitHub: [luochen1990/indent-detector.vim](https://github.com/luochen1990/indent-detector.vim), License: _MIT_) by Luo Chen. It attempts to detect mixed indentation and show a warning on `bufEnter` and `bufWrite`.  It also tries to switch the indentation settings to match the current style.

The time taken to detect indentation is limited, so opening large files shouldn't lock up Vim. It also keeps quiet when readonly files are opened to avoid showing errors when reading help files.

This may help me deal with messy Objective-C in Vim, or at least avoid making the same mistakes in clean projects.
