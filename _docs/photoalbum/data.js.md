---
layout: docs
title: data.js
parent: PhotoAlbum
---

## Default

```js
var album = {
    title: "",

    collections: [
        {
            name: "",
            photos: [
                { caption: "", url: "" }
            ]
        }
    ]
}
```

## Example

```js
var album = {
    title: "ALBUM TITLE",

    collections: [
        {
            name: "COLLECTION NAME",
            photos: [
                { caption: "PHOTO CAPTION", url: "/path/to/image" },
                { caption: "PHOTO CAPTION", url: "/path/to/another/image" }
            ]
        }
    ]
}
```