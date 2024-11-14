/** @format */
import weddingRing from "../assets/SVG/wedding-rings-wedding-svgrepo-com.svg";
import anniversery from "../assets/SVG/bride-and-groom-svgrepo-com.svg";
import dj from "../assets/SVG/dj-dj-svgrepo-com.svg";
import birthday from "../assets/SVG/birthday-cake-svgrepo-com.svg";
import p_conference from "../assets/SVG/conference.svg";
import brand_p from "../assets/SVG/brand.svg";
import baby from "../assets/SVG/Baby.svg";
import corporate from "../assets/SVG/corporate_events.svg";
import house_party from "../assets/SVG/house_party.svg";
import party from "../assets/SVG/party-svgrepo-com.svg";
import house_ino from "../assets/SVG/houseInogration.svg";
import event from "../assets/SVG/event.svg";
import corner_flower from "../assets/SVG/pngwing.png";
import dance from "../assets/SVG/dance.svg";
import frame from "../assets/SVG/frame.png";
import frame2 from "../assets/SVG/frame2.png";
import flower from "../assets/about/wedding-bg.png";
import flower2 from "../assets/about/team-1-bg.png";
const services = [
  {
    icon: weddingRing, // Replace with actual icon component if needed
    alt: "WEDDING",
    title: "WEDDING",
    description:
      "Wedding services include planning and coordinating all aspects of a wedding, such as venue selection, vendor management, catering, decoration, and photography. These services ensure a seamless, stress-free experience, allowing couples to enjoy their special day while professionals handle every detail to perfection.",
  },
  {
    icon: anniversery, // Replace with actual icon component if needed
    title: "ANNIVERSARY PARTY",
    alt: "ANNIVERSARY PARTY",
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
  },
  {
    icon: baby,
    title: "BABY SHOWER",
    description:
      "Baby shower services handle all aspects of planning, from venue selection and decorations to catering and games. These professionals create a personalized and joyful atmosphere, celebrating the parents-to-be. By managing every detail, they ensure a seamless, stress-free event, allowing guests and the expecting family to enjoy the special occasion.",
  },
  {
    icon: corporate,
    title: "CORPORATE EVENTS",
    description:
      "Corporate event services manage all aspects of business events, from venue selection and logistics to catering and entertainment. These professionals ensure smooth execution, whether it's conferences, product launches, or team-building events. Tailored to your brand's needs, they provide a seamless, professional experience, leaving a lasting impression on attendees.",
  },
  {
    icon: house_party,
    title: "HOUSE WARMING PARTY",
    description:
      "Housewarming party services manage the planning and execution of your celebration, from invitations and decorations to catering and entertainment. These professionals ensure a warm and welcoming atmosphere for your guests. By handling all the details, they create a stress-free experience, allowing you to enjoy your new home and celebrate this special milestone.",
  },
  {
    icon: party,
    title: "LIGHT, FLOWER & BALLON",
    description:
      "Light, flower, and balloon services enhance event decor with vibrant lighting, beautiful floral arrangements, and creative balloon designs. These professionals tailor decorations to match your theme, creating a visually stunning and festive atmosphere. Perfect for weddings, parties, and corporate events, they ensure a memorable and enchanting celebration with their expertise.",
  },
  {
    icon: dance,
    title: "CULTURAL PROGRAM",
    description:
      "Cultural program services organize and manage events that celebrate diverse traditions, arts, and performances. They handle all aspects, including venue selection, performers, and logistics, creating a vibrant and immersive experience. Whether for festivals, community events, or corporate functions, these services ensure an engaging and memorable celebration of cultural heritage.",
  },
  {
    icon: house_ino,
    title: "SHOP INAUGURATION",
    description:
      "Shop inauguration services manage all aspects of opening ceremonies, including venue setup, decorations, ribbon-cutting arrangements, and guest coordination. They create a festive atmosphere with lighting, flowers, and entertainment, ensuring a memorable and professional event. These services help attract attention to your new business, leaving a positive first impression on customers and attendees.",
  },
  {
    icon: event,
    title: "ALL TYPE OF EVENTS",
    description:
      "We offer comprehensive planning and coordination for various occasions, including weddings, corporate events, parties, and cultural programs. They handle every detail, from venue selection and décor to catering and entertainment. These professionals ensure a seamless, personalized, and stress-free experience, making every event memorable and flawlessly executed.",
  },
];

const Timeline = () => {
  return (
    <section className="bg-[#fffff0]  pt-16 pb-8 lg:px-12" id="services">
      <div className="container mx-auto px-4 ">
        <div className="text-6xl flex items-center justify-center font-bold text-center mb-12 m-auto text-[#80233a] font-dancing">
          <div className="w-72 max-w-4xl px-4">
            <div className="h-1 bg-gradient-to-r from-transparent via-[#80233a] to-transparent"></div>
          </div>
          Our Services
          <div className="w-72 max-w-4xl px-4">
            <div className="h-1 bg-gradient-to-r from-transparent via-[#80233a] to-transparent"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white relative p-8 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center flex-col"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <img
                src={service.icon}
                alt="wedding"
                className="text-orange-500 text-6xl mb-4 h-20 w-20"
              />
              <img
                src={frame}
                alt="flower"
                className=" w-56 h-56 absolute top-o opacity-20 "
                style={{ top: "-20px", left:"-22px" }}
              />
              <img
                src={frame2}
                alt="flower"
                className=" w-32 h-32 absolute opacity-20 "
                style={{ bottom: "0px", right: "0px" }}
              />

              <h3 className="text-2xl font-bold mb-4 text-[#80233a]">
                {service.title}
              </h3>
              <p className="text-black font-semibold">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
