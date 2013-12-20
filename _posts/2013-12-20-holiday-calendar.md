---
layout: post
title: "Vim Calendar"
author: "Alex Young"
tags: 
- festive
- plugins
- calendar
---

I wanted to make a Vim advent calendar, but I don't think I'll have time now.  I found Bram Moolenaar's [2014 calendar](http://moolenaar.net/2014_en_a4.pdf), which can be folded to sit on a desk and has the Vim logo and charity information.

> It is available in English and Dutch.  You can find the PDF files on my 
> website: <http://moolenaar.net/#Calendar>
>
> If you are doing your Christmas shopping on Amazon, please consider 
> using the links on this page: http://www.iccf.nl/click1.html 
> A percentage of the sales will go to Vim's charity, helping children in 
> Uganda, and it doesn't cost you anything. 

If you're looking for a calendar in Vim, you could type `:r! cal`.  The `cal` command is a BSD general command that you may have installed depending on your operating system.

{% highlight text %}
   December 2013
Su Mo Tu We Th Fr Sa
 1  2  3  4  5  6  7
 8  9 10 11 12 13 14
15 16 17 18 19 20 21
22 23 24 25 26 27 28
29 30 31
{% endhighlight %}

Alternatively, check out something like [calendar.vim](https://github.com/mattn/calendar-vim), which displays calendars in split windows.
