
import NextLink from "next/link";

import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function LambdaLink (props){
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <Link {...props} color="green.900" />
      </NextLink>
    );
  }

  return (
    <Link
      isExternal
      color="brand.900"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children} {typeof props.children !== "object" && <ExternalLinkIcon mx="2px" />}
    </Link>
  );
};