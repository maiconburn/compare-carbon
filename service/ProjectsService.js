import axios from "axios";

export class ProjectsService {
  getProject(id) {
    return axios
      .get(`https://api.carboncertify.com/projects/${id}`)
      .then((res) => res.data);
  }
  getProjects() {
    return axios
      .get("https://api.carboncertify.com/projects")
      .then((res) => res.data);
  }
}
