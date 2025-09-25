import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTQ5OTg3MWMyMDY3NzRlZTM1YjU2NmE4MDM4ZDgwOSIsIm5iZiI6MTc1ODU1MTk5Ny44Niwic3ViIjoiNjhkMTVmYmRiZjQ3MmYwMGEzY2MzOTg3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.D2B0ZyQ1K9LEy-pMYkUHaQLsyEDlZv2pt-KM0qx6Y2c",
  },
});

export default instance;
