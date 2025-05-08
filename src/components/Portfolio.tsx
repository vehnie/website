import React from 'react';
import { projects } from '../data/projectsData';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-8">
          <div className="w-2 h-2 bg-gray-800 rounded-full mr-2"></div>
          <p className="text-gray-600">Projects</p>
        </div>
        
        <h2 className="text-4xl font-light mb-12">Latest Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-sm">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="text-gray-200 text-sm mb-1">{project.category}</p>
                      <h3 className="text-white font-medium">{project.title}</h3>
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                    >
                      <ArrowUpRight size={16} className="text-gray-800" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;