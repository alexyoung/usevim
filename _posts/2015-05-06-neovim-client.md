---
layout: post
title: "Neovim Client Library for Clojure"
author: "Alex Young"
tags: 
- clojure
- programming
- plugins
- scripts
---

Jeb Beich has created a Neovim client library for Clojure: [jebberjeb/neovim-client](https://github.com/jebberjeb/neovim-client).  That means you can use Neovim's inter-process messaging library for scripting Neovim from a Clojure process.

There's a [sample plugin](https://github.com/jebberjeb/neovim-client/blob/master/sample-plugin/src/sample_plugin/core.clj) that creates a horizontal split and then sets some text in a buffer:

{% highlight lisp %}
(ns sample-plugin.core
  (:require [neovim-client.nvim :as nvim])
  (:gen-class))

(defn -main
  [& args]
  (nvim/connect!)
  (nvim/hsplit!)
  (let [cur-buf (nvim/get-current-buffer)]
    (nvim/buffer-set-text! cur-buf "Sample plugin was here!")))
{% endhighlight %}

You can also open a Clojure REPL and send commands to an instance of Neovim -- see the readme for instructions on how to do this.  It might be fun to combine this with Neovim's built-in terminal emulator.
