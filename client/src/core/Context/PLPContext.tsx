import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import { API_URL } from "../..";

interface PLPContextType {
  data: any;
  isLoading: boolean;
  error: any;
  searchItems: (query: string) => void;
  query: string;
}

export const PLPContext = createContext<PLPContextType>({
  data: undefined,
  isLoading: true,
  error: undefined,
  searchItems: () => {},
  query:''
});

export const usePLPContext = () => useContext(PLPContext);

const PLPContextProvider = ({ children }: any) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const searchItems = (query: string) => setQuery(query);

  useEffect(() => {
    async function fetchData() {
        try {
          setError(null);
          setIsLoading(true);
          const result = await (await axios.get(`${API_URL}items?q=${query}`)).data;
          setData(result);
        } catch (error: any) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }
    if(query){
        fetchData();
    }
  }, [query]);

  return (
    <PLPContext.Provider value={{ data, isLoading, error, searchItems,query }}>
      {children}
    </PLPContext.Provider>
  );
};

export default PLPContextProvider;
