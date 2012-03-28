---
layout: post
title: "Securing Vim"
author: "Alex Young"
tags:
- security
- modeline
---

What attack vectors does Vim open up?  Over the years various vulnerabilities have been discovered, and thankfully most of these issues have been fixed.  However, before connecting to that sensitive server and editing a file, it's a good idea to be aware of Vim's previous vulnerabilities.

###Modelines

In [CVE-2002-1377](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CAN-2002-1377) a Vim vulnerability concerning modelines is discussed whereby modelines could be crafted to call arbitrary commands using the `libcall` function.  This might seem trivial, but there are cases where it could be used to compromise a system -- imagine opening a file as root while performing server maintenance, or replying to an email in Mutt where Vim has been configured as the editor.

For this reason, certain Linux distributions disabled modelines by using `set nomodeline`.

Since CVE-2002-1377, modelines have been changed to only allow `set` commands:

> No other commands than "set" are supported, for security reasons (somebody might create a Trojan horse text file with modelines).  And not all options can be set.  For some options a flag is set, so that when it's used the sandbox| is effective.

Despite this, there may be cases where it's desirable to turn modelines off, so it's worth being aware of how they work.

Typing `set modeline?` will show if it's enabled or not.  Running Vim with `nocompatible` automatically switches modelines on.

Alternatively, try [securemodelines](http://www.vim.org/scripts/script.php?script_id=1876) (GitHub: [ciaranm / securemodelines](https://github.com/ciaranm/securemodelines), License: _Vim_)) by Ciaran McCreesh.  It adds an array called `g:secure_modelines_allowed_items` which can be used to whitelist certain options.  At the very least this can be used to curtail settings that you find annoying.

###Plugin Security

In [CVE-2008-2712](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2008-2712) it was found that Vim scripts could be created that executed arbitrary commands.  This has since been patched, but it's worth thinking about the implications -- something seemingly innocuous like a plugin could be used to attack a system.  If you try out a lot of plugins like I do it's certainly worth looking at a plugin's source and author before running it.

Another related issue was found in plugins using `shellescape` -- arbitrary code could be executed using tar archives ([CVE-2008-3074](http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2008-3074)).

Running Vim with `vim -u NONE` will skip the `.vimrc` and plugins.  This is documented in `:help -u`.
