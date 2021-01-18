const sendRequest = async function (
  url,
  method = 'GET',
  body,
  header = {
    'Content-Type': 'application/json',
  },
) {
  const response = await fetch(url, {
    method: method,
    headers: header,
    body: JSON.stringify(body),
  });

  return response.json();
};

export default sendRequest;
