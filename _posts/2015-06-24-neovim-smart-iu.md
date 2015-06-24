---
layout: post
title: "Neovim's Smart UI Protocol"
author: "Alex Young"
tags: 
- neovim
---

Thiago de Arruda posted about [a new UI protocol for Neovim](https://tarruda.github.io/articles/neovim-smart-ui-protocol/) that aims to improve the amount of control native apps have over embedded Neovim:

> The smart UI protocol will separate the drawing of window contents and other user interface elements such as completion boxes and window frames.
>
> * Embedders have complete freedom of how windows are displayed (custom decorators, floating windows...)
>
> * Frameless, single-line windows can be created, good for using Neovim as shell line editor for example.
>
> * Windows can have different fonts/sizes.
>
> * Custom widgets for displaying the command-line and insert-mode completion/

You can't use the current API with the new protocol _at the same time_ -- you should use the API that suits your requirements. Thiago suggests using the existing API for simple embedding scenarios, and the new smart UI protocol for more complex UIs.

At the end of the post he reveals that he's working on a web-based implementation:

> I'm also working on a typescript web UI that will run in any modern web browser and communicates with Neovim via websockify. If you like Neovim, stay tuned because it is about to get a facelift!

That sounds like a great way to prove how good Neovim is for embedding!
