import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import PricingBlockContent from "../../content/PricingBlockContent.json";
import PricingBlockContent2nd from "../../content/PricingBlockContent2nd.json";
import PricingBlockContent3rd from "../../content/PricingBlockContent3rd.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const PricingBlock = lazy(() => import("../../components/PricingBlock"));
const PricingBlock2nd = lazy(() => import("../../components/PricingBlock2nd"));
const PricingBlock3rd = lazy(() => import("../../components/PricingBlock3rd"));
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

      <PricingBlock2nd
        title={PricingBlockContent2nd.title}
        price={PricingBlockContent2nd.price}
        content={PricingBlockContent2nd.text}
        button={PricingBlockContent2nd.button}
      />

      <PricingBlock3rd
        title={PricingBlockContent3rd.title}
        price={PricingBlockContent3rd.price}
        content={PricingBlockContent3rd.text}
        button={PricingBlockContent3rd.button}
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
