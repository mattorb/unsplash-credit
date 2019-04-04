Something I love about [Unsplash](https://www.unsplash.com) are the free high quality photos from photographers all over the world.  

Unsplash terms of use allow you to use the photos without attribution or credit, but it seems right to credit the original photographer where possible.

That brings me to [my blog](https://mattorb.com) which is running on the wonderful [Ghost](https://ghost.org) [opensource](https://github.com/TryGhost/Ghost) platform.  Recently, I've been selecting photos from Unsplash for post cover images.  Ghost has some built in integration with Unsplash when you insert a photo inline using an Unsplash plugin, but not so for post cover images.

Here lies a script that will automatically caption/credit+link the original photogapher from Unsplash, for carefully named image files that you download from Unsplash and upload as a post cover image.

The script runs after the page is loaded which is not ideal, but good enough for my current needs.  We leverage Ghost's 'Code Injection' feature here to add our javascript to every post page.

## Setup

### If you are hosting the Ghost server . . .
Copy `unsplash-credit.js` into your ghost blog's theme assets/js directory.  (i.e. - /var/www/[ghost directory]/versions/2.1.2/content/themes/casper/assets/js/ ) on your Ghost server.

In the Ghost Admin UI, add the following code injection:
```
<script src="/assets/js/unsplash-credit.js"></script>
```

### If you are using a fully managed Ghost . . .
You'll have do something equivalent to get the js hosted and injected with the right path/url.  I can't speak exactly to these steps currently.

## Adding post cover images from Unsplash

1. Download the photo from unsplash, and insert the photographer's username into the filename as: `-@userid`.  

When you download an image directly from Unsplash, it typically provides a filename like:
`first-last-12398024-unsplash.jpg` 

That needs to be modified to look like:

`first-last-@userid-12398024-unsplash.jpg`

2. After renaming and adding the userid, upload the photo as the post cover image in Ghost.

When the post page is loaded, if there is a post cover image, a small text photographer credit line and a link that photographer's Unsplash photos will be automatically added in small text on the top right of the photo.
