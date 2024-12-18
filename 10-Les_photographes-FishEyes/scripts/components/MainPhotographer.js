export const MainPhotographer = (data) => {
  // console.log();

  let cardsIdentity = "";
  data.forEach((photographer) => {
    
    cardsIdentity += `

        <section class="card__identity__photographe">
          <div class="personal__info">
            <h2 class="title__h2__x2">${photographer.name}</h2>
            <p class="locality__paragraph__x2">${photographer}.city}, ${photographer}.country}</p>
            <p class="speciality__paragraph__x2">
              ${photographer}.tagline}
            </p>
          </div>
          <section class="contact__button__section">
            <button class="contact__button">Contactez-moi</button>
          </section>
          <div class="personal__thumbnail">
            <img
              src="assets/images/photographers/thumbnails/${photographer}.portrait}"
              alt="${photographer}.name}"
              class="thumbnail"
            />
          </div>
        </section>

               <section class="menu__triage">
                  <div class="menu__triage__content">
                    <label for="triage" class="triage__label">Trier par :</label>
                        <select id="triage" name="triage" class="triage__select">
                            <option class="option" value="popularite">Popularité</option>
                            <option class="option" value="date">Date</option>
                            <option class="option" value="titre">Titre</option>
                        </select>
                    </div>
               </section>

    `;
  });

  // console.log(cardsIdentity);

  return `    
  
  
      <main class="main">

         ${cardsIdentity}
     
        <section class="card__content">
          <div class="card__picture">





          </div>
        </section>
      </main>
      
      `;
};
