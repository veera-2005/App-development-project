import React, { useEffect, useState, useRef } from 'react';
import '../Assets/Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [data4, setData4] = useState(0);
  const [showWeddingMore, setShowWeddingMore] = useState(false);
  const [showCorporateMore, setShowCorporateMore] = useState(false);
  const [showEventPlanningMore, setShowEventPlanningMore] = useState(false);
  const [showDesignStudioMore, setShowDesignStudioMore] = useState(false);
  const [showEarPiercingMore, setShowEarPiercingMore] = useState(false);
  const [showHouseWarmingMore, setShowHouseWarmingMore] = useState(false);

  const navigate = useNavigate();
  const weddingRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (data2 !== 1500) setData2((prev) => prev + 1);
      if (data !== 1000) setData((prev) => prev + 1);
      if (data3 !== 150) setData3((prev) => prev + 1);
      if (data4 !== 2547) setData4((prev) => prev + 1);
    }, 1);

    return () => clearTimeout(timer);
  }, [data, data2, data3, data4]);

  const scrollToWedding = () => {
    weddingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const aboutHandler = () => {
    navigate('/About');
  };

  return (
    <div className='fullhome'>
      <div className="ticket-generator-container">
        <div className="text-content">
          <h1>Event ticketing made easy with Ticket Generator</h1>
          <p>
            The only solution you need to sell, distribute, and validate personalized event tickets.
          </p>
          <button className="get-started-button" onClick={scrollToWedding}>Get Started</button>
          <p className="promo-text" style={{ color: 'green' }}>First 10 tickets are free</p>
        </div>
        <div className="image-content">
          {/* <img src="ticket-image.png" alt="Event ticketing example" /> */}
        </div>
      </div>

      <div className="our-team-container">
        <div className="our-image-section">
          {/* <img src="team-image.jpg" alt="Our Team" /> */}
        </div>
        <div className="text-section">
          <h1 style={{ color: 'green', fontStyle: 'italic', fontSize: '80px' }}>Our Team</h1>
          <p className="quote">
            “It's hard to put into words how incredible the Quintana Events team is. I left my wedding weekend feeling like they were part of my family....my family would agree. The team allowed me the greatest gift, to not stress throughout the entirety of the weekend. I was able to embrace spending time with and most importantly party with friends and family. I cannot thank them enough.”
          </p>
          <p className="author">Kara Michelle, 2023 Bride</p>
          <button className="about-us-button" onClick={aboutHandler}>ABOUT US</button>
        </div>
      </div>

      <div className="wedding-planning-container" ref={weddingRef}>
        <div className="text-section">
          <h1 style={{ color: 'green', fontStyle: 'italic', fontSize: '60px' }}>Wedding Planning</h1>
          <hr className="separator" />
          <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
            Every couple is unique, and your wedding should be a true reflection of the two of you. We take the time to get to know you in order to create a celebration that’s a truly personal and memorable experience. Experts in the art of the timeline and design, our team handles the details with precision and genuine care, so you and your guests can simply relax and enjoy. We specialize in Napa and Sonoma wedding planning along with Northern California.
          </p>
          {showWeddingMore && (
            <div className="extra-content">
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                At Quintana Events, we believe that every wedding is a unique love story waiting to be told. Our team of experienced wedding planners is dedicated to bringing your vision to life with meticulous attention to detail and a deep understanding of your personal style. From the initial consultation to the final farewell, we are with you every step of the way, ensuring that every moment is flawlessly executed.
              </p>
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                Our services include full wedding planning, partial planning, and day-of coordination. Whether you need comprehensive support or just a helping hand on the big day, we tailor our services to meet your needs. Our extensive network of trusted vendors allows us to provide you with the best options for venues, catering, photography, entertainment, and more. We take pride in creating seamless, stress-free experiences that allow you to enjoy your special day to the fullest.
              </p>
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                In addition to traditional wedding planning, we offer specialized services such as destination weddings, elopements, and multicultural celebrations. Our team is well-versed in handling the unique challenges and intricacies of planning weddings that incorporate diverse cultural traditions and customs. We are committed to creating a celebration that honors your heritage and tells your love story in a meaningful way.
              </p>
            </div>
          )}
          <button className="learn-more-button" style={{ backgroundColor: 'green' }} onClick={() => setShowWeddingMore(!showWeddingMore)}>{showWeddingMore ? 'CLOSE' : 'LEARN MORE'}</button>
        </div>
        <div className="mimage-section">
          {/* <img src="wedding-planning.jpg" alt="Wedding Planning" /> */}
        </div>
      </div>

      <div className="corporate-events-container">
        <div className="cimage-section">
          {/* <img src="corporate-events.jpg" alt="Corporate Events" /> */}
        </div>
        <div className="text-section">
          <h1 style={{ color: 'green', fontSize: '60px', fontStyle: 'italic' }}>Corporate Events</h1>
          <hr className="separator" />
          <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
            We know how to make your event feel intentional, intimate, and engaging. Whether it’s an event for 10 or 500, we bring gracious hosting and thoughtful design to meet in one immersive and unforgettable experience.
          </p>
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                Our corporate event planning services are designed to deliver exceptional experiences that align with your business goals. From product launches and trade shows to company retreats and holiday parties, we handle every aspect of your event with professionalism and creativity. Our team works closely with you to understand your objectives and create an event that reflects your brand identity and engages your audience.
              </p>
          {showCorporateMore && (
            <div className="extra-content">
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                We offer a range of services, including event strategy and concept development, venue selection, logistics management, audiovisual production, and on-site coordination. Our goal is to provide you with a seamless planning process and a successful event that leaves a lasting impression on your attendees. We also offer virtual and hybrid event solutions to help you reach a wider audience and adapt to the changing landscape of corporate events.
              </p>
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                In addition to planning corporate events, we provide team-building activities and workshops designed to foster collaboration and boost morale among your employees. Our programs are customized to meet the unique needs of your team and can be integrated into your corporate events or offered as standalone experiences. We believe that a well-executed corporate event has the power to inspire, motivate, and strengthen your team.
              </p>
            </div>
          )}
          <button className="learn-more-button" style={{ backgroundColor: 'green' }} onClick={() => setShowCorporateMore(!showCorporateMore)}>{showCorporateMore ? 'CLOSE' : 'LEARN MORE'}</button>
        </div>
      </div>

      <div className="event-planning-container">
       
        <div className="text-section">
          <h1 style={{ color: 'green', fontSize: '60px', fontStyle: 'italic' }} className="title">Event Planning</h1>
          <hr className="divider" />
          <p className="description" style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
            We’re ready to help you throw a party with style—and no stress! No matter what the occasion, our goal is to create a total experience for the senses. Whether it’s a fundraising gala, national sales meeting, or intimate private party, hospitality is at the forefront of our approach, so your guests feel welcome, comfortable, and inspired.
          </p>
          {showEventPlanningMore && (
            <div className="extra-content">
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                At Quintana Events, we specialize in creating unforgettable experiences for all types of events. From intimate gatherings to grand celebrations, our team of event planners is dedicated to bringing your vision to life. We offer a range of services, including event design, coordination, and management, to ensure that every detail is taken care of.
              </p>
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                Our event planning services are tailored to meet the unique needs of each client. Whether you're planning a wedding, corporate event, or social gathering, we work closely with you to understand your goals and create a customized plan that fits your budget and timeline. Our extensive network of vendors and suppliers allows us to provide you with the best options for venues, catering, entertainment, and more.
              </p>
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                In addition to our planning services, we offer on-site coordination to ensure that your event runs smoothly from start to finish. Our team is experienced in managing all aspects of event logistics, including setup, teardown, and troubleshooting. We are committed to providing you with a stress-free planning process and an unforgettable event experience.
              </p>
            </div>
          )}
          <button className="learn-more-button" style={{ backgroundColor: 'green' }} onClick={() => setShowEventPlanningMore(!showEventPlanningMore)}>{showEventPlanningMore ? 'CLOSE' : 'LEARN MORE'}</button>
        </div>
        <div className="event-image-section">
          {/* <img src="event-planning.jpg" alt="Event Planning" /> */}
        </div>
      </div>

      <div className="d-events-container">
        <div className="dimage-section">
          {/* <img src="design-studio.jpg" alt="Design Studio" /> */}
        </div>
        <div className="text-section">
          <h1 style={{ color: 'green', fontSize: '60px', fontStyle: 'italic' }}>Design Studio</h1>
          <hr className="separator" />
          <p style={{ color: 'green', fontSize: '20px', fontStyle: 'italic' }}>
            Let us take your wedding, event, or interior design to the next level. From floral design, lighting, and tabletop decor, to custom builds and specialty furniture installations, we create thoughtful and sophisticated environments that will make a lasting impression on you and your guests.
          </p>
          {showDesignStudioMore && (
            <div className="extra-content">
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                Our Design Studio offers a comprehensive range of services to elevate your event or space to new heights. We specialize in creating custom designs that reflect your personal style and vision. Our team of designers works closely with you to understand your preferences and bring your ideas to life.
              </p>
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                Our services include floral design, lighting design, and tabletop decor. We also offer custom builds and specialty furniture installations to create unique and memorable environments for your event or space. Whether you're planning a wedding, corporate event, or interior design project, our team is dedicated to providing you with the highest level of service and quality.
              </p>
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                In addition to our design services, we offer styling and staging services to ensure that every detail is perfect. Our team is experienced in creating cohesive and visually stunning designs that will leave a lasting impression on your guests. We are committed to providing you with a seamless and stress-free design process, from concept to execution.
              </p>
            </div>
          )}
          <button className="learn-more-button" style={{ backgroundColor: 'green' }} onClick={() => setShowDesignStudioMore(!showDesignStudioMore)}>{showDesignStudioMore ? 'CLOSE' : 'LEARN MORE'}</button>
        </div>
      </div>

      <div className="ear-piercing-container">
        <div className="text-section">
          <h1 style={{ color: 'green', fontSize: '60px', fontStyle: 'italic' }}>Ear Piercing</h1>
          <hr className="separator" />
          <p style={{ color: 'green', fontSize: '20px', fontStyle: 'italic' }}>
            Add a bit of sparkle to your event with our luxury ear-piercing experience. We offer private piercing parties and event activations where our expert piercers provide safe and stylish ear piercing in a clean and comfortable environment. Choose from our selection of high-quality jewelry to complete your look.
          </p>
          {showEarPiercingMore && (
            <div className="extra-content">
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                Our luxury ear-piercing experience is perfect for any event. Whether you're hosting a bridal shower, bachelorette party, or corporate event, our expert piercers provide a safe and stylish experience for your guests. We offer private piercing parties and event activations that are sure to add a touch of sparkle to your event.
              </p>
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                Our piercers use the highest quality jewelry and follow strict hygiene protocols to ensure a safe and comfortable experience for all guests. We offer a wide selection of jewelry options, from classic studs to trendy hoops, to suit any style. Our team is dedicated to providing a memorable and enjoyable experience for you and your guests.
              </p>
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                In addition to our ear-piercing services, we offer aftercare instructions and follow-up support to ensure that your piercings heal properly. Our goal is to provide you with a luxurious and stress-free experience from start to finish. Book our ear-piercing services for your next event and let us add a bit of sparkle to your special day.
              </p>
            </div>
          )}
          <button className="learn-more-button" style={{ backgroundColor: 'green' }} onClick={() => setShowEarPiercingMore(!showEarPiercingMore)}>{showEarPiercingMore ? 'CLOSE' : 'LEARN MORE'}</button>
        </div>
        <div className="eimage-section">
          {/* <img src="ear-piercing.jpg" alt="Ear Piercing" /> */}
        </div>
      </div>

      <div className="house-warming-container">
        <div className="himage-section">
          {/* <img src="house-warming.jpg" alt="House Warming" /> */}
        </div>
        <div className="text-section">
          <h1 style={{ color: 'green', fontSize: '60px', fontStyle: 'italic' }}>House Warming</h1>
          <hr className="separator" />
          <p style={{ color: 'green', fontSize: '20px', fontStyle: 'italic' }}>
            Celebrate your new home with our personalized housewarming services. From intimate gatherings to grand celebrations, we help you create a warm and welcoming environment for your guests. Our team handles all the details, so you can relax and enjoy your special day.
          </p>
          {showHouseWarmingMore && (
            <div className="extra-content">
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                Our housewarming services are designed to help you celebrate your new home in style. Whether you're planning an intimate gathering or a grand celebration, our team is here to assist you with every detail. From invitations and decor to catering and entertainment, we ensure that your housewarming party is a memorable and enjoyable experience for you and your guests.
              </p>
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                Our services include event planning and coordination, decor and styling, and on-site support. We work closely with you to understand your vision and create a personalized plan that fits your budget and timeline. Our goal is to provide you with a stress-free planning process and a successful event that leaves a lasting impression on your guests.
              </p>
              <p style={{ color: 'green', fontStyle: 'italic', fontSize: '20px' }}>
                In addition to our housewarming services, we offer move-in assistance to help you settle into your new home. From unpacking and organizing to interior design and styling, our team is here to make your transition as smooth and enjoyable as possible. Let us help you create a warm and welcoming environment that you and your guests will love.
              </p>
            </div>
          )}
          <button className="learn-more-button" style={{ backgroundColor: 'green' }} onClick={() => setShowHouseWarmingMore(!showHouseWarmingMore)}>{showHouseWarmingMore ? 'CLOSE' : 'LEARN MORE'}</button>
        </div>
      </div>

      <div className="backstage-container" style={{width:'1500px'}}>
      <h2 className="backstage-title">Backstage by the numbers</h2>
      <div className="backstage-stats">
        <div className="stat-item">
          <i className="fas fa-calendar-alt"></i>
          <p className="stat-number">{data}+</p>
          <p className="stat-label">events</p>
        </div>
        <div className="stat-item">
          <i className="fas fa-calendar-check"></i>
          <p className="stat-number">{data2}+</p>
          <p className="stat-label">event planners</p>
        </div>
        <div className="stat-item">
          <i className="fas fa-globe"></i>
          <p className="stat-number">{data3}+</p>
          <p className="stat-label">countries</p>
        </div>
        <div className="stat-item">
          <i className="fas fa-users"></i>
          <p className="stat-number">{data4}+</p>
          <p className="stat-label">attendees</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
