import axios from "axios";

export const baseUrl = "http://safetydevapis.safetytracker.be/public/api/";

export const httpClient = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});
