import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import { API_URL } from "../../index";

interface PDPContextType {
  data: any;
  isLoading: boolean;
  error: any;
  searchItem: (id: string) => void;
  itemID: string;
}

export const PDPContext = createContext<PDPContextType>({
  data: undefined,
  isLoading: true,
  error: undefined,
  searchItem: () => {},
  itemID:''
});

export const usePDPContext = () => useContext(PDPContext);

const PDPContextProvider = ({ children }: any) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itemID, setitemID] = useState('');

  const searchItem = (itemID: string) => setitemID(itemID);

  useEffect(() => {
    async function fetchData() {
        try {
          setError(null);
          setIsLoading(true);
          console.log("search", itemID)
          const result = await (await axios.get(`${API_URL}items/${itemID}`)).data;
          setData(result);
        } catch (error: any) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }
    if(itemID){
        fetchData();
    }
  }, [itemID]);

  return (
    <PDPContext.Provider value={{ data, isLoading, error, searchItem,itemID }}>
      {children}
    </PDPContext.Provider>
  );
};

export default PDPContextProvider;
