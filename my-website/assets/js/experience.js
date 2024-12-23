//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
// const exp = [
//   {
//     title: "Web Developer",
//     cardImage: "assets/images/experience-page/c13.jpg",
//     place: "Audacy - Cadence13",
//     time: "(June, 2021 - May, 2023)",
//     desp: "<li><a class='link-text' href='https://c13features.com' target='_blank'>c13features.com</a> - Constructed the Website for this highly visible, podcast movie concept site with HTML, CSS, and JavaScript.</li> <li><a class='link-text' href='https://shows.cadence13.com' target='_blank'>shows.cadence13.com</a> - Created and updated micro-sites hosting podcasts with Python/React and Jenkins/Docker/AWS Pipeline.</li> <li><a class='link-text' href='https://cadence13.com' target='_blank'>cadence13.com </a> - Updated, maintained, and improved the company’s website, including all site content with WordPress.</li><li><a class='link-text' href='https://pineapple.fm' target='_blank'>pineapple.fm </a> - Utilized Squarespace for the creation and ongoing maintenance of the website.</li><li><a class='link-text' href='https://www.rambleofficial.com' target='_blank'>rambleofficial.com</a> - Managed and updated the dedicated influencer website with HTML, CSS, and JavaScript (now defunct).</li><li><a class='link-text' href='https://sofiafranklyn.com' target='_blank'>Sofiafranklyn.com </a> - Responsible for conducting CSS maintenance and implementing updates on the client’s Shopify store.</li>",
//   },
//   {
//     title: "Associate Instructor",
//     cardImage: "assets/images/experience-page/thrive.jpg",
//     place: "Thrive DX",
//     time: "(May, 2022 - present)",
//     desp: "<b>Multiple Locations (NYU, University at Buffalo, North Carolina State University, NJIT, and Old Dominion University)</b><li>Facilitate co-teaching programs as part of a software development bootcamp for American universities.</li><li>Serve as a subject matter expert for website development tools and technologies as well as Agile methodologies/frameworks.</li><li>Promote a professional learning culture grounded in adult learning theory and cutting-edge web development instruction.</li><li>Assist the Lead Instructor with managing classroom learning and the creation of teaching materials.</li><li>Provide instruction, guidance, and advisement to students throughout the Software Development Bootcamp.</li><li>Create and deliver student assessments, testing, and analysis of progress performance.</li>",
//   },
//   {
//     title: "Musician",
//     cardImage: "assets/images/experience-page/gat3.jpg",
//     place: "Worldwide",
//     time: "(2007 - present)",
//     desp: "<li>Musician (Guitarist) | Multiple Cruise Lines, International Hotels (Dubai & Abu Dhabi), & Private Clients | 15+ Years</li>",
//   },
// ];

