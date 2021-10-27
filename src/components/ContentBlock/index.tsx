import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import FAQContentBlock from "./FAQContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "faq") return <FAQContentBlock {...props} />;
  return null;
};

export default ContentBlock;
