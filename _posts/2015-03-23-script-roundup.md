---
layout: post
title: "Script Roundup: vim-http-client, gulp-vim"
author: "Alex Young"
tags: 
- scripts
- javascript
- http
---

###vim-http-client

[vim-http-client](http://www.vim.org/scripts/script.php?script_id=5140) (GitHub: [aquach/vim-http-client](https://github.com/aquach/vim-http-client)) is a simple HTTP client for Vim.  You can specify requests using plain text, and the script will generate a request that is managed by a Python script.

The result will be displayed in a separate window, so can switch back and edit your original request.

The plugin is invoked by selecting a block of text and then typing a mapping.  You can also call the main function directly with `:call HTTPClientDoRequest()`.

###gulp-vim

[gulp-vim](http://www.vim.org/scripts/script.php?script_id=5144) (GitHub: [bAmine/gulp-vim](https://github.com/KabbAmine/gulp-vim)) is a [gulp.js](http://gulpjs.com) wrapper for Vim.  It provides the commands `:Gulp` and `:GulpExt`, and `:GulpTasks` for listing Gulp task names.

This is handy if you use Gulp on a project but really don't like leaving Vim!
