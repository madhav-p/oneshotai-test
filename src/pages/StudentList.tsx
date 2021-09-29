import React from "react";
import { useQuery } from "urql";
import { Student } from "../schema";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/table";
import PageLayout from "../layouts/Page";
import Async from "../views/Async";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
const StudentsQuery = `
{
  students(sortBy:NAME_ASC){
    _id
		name
    batchYear
    slug
    collegeId{
      name
    }
  }
}
`;

const StudentList = () => {
  const useQueryResponse = useQuery<{
    students: Student[];
  }>({
    query: StudentsQuery,
  });

  // const { data, fetching, error } = result;
  // if (fetching) return <p>Loading...</p>;
  // if (error) return <p>Oh no... {error.message}</p>;

  return (
    <PageLayout title="Students">
      <Async
        useQueryResponse={useQueryResponse}
        dataHandler={({ students }) => (
          <Table bg="white">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th isNumeric>Batch Year</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((s) => (
                <Tr key={s._id}>
                  <Td>
                    <ChakraLink to={`/students/${s.slug}`} as={Link}>
                      {s.name}
                    </ChakraLink>
                  </Td>
                  <Td isNumeric>{s.batchYear}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      />
    </PageLayout>
  );
};

export default StudentList;
