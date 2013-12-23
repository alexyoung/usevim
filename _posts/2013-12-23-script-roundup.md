---
layout: post
title: "Script Roundup: InnerFragmentComplete, vim-javacomplete_ex"
author: "Alex Young"
tags: 
- plugins
- java
- completion
---

###InnerFragmentComplete

[InnerFragmentComplete](http://www.vim.org/scripts/script.php?script_id=4804) by Ingo Karkat is a plugin for expanding words based on partial matches:

> `CTRL-X i`: Find matches for inner fragments. It first searches inside CamelCaseWords and underscore\_words, either for matches of the keyword characters before the cursor at the inner fragment start, or for fragments whose individual words begin with the typed letters in front of the cursor.
> If that doesn't find any matches, a fallback search will pick up base matches anywhere inside a word (e.g.  "comp" will match "compress" inside "decompress").

Here's an example:

> The text contains "CamelCaseWords". To write "PascalCaseWords", start either with "PascalCaseW" (unique text match), "PascalC" (several text matches), or "PascalCW" (unique fragment match).

###vim-javacomplete\_ex

![vim-javacomplete improved](/images/posts/javacomplete.png)

[vim-javacomplete\_ex](http://www.vim.org/scripts/script.php?script_id=4802) (GitHub: [richox / vim-javacompleteex](https://github.com/richox/vim-javacompleteex)) by Zhang Li is an improved version of vim-javacomplete.  It adds class name completion and `import` statement addition.


