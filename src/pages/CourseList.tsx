import React from "react";
import { useQuery } from "urql";
import { Course } from "../schema";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/table";
import PageLayout from "../layouts/Page";
import Async from "../views/Async";
const CoursesQuery = `
{
  courses(sortBy:NAME_ASC){
    _id
		name
  }
}
`;

const CourseList: React.FC = () => {
  const useQueryResponse = useQuery<{
    courses: Course[];
  }>({
    query: CoursesQuery,
  });

  return (
    <PageLayout title="Courses">
      <Async
        useQueryResponse={useQueryResponse}
        dataHandler={(data) => (
          <Table bg="white">
            <Thead>
              <Tr>
                <Th>Name</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data!.courses.map((c) => (
                <Tr key={c._id}>
                  <Td>{c.name}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      />
    </PageLayout>
  );
};

export default CourseList;
