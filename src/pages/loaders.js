import { defer } from "react-router-dom";
import apiService from "../services/api";

export const loadThoughts = ({ params }) => {
  const { author } = params;
  const thoughts = author
    ? apiService.showThoughts(author)
    : apiService.indexThoughts();

  return defer({ thoughts });
};
