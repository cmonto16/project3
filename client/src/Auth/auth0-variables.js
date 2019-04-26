var url = window.location.href;
var urlParts = url.split("/");

export const AUTH_CONFIG = {
  domain: "attendus.auth0.com",
  clientId: "LJldyxsZrlGRo5CE1SnMHMOXZ6ry2xBc",
  callbackUrl: urlParts[0] + "//" + urlParts[2] + "/callback",
  apiUrl: "https://attendus.auth0.com/api/v2/"
};
