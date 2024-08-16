import React from 'react';

const Achievements = () => {
  // Sample achievements data
  const achievements = [
    {
      title: 'Best Research Paper Award',
      description: 'Awarded for the best research paper in AI conference 2023.',
      date: 'March 2023',
    },
    {
      title: 'Innovative Project Grant',
      description: 'Received a grant for innovative project development in 2022.',
      date: 'December 2022',
    },
    {
      title: 'Top 10 Startups',
      description: 'Recognized as one of the top 10 startups in the tech industry in 2021.',
      date: 'July 2021',
    },
  ];

  return (
    <section className="p-6 bg-primary text-secondary">
    <div id='achievements-section'>
    <h2 className="text-3xl font-bold mb-6 text-center">Achievements</h2>
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {achievements.map((achievement, index) => (
      <div
        key={index}
        className="p-6 bg-secondary rounded-lg shadow-lg hover:bg-gray-300 hover:shadow-xl transition duration-300"
      >
        <h3 className="text-xl font-semibold mb-2 text-primary">{achievement.title}</h3>
        <p className="text-sm text-primary">{achievement.date}</p>
        <p className="mt-2 text-primary">{achievement.description}</p>
      </div>
    ))}
  </div>
    </div>
  
</section>

  );
};

export default Achievements;
