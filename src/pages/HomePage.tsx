import { Link } from 'react-router-dom';
import heroImage from '../../media/1778715590061-019e23b5-63ed-7d60-aca4-0131e66e8533.png';
import verifiedBadge from '../../media/instagram-verified-symbol-instagram-verified-logo-cross-graphics-art-transparent-png-806692.png';

export default function HomePage() {
  const testimonials = [
    {
      text: "Fast, professional, super clean and friendly for a very fair price! Exactly what you need as a superyacht. We are extremely satisfied and will keep working with Laundromatgreece.",
      author: "Patrick",
      role: "Yacht Crew",
      rating: 5
    },
    {
      text: "Excellent service! They cleaned our villa perfectly between guests. Very professional team and always on time. Highly recommended for property owners.",
      author: "Maria",
      role: "Villa Owner",
      rating: 5
    },
    {
      text: "The 24/7 access is a lifesaver! As a traveler, being able to do laundry at any time was incredibly convenient. Clean facilities and modern machines.",
      author: "James",
      role: "Traveler",
      rating: 5
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Navigation is handled by the Navigation component */}

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-20 lg:py-32 overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})`, backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            {/* Top Bar with Logo, Text, and Verified Badge */}
            <div className="flex items-center gap-3 mb-12">
              {/* Logo */}
              <img 
                src="https://static.wixstatic.com/media/bc3598_4ef75b3ee4364af5b2f09e53862ffe0e~mv2.png/v1/fill/w_490,h_496,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Laundromatgreece.png"
                alt="LaundromatGreece Logo"
                className="h-16 w-16 object-contain"
              />
              
              {/* Brand Text */}
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white">Laundromat Greece</h2>

              {/* Verified Badge */}
                <img src={verifiedBadge} alt="Verified" className="h-10 w-10 object-contain drop-shadow-lg flex-shrink-0" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              SPARKLING CLEAN,<br />
              <span className="text-blue-200">EVERY TIME.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-gray-100 leading-relaxed mb-8 max-w-xl">
              Experience next-level clean with our professional laundry and expert cleaning services. Available 24/7 for travelers, homeowners, and yacht crews across Lefkada and Nydri.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/laundry" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-base hover:bg-blue-50 transition transform hover:scale-105 text-center">
                FIND A LOCATION
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white hover:text-blue-600 transition text-center">
                GET IN TOUCH
              </Link>
            </div>

            {/* Feature Info - Desktop only */}
            <div className="hidden lg:grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                </div>
                <p className="text-sm font-semibold text-white">Professional Quality</p>
                <p className="text-xs text-gray-200">Expert service</p>
              </div>
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <p className="text-sm font-semibold text-white">24/7 Available</p>
                <p className="text-xs text-gray-200">Always open</p>
              </div>
              <div className="flex flex-col">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <p className="text-sm font-semibold text-white">Fast & Efficient</p>
                <p className="text-xs text-gray-200">Quick turnaround</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">Conveniently located in Lefkas and Nydri to serve you better</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Lefkas Location Portrait Tile */}
            <div className="location-card rounded-2xl overflow-hidden shadow-xl bg-white flex flex-col h-full">
              <div className="relative p-8 bg-cover bg-center text-white" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1517677129300-07b130802f46?w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '250px'}} >
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-2">Lefkas</h3>
                  <p className="text-gray-100 text-lg mb-4">Our main location in the heart of Lefkada town</p>
                  <div className="flex items-center text-blue-200 font-semibold">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    24/7 Self-Service Available
                  </div>
                </div>
              </div>
              <div className="flex-grow bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.3688!2d20.7269!3d38.8378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135c8d5a5a5a5a5d%3A0x0!2sIr.%20Politechniou%2021%2C%20Lefkada%20311%2000!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{border: 0, minHeight: '300px'}}
                  allowFullScreen
                  loading="lazy">
                </iframe>
              </div>
              <div className="p-6 border-t bg-white">
                <a href="https://maps.google.com/?q=Lefkada+Town" target="_blank" rel="noopener noreferrer" className="btn-secondary px-6 py-3 rounded-full font-semibold inline-block">
                  Get Directions
                </a>
              </div>
            </div>

            {/* Nydri Location Portrait Tile */}
            <div className="location-card rounded-2xl overflow-hidden shadow-xl bg-white flex flex-col h-full">
              <div className="relative p-8 bg-cover bg-center text-white" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '250px'}}>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-2">Nydri</h3>
                  <p className="text-gray-100 text-lg mb-4">Serving the beautiful coastal town of Nydri</p>
                  <div className="flex items-center text-blue-200 font-semibold">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    24/7 Self-Service Available
                  </div>
                </div>
              </div>
              <div className="flex-grow bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.9823!2d20.7458!3d38.7111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135c8c0a0a0a0a0b%3A0x0!2sEpar.Od.%20Lefkas%20-%20Vasilikis%20114%2C%20Nidri%20311%2000!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{border: 0, minHeight: '300px'}}
                  allowFullScreen
                  loading="lazy">
                </iframe>
              </div>
              <div className="p-6 border-t bg-white">
                <a href="https://maps.google.com/?q=Nydri+Lefkada" target="_blank" rel="noopener noreferrer" className="btn-secondary px-6 py-3 rounded-full font-semibold inline-block">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Laundry Services</h2>
            <p className="text-xl text-gray-600">24/7 Self-Service & Professional Wash-Dry-Fold Delivery</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Personal Clients */}
            <div className="service-card bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Individuals</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Perfect for travelers, homeowners, and sailors. Use our 24/7 self-service machines or let us handle everything with our professional wash-dry-fold pickup and delivery service.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  24/7 Self-Service Access
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Pick-up & Delivery Service
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Professional Wash-Dry-Fold
                </li>
              </ul>
              <Link to="/laundry" className="btn-primary text-white px-8 py-3 rounded-full font-semibold w-full text-center block">
                Book Personal Service
              </Link>
            </div>

            {/* Business Clients */}
            <div className="service-card bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-500 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Popular</span>
              </div>
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Businesses</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Specialized services for hotels, villas, yacht charters, restaurants, and lounges across Lefkada. Professional, reliable, and efficient commercial laundry solutions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Hotels & Villas
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Yacht Charters
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Restaurants & Lounges
                </li>
              </ul>
              <Link to="/laundry" className="btn-primary text-white px-8 py-3 rounded-full font-semibold w-full text-center block">
                Book Business Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Cleaning Section */}
      <section id="cleaning" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Cleaning Services</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our expert team provides top-tier cleaning services to keep your villa, apartment, or yacht spotless and guest-ready. Whether on land or at sea, we deliver professional, high-quality care tailored to your space.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Villa & Apartment Cleaning</h3>
                    <p className="text-gray-600">Deep cleaning and maintenance for vacation rentals and residential properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Yacht Cleaning</h3>
                    <p className="text-gray-600">Specialized cleaning services for superyachts and sailing vessels</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Guest-Ready Turnover</h3>
                    <p className="text-gray-600">Quick and thorough cleaning between guest stays</p>
                  </div>
                </div>
              </div>
              <Link to="/cleaning" className="btn-primary text-white px-8 py-3 rounded-full font-semibold mt-8 inline-block">
                Request Cleaning Quote
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" alt="Professional Cleaning" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Storage Section */}
      <section id="storage" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80" alt="Secure Storage" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Secure Storage Solutions</h2>
              <p className="text-xl text-gray-600 mb-8">
                Enjoy the last day of your vacation without the burden of luggage, or free up valuable space in your boat or home with our secure storage solutions.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Storage Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Luggage Storage
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Boat Equipment Storage
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Seasonal Items
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Flexible Rental Periods
                  </li>
                </ul>
              </div>
              <Link to="/contact" className="btn-primary text-white px-8 py-3 rounded-full font-semibold inline-block">
                Reserve Storage Space
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex star-rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-600">Based on Google Reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex star-rating mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.author[0]}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
              View all Google Reviews
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>



      {/* Footer is handled by the Footer component */}
    </div>
  );
}
