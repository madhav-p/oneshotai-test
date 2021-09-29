import { Avatar } from "@chakra-ui/avatar";
import { Box, Center, Heading, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Link as ChakraLink, Tag } from "@chakra-ui/react";
import { useQuery } from "urql";
import PageLayout from "../layouts/Page";
import { College, Student } from "../schema";
import Async from "../views/Async";

const StudentQuery = `
query($slug:String){
  student(query:{slug:$slug}){
    _id
    name
    slug
    batchYear
    skills
    college{
      name
      slug
    }
  }
}`;

const StudentDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log({ slug });
  const useQueryResponse = useQuery<{
    student: Student & {
      college: College;
    };
  }>({
    query: StudentQuery,
    variables: {
      slug,
    },
  });
  return (
    <PageLayout title="Student Details">
      <Async
        useQueryResponse={useQueryResponse}
        dataHandler={({ student }) => (
          <Box>
            <Center>
              <Avatar name={student.name} size="2xl"></Avatar>
            </Center>
            <Box bg="white" mt={-16} p={6} textAlign="center" borderRadius="md">
              <Heading fontSize="3xl" pt={14} pb={1}>
                {student.name}
              </Heading>
              <Text fontSize="lg">
                <ChakraLink
                  to={`/colleges/${student?.college?.slug}`}
                  as={Link}
                >
                  {student?.college?.name}
                </ChakraLink>{" "}
                - {student.batchYear} Batch{" "}
              </Text>
              <Center>
                <HStack spacing={4} mt={4} ml="auto" mr="auto">
                  {/* <Text>Skills</Text> */}
                  {student.skills.map((skill, i) => (
                    <Tag
                      size="md"
                      key={skill + i}
                      variant="outline"
                      colorScheme="blue"
                      px={3}
                    >
                      {skill}
                    </Tag>
                  ))}
                </HStack>
              </Center>
            </Box>
          </Box>
        )}
      ></Async>
    </PageLayout>
  );
};

export default StudentDetail;
