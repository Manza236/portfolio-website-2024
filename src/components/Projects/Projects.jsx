import React from 'react';

const Projects = () => {
  // Sample projects data
  const proposedConcepts = [
    { title: 'Concept 1', description: 'Description of proposed concept 1.' },
    { title: 'Concept 2', description: 'Description of proposed concept 2.' },
    { title: 'Concept 3', description: 'Description of proposed concept 3.' },
  ];

  const ongoingProjects = [
    { title: 'Ongoing Project 1', description: 'Description of ongoing project 1.' },
    { title: 'Ongoing Project 2', description: 'Description of ongoing project 2.' },
    { title: 'Ongoing Project 3', description: 'Description of ongoing project 3.' },
  ];

  const finishedProjects = [
    { title: 'Finished Project 1', description: 'Description of finished project 1.' },
    { title: 'Finished Project 2', description: 'Description of finished project 2.' },
    { title: 'Finished Project 3', description: 'Description of finished project 3.' },
  ];

  return (
    <section className="p-6 bg-primary text-secondary">
  <div id='projects-section'>
  <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
  <div className="grid gap-6 md:grid-cols-3">
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-accent">Proposed Concepts</h3>
      <div className="space-y-4">
        {proposedConcepts.map((concept, index) => (
          <div
            key={index}
            className="p-4 bg-secondary rounded-lg shadow-lg hover:bg-gray-300 hover:shadow-xl transition duration-300"
          >
            <h4 className="text-xl font-bold text-primary">{concept.title}</h4>
            <p className="text-primary">{concept.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-accent">Ongoing Projects</h3>
      <div className="space-y-4">
        {ongoingProjects.map((project, index) => (
          <div
            key={index}
            className="p-4 bg-secondary rounded-lg shadow-lg hover:bg-gray-300 hover:shadow-xl transition duration-300"
          >
            <h4 className="text-xl font-bold text-primary">{project.title}</h4>
            <p className="text-primary">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-accent">Finished Projects</h3>
      <div className="space-y-4">
        {finishedProjects.map((project, index) => (
          <div
            key={index}
            className="p-4 bg-secondary rounded-lg shadow-lg hover:bg-gray-300 hover:shadow-xl transition duration-300"
          >
            <h4 className="text-xl font-bold text-primary">{project.title}</h4>
            <p className="text-primary">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
  
</section>

  );
};

export default Projects;
