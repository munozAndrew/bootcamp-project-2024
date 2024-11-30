import React from 'react';
//import BlogPreview from '@/components/blogPreview';
//import { blogs } from "../../static/blogData";
import connectDB from '@/database/db';
import PortfolioProjectProps from '@/components/portfolioProject';
import PortfolioProject from '@/database/portfolioSchema';

export async function getPortfolio() {
    await connectDB();

    try {
        const projects = await PortfolioProject.find().orFail(); 
        return projects;
    } catch (err) {
        console.error("Error fetching portfolio projects:", err);
        return null;
    }
}


export default async function PortfolioPage() {
    const projects = await getPortfolio();

    if (!projects) {
        return (
            <main>
                <h1>Portfolio</h1>
                <p>No projects found or an error occurred.</p>
            </main>
        );
    }

    return (
        <main className="portfolio-page">
            <h1>Portfolio</h1>
            <div>
                {projects.map((project) => (
                    <PortfolioProjectProps
                        key={project._id} // MongoDB _id as unique key
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </main>
    );
}