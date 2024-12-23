const projectcards = document.querySelector(".projectcards");
const projectcardspersonal = document.querySelector(".projectcardspersonal");
const appcards = document.querySelector(".appcards");

// Array of objects for professional projects
const projects = [
  {
    title: "C13Features A Podcast Movie Studio",
    cardImage: "assets/images/project-page/static/features-static.jpg",
    gifUrl: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/c13-features.m4v",
    Previewlink: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/c13-features.m4v",
  },
  {
    title: "Cadence 13 Podcast Showhub",
    cardImage: "assets/images/project-page/static/showhub-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/showhub-gif.gif",
    Previewlink: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/showhub-gif.gif",
  },
  {
    title: "Cadence13.com",
    cardImage: "assets/images/project-page/static/cadence-static.jpg",
    gifUrl: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/cadence-vid.m4v",
    Previewlink: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/cadence-vid.m4v",
  },
  {
    title: "Pineapple Street Studios",
    cardImage: "assets/images/project-page/static/pineapple-static.jpg",
    gifUrl: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/pineapple.m4v",
    Previewlink: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/pineapple.m4v",
  },
  {
    title: "Sofia Franklyn",
    cardImage: "assets/images/project-page/static/sofia-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/sofia-gif.gif",
    Previewlink: "https://sofiafranklyn.com",
  },
  {
    title: "Ramble",
    cardImage: "assets/images/project-page/static/ramble-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/ramble-gif.gif",
    Previewlink: "https://jovial-bohr-a0a648.netlify.app",
  },
  {
    title: "Email Template",
    cardImage: "assets/images/project-page/static/email-static.jpg",
    gifUrl: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/email.mp4",
    Previewlink: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/email.mp4",
  },
  {
    title: "Fly On The Wall Podcast - Email Marketing",
    cardImage: "assets/images/project-page/static/fly-on-the-wall-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/fly-on-the-wall-gif.gif",
    Previewlink: "https://jamalrizki.github.io/fly-on-the-wall-email/",
  },
  {
    title: "Showtime UI",
    cardImage: "assets/images/project-page/static/showtime-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/showtime-gif.gif",
    Previewlink: "https://www.jrizki.com/projects.html",
  },
  {
    title: "Player",
    cardImage: "assets/images/project-page/static/player-static.jpg",
    gifUrl: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/podcast-player.m4v",
    Previewlink: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/podcast-player.m4v",
  },
  {
    title: "We Can Do Hard Things Podcast - Glennon Doyle",
    cardImage: "assets/images/project-page/static/we-can-do-hard-things-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/we-can-do-hard-things-gif.gif",
    Previewlink: "http://wecandohardthingspodcast.com",
  },
];

// Array of objects for personal projects
const personal = [
  {
    title: "Photography Website",
    cardImage: "assets/images/project-page/static/photography-static.jpg",
    gifUrl: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/photography.m4v",
    Previewlink: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/photography.m4v",
  },
  {
    title: "Music Website",
    cardImage: "assets/images/project-page/static/music-static.jpg",
    gifUrl: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/music.m4v",
    Previewlink: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/music.m4v",
  },
  {
    title: "BLOG",
    cardImage: "assets/images/project-page/static/blog.jpg",
    gifUrl: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/travel-blog.m4v",
    Previewlink: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/travel-blog.m4v",
  },
  {
    title: "Java-Shapes",
    cardImage: "assets/images/project-page/static/java-shapes.jpg",
    gifUrl: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/java-shapes.m4v",
    Previewlink: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/java-shapes.m4v",
  },
  {
    title: "Bulls and cows",
    cardImage: "assets/images/project-page/static/Java-ai.jpg",
    gifUrl: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/bullsandcows-ai.m4v",
    Previewlink: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/bullsandcows-ai.m4v",
  },
  {
    title: "Netflix Clone",
    cardImage: "assets/images/project-page/static/netflix-static.jpg",
    gifUrl: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/netflix.m4v",
    Previewlink: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/netflix.m4v",
  },
  {
    title: "Apple Clone",
    cardImage: "assets/images/project-page/static/apple-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/apple-gif.gif",
    Previewlink: "https://jamalrizki.github.io/apple-clone",
  },
  {
    title: "Tesla Clone",
    cardImage: "assets/images/project-page/static/tesla-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/tesla-gif.gif",
    Previewlink: "https://tesla-clone-d09a2.web.app",
  },
  
  {
    title: "Car Company Template",
    cardImage: "assets/images/project-page/static/car-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/car-gif.gif",
    Previewlink: "https://jamalrizki.github.io/car-website/",
  },
  {
    title: "Pokemon game",
    cardImage: "assets/images/project-page/static/pokemon.jpg",
    gifUrl: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/pokemon.m4v",
    Previewlink: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/pokemon.m4v",
  },
  {
    title: "D3 Emissions",
    cardImage: "assets/images/project-page/static/d3-static.jpg",
    gifUrl: "https://d2wrb4d037bwvq.cloudfront.net/Gifs/d3-gif.gif",
    Previewlink: "https://jamalrizki.github.io/d3-emissions/",
  },
  
];

const apps = [
  {
    title: "Zest Cocktails",
    cardImage: "assets/images/project-page/static/appImg.png",
    gifUrl: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/app-HD.mov",
    Previewlink: "https://jamal-dev-website.s3.us-east-1.amazonaws.com/vids/app-HD.mov",
  }
]

const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, gifUrl }) => {
    output += `
      <div class="column skill-card card">
        <a href="${gifUrl}" target="_blank" rel="noopener noreferrer">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat">
            <div class="header"></div>
          </div>
        </a>
      </div>`;
  });

  projectcards.innerHTML = output;
};


const showCards1 = () => {
  let output = "";
  personal.forEach(({ title, cardImage, gifUrl }) => {
    output += `
      <div class="column skill-card card">
        <a href="${gifUrl}" target="_blank" rel="noopener noreferrer">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat">
            <div class="header"></div>
          </div>
        </a>
      </div>`;
  });

  projectcardspersonal.innerHTML = output;
};

const showCards2 = () => {
  let output = "";
  apps.forEach(({ title, cardImage, gifUrl }) => {
    output += `
      <div class="column skill-card card">
        <a href="${gifUrl}" target="_blank" rel="noopener noreferrer">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat">
            <div class="header"></div>
          </div>
        </a>
      </div>`;
  });

 appcards.innerHTML = output;
};

// Call both functions to display the project cards
document.addEventListener('DOMContentLoaded', () => {
  showCards();
  showCards1();
  showCards2();
});


