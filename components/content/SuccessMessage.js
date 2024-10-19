import Lottie from "react-lottie";
import animationData from "../../data/success.json";

export default function SuccessMessage({
  title = () => "Proposta realizada com sucesso!",
  subtitle = (
    <>
      Você <b>receberá um email</b> com os detalhes sobre a solicitação
      realizada.
    </>
  ),
  children,
}) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(animationData)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={false}
        isPaused={false}
        speed={0.7}
      />
      <center>
        <h2>{title()}</h2>
        <p style={{ marginBottom: "100px" }}>{subtitle}</p>
      </center>
      {children}
    </>
  );
}
