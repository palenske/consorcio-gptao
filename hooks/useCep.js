import axios from "axios";
import { useState, useEffect } from "react";
import { onlyNumbers } from "../lib/string";

const useCep = ({ cep = "", setCurrentAddress = () => {} }) => {
  const [isLoading, setIsLoading] = useState(false);

  const cepNumbers = onlyNumbers(cep);
  const getAddressDetails = async () => {
    if (cep && cep?.length && cepNumbers.length === 8) {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${cepNumbers}/json`
        );
        setCurrentAddress(data);
      } catch (err) {
        console.error(err);
        setCurrentAddress();
      } finally {
        setIsLoading(false);
      }
    } else {
      setCurrentAddress();
    }
  };

  useEffect(() => {
    getAddressDetails(cep);
  }, [cep]);

  return { isLoading };
};

export default useCep;
