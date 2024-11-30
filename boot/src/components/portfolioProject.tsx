import React from 'react';

type PortfolioProjectProps = {
    name: string;
    description: string;
    image: string;
    link: string;
};

const PortfolioProject: React.FC<PortfolioProjectProps> = ({ name, description, image, link }) => {
    return (
        <div className="project-portfolio">
            <a href={link} className="Home">
                <img src={image} alt={name} />
            </a>
            <div className="project-details">
                <p className="project-name">{name}</p>
                <p className="project-description">{description}</p>
                <a href={link}>LEARN MORE</a>
            </div>
        </div>
    );
};

export default PortfolioProject;
