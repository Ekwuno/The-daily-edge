import React from "react";
import { useState } from "react";
import {Box, HStack, StackDivider} from "@chakra-ui/react";
import AddComment from "./AddComment";



export default function CommentSection({ comments }) { 
    return (
        <HStack
        divider={<StackDivider borderColor="gray.200" />}
        flexDir={{ base: "column", md: "row" }}
        position="relative"
        align="flex-start"
        spacing={4}
        width="100%"
        my={16}> 

        <Box>
            <AddComment/>
        </Box>
        <Box w={{base: "100%", md: "60%"}}>
        
        </Box>
        </HStack>
    )
}