function fetchSimpsonsJSON() {
    const url = "https://simpsons-quotes-api.herokuapp.com/quotes";
    axios.get(url)
      .then(function(response) {
        return response.data[0];
      })
      .then(function(simpsons) {
  
        // Build a block of HTML
        const simpsonsHtml = `
          <img src="${simpsons.image}" alt=${simpsons.character} />
          <p><em>${simpsons.quote}</em></p>
          <strong>${simpsons.character}</strong>
        `;
        document.querySelector('#simpsons').innerHTML = simpsonsHtml;
      });
  }
  
fetchSimpsonsJSON();

function refreshPage(){
  fetchSimpsonsJSON();
}