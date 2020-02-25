# Build Brighton Website

The public facing website for [Build Brighton](https://buildbrighton.com), a communal workshop and collective of over 100 makers, designers, tinkerers, hobbyists, engineers and artists who love to build stuff.

## Technical Overview

* **[Hugo](https://gohugo.io)**: Static site generation.
* **[Bulma](https://bulma.io)**: CSS framework.
* **[PostCSS](https://postcss.org/)**: CSS transformation and minification using different plugins.
* **[Netlify](https://www.netlify.com/)**: Hosting and CDN.

## Getting Started

### First Time Setup

* **[Install Hugo >= 0.65](https://gohugo.io/getting-started/installing/)**: This is used to generate the website.
* **[Install Node]()**: This is used to install PostCSS through NPM.
* **Checkout the code**: Run `git clone ...` in the folder where you want the code to live.
* **Install NPM dependencies**: Run `npm install` in the root of the project.

### Development

You can start the Hugo development server by running this command in the root of the project:

```
hugo server
```

### Production

The website is automatically built and published when changes are made to the `master` branch using Netlify. Once you have merged your changes in, you do not need to manually publish them.

If you want to test the website bundling yourself, you can run this command:

```
hugo --gc --minify
```

This will build the site into a folder called `/public`.

## Code Overview

This website uses the standard Hugo folder structure. You can take a look at [their documentation](https://gohugo.io/getting-started/directory-structure/) for an overview of what each folder does.

## Contributing

Please see the [contributing guide](/CONTRIBUTING.md).

## License

The library is released under the MIT license. For more information see [`LICENSE`](/LICENSE).
