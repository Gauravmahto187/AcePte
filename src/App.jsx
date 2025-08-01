import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

const App = () => {
  const handleBookMessage = (session) => {
    const phoneNumber = "9779708533439";
    const message = `I'm interested in booking the ${session} session. How do I book the class?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_self');
  };

  const cardData = [
    {
      title: "Full Course In-Depth",
      price: "NPR 3000",
      duration: "25 Days",
      focus: "Complete and easy-to-follow training, starting from the basics. Perfect for all types of learners, especially beginners who need step-by-step guidance.",
      idealFor: "Anyone new to the PTE exam or planning to start their preparation from the ground up.",
      features: [
        "Lessons start from the very basics—no prior knowledge needed.",
        "Smart tips and scoring techniques to help you perform better.",
        "Helpful materials to improve grammar and other core skills.",
        "High-quality templates and practical resources for each section.",
        "Classes run Sunday to Friday for 25 days"
      ],
      nextSession: "Starts from Sun, Aug 10 (6:00 – 7:00 pm Nepal Time)\nStarts from Sun, Aug 17 (7:00 – 8:00 am Nepal Time)",
      sessionType: "Full Course In-Depth"
    },
    {
      title: "1-Week Crash Course",
      price: "NPR 1200",
      duration: "1 Week",
      focus: "Special emphasis on the most high-scoring question types, with moderate attention to moderately important ones — ideal for quick revision and improvement.",
      idealFor: "Students who already have some understanding of PTE or have taken the test before and want a fast, focused review.",
      features: [
        "Focused and complete preparation to get you test-ready in just one week",
        "Score-boosting tips, tricks, and strategies designed for short-term impact",
        "Access to effective templates and practical study materials",
        "Classes run from Sunday to Friday"
      ],
      nextSession: "Starts from Sunday, Aug 17 (8:00 – 9:00 am Nepal Time)",
      sessionType: "1-Week Crash Course"
    },
    {
      title: "1-on-1 Personal Class",
      price: "Custom Prices",
      duration: "1 Week / 10 Days / 2 Weeks",
      focus: "One-on-one, customized training based on the learner's specific needs and level. Suitable for anyone, regardless of their current preparation stage.",
      idealFor: "Students who are short on time or need focused, personal support to boost their performance.",
      features: [
        "Fully tailored classes designed around your strengths and weaknesses.",
        "Direct feedback and guidance from the instructor assigned to you.",
        "Personalized study plan made just for you.",
        "Mock test analysis with targeted feedback.",
        "Score-boosting strategies and expert tips.",
        "Access to effective templates and well-structured resources for each section."
      ],
      pricing: [
        "1 Week – NPR 4000",
        "10 Days – NPR 5000",
        "2 Weeks – NPR 7000"
      ],
      nextSession: "Available Now (Booking Required – Limited Slots)",
      sessionType: "1-on-1 Personal Class"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 font-['Inter']">
      {/* Google Fonts Import */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      <Header />

      {/* Hero Section */}
      <section className="relative h-48 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500"></div>
        {/* <div className="absolute inset-0 bg-white/40"></div> */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white bg-clip-text text-transparent font-['Poppins'] tracking-wide mb-4">
              Courses
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              price={card.price}
              duration={card.duration}
              focus={card.focus}
              idealFor={card.idealFor}
              features={card.features}
              nextSession={card.nextSession}
              sessionType={card.sessionType}
              pricing={card.pricing}
              onBookMessage={handleBookMessage}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
