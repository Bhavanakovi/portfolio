import { butterfliesBackground } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';

// Setup butterflies
const pc = butterfliesBackground({
  el: document.getElementById('app'),
  eventsEl: document.getElementById('app'),
  gpgpuSize: 18,
  background: 0x88CEFF,
  material: 'phong',
  lights: [
    { type: 'ambient', params: [0xffffff, 0.5] },
    { type: 'directional', params: [0xffffff, 1], props: { position: [10, 0, 0] } }
  ],
  materialParams: { transparent: true, alphaTest: 0.5 },
  texture: 'https://assets.codepen.io/33787/butterflies.png',
  textureCount: 4,
  wingsScale: [2, 2, 2],
  wingsWidthSegments: 16,
  wingsHeightSegments: 16,
  wingsSpeed: 0.75,
  wingsDisplacementScale: 1.25,
  noiseCoordScale: 0.01,
  noiseTimeCoef: 0.0005,
  noiseIntensity: 0.0025,
  attractionRadius1: 100,
  attractionRadius2: 150,
  maxVelocity: 0.1
});

// Redirect function
function redirectToPortfolio() {
  console.log("Redirect triggered!");
  // Force redirect
  window.location.assign('portfolio.html'); // More reliable than href
  // Fallback
  setTimeout(() => {
    if (window.location.pathname !== '/portfolio.html') {
      console.log("assign failed, replacing...");
      window.location.replace('portfolio.html');
    } else {
      console.log("Redirect successful!");
    }
  }, 100);
}

// Button setup
const portfolioButton = document.getElementById('portfolioButton');

// Desktop and mobile clicks
portfolioButton.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("Click detected (desktop)!");
  redirectToPortfolio();
});

portfolioButton.addEventListener('touchstart', (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("Touch detected (mobile)!");
  redirectToPortfolio();
});

// Log setup completion
console.log("Script loaded, button ready!");