import { Skeleton, Stack } from '@chakra-ui/react'
import { px } from 'framer-motion'
import React from 'react'

const ChatLoading = () => {
  return (
   <Stack>
    <Skeleton height={"45px"}/>
    <Skeleton height={"45px"}/>
    <Skeleton height={"45px"}/>
    <Skeleton height={"45px"}/>
    <Skeleton height={"45px"}/>
    <Skeleton height={"45px"}/>
    <Skeleton height={"45px"}/>
    <Skeleton height={"45px"}/>
    <Skeleton height={"45px"}/>
    <Skeleton height={"45px"}/>
    <Skeleton height={"45px"}/>
    <Skeleton height={"45px"}/>
    <Skeleton height={"45px"}/>
    <Skeleton height={"45px"}/>
   </Stack>
  )
}

export default ChatLoading