export function serializeUrl(objUrl) {
  let queryUrl = "";

  for (let key in objUrl) {
    queryUrl += `&${key}=${objUrl[key]}`;
  }

  return queryUrl;
}
