export async function getCrypto() {
  try {
    const res = await fetch('http://localhost:8080/api');
    if (!res.ok)
      throw new Error('The data could not be fetched from local server');

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
