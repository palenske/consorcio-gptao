import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, Drawer } from "antd";
import { useMediaQuery } from "react-responsive";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import useWidget from "~hooks/useWidget";
import { TextResponsive } from "~forms/maisbbcredito/Doadin/Doadin.style";
import { useAuthContext } from "~contexts/AuthContext";
import { useWhitelabel } from "~contexts/WhitelabelContext";
import { MenuItem } from "./Menu.styles";
import { Text } from "@labsmaisdigital/dsmaisevo";

const defaultMenuOptions = [
  {
    label: "Início",
    route: "/#",
    inPartnerFound: true,
  },
  {
    label: "Seja parceiro",
    route: "https://bankermaisdigital.com.br",
    inPartnerFound: false,
  },
  {
    label: "Contato",
    route: "#contact",
    inPartnerFound: true,
  },
  {
    label: "Sobre",
    route: "/sobre",
    inPartnerFound: true,
  },
  {
    label: "FAQ",
    route: "/faq",
    inPartnerFound: true,
  },
  {
    label: "Blog",
    route: "https://blog.cobanmaisdigital.com.br/",
    inPartnerFound: false,
  },
];

const authOptions = [
  {
    label: "Contratos",
    route: "/doadin/meus-contratos",
    inPartnerFound: true,
  },
];

const Menu = ({ handleShowAlert }) => {
  const { custom } = useWhitelabel();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 999 });
  const [visible, setVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const { isWidget } = useWidget();
  const { hasToken, clearToken } = useAuthContext();
  const route = useRouter();

  console.log(route);

  const isVamosParcelar = custom?.whitelabel?.partnerDomain == "vamosparcelar";
  const isPartner = custom?.whitelabel?.accountKey !== "cobanmaisdigital";

  useEffect(() => {
    handleShowAlert && handleShowAlert(showAlert);
  }, [showAlert]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const LogInOut = () => ({
    label: hasToken ? "Logout" : "Login",
    onClick: () => {
      route.push(hasToken ? "/doadin/inicio" : "/doadin/login");
      clearToken();
    },
    inPartnerFound: true,
  });

  const menuOptions = isVamosParcelar
    ? defaultMenuOptions?.filter(({ label }) => label !== "Contato")
    : [...defaultMenuOptions];

  if (hasToken) {
    menuOptions.push(...authOptions);
  }

  if (window.location.pathname.includes("doadin")) {
    menuOptions.push(LogInOut());
  }

  const isConecta = route?.pathname.indexOf("credito-banco-master") !== -1;

  const imageRoute = isConecta
    ? `/static/img/icons/maisbbdigital/conectaLogo.png`
    : custom?.logoFileName &&
      custom?.logoFileName.indexOf("logos-partners") !== -1
    ? "https://lbs-digital-images.s3.amazonaws.com/" + custom?.logoFileName
    : `/static/img/icons/maisbbdigital/${custom?.logoFileName ?? "logo.svg"}`;

  return (
    <>
      {!isWidget && (
        <div style={{ position: "absolute", width: "100%", zIndex: 10 }}>
          {showAlert && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                backgroundColor: "var(--primary-dark)",
                height: "37px",
              }}
              onClick={() => {
                setShowAlert(false);
              }}
            >
              <div />
              <div style={{ paddingTop: "6px" }}>
                <Text size={isTabletOrMobile ? "sm" : "rg"} color="white">
                  &nbsp;&nbsp;
                  {isTabletOrMobile &&
                    "Atenção! Não pedimos adiantamento para realizar empréstimo."}
                  {!isTabletOrMobile &&
                    "Atenção! Não pedimos adiantamento em empréstimo."}
                </Text>
              </div>
              <div
                style={{
                  color: "white",
                  marginRight: "20px",
                  fontSize: "25px",
                }}
              >
                <i class="las la-times"></i>
              </div>
            </div>
          )}
          <div
            style={{
              backgroundColor: custom?.partnerFound
                ? "white"
                : "var(--primary)",
              color: custom?.partnerFound
                ? "var(--primary)"
                : "var(--contrast)",
              padding: "0 10px",
              boxShadow: "rgba(0, 0, 0, 0.04) 5px 10px 10px",
              height: "75px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "1366px",
                display: "flex",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                  display: "inline",
                  background: `url(${imageRoute})`,
                  height: isConecta ? "" : "calc(100% - 20px)",
                  margin: isConecta ? "" : "10px 0px",
                  display: "block",
                  width: "200px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundPositionX: "left",
                }}
                onClick={() => {
                  route.push("/");
                }}
              ></div>
              <div>
                {!isTabletOrMobile ? (
                  <>
                    <nav id="navbar" className="navbar">
                      <ul
                        style={{
                          height: "100%",
                          marginTop: "10px",
                          marginRight: "15px",
                        }}
                      >
                        {menuOptions
                          .filter(
                            ({ inPartnerFound }) =>
                              !isPartner || isPartner == inPartnerFound
                          )
                          .map(({ label, route, onClick }) => {
                            return (
                              <li
                                style={{
                                  display: "inline-block",
                                  paddingLeft: "50px",
                                  paddingTop: "20px",
                                  textDecoration: "none",
                                  transition:
                                    "color 0.15s ease-in-out, background-color 0.15s ease-in-out border-color 0.15s ease-in-out",
                                }}
                                key={route}
                              >
                                <a
                                  style={{
                                    color: "black",
                                    fontWeight: "600",
                                  }}
                                  href={route}
                                  onClick={onClick}
                                >
                                  {label}
                                </a>
                              </li>
                            );
                          })}
                      </ul>
                      <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                  </>
                ) : (
                  <>
                    <Button
                      type="text"
                      onClick={showDrawer}
                      style={{
                        padding: 0,
                        height: "100%",
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                    >
                      <MenuOutlined
                        style={{
                          color: custom?.partnerFound
                            ? "var(--primary)"
                            : "var(--constrast)",
                          fontSize: "20px",
                        }}
                      />
                    </Button>
                    <Drawer
                      width={300}
                      title={
                        <div>
                          <TextResponsive
                            toggleMargin={false}
                            color="var(--primary)"
                            size="xl"
                          >
                            Menu
                          </TextResponsive>
                        </div>
                      }
                      headerStyle={{ paddingLeft: "1rem", background: "white" }}
                      bodyStyle={{ textAlign: "center", padding: "10px 0 0 0" }}
                      closeIcon={
                        <div
                          style={{
                            color: "#var(--primary)",
                            fontSize: "1.1rem",
                          }}
                        >
                          <CloseOutlined />
                        </div>
                      }
                      placement="right"
                      onClose={onClose}
                      visible={visible}
                    >
                      {menuOptions
                        .filter(
                          ({ inPartnerFound }) =>
                            !isPartner || isPartner == inPartnerFound
                        )
                        .map(({ label, route, onClick }) => (
                          <MenuItem key={label} className="menu-item">
                            <a
                              style={{ color: "var(--primary)" }}
                              href={route}
                              onClick={() => {
                                onClose();
                                onClick();
                              }}
                            >
                              {label}
                            </a>
                          </MenuItem>
                        ))}
                    </Drawer>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
