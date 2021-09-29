import { Container, Heading, Box, Grid } from "@chakra-ui/react";
import React from "react";
import { MdBook, MdMap, MdPerson, MdSchool } from "react-icons/md";
import TotalStats from "../widgets/TotalStats";

import Chart from "react-google-charts";
import PageLayout from "../layouts/Page";
import Loading from "../widgets/Loading";

const Dashboard: React.FC = () => {
  return (
    <PageLayout title="Dashboard">
      <Grid gridTemplateColumns="repeat(auto-fit, minmax(200px,1fr))" gap="4">
        {[
          {
            label: "Courses",
            icon: MdSchool,
            number: 50,
          },
          {
            label: "Students",
            icon: MdPerson,
            number: 1000,
          },
          {
            label: "Courses",
            icon: MdBook,
            number: 500,
          },
          {
            label: "States",
            icon: MdMap,
            number: 50,
          },
        ].map((s) => (
          <TotalStats {...s}></TotalStats>
        ))}
      </Grid>

      <Box width="100%" mb="4">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="BarChart"
          loader={<Loading />}
          data={[
            ["States", "Number of colleges"],
            ["Texas", 9],
            ["Florida", 11],
            ["Massachusetts", 19],
            ["Arizona", 21],
          ]}
          options={{
            title: "Colleges by State",
            bar: { groupWidth: "70%" },
            legend: { position: "top" },
          }}
          // For tests
          rootProps={{ "data-testid": "6" }}
        />
      </Box>
      <Box width="100%" mb="4">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="BarChart"
          loader={<Loading />}
          data={[
            ["Course", "Number of colleges"],
            ["Mechanical", 19],
            ["Electrical", 14],
            ["Computer Science", 9],
            ["Civil", 12],
          ]}
          options={{
            title: "Colleges by Course",
            bar: { groupWidth: "70%" },
            legend: { position: "top" },
          }}
          // For tests
          rootProps={{ "data-testid": "6" }}
        />
      </Box>
    </PageLayout>
  );
};

export default Dashboard;
