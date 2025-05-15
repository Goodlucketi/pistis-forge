
const projects = [
  'Digital Devotional App',
  'Church Admin Systems',
  'Mentorship Platforms',
  'AI-powered Sermon Tools'
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">Key Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <div key={i} className="p-6 border rounded-xl shadow-sm hover:shadow-lg">
            <h4 className="font-bold text-lg mb-2">{proj}</h4>
            <p>Serving church needs while building hands-on experience.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
