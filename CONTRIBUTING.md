# Contibuting to the Build Brighton website

## Editing the Website Content

TODO

## Modifying the source code

If you need to modify the website more extensively, you can edit the code directly.

### First Time Setup

* **[Install Hugo >= 0.65](https://gohugo.io/getting-started/installing/)**: This is used to generate the website.
* **[Install Node]()**: This is used to install a few small dependencies through NPM.
* **Checkout the code**: Run `git clone ...` in the folder where you want the code to live.
* **Install NPM dependencies**: Run `npm install` in the root of the project.

### Running in Development Mode

You can start the Hugo development server by running this command in the root of the project:

```
hugo server
```

### Code Overview

This website uses the standard Hugo folder structure. You can take a look at [their documentation](https://gohugo.io/getting-started/directory-structure/) for an overview of what each folder does.

### Building for Production

The website is automatically built and published when changes are made to the `master` branch using Netlify. Once you have merged your changes in, you do not need to manually publish them.

If you want to test the website bundling yourself, you can run this command:

```
hugo --gc --minify
```

This will build the site into a folder called `/public`.
