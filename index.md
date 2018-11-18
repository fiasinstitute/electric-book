---
title: Home
style: home
---

# Éditions Vodary Paris

This is the online reading platform of the open access publisher Vodary Paris. It hosts website versions of its books.

At its heart is the [Electric Book Jekyll template](https://github.com/electricbookworks/electric-book), which you're looking at now. This template includes:

- an [almost blank book](book/text/0-3-contents.html) to work into,
- a book of [sample features and typography](samples/text/00-05-contents-page.html),
- a [sample translation](samples/fr/text/00-05-contents-page.html), and
- {% if site.output == "web" %}[documentation](docs/index.html){% else %}[online documentation](http://electricbook.works/docs/index.html){% endif %}.

{% include metadata %}
{% if output-docs == true %}
[Read the docs]({{ site.baseurl }}/docs)
{:.button}
{% endif %}



<!-- Remove these comment tags to activate a project home page for your book project

{% include metadata %}

# {{ project-name }}

{{ project-description }}

{% for book in site.data.meta.works %}
*[{{ book.title }}]({{ book.directory }}/text/{{ book.products.web.start-page }}.html)*
{% endfor %}

-->
