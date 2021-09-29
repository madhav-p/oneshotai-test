import React from "react";
import { useQuery } from "urql";
import { College } from "../schema";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/table";
import PageLayout from "../layouts/Page";
import Async from "../views/Async";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
const CollegesQuery = `
{
  colleges(sortBy:STATE_ASC){
    _id
		city
		country
		name
		slug
		state
		studentsCount
  }
}
`;

const CollegeList: React.FC = () => {
  const useQueryResponse = useQuery<{
    colleges: College[];
  }>({
    query: CollegesQuery,
  });

  return (
    <PageLayout title="Colleges">
      <Async
        useQueryResponse={useQueryResponse}
        dataHandler={(data) => (
          <Table bg="white">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>State</Th>
                <Th>No. of Students</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data!.colleges.map((c) => (
                <Tr key={c._id}>
                  <Td>
                    <ChakraLink
                      as={Link}
                      to={`/colleges/${c.slug}`}
                      color="blue"
                      _hover={{
                        color: "darkblue",
                        textDecoration: "underline",
                      }}
                    >
                      {c.name}
                    </ChakraLink>
                  </Td>
                  <Td>{c.state}</Td>
                  <Td>{c.studentsCount}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      />
    </PageLayout>
  );
};

export default CollegeList;
