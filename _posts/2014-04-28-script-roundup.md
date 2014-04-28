---
layout: post
title: "Script Roundup: EightHeader, FormatToWidth"
author: "Alex Young"
tags: 
- scripts
- plugins
- formatting
- folds
---

###EightHeader

[EightHeader](http://www.vim.org/scripts/script.php?script_id=4930) (BitBucket: [BimbaLaszlo / vim-eightheader](https://bitbucket.org/BimbaLaszlo/vim-eightheader)) by Laszlo Bimba is a flexible function for easily creating fold headers and tables of contents.

For example, if you were writing a Vim help file you could convert this:

{% highlight text %}
Options;options
Default mappings;maps
  Launch nuclear strike;apocalypse
{% endhighlight %}

Into this:

{% highlight text %}
Options........................................................|options|
Default mappings..................................................|maps|
  Launch nuclear strike.....................................|apocalypse|
{% endhighlight %}

The function's signature is `EightHeader(length, align, oneline, pattern, marker, str)`.

###FormatToWidth

[FormatToWidth](http://www.vim.org/scripts/script.php?script_id=4924) by Ingo Karkat can be used to reformat lines using a configurable width.  The basic usage is `{Visual}<Leader>gq`, where `[count]` specifies the width.
