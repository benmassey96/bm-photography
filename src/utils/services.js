import businessPhoto from '../images/service_thumbnails/macman_5.jpg';
import spouse from '../images/service_thumbnails/spouse_6.jpg';
import product from '../images/service_thumbnails/barking_mad_2.jpg';
import events from '../images/service_thumbnails/hfd_comicon_5.jpg';
import pet from '../images/service_thumbnails/jack_2.jpg';
import portrait from '../images/service_thumbnails/family_portrait.jpg';
import weddings from '../images/service_thumbnails/weddings.jpg';

const services = [
  {
    "id": "business",
    "name": "Small Business",
    "description": "Suppose you have a small business and you're looking to get some fresh, vibrant, new photos to entise potential new customers. You may be a brewery, launching a new line of core beers? A personal trainer seeking new clients?A food vendor looking to tantelise some tastebuds?",
    "includes": ["On-site shoots", "Creative, composition", "High resolution, edited images"],
    "image": businessPhoto
  },

  {
    "id": "personalised",
    "name": "Personalised",
    "description": "Sometimes, the most meaningful moments happen in small, intimate settings. Whether it's a couple's session, a family gathering, or a personal portrait for a new socials profile picture, I offer a relaxed and personalized approach to capture the essence of your unique story. These sessions are ideal for creating timeless images that reflect the true spirit of your relationships.",
    "includes": ["Personalized photo session", "Location of your choice", "Edited high-resolution images"],
    "image": spouse
  },

  {
    "id": "product",
    "name": "Product",
    "description": "Elevate your brand with stunning product imagery. Whether you're a small business owner or a creative entrepreneur, I offer professional product photography services to showcase your products in the best light. From detailed close-ups to lifestyle shots, I work to highlight the unique features and craftsmanship of your offerings.",
    "includes": ["Studio setup or on-location product shoot", "High-quality, edited images", "Customized styling and composition"],
    "image": product
  },

  {
    "id": "events",
    "name": "Events",
    "description": "Capturing the magic of your special moments is my passion. Whether it's a birthday celebration, corporate event, or any other significant occasion, I specialize in preserving the essence and emotions of the day. Through a blend of candid shots and carefully curated compositions, I ensure your event is immortalized in a visual story that you can cherish for a lifetime.",
    "includes": ["Full event coverage", "Tailored package", "Free consultations"],
    "image": events,
    "notes": "Please note that, currently, I'm not looking to do any wedding shoots until summer 2024 at the earliest."
  },

  {
    "id": "pets",
    "name": "Pets",
    "description": "Our furry friends hold a special place in our hearts, and capturing their playful spirit is a joy. From energetic action shots to endearing portraits, I specialize in pet photography that showcases the unique personality of your beloved pets. Let's create lasting memories that celebrate the joy and companionship they bring into your life.",
    "includes": ["On-location pet photo session", "Candid and posed shots", "Edited high-resoultion images"],
    "image": pet
  },

  {
    "id": "portraits",
    "name": "Portraits",
    "description": "",
    "includes": ["On-location pet photo session", "Candid and posed shots", "Edited high-resoultion images"],
    "image": portrait
  },

  {
    "id": "weddings",
    "name": "Weddings",
    "description": "",
    "includes": ["Packages vary. Get in touch for more information"],
    "image": weddings
  },
];

export default services;