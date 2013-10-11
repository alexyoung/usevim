---
layout: post
title: "Presentations with Vim and git-slides"
author: Alex Young
tags:
- scripts
- git
---

Sometimes when you're creating a technical talk, using PowerPoint or Keynote feels extremely awkward.  Adding syntax highlighted code samples requires an extra step, and dipping into live coding isn't elegant.

Many speakers prefer to present using Vim -- each slide can be a file, tab, or whatever makes sense based on the content.

A new take on this idea is [git-slides](deploy@ec2-54-224-189-119.compute-1.amazonaws.com) by Samuel Gélineau.  It uses a Git commit for each slide, and a Vim plugin for authoring and presenting the slides.  Once it's installed `sl` displays the next slide, and `sh` shows the previous one.  `ss` saves a slide, and `sb` inserts a new one.

Other shortcuts are defined: backspace goes back, and space goes forward.  Take a look at [git-slides.vim](https://github.com/gelisam/git-slides/blob/master/vim/plugin/git-slides.vim) to see all of the mappings.

The plugin itself wraps around the `git-slides` bash script.  This is where the Git hacking work takes place.

I've used Google Drive and Keynote to create presentations before, but this seems like an interesting Vim-friendly approach.

