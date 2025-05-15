
const events = [
  'Faith & Tech Meetups',
  'FaithHack (Hackathon)',
  'Tech & Worship Nights',
  'Bible & Tech BootCamps',
  'Annual Conference'
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 px-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-12">Events & Engagement</h2>
      <ul className="max-w-3xl mx-auto space-y-6 text-left">
        {events.map((event, i) => (
          <li key={i} className="border-l-4 border-purple-600 pl-4">{event}</li>
        ))}
      </ul>
    </section>
  );
}
