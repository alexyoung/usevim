---
layout: post
title: "Android Development in Vim"
author: "Alex Young"
tags: 
- android
- scripts
---

![Android and Vim](/images/posts/androiddev.png)

Google's Android SDK can be downloaded separately from the Eclipse tools, but due to the close level of integration between the two, Eclipse is probably the easiest way to get started with Android development.  Once you know the basics, you'll be itching to break out of Eclipse and use Vim.

Setting everything up can be awkward, so "bpowell" has released [vim-android](https://github.com/bpowell/vim-android), which is an installation script to quick start a Vim-friendly Android development environment.  It includes Java-aware tab completion, ctags, and a script to find the `AndroidManifest.xml` file.
