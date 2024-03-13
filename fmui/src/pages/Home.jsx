import React from "react";
import { Stack, Container } from "@mui/material";
import TableDropBox from "../components/TableDropBox";
const Home = () => {
  return (
    <div>
      <>
        {
          <Container>
            <Stack direction="row" spacing={2}>
              <TableDropBox />
              <h2>b</h2>
              <h2>c</h2>
            </Stack>
          </Container>
        }
      </>
    </div>
  );
};

export default Home;
