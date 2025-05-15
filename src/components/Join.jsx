
const Join = () => {
    const scrollToAbout = () => {
        const section = document.getElementById('about');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return ( 
        <div className="mt-6 space-x-4">
            <button className="border border-white text-slate-200 px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-purple-900 transition-all duration-500 cursor-pointer">Join the Movement</button>
            <button onClick={scrollToAbout} className="border border-white px-6 py-2 rounded-md font-semibold text-white hover:bg-white hover:text-purple-900 transition-all duration-500 cursor-pointer">Learn More</button>
        </div>
     );
}
 
export default Join;