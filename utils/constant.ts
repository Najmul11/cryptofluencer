/* eslint-disable prefer-const */
const ENV_MODE: string = process.env.MODE || "production";

const getEnvUrls = () => {
  let apiUrl;
  let baseUrl;

  if (ENV_MODE === "development") {
    apiUrl = "http://localhost:5001/api";
    baseUrl = "http://localhost:5001/";
  } else {
    apiUrl = "http://localhost:5001/api";
    baseUrl = "http://localhost:5001/";
  }

  return { apiUrl, baseUrl, ENV_MODE };
};

export const { apiUrl, baseUrl, ENV_MODE: MODE } = getEnvUrls();
