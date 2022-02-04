import { Text } from "@chakra-ui/react";

export default function LambdaTag({ children }) {
  return <Text mr={3} px={2} bg={'green.400'} display={'inline-block'} borderRadius={2}>{children}</Text>;
}
