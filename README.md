# Imagine Care Nannies website

This site is built with Jekyll for GitHub Pages. Journal articles and job postings are editable through Pages CMS.

## Content editing

- Journal articles live in `_posts/`.
- Job postings live in `_jobs/`.
- Uploaded CMS images are stored in `assets/images/uploads/`.
- Pages CMS is configured in `.pages.yml`.

After the repository is connected to Pages CMS, editors can create, update, publish, unpublish, or remove content without editing HTML.

## Local preview

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. A basic Python static server will not process the Jekyll templates used by the Journal and Open Positions pages.

## GitHub Pages

Publish the repository from the `main` branch and repository root in **Settings → Pages**. GitHub Pages will build the Jekyll site automatically.

