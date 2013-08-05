---
layout: post
title: "Script Roundup: vim-arpeggio, Matchmaker"
author: "Alex Young"
tags: 
- plugins
- scripts
- ui
- keyboard
---

###vim-arpeggio

Thai Pangsakulyanont sent in vim-arpeggio (GitHub: [kana / vim-arpeggio](https://github.com/kana/vim-arpeggio), License: _MIT/X_), by Kana Natsuno.  It can be used by setting up aliases.  For example, `:Arpeggio inoremap fun function`, allows the keys `fun` to be pressed simultaneously to type `function`.

[The vim-arpeggio documentation](https://github.com/kana/vim-arpeggio/blob/master/doc/arpeggio.txt) is detailed, and includes instructions for supporting keyboards without [n-key rollover](http://en.wikipedia.org/wiki/Rollover_\(key\)#n-key_rollover).

###Matchmaker

<div class="image">
  <img src="/images/posts/matchmaker.png" alt="" />
  <small>Matchmaker highlights keywords based on a regular expression.</small>
</div>

[Gez Page](https://twitter.com/gezpage) sent in Matchmaker (GitHub: [qstrahl / vim-matchmaker](https://github.com/qstrahl/vim-matchmaker), License: _Vim_) by Quinn Strahl.  It will highlight words that match the current keyword under the cursor.  It can be enabled with `:Matchmaker`.
