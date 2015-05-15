
---
layout: post
title: "VimAwesome Plugin Completion"
author: "Alex Young"
tags: 
- vim
- plugins
- scripts
---

If, like me, you install lots of Vim plugins regularly, then why not autocomplete plugin names based on [VimAwesome](http://vimawesome.com)?  Junegunn Choi posted a [gist](https://gist.github.com/junegunn/5dff641d68d20ba309ce) to do this, and it's on [Hacker News](https://news.ycombinator.com/item?id=9548985) if you want to upvote it.

![VimAwesome](/images/posts/vimawesome-completion.gif)

It actually uses a Ruby scrip to download and parse the JSON from [vimawesome.com](http://vimawesome.com), so you could use the same principle to add all kinds of web-based completion for services like GitHub, npm, RubyGems.org, and so on.
