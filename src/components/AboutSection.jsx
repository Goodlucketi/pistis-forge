import AboutBg from '../assets/images/vbg.jpg'
import vision from '../assets/images/vision1.png'
import mission from '../assets/images/mission1.png'

export default function AboutSection() {
  return (
    <section id="about" style={{backgroundImage:`url(${AboutBg})`}}  className="py-20 px-10 bg-center">
        <div className='md:flex justify-center items-center md:gap-20 my-5 w-11/12 mx-auto'>
            <div className="w-10/12 mx-auto bg-slate-100/50 p-10 rounded-md shadow-md">
                <div className=''>
                    <h2 className="text-3xl font-bold mb-4 ">Our Vision</h2>
                    <p className="text-lg">
                        We are a Christian tech community committed to equipping believers with digital skills, fostering innovation,
                        and collaborating on projects that advance the Kingdom of God and serve the Church.
                    </p>
                </div> 
            </div>
            <div className="w-10/12 mx-auto bg-slate-200/50 p-10 rounded-md shadow-md">
                <div className="">
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-lg">
                            We are a Christian tech community committed to equipping believers with digital skills, fostering innovation,
                            and collaborating on projects that advance the Kingdom of God and serve the Church.
                        </p>
                    </div>
                </div>
            </div>
        <div className='md:flex justify-center items-center gap-10 my-5 w-11/12 mx-auto'>
            
           

        </div>
     
    </section>
  );
}
