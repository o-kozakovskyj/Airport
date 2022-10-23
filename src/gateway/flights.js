const baseUrl = 'https://api.iev.aero/api/flights';

const fetchFlightsList = dateUrl => {
  console.log(dateUrl);
  return fetch(`${baseUrl}/${dateUrl}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Internal Server Error. Can't display flights`);
  });
};

export default fetchFlightsList;
