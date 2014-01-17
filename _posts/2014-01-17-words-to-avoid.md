---
layout: post
title: "Words to Avoid in Tech Writing: Vim Plugin"
author: "Alex Young"
tags: 
- writing
- style
- highlight
---

![Words to avoid](/images/posts/wordstoavoid.png)

Wynn Netherland amended his [vimrc](https://github.com/pengwynn/dotfiles/blob/master/vim/vimrc.symlink) to highlight [words to avoid in tech writing](http://wynnnetherland.com/linked/2014010902/words-to-avoid-in-tech-writing).  The snippet looks like this:

{% highlight vim %}
" Highlight words to avoid in tech writing
" =======================================
"
" obviously, basically, simply, of course, clearly,
" just, everyone knows, However, So, easy

" http://css-tricks.com/words-avoid-educational-writing/

highlight TechWordsToAvoid ctermbg=red ctermfg=white

function MatchTechWordsToAvoid()
  match TechWordsToAvoid /\c\<\(obviously\|basically\|simply\|of\scourse\|clearly\|just\|everyone\sknows\|however\|so,\|easy\)\>/
endfunction

autocmd FileType markdown call MatchTechWordsToAvoid()
autocmd BufWinEnter *.md call MatchTechWordsToAvoid()
autocmd InsertEnter *.md call MatchTechWordsToAvoid()
autocmd InsertLeave *.md call MatchTechWordsToAvoid()
autocmd BufWinLeave *.md call clearmatches()
{% endhighlight %}

The `MatchTechWordsToAvoid` function is called whenever a Markdown file is opened.  The `match` command takes a regular expression and matches the unwanted phrases that we can't help writing.  The first argument to `match` can be used with `highlight`, so you can apply different highlights to different matches.  In this case the background colour is set to red, so the unwanted words clearly stand out.

It uses `autocmd` to listen for events like starting Insert mode and entering a buffer to either show or hide the matches.  The `clearmatches` function clears the highlights that were previously added by `match`.

You could use this approach to highlight anything, and different highlights could be applied by grouping them with group names.
