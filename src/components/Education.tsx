import React from 'react';
import { education } from '../data/educationData';
import { ArrowUpRight } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-8">
          <div className="w-2 h-2 bg-gray-800 rounded-full mr-2"></div>
          <p className="text-gray-600">Education</p>
        </div>
        
        <h2 className="text-4xl font-light mb-12">Academic Background</h2>
        
        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className="space-y-10">
            {education.map((edu) => (
              <div key={edu.id} className="pb-10 border-b border-gray-200">
                <h3 className="text-xl font-medium mb-1">{edu.institution}</h3>
                <p className="text-gray-500 mb-3">• {edu.period}</p>
                
                <div className="flex justify-between items-start mb-4">
                  <p className="text-gray-600">{edu.degree}, {edu.location}</p>
                </div>
                
                <p className="text-gray-600 mb-4">{edu.description}</p>
                
                <div className="flex gap-2 mt-4">
                  {edu.tags.map((tag, index) => (
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

export default Education;