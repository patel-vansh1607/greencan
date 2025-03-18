import "./blog.css"
import Navbar from "../components/NavBar";

const essays = [
  {
    id: 1,
    title: "The Power of One: How Small Actions Can Save the Planet",
    author: "Vansh Patel",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    title: "Green Credit Programme in Nakuru",
    author: "Natasha Karanja",
    imgSrc: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    title: "The Plastic Problem: How Our Oceans Are Drowning",
    author: "Aisha Kamauz",
    imgSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    title: "Green Cities: How Urban Areas Can Fight Climate Change",
    author: "Aisha Kamau",
    imgSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 5,
    title: "A World Without Trees: The Dangers of Deforestation",
    author: "Priya Shah",
    imgSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay1"></div>
      <div className="hero-content">
        <h1>Insights for a Sustainable Future</h1>
        <p>
          Stay informed about the latest trends in waste management, recycling
          innovations, and environmental preservation.
        </p>
        <div className="hero-buttons">
          <button className="primary-button">
            Contact Us
            <i data-lucide="mail"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const EssayItem = ({ essay }) => {
  return (
    <div className="essay-item">
      <div className="essay-thumbnail">
        <img src={essay.imgSrc} alt={essay.title} />
      </div>
      <div className="essay-info">
        <h2>{essay.title}</h2>
        <div className="author">By {essay.author}</div>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
};

const BlogPage = () => {

  return (
    <div className="maindiv">
        <Navbar />
      <Hero />
      <main className="container">
        <div className="essay-list">
          {essays.map((essay) => (
            <EssayItem key={essay.id} essay={essay} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;