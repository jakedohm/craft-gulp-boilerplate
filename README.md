# craft-gulp-boilerplate
A gulp boilerplate, built inside of Craft CMS.

## Getting Started
If you don't already have node.js installed, please do so here: https://nodejs.org/en/

Once you have node installed, run the following command in Terminal to install gulp through npm (node package manager): `sudo npm install gulp -g`

Now that we have gulp installed universally, it's time to create a gulp project!

Navigate in Terminal to the main project folder you'd like to run gulp on/in. This folder would be something like ~/project, not ~/project/less. Once you've CD'd to your project folder, run the following command: `npm init`.

After running this command, you will get prompted to enter some information, and then verify by hitting return (enter).

Now that we've initialized npm and created a project, we can install gulp to the project: `npm install gulp --save-dev`.

Now that gulp is set up, you need to install a couple of packages via npm. Run the following commands in your terminal:
`npm install gulp-path`
`npm install --save-dev gulp-autoprefixer`
`npm install gulp-clean-css --save-dev`

Now it's time to choose. If you're going to be using gulp to compile SASS files (.scss), run this command: `npm install gulp-sass --save-dev`. If you're going to be using gulp to compile LESS files (.less) run this command: `npm install gulp-less --save-dev`


###Configuring gulpfile.js
If you take a look at the project files, you'll see 2 files containing gulpfile. gulpfile-sass.js and gulpfile-less.js. You can remove the file type (either less or sass) that you're not going to use, and rename the remaining file to gulpfile.js. **This is important**: Gulp will not work correctly unless the gulpfile is named correctly.

###Configuring the File Structure
Inside of public/assets/ you'll see there are 3 folders. You can remove one or the other of the SASS and LESS folders.

###Running Craft
If you try to actually run craft from this repo, you'll notice nothing works. You need to download a fresh copy of Craft CMS from craftcms.com, and drop the `/app` folder from the installation you just downloaded, inside of the  `/craft` folder of this repo.

##Roadmap
<li>JS concat + compiling (near future)</li>
<li>Image optimization (possible)</li>

And I'm open to any suggestions that you might have, just let me know.
