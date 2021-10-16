import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { PricingBlockSection, Content, ContentWrapper } from "./styles";

interface PricingBlockProps {
  title: string;
  price: string;
  content: string;
  button: string;
  t: any;
  id: string;
  
}

const PricingBlock = ({ title, price, content, button, t, id}: PricingBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <PricingBlockSection id={id}>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <h2>{t(price)}</h2>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("pricing")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </PricingBlockSection>
  );
};

export default withTranslation()(PricingBlock);
