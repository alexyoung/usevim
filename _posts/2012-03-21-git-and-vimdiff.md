---
layout: post
title: "Git and Vimdiff"
author: "Alex Young"
tags:
- git
- vimdiff
---

![Vimdiff screenshot](/images/posts/vimdiff.png)

Vimdiff is my favourite diff tool.  I've used many others, but I always come back to good old `vimdiff`.  Git comes with `git diff` (man page: `man git-diff`) which shows the changes between various things Git knows about -- it's possible to show the changes between the working tree and the index, changes between two trees, and changes between two files.

### More on `git diff`

The most commonly used form is simply `git diff` -- this shows the changes that are not currently staged for the next commit.  If you've already staged changes, `git diff --cached` will show the difference between the index and the last commit.

Typing `git diff branch` will show a diff between the current working directory and the named branch.

I also use `git diff --stat` to see an overview of changes.  A related command that I like to alias is `git log --pretty=format:"[%h] %ae, %ar: %s" --stat` which shows commit history with the files that were changed.

### Vimdiff

Vimdiff can be run from the command-line with `vimdiff file1 file2 [file3 [file4]]`.  This actually starts Vim in _diff mode_ -- the previous command is actually equivalent to `vim -d file1 file2 [file3 [file4]]`.  Vim requires a `diff` command to be available for this to work.  Vim's documentation on this is available in `:help diff`.

### Git Settings

Fortunately for us Vim fanatics, it's fairly easy to get Vimdiff working with Git.  Git has a lot of options for working with diffs, and one is `diff.tool` (man page: `man git-config`).  Also related is the `merge.tool` setting which can be set to allow Vimdiff to be used as the merge resolution program.

These settings can be passed to Git without changing any configuration files:

{% highlight text %}
git difftool --tool=vimdiff --no-prompt
{% endhighlight %}

To tell Git to always use Vimdiff, issue the following commands:

{% highlight text %}
git config --global diff.tool vimdiff
git config --global merge.tool vimdiff
{% endhighlight %}

Omit `--global` if you just want to set these for the repository in the working directory.  Now typing `git difftool` should bring up Vimdiff.

Another useful option is `difftool.prompt` -- this will stop Vim prompting about launching `vimdiff`:

{% highlight text %}
git config --global difftool.prompt false
{% endhighlight %}

If you're just trying these commands out, then the prompt will seem annoying, but there are cases where you might want to ignore a few files so it can be useful.

### Editing Changed Files

I find myself combining Git's output with `vim -p` on certain occasions when I want to edit each changed file:

{% highlight text %}
vim -p `git diff --name-only`
{% endhighlight %}

### References and Links

* [cheat vimdiff](http://cheat.errtheblog.com/s/vimdiff/)
* [git-config(1) Manual Page](http://schacon.github.com/git/git-config.html)
* [git-diff(1) Manual Page](http://schacon.github.com/git/git-diff.html)
* [:help diff](http://vimdoc.sourceforge.net/htmldoc/diff.html)

