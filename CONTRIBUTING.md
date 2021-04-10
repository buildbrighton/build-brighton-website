# Contibuting to the Build Brighton website

## Editing the Website Content

### First Time Setup

* **[Install Hugo >= 0.65](https://gohugo.io/getting-started/installing/)**: This is used to generate the website. _(Note: The "extended" version of Hugo is needed)_
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


#### Homepage Content

The content for the homepage is split into different *sections*. All of the content for these pages are stored in `content/home` and have their own `.md` or `.html` file.

Each file starts with some *frontmatter*. This is an example from *The Space* section:

```
---
title: The Space
weight: 20
anchor: "the-space"
navbarTitle: The Space
headless: true
homeType: section
---
```

After the frontmatter comes the content of the page. How this is rendered is affected the the `homeType` chosen (see below).

The frontmatter is surrounded by `---` lines. Each line inside it starts with a property name, followed by a `:` and then the value. Some of these are standard Hugo properties, and some are custom for this website.

* `title`: The title of the section on the homepage. This is displayed as a heading above the content for most `homtType`s.
* `weight`: This affects the order of the sections. They are sorted in accending order.
* `anchor` and `navbarTitle`: If these are present then the section will appear in the nav bar at the top of the screen. This allows the nav bar title to be different than the section title itself.
* `headless`: This should always be set to `true`. This stops Hugo creating a separate page for the section as we have a "single page" homepage.
* `homeType`: This changes the way the content of the page is rendered:
    * `homeType: section`: This will render the content of the page inside a `<section>` container with a `h2` for the title. If the page file is a `.md` markdown file, then it will be formatted correctly. Alternatively, if it's a `.html` file then the HTML will be inserted as is.
    * `homeType: raw`: This will just render the content of the page directly. This gives you precice control over what is displayed, but you will need to manually setup things like anchors and titles.
    * `homeType: contactUs`: A special case for the contact form. The content is displayed on top of the contact form itself. This should likely be refactored away in the future using shortcodes instead.

#### Other Content

The other content is stored in regular content files. For example, `content/join/index.html` stores the content for the "Join" page. These are just standard Hugo pages, so see their documentation for how these work.

#### Layouts

The actual rendering of the content is done using the layouts. These are all stored in the `layouts/` folder. The main ones are:

* `layouts/_defaults/baseof.html`: This is the outermost layout file. It provides the outer wrapper for all other layouts and brings in the correct partials and content. The partials and blocks it currently renders are:
    * `layouts/partials/head.html`: This brings in the meta tags and links the stylesheets correctly.
    * `layouts/partials/header.html`: This renders the nav bar at the top of the page.
    * In this middle of these the `main` block is rendered. This is defined by the layout file in charge of rendering each page using `{{ define "main" }}`.
    * `layouts/partials/footer.html`: This renders the footer at the bottom pf the page.

The important content layout files are:

* `layouts/index.html`: The layout file for the "single page" homepage. This includes the logic for ordering the pages by weight and rendering the different sections by `homeType`.
* `layouts/404.html`: The "page not found" error message.
* `layouts/_defaults/single.html`: The layout used to render the content of pages other than the homepage. This likely just wraps the content in a `<section>` tag to render it correctly.

There are also various layout files for different partials and shortcodes.

### Building for Production

The website is automatically built and published when changes are made to the `master` branch using Netlify. Once you have merged your changes in, you do not need to manually publish them.

If you want to test the website bundling yourself, you can run this command:

```
hugo --gc --minify
```

This will build the site into a folder called `/public`.
