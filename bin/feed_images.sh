#!/usr/bin/env bash

cat _site/feed.xml | sed "s/img src='\/images\/posts/img src='http:\/\/usevim.com\/images\/posts/g" > _site/feed_1.xml
cat _site/feed_1.xml | sed 's/img src="\/images\/posts/img src="http:\/\/usevim.com\/images\/posts/g' > _site/feed.xml
rm _site/feed_1.xml

cat _site/feed.rss | sed "s/img src='\/images\/posts/img src='http:\/\/usevim.com\/images\/posts/g" > _site/feed_1.rss
cat _site/feed_1.rss | sed 's/img src="\/images\/posts/img src="http:\/\/usevim.com\/images\/posts/g' > _site/feed.rss
rm _site/feed_1.rss
