// Essay data
const essays = [
    {
      id: 1,
      title: "The Power of One: How Small Actions Can Save the Planet",
      author: {
        name: "Emma Johnson",
        role: "Literary Critic",
        image: "../Images/prof-pages/vansh.jpg"
      },
      thumbnail: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bannerImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      content: "The world is facing an environmental crisis, but the power to change it lies within each of us. While large corporations and governments play a big role in pollution and climate change, individual actions also have a significant impact. <br><br> Consider the story of Aanya, a young girl who started planting trees in her neighborhood. She didn’t wait for someone else to take action—she grabbed a shovel and started. Over time, her small act inspired her friends, family, and even local schools to participate in tree-planting drives. Within a few years, her community had planted thousands of trees, improving air quality and providing shelter for birds and animals.<br><br> Similarly, reducing waste is another way individuals can contribute. Simple habits like carrying reusable bags, saying no to plastic straws, and composting food scraps help decrease pollution. Imagine if every person in a city of one million people stopped using plastic bags—millions of bags would be saved from polluting oceans and landfills. <br><br> Technology is also playing a role in environmental conservation. Apps that help people track their carbon footprint, electric vehicles, and AI-driven recycling solutions are helping individuals make eco-friendly choices. <br><br> Change starts with one person. Whether it’s planting a tree, reducing waste, or advocating for better policies, each small action adds up to a significant difference. The planet doesn’t need one perfect environmentalist—it needs millions of people making small, consistent changes."
    },
    {
      id: 2,
      title: "Philosophy in the Digital Age",
      author: {
        name: "Marcus Chen",
        role: "Philosophy Professor",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      thumbnail: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bannerImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      content: "The digital revolution has profoundly impacted not only how we live and work but also how we think and engage with philosophical questions. This essay explores the intersection of technology and philosophy, examining how digital platforms have democratized philosophical discourse while simultaneously creating new ethical dilemmas.\n\nClassical philosophical inquiries about knowledge, reality, and ethics take on new dimensions in the digital context. Epistemological questions about truth and knowledge become increasingly urgent in an era of misinformation and algorithmic curation. The nature of reality is complicated by virtual and augmented experiences that blur the line between the physical and digital worlds. Ethical frameworks must adapt to address novel issues like privacy, digital rights, and the moral status of artificial intelligence.\n\nSocial media platforms have transformed how philosophical ideas circulate and evolve. While they enable broader participation in philosophical discussions, they also tend to reward brevity and provocative content over nuanced analysis. This tension between accessibility and depth presents both opportunities and challenges for contemporary philosophy.\n\nArtificial intelligence raises particularly fascinating philosophical questions. As machine learning systems become more sophisticated, they prompt us to reconsider fundamental concepts like consciousness, creativity, and moral agency. Can a machine truly understand meaning? Could an AI system develop something akin to consciousness? What moral responsibilities do we have toward increasingly autonomous systems?\n\nThe philosophy of mind finds new territory in discussions of brain-computer interfaces and digital extensions of cognition. As our thinking becomes increasingly entangled with digital tools, the boundaries of the self and the nature of human cognition require reexamination.\n\nFrom artificial intelligence to virtual reality, emerging technologies continue to challenge our fundamental assumptions about consciousness, identity, and reality itself. By engaging thoughtfully with these challenges, philosophy can help us navigate the complex ethical and existential questions of our digital future."
    },
    {
      id: 3,
      title: "Climate Change: A Historical Perspective",
      author: {
        name: "Sophia Rodriguez",
        role: "Environmental Historian",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bannerImage: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      content: "While climate change dominates contemporary environmental discourse, awareness of human impact on climate systems has a rich historical lineage. This essay traces the evolution of climate science from early observations by natural philosophers to modern computational models.\n\nThe scientific understanding of climate change began taking shape in the 19th century. In 1824, Joseph Fourier first described what we now call the greenhouse effect, noting that the Earth's atmosphere traps heat like a glass container. By 1896, Swedish scientist Svante Arrhenius calculated that doubling atmospheric carbon dioxide would significantly increase global temperatures—a remarkably prescient conclusion given the limited data available.\n\nThrough the early and mid-20th century, climate science advanced through improved measurement techniques and expanding data collection. The International Geophysical Year of 1957-1958 marked a turning point, establishing continuous monitoring of atmospheric carbon dioxide at Mauna Loa Observatory in Hawaii. The resulting 'Keeling Curve' provided unequivocal evidence of rising CO₂ levels.\n\nPublic and political awareness of climate change emerged more gradually. The 1970s saw growing environmental consciousness, though media attention often focused on pollution and resource depletion rather than climate specifically. By the late 1980s, as scientific consensus solidified, climate change began receiving more dedicated attention, culminating in the formation of the Intergovernmental Panel on Climate Change (IPCC) in 1988.\n\nHistorical records reveal that societies have long recognized and responded to climate variations. Medieval Europeans documented unusual weather patterns and their effects on agriculture. Indigenous knowledge systems across the world incorporated sophisticated understanding of climate cycles and adaptation strategies. These historical responses offer valuable insights for contemporary climate resilience.\n\nBy examining historical responses to climate anomalies, we gain valuable insights into the social, political, and economic dimensions of our current environmental challenges. Understanding this history is crucial for developing effective and equitable climate policies that acknowledge both the scientific realities and the complex human dimensions of climate change."
    }
  ];
  
  // DOM Elements
  const essayList = document.getElementById('essayList');
  const essayDetail = document.getElementById('essayDetail');
  const closeBtn = document.getElementById('closeBtn');
  const essayBanner = document.getElementById('essayBanner');
  const essayTitle = document.getElementById('essayTitle');
  const authorImage = document.getElementById('authorImage');
  const authorName = document.getElementById('authorName');
  const authorRole = document.getElementById('authorRole');
  const essayContent = document.getElementById('essayContent');
  
  // Add event listeners to all "Read More" buttons
  document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function() {
      const essayId = parseInt(this.getAttribute('data-essay-id'));
      showEssayDetail(essayId);
    });
  });
  
  // Close button event listener
  closeBtn.addEventListener('click', function() {
    essayDetail.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  });
  
  // Function to show essay detail
  function showEssayDetail(id) {
    const essay = essays.find(essay => essay.id === id);
    
    if (essay) {
      // Populate the detail view with essay data
      essayBanner.src = essay.bannerImage;
      essayBanner.alt = essay.title;
      essayTitle.textContent = essay.title;
      authorImage.src = essay.author.image;
      authorImage.alt = essay.author.name;
      authorName.textContent = essay.author.name;
      authorRole.textContent = essay.author.role;
      
      // Replace newlines with paragraph breaks for better formatting
      essayContent.innerHTML = essay.content.split('\n\n').map(paragraph => 
        `<p>${paragraph}</p>`
      ).join('');
      
      // Show the detail view
      essayDetail.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
      
      // Scroll to top of the detail view
      essayDetail.scrollTop = 0;
    }
  }