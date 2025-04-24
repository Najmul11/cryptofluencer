/* eslint-disable prefer-const */
const ENV_MODE: string = process.env.NODE_ENV || "production";

const getEnvUrls = () => {
  let apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (ENV_MODE === "development") {
    apiUrl = "http://localhost:5001/api/v1";
    baseUrl = "http://localhost:5001/v1";
  } else {
    apiUrl = process.env.NEXT_PUBLIC_API_URL;
    baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  }

  return { apiUrl, baseUrl, ENV_MODE };
};

export const { apiUrl, baseUrl, ENV_MODE: MODE } = getEnvUrls();
