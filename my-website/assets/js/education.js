AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "COMPSCI 718 - Programmming for Industry<br> <br> ",
    cardImage: "assets/images/education-page/Auckland-papers.png",
    moocLink:
      "https://www.online.auckland.ac.nz/postgraduate-programmes/science/postgraduate-certificate-in-information-technology/",
  },
  {
    title: "COMPSCI 719 - Programmming with Web Technologies<br> <br> ",
    cardImage: "assets/images/education-page/Auckland-papers.png",
    moocLink:
      "https://www.online.auckland.ac.nz/postgraduate-programmes/science/postgraduate-certificate-in-information-technology/",
  },
  {
    title: "CompTIA Security+ CE <br> <br> ",
    cardImage: "assets/images/education-page/securityPlus.png",
    moocLink:
      "https://www.comptia.org/certifications/network",
  },
  {
    title: "CompTIA Network+ CE <br> <br> ",
    cardImage: "assets/images/education-page/Network+.png",
    moocLink:
      "https://www.comptia.org/certifications/security",
  },
  {
    title: "CompTIA A+ CE <br> <br> ",
    cardImage: "assets/images/education-page/A+.png",
    moocLink:
      "https://www.comptia.org/certifications/a",
  },
  {
    title: "Aws Certified Developer <br> <br> ",
    cardImage: "assets/images/education-page/aws.png",
    moocLink:
      "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
  },
  {
    title: "ISC2 Certified in Cybersecurity <br> <br> ",
    cardImage: "assets/images/education-page/isc2.png",
    moocLink: "https://www.isc2.org/certifications/cc",
  },
  {
    title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert <br> ",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink:
      "https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert",
  },
  {
    title: "Aws Certified Solutions Architect <br> <br> ",
    cardImage: "assets/images/education-page/aws.png",
    moocLink:
      "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
  },
  {
    title: "The Modern Javascript Bootcamp Course <br> <br> ",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink:
      "https://www.udemy.com/course/javascript-beginners-complete-tutorial/",
  },
  {
    title: "Google Certified in Cybersecurity <br> <br> ",
    cardImage: "assets/images/education-page/google-1.png",
    moocLink:
      "https://www.coursera.org/professional-certificates/google-it-support?",
  },
  {
    title: "TOTAL: CompTIA A+ Core 1 and 2<br> <br> ",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/comptia-aplus-core-1/",
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2024 <br> ",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp",
  },
  {
    title: "Docker Mastery: with Kubernetes +Swarm from a Docker Captain <br> ",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/docker-mastery",
  },
  {
    title: "MATH 1201 - College Algebra <br> <br> ",
    cardImage: "assets/images/education-page/uopeople.png",
    moocLink:
      "https://www.uopeople.edu/prepare-for-university/college-algebra-math-1201-learning-materials/",
  },
  {
    title: "Learn Photoshop, Web Design & Profitable Freelancing 2022   <br> ",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink:
      "https://www.udemy.com/course/learn-photoshop-web-design-profitable-freelancing/",
  },
  {
    title: "100 Days of Code - Python Bootcamp <br> <br> ",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink:
      "https://www.udemy.com/course/100-days-of-code/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Python_v.PROF_la.EN_cc.US_ti.7380&utm_content=deal4584&utm_term=_._ag_78513466559_._ad_532193666528_._kw__._de_c_._dm__._pl__._ti_dsa-774930046209_._li_9004163_._pd__._&matchtype=b&gclid=EAIaIQobChMI6djO89HA9AIVDZyzCh11XA35EAAYASAAEgJ49vD_BwE",
  },
  {
    title: "Aws Certified Cloud Practitioner <br> <br> ",
    cardImage: "assets/images/education-page/aws.png",
    moocLink:
      "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    title: "CS 1101 - Programming Fundamentals <br> <br> ",
    cardImage: "assets/images/education-page/uopeople.png",
    moocLink:
      "https://www.uopeople.edu/prepare-for-university/programming-fundamentals-java-cs-1101-learning-materials/",
  },
  {
    title: "Wordpress for Beginners - Master Wordpress Quickly <br> ",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/wordpress-for-beginners-course/",
  },
  {
    title: "Google UX Design Certificate <br> <br> ",
    cardImage: "assets/images/education-page/google-1.png",
    moocLink:
      "https://www.coursera.org/professional-certificates/google-ux-design",
  },
  {
    title: "Learn Ethical Hacking From Scratch <br> <br> ",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/learn-ethical-hacking-from-basics/",
  },
  {
    title: "Facebook Certified Social Media Marketing Associate ",
    cardImage: "assets/images/education-page/Meta-Logo.png",
    moocLink:
      "https://www.facebook.com/business/learn/certification/exams/100-101-exam",
  },
  {
    title: "Google IT Support Professional <br> <br> ",
    cardImage: "assets/images/education-page/google-1.png",
    moocLink:
      "https://www.coursera.org/professional-certificates/google-it-support?",
  },
  {
    title: "Graphic Design For Non-Designers \nUniversity of Colorado",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink:
      "https://www.coursera.org/specializations/graphic-design-elements-non-designers",
  },
  {
    title: "WSET Level II in Wine and Spirits <br> <br> ",
    cardImage: "assets/images/education-page/wset.png",
    moocLink:
      "https://www.wsetglobal.com/qualifications/wset-level-2-award-in-wines",
  },
  {
    title: "Level 3 Teach English As A Foreign Language (TEFL)",
    cardImage: "assets/images/education-page/english.png",
    moocLink:
      "https://www.i-to-i.com/teaching-english-as-a-foreign-language.html",
  },
  {
    title: "Photography Basics And Beyond <br>University of Michigan",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/specializations/photography-basics?",
  },
  {
    title: "Front End Development With React <br>Hong Kong University",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/front-end-react",
  },
  {
    title: "Javascript Data Structures And Algorithms  <br> ",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink:
      "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/",
  },
  {
    title: "Excel Skills For Business: Essentials <br>Macquarie University",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink:
      "https://www.coursera.org/learn/excel-essentials?specialization=excel",
  },
  {
    title: "Cert 3 in Hospitality <br> <br> ",
    cardImage: "assets/images/education-page/hospo.jpg",
    moocLink:
      "https://smartandskilled.nsw.gov.au/sands/traineeship/SIT30616?meta_l_sand=91054&meta_w_sand=108",
  },
  {
    title: "Classical Music <br>Yale University",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/introclassicalmusic",
  },
  {
    title: "Cert 4 in Small Business Management <br> <br> ",
    cardImage: "assets/images/education-page/tafe.jpg",
    moocLink: "https://www.myskills.gov.au/courses/details?Code=BSB42518",
  },
  {
    title: "Financial Markets <br>Yale University",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/financial-markets-global",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading:
      "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description:
      "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading:
      "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description:
      "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading:
      "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description:
      "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading:
      "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description:
      "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
      (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Activities:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
