const localData = "/chamber/json/data.json";

async function getCompanyData(localData) {
    const response = await fetch(localData);
    const data = await response.json();
    return data.companies;
}

  
const displayCompanies = (companies) => {
    const grid = document.querySelector('div.grid');
  
    companies.forEach((company) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let logo = document.createElement('img')
      let name = document.createElement('h2');
      let address = document.createElement('p');
      let phone = document.createElement('p');      
      let website = document.createElement('a');
  

      name.innerHTML = `${company.name}`;
      address.innerHTML = `${company.address}`;
      phone.innerHTML = `${company.phone}`;
      website.innerHTML = `${company.website}`;
      website.href = `${company.website}`;
  

      logo.setAttribute('src', company.imageurl);
      logo.setAttribute('alt', `Logo of ${company.name}`);
      logo.setAttribute('loading', 'lazy');

      card.appendChild(logo);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
  
      grid.appendChild(card);
    }); 
} 


// The API was not working, so I used chatGPT to get what happens
getCompanyData(localData) 
  .then((companies) => {  // handle the successful response from the API
    displayCompanies(companies); //display the prophets' data on the web page.
  })

// Switch grid to list

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  display.classList.remove("grid");
  display.classList.add("list");
});
