---
layout: post
title: "MacVim File Drawer"
author: "Alex Young"
tags: 
- forks
- macvim
- gui
---

<div class="image">
  <img src="/images/posts/macvim-drawer.png" />
  <small>Eloy Durán's port of MacVim, complete with a file drawer.</small>
</div>

Here's a curious thing: a Mac-friendly file drawer GUI for MacVim.  It was made by Eloy Durán, and is available at [alloy / macvim](https://github.com/alloy/macvim) on GitHub.  To try it out, follow the [build instructions on the fork's wiki](https://github.com/alloy/macvim/wiki/Building).

The sidebar itself behaves as you'd expect: it's "global", so it always looks the same even when tabs are in use.  It also works correctly in full-screen mode.  File system commands like `:cd` are reflected in the drawer, and switching buffers causes the highlighted file to change.

The _General_ settings panel has options that pertain to the file drawer, so you can change the side which it appears on and make it always open by default.

<div class="image">
  <img src="/images/posts/macvim-file-drawer-settings.png" />
  <small>The fork adds new preferences to change the behaviour of the sidebar.</small>
</div>

It also adds a menu option for toggling the file browser.

<div class="image">
  <img src="/images/posts/macvim-file-drawer-toggle.png" />
  <small>The file drawer can be toggled via a menu item or keyboard shortcut.</small>
</div>

There was a discussion about this in the [mac_vim group](https://groups.google.com/d/topic/vim_mac/iH9my4jv5WI/discussion) where Bradford Smith asked about merging this fork:

> It would be so lovely for MacVim to have a working file drawer.  I see a fork exists which tries to add this behavior:  https://github.com/alloy/macvim.  Why not try to merge this into the main MacVim repository?

Björn [replied](https://groups.google.com/d/msg/vim_mac/iH9my4jv5WI/SdmApzZ8Ru0J) with a detailed response:

> Please don't take this as me saying I am opposed to having GUI drawers.  I simply think that if it should be done at all it should be done right.

> I have for a long time wanted to split MacVim into a view framework and an actual app.  This way I could maintain MacVim as a "pure" gvim for Mac and anybody wishing to trick it out with drawers etc could simply reuse the view framework.  I even started working on this last summer but got bitten by the "version 2.0 bug" (tried rewriting from scratch and ran out of time/energy).

There are those of us who have never been completely happy with file/project drawers in the first place.  The best argument against this that I've found is the [Oil and vinegar](http://vimcasts.org/blog/2013/01/oil-and-vinegar-split-windows-and-project-drawer/) post by Drew Neil.  But for those of you who have switched to Vim from GUI editors like TextMate or Sublime Text, then you might find Eloy's fork interesting.
