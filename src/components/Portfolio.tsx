import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    id: 1,
    title: 'Historic Gate Restoration',
    before: 'https://images.unsplash.com/photo-1635360394882-6bf9f8ce0d32?auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1635360394882-6bf9f8ce0d32?auto=format&fit=crop&w=800&q=80',
    description: 'Complete restoration of a 19th-century iron gate',
    category: 'Metal Restoration'
  },
  {
    id: 2,
    title: 'Industrial Equipment Cleaning',
    before: 'https://images.unsplash.com/photo-1518623001395-125242310d0c?auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1635360394882-6bf9f8ce0d32?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy machinery restoration and cleaning',
    category: 'Industrial'
  },
  {
    id: 3,
    title: 'Monument Restoration',
    before: 'https://images.unsplash.com/photo-1518623001395-125242310d0c?auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1635360394882-6bf9f8ce0d32?auto=format&fit=crop&w=800&q=80',
    description: 'Delicate cleaning of historical monuments',
    category: 'Cultural Heritage'
  },
  {
    id: 4,
    title: 'Yacht Hull Cleaning',
    before: 'https://images.unsplash.com/photo-1518623001395-125242310d0c?auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1635360394882-6bf9f8ce0d32?auto=format&fit=crop&w=800&q=80',
    description: 'Marine vessel maintenance and restoration',
    category: 'Marine'
  }
];

export default function Portfolio() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(projects.map(project => project.category)));
  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  return (
    <div id="portfolio" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fade-in">
          Our Work
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 animate-slide-in-left">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedCategory === null
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative animate-scale-in delay-${index * 100}`}
            >
              <div className="relative h-96 overflow-hidden rounded-xl">
                {/* Before Image */}
                <img
                  src={project.before}
                  alt={`${project.title} before`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:opacity-0"
                />
                {/* After Image */}
                <img
                  src={project.after}
                  alt={`${project.title} after`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-1000 group-hover:opacity-100 transform scale-105 group-hover:scale-100"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-sm rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>

                {/* Before/After Label */}
                <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="group-hover:opacity-0 transition-opacity duration-500">Before</span>
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">After</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}