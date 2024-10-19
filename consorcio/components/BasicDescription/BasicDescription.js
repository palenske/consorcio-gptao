import { ContentAndImage, Text } from "@labsmaisdigital/dsmaisevo";

const BasicDescription = () => {
  return (
    <ContentAndImage
      reverse={true}
      textColor="darkgray"
      src="/static/img/couple.png"
      alt="people on notebook"
    >
      <div style={{ width: "90%", margin: "20px auto 40px" }}>
        <Text color="primary" size="xl">
          Consórcio descomplicado
        </Text>
      </div>
      <div style={{ height: "100%", textAlign: "justify" }}>
        <div style={{ width: "90%", margin: "0 auto" }}>
          <Text>
            Simplificamos a forma de contratar produtos financeiros do Banco do
            Brasil. No Consórcio BB a jornada é 100% digital, você escolhe o
            prazo e o valor que se adequa à sua realidade. Realize os seus
            sonhos de forma econômica, parcelada e com poder de compra à vista.
          </Text>
        </div>
      </div>
    </ContentAndImage>
  );
};

export default BasicDescription;
