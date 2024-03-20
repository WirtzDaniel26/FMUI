import React from "react";
import { Stack, Container } from "@mui/material";
import DateComponent from "../components/DateComponent";
import TableDropBox from "../components/TableDropBox";
const Home = () => {
  return (
    <div>
      <>
        {
          <Container>
            <Stack direction="row" spacing={2}>
              <TableDropBox />
              <DateComponent />
              <h2>c</h2>
            </Stack>
          </Container>
        }
      </>
    </div>
  );
};

export default Home;
