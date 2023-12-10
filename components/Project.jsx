import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "Production Information",
        description: "When you wake up, just remember friends are forever.",
        image: "/fred.jpg",
        gitUrl: "https://freddy-fazbears-pizza.fandom.com/wiki/Freddy_Fazbear#:~:text=Freddy%20Fazbear%20was%20once%20a,a%20fate%20worse%20than%20death."

    },
    {
        id: 2,
        title: "Class",
        description: "So remember, these characters hold a special place in the hearts of children and we need to show them a little respect, right? Okay.",
        image: "/animatronics.jpg",
        gitUrl: "https://freddy-fazbears-pizza.fandom.com/wiki/Classic_Animatronics"
    },
    {
        id: 3,
        title: "Owner",
        description: "Fazbear Entertainment, Inc.",
        image: "/fazbearentertainment.jpg",
        gitUrl: "https://freddy-fazbears-pizza.fandom.com/wiki/Fazbear_Entertainment,_Inc."
    },
    {
        id: 4,
        title: "Latest Appearance",
        description: "Ladies and Gentlemen, thank you for visiting, and we hope you enjoyed the show! Freddy and the gang are pretty tired, but they'll be back again next week after a few days of scheduled maintenance.",
        image: "/securitybreach.jpg",
        gitUrl: "https://freddy-fazbears-pizza.fandom.com/wiki/Five_Nights_at_Freddy%27s:_Security_Breach"
    }, {
        id: 5,
        title: "Help Wanted!",
        description: "Everything is working as intended!",
        image: "/helpwanted.jpg",
        gitUrl: "https://freddy-fazbears-pizza.fandom.com/wiki/Five_Nights_at_Freddy%27s:_Help_Wanted"
    }, {
        id: 6,
        title: "Special Delivery",
        description: "With the Fazbear Funtime Service, you'll never be alone again!",
        image: "/specialdelivery.jpg",
        gitUrl: "https://freddy-fazbears-pizza.fandom.com/wiki/Five_Nights_at_Freddy%27s_AR:_Special_Delivery"
    }, 

];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">Information about Freddy Fazbear</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;   