import * as animationData from "~data/loading.json";

export default function LoadingMessage({
  title = "carregando...",
  subtitle = "Analisando informações, aguarde um momento.",
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={false}
        isPaused={false}
        speed={0.3}
      /> */}
      <center style={{ margin: "25px 0 100px" }}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </center>
    </>
  );
}
