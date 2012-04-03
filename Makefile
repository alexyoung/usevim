deploy:
	@bin/feed_images.sh
	@rsync -avz "_site/" usevim.com:/var/www/usevim.com/
