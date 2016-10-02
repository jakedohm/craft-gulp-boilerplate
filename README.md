## Getting Started
If you don't already have node.js installed, please do so here: [nodejs.org](https://nodejs.org/en/)

Once you have node installed, run the following command in Terminal to install gulp through npm (node package manager): `sudo npm install gulp -g`

Now that we have gulp installed universally, it's time to create a gulp project!

Navigate in Terminal to the main project folder you'd like to run gulp on/in. This folder would be something like ~/project, not ~/project/sass. Once you've CD'd to your project folder, run the following command: `npm init`.

After running this command, you will get prompted to enter some information, and then verify by hitting return (enter).

Now that we've initialized npm and created a project, we can install gulp (and the other packages that we'll need) to the project: `npm install gulp --save-dev``npm install --save-dev gulp gulp-path gulp-autoprefixer gulp-clean-css gulp-sass`.

###Using Gulp
If you dig into `gulpfile.js` you'll see I have 2 tasks created.

Task #1: `sassToCleanCSS` - This task compiles SASS to CSS, auto-prefixes your code for the last 2 versions of all browsers (and IE8 and IE9), minifies the CSS completely, and then outputs the CSS to the `public/assets/css` folder. You can run this task with the command `gulp sassToCleanCSS`.

Task #2: This is just a `watch` task for the `sassToCleanCSS` task. So if you run this task (`gulp sass-watch`), it will watch the `sass` folder for any file changes, and automatically run the `sassToCleanCSS` task if any files change.

###Running Craft
If you try to run craft from this repo, you'll notice nothing works. You need to download a fresh copy of Craft CMS from craftcms.com, and drop the `/app` folder from the installation you just downloaded, inside of the  `/craft` folder of this repo.

##Roadmap
<li>JS concat + compiling (coming in the near future)</li>
<li>Image optimization</li>

Please let me know if you have any questions, or improvements.