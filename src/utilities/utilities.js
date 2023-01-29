export const callServer = (url, data, serverUrl) => {
  let JSONData = JSON.stringify(data);
  url = serverUrl + url;
  return { url, JSONData };
};
