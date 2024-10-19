import { useState, useEffect } from "react";
import Router from "next/router";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import { Col, Row, Spin } from "antd";
import { Text, MainContainer } from "@labsmaisdigital/dsmaisevo";
import { motion } from "framer-motion";
import { useWhitelabel } from "../../contexts/WhitelabelContext";
import BankLabel from "../../ui/BankLabel";
import { Image } from "./Hero.style";

const OptionsList = ({ products, custom, partnerKey }) => {
  const [isRouteLoading, setRouteLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();
  const [options, setOptions] = useState(products);
  const isMobile = useMediaQuery({ query: `(max-width: 991px)` });
  const isMainPortal = partnerKey == "cobanmaisdigital";

  useEffect(() => {
    Router.events.on("routeChangeStart", url => {
      setRouteLoading(url);
    });
    Router.events.on("routeChangeComplete", url => {
      setRouteLoading(false);
    });
    Router.events.on("routeChangeError", url => {
      setRouteLoading(false);
    });
  }, [Router]);

  const filteredOptions = options.filter(optionItem =>
    optionItem?.hideForAllPartners && custom?.partnerFound ? false : true
  );
  const hasOverrideProducts = custom?.partnerFound && custom?.overrideProducts;

  const getProductsList = () => {
    if (hasOverrideProducts) {
      return custom?.overrideProducts;
    }

    return filteredOptions;
  };

  const productList = getProductsList();

  return (
    <>
      <Row gutter={[15, 15]}>
        {productList
          .slice(0, showAll || isMobile ? productList.length : 3)
          .map((opt, optIndex) => {
            const shouldShowDetails = !isMobile && opt?.description;

            return (
              <Col xs={24} sm={12} md={12} lg={12} xl={8} key={opt.link}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    ease: "easeInOut",
                    delay: (optIndex * 5) / 100,
                  }}
                  whileHover={{
                    scale: 1.04,
                    transition: { duration: 0.2 },
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <div
                    onClick={() => {
                      if (opt.enabled) {
                        router.push(opt.link);
                      }
                    }}
                    style={{
                      backgroundColor: "white",
                      border: "2px solid var(--primary)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "6px",
                      cursor: "pointer",
                      userSelect: "none",
                      overflow: "hidden",
                      minHeight: "48px",
                    }}
                  >
                    {opt?.lineAwesomeName && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "row",
                            height: "100%",
                            minHeight: isMobile ? "60px" : "72px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "40px",
                                height: "40px",
                                backgroundColor: "var(--primary)",
                                color: "white",
                                borderRadius: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "8px",
                                flexShrink: "0",
                                fontSize: "24px",
                              }}
                            >
                              {isRouteLoading == opt.link ? (
                                <Spin style={{ marginTop: "6px" }} />
                              ) : (
                                <i class={`las la-${opt?.lineAwesomeName}`}></i>
                              )}
                            </div>
                          </div>
                          <div
                            style={{
                              flex: 1,
                              display: "flex",
                              alignItems: "center",
                              padding: "8px",
                              flexShrink: 1,
                            }}
                          >
                            <Text size="rg" color="primary" weight="bolder">
                              {opt.label}
                            </Text>
                          </div>
                          {!shouldShowDetails && (
                            <div
                              style={{
                                background: isMainPortal
                                  ? "#FFEC41"
                                  : "var(--primary-dark)",
                                color: isMainPortal
                                  ? "var(--primary)"
                                  : "white",
                                borderLeft: "2px solid var(--primary-dark)",
                                width: "46px",
                                flexShrink: "0",
                                fontSize: "24px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <i class="las la-arrow-right"></i>
                            </div>
                          )}
                        </div>
                        {shouldShowDetails && (
                          <div
                            style={{
                              padding: "6px 12px",
                              marginBottom: "4px",
                              minHeight: "150px",
                            }}
                          >
                            {(opt.description ?? []).map(s => (
                              <div key={s}>
                                <Text size="sm" color="regular" weight="bolder">
                                  {s}
                                </Text>
                              </div>
                            ))}
                          </div>
                        )}
                        {shouldShowDetails && (
                          <div
                            style={{
                              background: isMainPortal
                                ? "#FFEC41"
                                : "var(--primary-dark)",
                              color: isMainPortal ? "var(--primary)" : "white",
                              borderTop: "2px solid var(--primary-dark)",
                              width: "100%",
                              flexShrink: "0",
                              fontSize: "24px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Text
                              size="rg"
                              color={isMainPortal ? "primary" : "white"}
                              weight="bolder"
                            >
                              Simule agora
                            </Text>
                            &nbsp;<i class="las la-arrow-right"></i>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              </Col>
            );
          })}
        {!showAll && !isMobile && productList.length > 3 && (
          <motion.div
            transition={{ ease: "easeInOut" }}
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.96 }}
            style={{
              width: "100%",
              height: "69px",
              background: "#3646B6",
              background: "var(--primary-dark)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "600",
              margin: "0 10px",
              cursor: "pointer",
              color: isMainPortal ? "#FFEC41" : "white",
            }}
            onClick={() => {
              setShowAll(true);
            }}
          >
            VER MAIS PRODUTOS&nbsp;
            <i style={{ fontSize: "25px" }} class="las la-arrow-right"></i>
          </motion.div>
        )}
      </Row>
    </>
  );
};

const Hero = ({ products }) => {
  const { custom } = useWhitelabel();
  const isOrgulho = custom?.whitelabel?.partnerDomain === "orgulho";
  const partnerKey = custom?.whitelabel?.accountKey;
  const isMobile = useMediaQuery({ query: `(max-width: 991px)` });
  const isMainPortal = partnerKey == "cobanmaisdigital";

  return (
    <>
      <MainContainer color="primary">
        <div
          style={{
            marginTop: "50px",
            marginBottom: isMobile ? "10px" : "30px",
            minHeight: isMobile ? "initial" : "calc(100vh - 209px)",
          }}
        >
          <Row gutter={[60, 60]} justify="center" align="middle">
            <Col xs={24} sm={24} md={24} lg={14} xl={14}>
              <div>
                <div style={{ marginTop: isMobile ? "60px" : "150px" }}>
                  <>
                    <div style={{ marginBottom: "20px" }}>
                      <Text
                        size={isMobile ? "rg" : "xxl"}
                        color={isMobile && isMainPortal ? "#FFEC41" : "white"}
                      >
                        <b>Contrate on-line</b>
                      </Text>
                    </div>
                    {!isMobile && (
                      <>
                        <div
                          style={{ marginBottom: "30px", maxWidth: "600px" }}
                        >
                          <Text size="rg" color="white">
                            Empréstimo, consórcio, seguro, título de
                            capitalização, planos odontológicos e muito mais.
                            Temos a solução financeira ideal para você.
                          </Text>
                        </div>
                      </>
                    )}
                  </>
                </div>
              </div>
              <div>
                <OptionsList
                  partnerKey={partnerKey}
                  custom={custom}
                  products={products ?? custom?.products}
                />
              </div>
            </Col>
            {!isMobile && (
              <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                <Image
                  alt="hero image"
                  width="596px"
                  src={
                    isOrgulho
                      ? "/static/img/partners/orgulho-mais-digital.png"
                      : "/static/img/home-cover.webp"
                  }
                  style={{
                    maxWidth: "100%",
                  }}
                />
              </Col>
            )}
          </Row>
        </div>
      </MainContainer>
      <BankLabel />
    </>
  );
};

export default Hero;
