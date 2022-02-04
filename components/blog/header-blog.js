import { Box, Flex, Heading, Spacer, Text, Center } from "@chakra-ui/react";
import NextLink from 'next/link'
import LambdaTag from '../../components/blog/lambda-tag'
import { TimeIcon, CalendarIcon } from '@chakra-ui/icons'
import { formatDate } from '../../lib/formatDate'

export default function HeaderBlog({ title, publishedAt, readingTime, tags, slug }) {
  return (
    <Box mb={8} w='100%'>
      <Heading>
        <NextLink href={`/blog/${slug}`} mb={4} >
          {title}
        </NextLink>
      </Heading>
      <Flex mb={3}>
        <Flex>
          <Center>
            <CalendarIcon mr={2} />
            <Text>{formatDate(publishedAt)}</Text>
          </Center>
        </Flex>
        <Spacer />
        <Flex>
          <Center>
            <TimeIcon mr={2} />
            <Text>{readingTime}</Text>
          </Center>
        </Flex>
      </Flex>
      <Box>
        {tags.map((tag, i) => {
          return <LambdaTag key={i}>{tag}</LambdaTag>
        })}
      </Box>
    </Box>
  )
}
