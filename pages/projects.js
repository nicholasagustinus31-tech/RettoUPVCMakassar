import { useMemo, useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';
import projectsData from '../data/projects';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' }
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projectsData;
    return projectsData.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <Layout>
      <SEOHead
        title="Portofolio Proyek uPVC | Retto uPVC Makassar"
        description="Jelajahi proyek pintu dan jendela uPVC untuk hunian dan komersial dengan kualitas instalasi profesional dari Retto uPVC Makassar."
      />
      <section className="bg-light py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl font-semibold text-dark">Portofolio Proyek</h1>
            <p className="mt-4 text-base text-gray-600">
              Koleksi proyek hunian dan komersial yang memperlihatkan integrasi desain modern dan performa maksimal produk uPVC
              kami.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="150">
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-glow'
                    : 'bg-white text-gray-600 hover:bg-primary/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3" data-aos="fade-up" data-aos-delay="200">
            {filteredProjects.map((project) => (
              <div key={project.id} className="mb-6 break-inside-avoid" data-aos="zoom-in" data-aos-delay="250">
                <div className="group relative cursor-pointer overflow-hidden rounded-3xl" onClick={() => setSelectedProject(project)}>
                  <div className="relative h-full min-h-[240px] w-full">
                    <Image
                      src={project.image}
                      alt={`${project.name} - ${project.location}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-dark/80 via-dark/20 to-transparent p-6 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-xs uppercase tracking-[0.4em] text-primary">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold">{project.name}</h3>
                    <p className="text-xs text-gray-200">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-dark shadow"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
            <div className="relative h-[460px] w-full">
              <Image
                src={selectedProject.image}
                alt={`${selectedProject.name} - ${selectedProject.location}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-3 p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-semibold text-dark">{selectedProject.name}</h3>
              <p className="text-sm text-gray-600">{selectedProject.location}</p>
              <p className="text-sm text-gray-600">
                Kami menyediakan desain kustom, koordinasi instalasi onsite, serta quality control ketat untuk memastikan setiap
                proyek memenuhi standar arsitektur premium.
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProjectsPage;
