---
layout: post
title: "Global Git Ignore"
author: Alex Young
tags:
- git
---

For years I dumped this into my `.gitignore` files: `*.sw?`.  Then I realised that some people don't use Vim, and therefore probably don't want to see my editor-specific `.gitignore` entries.  Different editors handle swap and recovery files different ways, so it seems redundant to force these settings on everyone.

A better approach is to use a global option.  Run `git config --global core.excludesfile ~/.gitignore`.  Then you can add `*.sw?`, and perhaps `*~` as well.  I like to add `.DS_Store` because Windows developers don't need to worry about that nonsense, and they should probably add `Thumbs.db`.
