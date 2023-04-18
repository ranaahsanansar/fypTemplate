import React, { useState } from "react";
import ImgMediaCard from "../components/PropertyCard";
import { Box, Button, Container, Grid } from "@mui/material";

const ListProperty = () => {
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <div>
      <Box>
        <Container>
          <Box mt={2}>
            <Box sx={{ backgroundColor: "red", borderRadius: 2, padding: 1 }}>
              <h1>My Listed Properties</h1>
            </Box>
            <Box mt={1}>
              <Button
                onClick={() => {
                  setDisplayForm(!displayForm);
                }}
              >
                {displayForm ? "Close Form" : "Add New Property"}
              </Button>
            </Box>
            <Box
              mt={2}
              sx={{
                border: "2px solid black",
                padding: "20px",
                borderRadius: "10px",
                height: "70vh",
                overflow: "scroll",
              }}
            >
              <Grid container spacing={2}>
                <Grid item sm={6} xs={12} lg={4}>
                  <ImgMediaCard />
                </Grid>

                <Grid item sm={6} xs={12} lg={4}>
                  <ImgMediaCard />
                </Grid>
                <Grid item sm={6} xs={12} lg={4}>
                  <ImgMediaCard />
                </Grid>
                <Grid item sm={6} xs={12} lg={4}>
                  <ImgMediaCard />
                </Grid>
                <Grid item sm={6} xs={12} lg={4}>
                  <ImgMediaCard />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default ListProperty;
