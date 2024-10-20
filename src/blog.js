"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayBlog = displayBlog;
var persons = [
    {
        first: "radahn",
        last: "starscourge",
        age: "1200 years",
    },
    {
        first: "morgott",
        last: "veiled",
        age: "1800 years",
    }
];
var blogs = [
    {
        title: "Underwater ceramic technician at a multimillion dollar corporation",
        date: "June 2026",
        description: "aquired ",
        image: "./hank3.png",
        imageAlt: "./hank8/jpg",
        slug: "job1",
    },
    {
        title: "job",
        date: "June 2026",
        description: "acquired ",
        image: "./hank8.jpg",
        imageAlt: "n",
        slug: "job2",
    }
];
function displayBlog() {
    var blogContainer = document.getElementById("blog-container");
    blogs.forEach(function (blog) {
        var blogDiv = document.createElement('div');
        blogDiv.classList.add('post');
        var title = document.createElement('h1');
        title.textContent = blog.title;
        var description = document.createElement('p');
        description.textContent = blog.description;
        var image = document.createElement('img');
        image.src = blog.image;
        blogDiv.addEventListener('click', function () {
            window.location.href = 'blogs/${blog.slug}.html';
        });
        blogDiv.appendChild(title);
        blogDiv.appendChild(description);
        blogDiv.appendChild(image);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv);
    });
}
displayBlog();
