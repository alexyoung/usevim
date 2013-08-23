---
layout: post
title: "EditorConfig"
author: "Alex Young"
tags: 
- services
---

[EditorConfig](http://editorconfig.org/) is an editor-agnostic file format for defining coding styles.  It allows multiple editors to use the same settings.  That means if you're working in Vim, but you sometimes switch to an IDE like Visual Studio, then you can keep the same coding style between editors.

Settings are synced using "plugins" -- there's one for each editor that you want to use.  The plugins will read an `.editorconfig` file.  This `.editorconfig` is an example from the project's homepage:

{% highlight text %}
# EditorConfig is awesome: http://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true

# 4 space indentation
[*.py]
indent_style = space
indent_size = 4

# Tab indentation (no size specified)
[*.js]
indent_style = tab

# Indentation override for all JS under lib directory
[lib/**.js]
indent_style = space
indent_size = 2
{% endhighlight %}

EditorConfig files use an INI format, so it's easy to parse, which should help if you want to add support for a new editor.  Most of the popular ones are already supported, including Sublime Text, TextMate, and IntelliJ.

You can find the project on [GitHub](https://github.com/editorconfig/), and I noticed there's an `editorconfig` package in [Homebrew](http://brew.sh/) for quick installation on a Mac.
