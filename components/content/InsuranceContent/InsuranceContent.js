import { Text, Button, ContentAndImage } from "@labsmaisdigital/dsmaisevo";

const InsuranceContent = ({
  sectionName = "Dental",
  title,
  children,
  redirect,
  imgPath,
}) => {
  return (
    <div style={{ marginTop: "60px" }}>
      <ContentAndImage color="white" src={imgPath} alt={sectionName}>
        <div style={{ marginBottom: "20px" }}>
          <Text color="primary" size="rg" decoration="underline">
            {sectionName}
          </Text>
        </div>
        <Text color="primary" size="xl">
          <b>{title}</b>
        </Text>
        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <Text color="regular" size="rg">
            {children}
          </Text>
        </div>
        <br />
        <a id={sectionName} class={redirect} href={redirect}>
          <Button type="primary" size="extra" text="Contrate já" />
        </a>
      </ContentAndImage>
    </div>
  );
};

export default InsuranceContent;
