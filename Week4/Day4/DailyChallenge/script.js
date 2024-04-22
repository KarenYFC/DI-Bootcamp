const planets = [
    { name: 'Mercury', color: 'gray', moons: 0 },
    { name: 'Venus', color: 'orange', moons: 0 },
    { name: 'Earth', color: 'blue', moons: 1 },
  ];
  
  const section = document.querySelector('.listPlanets');

  planets.forEach((planet) => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;
  
    for (let i = 0; i < planet.moons; i++) {
      const moonDiv = document.createElement('div');
      moonDiv.classList.add('moon');
      planetDiv.appendChild(moonDiv);
    }

    section.appendChild(planetDiv);
  });
  