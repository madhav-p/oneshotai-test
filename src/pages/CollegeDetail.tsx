import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { College, Course, Student } from "../schema";
import { useQuery } from "urql";
import PageLayout from "../layouts/Page";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import Icon from "@chakra-ui/icon";
import { MdLocationCity, MdPeople } from "react-icons/md";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import Async from "../views/Async";
import { UseQueryResponse } from "urql";
import Loading from "../widgets/Loading";
const CollegeQuery = `query($slug:String){
  college(query:{slug:$slug}){
    _id
    name
    slug
    yearFounded
    city
    state
    country
    studentsCount
    courses{
      name
    }
    students{
      name
      slug
      batchYear
    }
  }
}
`;

// const getAvatarURL = (name:string)=>{
//   return `https://avatars.dicebear.com/api/initials/${name}.svg`
// }
const CollegeDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const useQueryResponse = useQuery<{
    college: College & {
      courses: Course[];
      students: Student[];
    };
  }>({
    query: CollegeQuery,
    variables: {
      slug,
    },
  });
  return (
    <PageLayout title="College Details">
      <Async
        useQueryResponse={useQueryResponse}
        dataHandler={({ college }) => (
          <>
            <Flex
              bg="white"
              justifyContent="space-between"
              flexDirection={{ base: "column", md: "row" }}
              p="4"
              borderRadius="md"
            >
              <Flex>
                {/* <Avatar name={college.name} /> */}
                <Box>
                  <Text fontWeight="bold" fontSize="2xl">
                    {college.name}
                    {/* <Badge ml="1" colorScheme="green">
        New
      </Badge> */}
                  </Text>
                  <Text fontSize="xl">{college.yearFounded}</Text>
                </Box>
              </Flex>
              <Flex
                alignItems={{
                  base: "center",
                  md: "stretch",
                }}
                justifyContent={{
                  base: "space-between",
                  md: "center",
                }}
                flexDirection={{
                  base: "row",
                  md: "column",
                }}
              >
                <Text display="inline-flex" alignItems="center">
                  <Icon as={MdLocationCity} fontSize={24} mx={1} my={1.5} />
                  {college.city}, {college.state}, {college.country}
                </Text>
                <Text display="inline-flex" alignItems="center">
                  <Icon as={MdPeople} fontSize={24} mx={1} my={1.5}></Icon>
                  {college.studentsCount}
                </Text>
              </Flex>
            </Flex>
            <Box my="2">
              <Heading fontSize="xl" py="2">
                Courses
              </Heading>
              <Table bg="white">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {college.courses.map((course) => (
                    <Tr>
                      <Td>{course.name}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
            <Box my="2">
              <Heading fontSize="xl" py="2">
                Students
              </Heading>
              <Table bg="white">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th isNumeric>Batch Year</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {college.students.map((s) => (
                    <Tr>
                      <Td>{s.name}</Td>
                      <Td isNumeric>{s.batchYear}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </>
        )}
      />
    </PageLayout>
  );
};

export default CollegeDetail;
