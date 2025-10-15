
exports.handler = async function (event, context) {
  const { userinput } = event.queryStringParameters;
  const API_KEY = process.env.WEATHER_API_KEY; // This securely accesses your key on Netlify

  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${userinput}&aqi=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
        return { statusCode: 404, body: JSON.stringify(data) };
    }
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to fetch data' }) };
  }
};