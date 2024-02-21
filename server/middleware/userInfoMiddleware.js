import { fetchJson } from "../helpers/fetchJson.js";

export async function fetchUserInfo(openid_config, access_token) {
  // Fetch the OpenID configuration to find the userInfo endpoint.
  const { userinfo_endpoint } = await fetchJson(openid_config);

  // Make a request to the userInfo endpoint with the access token for authorization.
  const res = await fetch(userinfo_endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  // If the request is successful, return the parsed JSON response.
  if (res.ok) {
    return await res.json();
  } else if (res.status !== 401) {
    // If the request fails with an error other than 401 (Unauthorized), throw an error.
    throw new Error("Failed to fetch user information " + res.statusText);
  }
}

export function userInfoMiddleware(openid_config) {
  return async (req, res, next) => {
    // Extract the access_token from the request cookies.
    const { access_token } = req.signedCookies;

    // If an access token is present, attempt to fetch the user information.
    if (access_token) {
      try {
        req.user = await fetchUserInfo(openid_config, access_token);
      } catch (error) {
        console.error("Error fetching user info:", error);
        req.user = null; // indicate unauthenticated
      }
    }

    // Call next() to pass control to the next middleware function in the stack.
    next();
  };
}
