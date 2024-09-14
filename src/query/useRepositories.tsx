import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://api.github.com/users/sauloveigr/repos";

const useRepositories = () => {
   const fetchData = async () => {
      const response = await axios.get(API_URL);
      return response?.data;
   };
   const repositories = useQuery({
      queryKey: ["repositories"],
      queryFn: fetchData,
   });

   return repositories?.data;
};

export default useRepositories;
