---
layout: post
title: "Script Roundup: github-issues.vim"
author: "Alex Young"
tags: 
- scripts
- plugins
- github
---

The [github-issues.vim](http://www.vim.org/scripts/script.php?script_id=4903) (GitHub: [jaxbot / github-issues.vim](https://github.com/jaxbot/github-issues.vim), License: _MIT_) by Jonathan Warner allows you to look up GitHub issues using Vim.  That means the next time you're writing a commit and want to reference a ticket, you can get completion based on issue numbers.

![GitHub issues](/images/posts/githubissues.gif)

Typing `:Gissues` will show the issues for the current repository.  If you want to use it with private repositories, then you'll need to set your API access token using `let g:github_access_token`.  Tokens can be obtained from [/settings/tokens/new](https://github.com/settings/tokens/new) on GitHub.

After typing `:Gissues`, you should be able to press return on an issue to view it as plain text.  The output opens in a split window.  Because GitHub issues works well with email, then the text view is perfectly acceptable.

The project has been around for a few months now and it looks like it's shaping up nicely.  It's built with Python, and should work with minimal configuration.
