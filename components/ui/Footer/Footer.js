import { Footer } from "@labsmaisdigital/dsmaisevo";
import useWidget from "~hooks/useWidget";
import { useWhitelabel } from "../../contexts/WhitelabelContext";

const WrapperFooter = () => {
  const { custom } = useWhitelabel();
  const { isWidget } = useWidget();
  const isVamosParcelar = custom?.whitelabel?.partnerDomain === "vamosparcelar";

  return !isWidget && <Footer showAddress={!isVamosParcelar} />;
};

export default WrapperFooter;
