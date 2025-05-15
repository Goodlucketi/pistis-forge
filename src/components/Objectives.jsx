
const objectives = [
  'Spiritual-Tech Integration',
  'Skill Development',
  'Faith-Driven Innovation',
  'Community Collaboration',
  'Sustainable Growth'
];

export default function ObjectivesSection() {
  return (
    <section id="objectives" className="py-20 px-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-12">Core Objectives</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {objectives.map((obj, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h3 className="font-semibold text-xl mb-2">{obj}</h3>
            <p>Empowering believers to blend faith and tech for purposeful impact.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
