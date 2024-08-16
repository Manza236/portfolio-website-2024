import React from 'react';

const Publications = () => {
  // Sample publications data
  const publications = [
    {
      title: 'Innovative AI Techniques',
      type: 'Journal',
      description: 'An in-depth look at innovative AI techniques in modern technology.',
      date: 'January 2023',
      link: '#'
    },
    {
      title: 'Advanced Machine Learning',
      type: 'Conference',
      description: 'A comprehensive study on advanced machine learning algorithms.',
      date: 'March 2023',
      link: '#'
    },
    {
      title: 'Data Science in Healthcare',
      type: 'Journal',
      description: 'Exploring the impact of data science in the healthcare industry.',
      date: 'June 2023',
      link: '#'
    },
  ];

  return (
    <section className="p-6 bg-primary text-secondary">
    <div id='publications-section'> 
    <h2 className="text-3xl font-bold mb-6 text-center">Publications</h2>
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {publications.map((publication, index) => (
      <div key={index} className="p-6 bg-accent rounded-lg shadow-lg hover:bg-teal-600 hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold mb-2 text-secondary">
          {publication.title}
        </h3>
        <p className="text-sm text-secondary">
          {publication.type} | {publication.date}
        </p>
        <p className="mt-2 mb-4 text-secondary">{publication.description}</p>
        <a
          href={publication.link}
          className="text-secondary hover:text-gray-200 transition duration-300"
        >
          Read More
        </a>
      </div>
    ))}
  </div>
    </div>
  
</section>
  );
};

export default Publications;
