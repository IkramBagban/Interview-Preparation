HTML Basics
What is ```<!Doctype html>``` in HTML5?
```<!DOCTYPE html> ``` is a declaration used at the beginning of HTML documents to specify the document type and version. In HTML5, this declaration is used to instruct the browser to render the page in standards mode. It helps ensure that the document behaves correctly across different browsers without relying on a specific version of HTML.

Example:
```bash
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    The content of the document......
</body>
</html>
```
Difference between ```<div>``` and ```<span>``` in HTML
The ```<div>``` and ```<span>``` elements are used to group content in HTML but differ in how they display:

```<div>``` is a block-level element meaning it starts on a new line and stretches out to the left and right as far as it can. It is used to structure larger blocks of content or sections within a page.

```<span>``` is an inline element meaning it does not start on a new line and only takes up as much width as necessary. It is used to group or style a small segment of HTML within a line, such as coloring a text segment, without breaking the flow of that line.

Example:
```bash
<div>This is a block-level element.</div>
<span>This is an inline element.</span>
```
Semantic vs Non-Semantic Tags in HTML
Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page:

Semantic tags: Clearly define its content like <form>, <table>, and ```<article>``` - they not only display content but also express its meaning and structure to the browser and the developer.

Non-semantic tags: ```<div>``` and ```<span>``` do not define their content and are used for styling purposes without giving any information about their contents.

Using semantic tags gives better accessibility for readers and search engines, and improves the web's overall quality.

Example of semantic HTML:

```bash
<article>
    <h1>Blog Title</h1>
    <p>Written by John Doe</p>
</article>
```
