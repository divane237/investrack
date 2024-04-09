export async function getCrypto() {
  try {
    const res = await fetch('http://localhost:8080/api/crypto');
    if (!res.ok)
      throw new Error('The crypto data could not be fetched from local server');

    const data = await res.json();
    return data.data;
  } catch (error) {
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
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error('There was a problem with the news fetch operation', error);
  }
}
