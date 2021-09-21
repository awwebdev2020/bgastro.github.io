import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import PricingBlockContent from "../../content/PricingBlockContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const PricingBlock = lazy(() => import("../../components/PricingBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />

      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      
      <PricingBlock
        title={PricingBlockContent.title}
        price={PricingBlockContent.price}
        content={PricingBlockContent.text}
        button={PricingBlockContent.button}
      />

      <PricingBlock
        title={PricingBlockContent.title}
        price={PricingBlockContent.price}
        content={PricingBlockContent.text}
        button={PricingBlockContent.button}
      />

      <PricingBlock
        title={PricingBlockContent.title}
        price={PricingBlockContent.price}
        content={PricingBlockContent.text}
        button={PricingBlockContent.button}
      />
      
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
