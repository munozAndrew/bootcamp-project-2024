




type Person = {
    first: string;
    last: string;
    age: string;
}

const persons: Person[] = [
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
export type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug:string;


};
const blogs: Blog[] = [
    {
        title: "Underwater ceramic technician at a multimillion dollar corporation",
        date: "June 2026",
        description: "aquired ",
        image: "./hank3.png",
        imageAlt: "./hank8/jpg",
        slug:"job1",
    }, 
    {
        title: "job",
        date: "June 2026",
        description: "acquired ",
        image: "./hank8.jpg",
        imageAlt: "n",
        slug:"job2",

    }

]


export function displayBlog(): void {
    const blogContainer = document.getElementById("blog-container");

    blogs.forEach((blog) => {
        const blogDiv = document.createElement('div');
        blogDiv.classList.add('post');
        const title = document.createElement('h1');
        title.textContent = blog.title;
        const description = document.createElement('p');
        description.textContent = blog.description;
        const image = document.createElement('img');
        image.src =blog.image;

        blogDiv.addEventListener('click', () => {
            window.location.href = 'blogs/${blog.slug}.html';

        });

        blogDiv.appendChild(title);
        blogDiv.appendChild(description);
        blogDiv.appendChild(image);
        blogContainer?.appendChild(blogDiv);

        

    });

}

displayBlog();
