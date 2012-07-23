deploy:
	@bin/feed_images.sh
	@rsync -avz "_site/" 80.68.93.197:/var/www/usevim.com/
