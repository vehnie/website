import React from 'react';
import { experiences } from '../data/experienceData';
import { ArrowUpRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-8">
          <div className="w-2 h-2 bg-gray-800 rounded-full mr-2"></div>
          <p className="text-gray-600">Experiences</p>
        </div>
        
        <h2 className="text-4xl font-light mb-12">Professional Background</h2>
        
        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="pb-10 border-b border-gray-200">
                <h3 className="text-xl font-medium mb-1">{exp.company}</h3>
                <p className="text-gray-500 mb-3">• {exp.period}</p>
                
                <div className="flex justify-between items-start mb-4">
                  <p className="text-gray-600">{exp.position}, {exp.location}</p>
                </div>
                
                <div className="flex gap-2 mt-4">
                  {exp.tags.map((tag, index) => (
                    <span key={index} className="px-4 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;