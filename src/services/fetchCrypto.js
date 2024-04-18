// Define the base URL for API requests
let baseUrl;

// // Check if the app is running in a development environment
// if (process.env.NODE_ENV === 'development') {
//   // Use localhost for development
//   baseUrl = 'http://localhost:8080';
// } else {
//   // Use the IP address or domain name for production
//   baseUrl = 'http://192.168.1.142:8080'; // Update with your server's IP address
// }

// Append the API endpoint to the base URL
// const apiUrl = `${baseUrl}/api/crypto`;
const apiUrl = `http://192.168.1.142:8080/api/crypto`;

export async function getCrypto() {
  try {
    // const res = await fetch('http://localhost:8080/api/crypto');
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error('Fetch failed');

    const data = await res.json();
    // console.log(data.data);
    return data.data;
  } catch (error) {
    console.log("Data wasn't fetched");
    console.error(
      'There was a problem with the crypto fetch operation:',
      error,
    );
  }
}

export async function getNews() {
  try {
    const res = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_41648deb0d64d90d60343a6d6d02be78de2e2&q=pegasus&language=en`,
    );
    if (!res.ok) throw new Error('News data could not be fetched');

    const data = await res.json();

    return data.results;
  } catch (error) {
    console.error('There was a problem with the news fetch operation', error);
  }
}
