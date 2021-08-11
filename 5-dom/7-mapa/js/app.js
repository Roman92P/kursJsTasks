const mapEl = document.querySelector(".map");
    for(var city of cities){
         const aEl = document.createElement('a');
         aEl.setAttribute('href',city.href);
         aEl.classList.add('map-marker');
         aEl.dataset.name = city.name;
         aEl.dataset.population = city.population;
         aEl.style.left = city.map_x+'px';
         aEl.style.top = city.map_y+'px';
         mapEl.append(aEl);
    }

 const newDiv = document.createElement('div');
 newDiv.classList.add('map-tooltip');
 newDiv.style.left = '-9999px';
 newDiv.style.top = '-9999px';
 document.body.appendChild(newDiv);

const allMarkers = document.querySelectorAll('.map-marker');

for(const marker of allMarkers){
    marker.addEventListener('mouseover', function(event){
        const townName =  marker.dataset.name;
        newDiv.style.left = event.pageX+10+'px';
        newDiv.style.top = event.pageY+10+'px';
        newDiv.innerHTML =`<h2>${townName}</h2><div>Population: <strong>${marker.dataset.population}</strong></div>`

    });

    marker.addEventListener('mouseout', function(e){
                    newDiv.innerHTML='';
                    newDiv.style.left = '-9999px';
                    newDiv.style.top = '-9999px';
                });
}