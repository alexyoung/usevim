deploy:
	@rsync -avz "_site/" usevim.com:/var/www/usevim.com/
