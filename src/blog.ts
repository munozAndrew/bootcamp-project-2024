




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
        slug:"https://www.indeed.com/q-mcdonald's-l-niles,-il-jobs.html?vjk=ca9f610de6765032",
    }, 
    {
        title: "job",
        date: "June 2026",
        description: "aquired ",
        image: "./hank3.png",
        imageAlt: "n",
        slug:"https://www.indeed.com/q-mcdonald's-l-niles,-il-jobs.html?vjk=ca9f610de6765032",

    }

]


export function displayBlog(): void {
    const blogcontainer = document.getElementById("blog-container");

    blogs.forEach((blog) => {
        const blogDiv = document.createElement('div');
        blogDiv.classList.add('post');
        const title = document.createElement('h1');
        title.textContent = blog.title;
        const description = document.createElement('p');
        description.textContent = blog.description;
        const image = document.createElement('img');
        image.src =blog.image;
        blogDiv.appendChild(title);
        blogDiv.appendChild(description);
        blogDiv.appendChild(image);


        blogcontainer?.appendChild(blogDiv);


    });

}