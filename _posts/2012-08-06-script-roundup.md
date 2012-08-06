---
layout: post
title: "Script Roundup: Forms, Rooter"
author: "Alex Young"
tags: 
- plugins
- scripts
- gui
---

###Forms

![Forms](/images/posts/forms.png)

[Forms](http://www.vim.org/scripts/script.php?script_id=4150) (GitHub: [megaannum / forms](https://github.com/megaannum/forms)) by Richard Emberson is a user interface library that works in both text mode and GVim.  Once Forms and [self.vim](http://www.vim.org/scripts/script.php?script_id=3072) have been loaded, then all kinds of user interface elements can be created and managed.

Forms support labels, buttons, menus, and various layout styles.  They can be used with the mouse or keyboard.  The author has included lots of examples in the `autoload/forms/example` directory.  This actually seems like a convenient way of managing plugins with complex options, so it'll be interesting to see if it catches on.

###Rooter

[Rooter](http://www.vim.org/scripts/script.php?script_id=4145) (GitHub: [airblade / vim-rooter](https://github.com/airblade/vim-rooter), License: _MIT_) by Andrew Stewart automatically changes the current working directory based on the presence of a DVCS directory.  This may fit in well with your workflow -- if you often find yourself opening a file deep within a project's file hierarchy, then this plugin will automatically look up the location of a `.git` (or similar) path and assign the working directory appropriately.
