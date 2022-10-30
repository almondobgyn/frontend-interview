import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Resource } from "./Types";

export const ResourceItem = ({ resource }: { resource: Resource }) => {
  return (
    <Box p={4} bgColor="blackAlpha.400" borderRadius={16} overflow="auto">
      <HStack spacing="4">
        <Avatar size="md" src={resource.ImageUrl} name={resource.Title} />
        <VStack align="flex-start">
          <Text fontSize="medium"> {resource.Title} </Text>
        </VStack>
      </HStack>
    </Box>
  );
};
