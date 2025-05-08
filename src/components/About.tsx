import React from 'react';
import { Plus } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about-me" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light mb-0">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-4">
          <div className="w-full">
            <p className="text-gray-700">
            I'm a third-year student in the Digital Technologies and Artificial Intelligence program at ISCTE-Sintra, with a strong focus on machine learning. I previously completed a research internship at Neroes, where I developed predictive models using CNNs and LSTM networks to analyze behavioral and biometric data, identifying patterns related to anxiety. Since then, I've been working on machine learning projects across various industries, including finance and banking, applying tools like NLP, computer vision, and other advanced ML techniques. I'm also starting my master’s later this year at NOVA IMS, in the Master of Advanced Analytics program with a specialization in Data Science. I'm continually expanding my expertise in areas such as neural networks and reinforcement learning to address complex, real-world problems.
            </p>
          </div>
          
          <div className="w-full flex justify-center">
            <img 
              src="/photo1.png" 
              alt="Portrait" 
              className="w-full h-auto"
              style={{ maxWidth: "500px" }}
            />
          </div>
        </div>
        
        <div className="mt-12 pt-12 border-t border-gray-200">
        </div>
      </div>
    </section>
  );
};

export default About;