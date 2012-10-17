---
layout: post
title: Unit Testing for Vim Scripts
author: Alex Young
tags:
- testing
- plugins
- scripting
---

I typically write tests for the software that I work on.  Since I started writing _usevim_ I've noticed a lot of plugins don't include tests of any kind.  Even widely used, respected, and venerable plugins ship without tests.

Are Vim scripts somehow different to other software so they don't require automated testing?  I'd argue that they're not special, and _should_ be tested.

Vim doesn't include anything specifically for writing tests, but there are a few popular scripts that implement unit testing frameworks.  For example, [vim-unittest](https://github.com/h1mesuke/vim-unittest) by Sam Simmons is a pretty solid implementation.  Tests are run like this:

{% highlight text %}
:UnitTest test/module.test.vim
{% endhighlight %}

And a test suite written with vim-unittest has the following structure:

{% highlight text %}
let s:tc = unittest#testcase#new('Example Suite')

function! s:tc.SETUP()
  " Set things up before the tests run
endfunction

function! s:tc.test_one()
  call self.assert(1)
endfunction

function! s:tc.TEARDOWN()
  " Run after tests
endfunction
{% endhighlight %}

It's also possible to run tests before and after each test case.  Available assertions include `assert_not`, `assert_equal`, `assert_not_equal`, `assert_has_key`, `assert_match`, and a lot more.  Full documentation can be found in [vim-unittest/doc/unittest.txt](https://github.com/h1mesuke/vim-unittest/blob/master/doc/unittest.txt).

Another similar test framework is [UT](http://code.google.com/p/lh-vim/wiki/UT) by Luc Hermitte.  The syntax is different, but it also covers all the main features I'd expect to find in a unit testing framework.  For an example, see [UT.vim](http://code.google.com/p/lh-vim/source/browse/UT/trunk/tests/lh/UT.vim).

There are also Behaviour-Driven Development (BDD) test frameworks for Vim.  One such example is [spec.vim](http://www.vim.org/scripts/script.php?script_id=2580) by Tom Link.  People are also running Vim tests with [Travis CI by using RSpec](http://mudge.name/2012/04/18/testing-vim-plugins-on-travis-ci-with-rspec-and-vimrunner.html).  This makes sense if you need to integrate tests with a continuous integration system that won't run scripts through Vim, but I suspect most plugin authors would prefer a more Vim-oriented workflow.

###Conclusion

I like to see unit tests when people send in Vim scripts, but it seems like only a die-hard group of plugin authors have embraced unit testing.  If you're new to Vim Script, I recommend using a test framework as a way to improve your Vim scripting skills in an environment that affords a level of reproducibility.
