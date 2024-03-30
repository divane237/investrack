export async function fetchCrypto() {
  const res = fetch('http://localhost:8080/api')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Assuming the response is JSON
    })
    .then((data) => {
      // Work with your data here
      console.log(data.data);

      return data.data;
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