const exp = [
  {
    title: "Web Developer",
    cardImage: "assets/images/experience-page/c13.jpg",
    place: "Audacy",
    time: "(Jun 2021 - Jun 2023)",
    about: "Audacy is a leading multi-platform audio content and entertainment company. It is the second largest radio company in the United States, owning over 220 radio stations across 47 media markets.",
    desp: "<li>Managed and developed websites for a diverse portfolio of high-profile clients, including notable podcast collaborations (Steven A. Smith, Glennon Doyle, Demi Lovato, Ellen Pompeo, Goop, Kevin Durant), major media projects (Nike, Hulu, Netflix, HBO, The New York Times), dedicated influencer platforms (formerly Ramble Media featuring Emma Chamberlain and the D'Amelio Sisters), and individual brand sites (Sofia Franklyn, We Can Do Hard Things Podcast).</li><li>Contributed to digital initiatives across multiple Audacy brands, including Cadence13, Pineapple Street Studios, and Ramble.</li><li>Spearheaded the development of C13features.com, a high-visibility podcast movie concept website, overseeing the entire process from concept to deployment.</li><li>Created and maintained listener-facing podcast homepages and feature sites for various high-profile shows.</li><li>Implemented critical updates and redesigns for major podcast collaborations and media projects.</li>",
  },
  {
    title: "Teaching Assistant",
    cardImage: "assets/images/experience-page/thrive.jpg",
    place: "ThriveDX",
    time: "(May 2022 - Present)",
    about: "ThriveDX is a leading provider of digital skills training, focusing on preparing students for successful careers in technology through hands-on learning experiences and real-world projects in web development and cybersecurity.",
    desp: "<li>Co-teach software development bootcamp programs for leading American universities, including New York University, North Carolina State University, University at Buffalo, New Jersey Institute of Technology, Old Dominion University, and the University of Nevada, Las Vegas.</li><li>Contribute expertise to educational programs across multiple university partnerships as an independent contractor.</li><li>Provide comprehensive instruction on a wide range of topics including HTML and Web Accessibility, CSS and CSS Frameworks, User Experience and User Interface Design, JavaScript and Front-End Web Development, Back-End Development and APIs, React and Redux, SQL and Data Modelling, Cybersecurity, Python, and Cloud Computing.</li><li>Consistently receive positive feedback from students and lead instructors for effectiveness in explaining complex concepts and fostering a positive learning environment.</li>",
  },
  {
    title: "Web Developer",
    cardImage: "assets/images/experience-page/2.jpg",
    place: "Self-Employed",
    time: "(Jan 2021 - Present)",
    about: "As a freelance web developer, I provide comprehensive web development services to a diverse international client base, including political campaigns, e-commerce businesses, local shops, and artists.",
    desp: "<li>Develop and manage websites for a variety of clients, including political campaigns, e-commerce businesses, local shops, and artists.</li><li>Collaborate closely with clients to understand their unique needs and deliver tailored web solutions that align with their brand and business goals.</li><li>Implement e-commerce functionality and integrate payment processing systems for online businesses.</li><li>Provide additional creative services such as audio editing with Logic Pro and video editing using Final Cut Pro to offer comprehensive digital solutions.</li>",
  },
  {
    title: "Musician",
    cardImage: "assets/images/experience-page/gat3.jpg",
    place: "Multiple Venues",
    time: "(Jan 2009 - Present)",
    about: "As a professional musician, I have performed at various international venues and provided private music instruction across multiple countries.",
    desp: "<li>Perform as a guitarist for major cruise lines such as Holland America, Carnival, Seabourn, Crystal, Royal Caribbean, and Princess, securing recurring engagements.</li><li>Entertain guests at international hotels in Dubai & Abu Dhabi and at private events worldwide.</li><li>Provide private music instruction to students in New Zealand, Australia, the United Kingdom, and the United States, adapting teaching methods to diverse cultural contexts.</li><li>Collaborate with various artists and adapt to different musical styles, enhancing versatility as a performer.</li>",
  },
];



const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "30 DaysofFlutter",
    cardImage: "assets/images/experience-page/5.jpg",
    description:
      "Helping beginners from their first steps in Flutter to building fully functional cross-platform applications.",
  },
  {
    title: "Garuda Hacks",
    cardImage: "assets/images/experience-page/6.jpg",
    description:
      "MLH sponsored Indonesia's premier Global Virtual Hackathon on 14 - 16th August 2020.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Mentorship Card

const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "HakinCode",
    image: "assets/images/experience-page/hakin.png",
    time: "06/2020 - 08/2020",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Google Summer of Code",
    image: "assets/images/experience-page/gsoc.png",
    time: "03/2020 - 08/2020",
    desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp }) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

// Programs
var gage = {
  init: function () {
    // restart used for demo purposes - change to $('.gage').each(function(i){
    $(".chart span")
      .css({ width: "0" })
      .parent()
      .each(function (i) {
        // Loop through .gage elements
        $("p", this).html($(this).attr("data-label"));
        // Set p html value to the data-label attr set in the element
        var timeout = parseInt(i) * 60 + 1100;
        // Set a timeout based on the iteration multiplied by 60 (will affect delay between animations)
        $("span", this)
          .delay(timeout)
          .animate({ opacity: "1" }, 0, function () {
            //Delay
            $(this).css({ width: $(this).parent().attr("data-level") + "%" });
          });
      });
  },
};

$(document).ready(function () {
  // Call gage init function
  gage.init();
  // Interval used for demo purposes - remove if using
  setInterval(function () {
    gage.init();
  }, 5000);
});
