import React, { useState } from 'react'
import Container from "../../components/container";

import { getFilesMetadata } from "../../lib/mdx";
import { SearchIcon } from '@chakra-ui/icons'
import HeaderBlog from '../../components/blog/header-blog';
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import Head from 'next/head';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts
    .sort(
      (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))
  return (
    <>
    <Head>
      <title>River Code | Blog</title>
    </Head>
    <Container>
      <Stack
        as="main"
        justifyContent="center"
        alignItems="flex-start"
        width="100%"
        borderBottom={1}
        >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="100%"
          
          >
          <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
            Blog ({posts.length} posts)
          </Heading>
          <InputGroup mb={8} w="100%">
            <Input
              aria-label="Buscar por título"
              placeholder="Buscar por título"
              onChange={(e) => setSearchValue(e.target.value)}
              />
            <InputRightElement>
              <SearchIcon color="gray.300" />
            </InputRightElement>
          </InputGroup>
          {!filteredBlogPosts.length && 'No hemos encontrado ningun post 🥺'}
          {filteredBlogPosts.map((post, index) => {
            return (
              <HeaderBlog key={index} title={post.title} publishedAt={post.publishedAt} readingTime={post.readingTime.text} tags={post.tags} slug={post.slug} />
              )
            })}
        </Flex>
      </Stack>

    </Container >
            </>
  );
}

export async function getStaticProps() {
  const posts = await getFilesMetadata();
  return {
    props: {
      posts: posts,
    },
  };
}