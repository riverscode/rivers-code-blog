import LambdaLink from "./lambda-link";
import LambdaTag from './lambda-tag'
import LambdaImage from './lambda-image'
import {
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
export const MDXComponents = {
  a: LambdaLink,
  hr: Divider,
  h1: (props) => <Heading as="h1" mt={6} mb={1} color="green.400" size="3xl" {...props} />,
  h2: (props) => <Heading as="h2" mt={6} mb={1} color="green.400" size="2xl" {...props} />,
  h3: (props) => <Heading as="h3" mt={6} mb={1} color="green.400" size="xl" {...props} />,
  h4: (props) => <Heading as="h4" mt={6} mb={1} color="green.400" size="lg" {...props} />,
  h5: (props) => <Heading as="h5" mt={6} mb={1} color="green.400" size="md" {...props} />,
  h6: (props) => <Heading as="h6" mt={6} mb={1} color="green.400" size="sm" {...props} />,
  p: (props) => <Text fontSize="lg" lineHeight={6} my={3} {...props} />,
  img: (props) => <LambdaImage {...props} />,
  LambdaTag
};