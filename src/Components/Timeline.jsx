/** @format */
import weddingRing from "../assets/SVG/wedding-rings-wedding-svgrepo-com.svg"
import anniversery from "../assets/SVG/bride-and-groom-svgrepo-com.svg"
import dj from "../assets/SVG/dj-dj-svgrepo-com.svg"
import birthday from "../assets/SVG/birthday-cake-svgrepo-com.svg"
import p_conference from "../assets/SVG/conference.svg"
import brand_p from "../assets/SVG/brand.svg"
const services = [
  {
    icon: weddingRing, // Replace with actual icon component if needed
    alt: "WEDDING",
    title:"WEDDING",
    description:
      "Wedding services include planning and coordinating all aspects of a wedding, such as venue selection, vendor management, catering, decoration, and photography. These services ensure a seamless, stress-free experience, allowing couples to enjoy their special day while professionals handle every detail to perfection.",
  },
  {
    icon: anniversery, // Replace with actual icon component if needed
    title: "ANNIVERSARY PARTY",
    alt:"ANNIVERSARY PARTY",
    description:
      "Anniversary party services handle all aspects of your celebration, including venue selection, decorations, catering, and entertainment. We tailor each event to the couple's preferences, ensuring a memorable and personalized experience. By managing every detail, these professionals provide a seamless, stress-free celebration, allowing you to fully enjoy your special milestone.",
  },
  {
    icon: birthday, // Replace with actual icon component if needed
    title: "BIRTHDAY PARTY",
    alt: "BIRTHDAY PARTY",
    description:
      "Birthday party services handle everything from venue selection and decorations to catering and entertainment. These professionals create personalized and memorable celebrations, tailored to the guest of honor's preferences. By managing every detail, they ensure a fun and stress-free experience, allowing everyone to fully enjoy the special day.",
  },
  {
    icon: dj, // Replace with actual icon component if needed
    title: "LIVE SHOW & DJ",
    alt: "LIVE SHOW & DJ",
    description:
      "Live show and DJ services offer engaging entertainment for events, featuring live performances and customized music playlists. We manage sound, lighting, and atmosphere to enhance the experience. These professionals ensure a vibrant and memorable occasion, perfect for weddings, parties, and corporate events, making your celebration truly special.",
  },
  {
    icon: p_conference, // Replace with actual icon component if needed
    title: "PRESS CONFERENCE",
    description:
      "Press conference services ensure seamless event execution, handling everything from venue arrangement to sound and technical setup. We manage logistics, seating, and media coordination, allowing speakers to focus on delivering their message in a professional and organized environment.",
  },
  {
    icon: brand_p, // Replace with actual icon component if needed
    title: "BRAND PROMOTION",
    description:
      "Brand promotion services handle event planning, including venue selection, branding, visual displays, and audience engagement. We tailor each promotion to your brand’s identity, ensuring a memorable event that boosts visibility and leaves a lasting impact on your target audience",
  }
];

const Timeline = () => {
  return (
    <section className='bg-[#fffff0] py-16 lg:px-12' id="services" >
      <div className='container mx-auto px-4 '>
        <h2 className='text-4xl font-bold text-center mb-12 m-auto text-[#80233a]'>OUR SERVICES</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center flex-col'
              data-aos="fade-up">
              <img src={service.icon} alt="wedding" className='text-orange-500 text-6xl mb-4 h-20 w-20'/>
               
              <h3 className='text-2xl font-bold mb-4 text-[#80233a]'>{service.title}</h3>
              <p className='text-gray-700'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
