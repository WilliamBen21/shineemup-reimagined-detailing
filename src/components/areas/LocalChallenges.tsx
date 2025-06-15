
import React from 'react';

interface Challenge {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface LocalChallengesProps {
  areaName: string;
  challenges: Challenge[];
}

const LocalChallenges = ({ areaName, challenges }: LocalChallengesProps) => {
  return (
    <section className="py-16 bg-black/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Understanding {areaName}'s Car Care Challenges
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Local expertise for Charlotte's unique environmental conditions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">{challenge.title}</h3>
              <p className="text-gray-400 mb-4">
                {challenge.description}
              </p>
              <img
                src={challenge.image}
                alt={challenge.alt}
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalChallenges;
