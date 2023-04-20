import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BuyingRecords from "../components/BuyingRecords";


const BuyProperty = () => {
  const handleSubmit = () => {};

  const [distric , setDistric ] = useState('lahore');
  const [province , setProvince ] = useState('punjab');
  const [society , setSociety ] = useState('none');
  const [block , setBlock ] = useState('park-view');
  

  const handleChangeProvience = (event) => {
    setProvince(event.target.value);
  };
  const handleChangeDistric = (event) => {
    setDistric(event.target.value);
  };
  const handleChangeSociety = (event) => {
    setSociety(event.target.value);
  };
  const handleChangeBlock = (event) => {
    setBlock(event.target.value);
  };

  return (
    <div>
      <Container>
        <Box mt={2}>
          <Stack spacing={2}>
            {/* Heading Buying Property  */}
            <Box>
              <Stack spacing={2}>
                <Typography variant="h3">Buy Property</Typography>
                <Typography fontWeight="bold">
                  How to Buy property through Blockchain
                </Typography>
                <ul>
                  <li>Contact to the owner.</li>
                  <li>Decide the price of property per share.</li>
                  <li>Take request number from the owner.</li>
                  <li>Enter required details below.</li>
                  <li>
                    Go to the landInspector office and approve your transaction.
                  </li>
                </ul>
              </Stack>
            </Box>
            {/* Form to Buy Property  */}
            <Box>
              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
                id="buyProperty-form"
                onSubmit={handleSubmit}
              >
                <Grid container spacing={2}>


                <Grid item sm={12} xs={12} md={6} lg={6}>
                    <FormControl fullWidth>
                      <InputLabel id="province-label">Province</InputLabel>

                      <Select
                        fullWidth
                        required
                        labelId="province-label"
                        id="province"
                        value={province}
                        label="province"
                        onChange={handleChangeProvience}
                      >
                        <MenuItem value="punjab">punjab</MenuItem>
                        <MenuItem value="sindh">Karachi</MenuItem>
                        <MenuItem value="balochistan">Sialkot</MenuItem>
                        <MenuItem value="KPK">KPK</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item sm={12} xs={12} md={6} lg={6}>
                    <FormControl fullWidth>
                      <InputLabel id="distric-label">Distric</InputLabel>

                      <Select
                        fullWidth
                        required
                        labelId="distric-label"
                        id="distric"
                        value={distric}
                        label="Distric"
                        onChange={handleChangeDistric}
                      >
                        <MenuItem value="lahore">Lahore</MenuItem>
                        <MenuItem value="karachi">Karachi</MenuItem>
                        <MenuItem value="sialkot">Sialkot</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item sm={12} xs={12} md={6} lg={6}>
                    <FormControl fullWidth>
                      <InputLabel id="society-label">Society</InputLabel>

                      <Select
                        fullWidth
                        required
                        labelId="society-label"
                        id="society" 
                        value={society}
                        label="society"
                        onChange={handleChangeSociety}
                      >
                        <MenuItem value="none">None</MenuItem>
                        <MenuItem value="park-view">Park View</MenuItem>
                        <MenuItem value="bahria">Bahria</MenuItem>
                        <MenuItem value="rehman-garden">Rehman Garden</MenuItem>
                        <MenuItem value="iqbal-town">Iqbal Town</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item sm={12} xs={12} md={6} lg={6}>
                    <FormControl fullWidth>
                      <InputLabel id="block-label">Block</InputLabel>

                      <Select
                        fullWidth
                        required
                        labelId="block-label"
                        id="block" 
                        value={block}
                        label="block"
                        onChange={handleChangeBlock}
                      >
                        <MenuItem value="none">None</MenuItem>
                        <MenuItem value="park-view">A Block</MenuItem>
                        <MenuItem value="bahria">B Block</MenuItem>
                        <MenuItem value="rehman-garden">X Block</MenuItem>
                        <MenuItem value="iqbal-town">Y Block</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item sm={12} xs={12} md={6} lg={6}>
                    <TextField
                      margin="normal"
                      fullWidth
                      required
                      id="propertyId"
                      name="propertyId"
                      label="Property ID"
                      type="number"
                    />
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={6}>
                    <TextField
                      margin="normal"
                      fullWidth
                      required
                      id="ownerCNIC"
                      name="ownerCNIC"
                      label="CNIC of Owner"
                      type="number"
                    />
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={6}>
                    <TextField
                      margin="normal"
                      fullWidth
                      required
                      id="sharesAmmount"
                      name="sharesAmmount"
                      label="Ammount of Shares"
                      type="number"
                    />
                  </Grid>
                  <Grid item sm={12} xs={12} md={6} lg={6}>
                    <TextField
                      margin="normal"
                      fullWidth
                      required
                      id="reqNumber"
                      name="reqNumber"
                      label="Request Number"
                      type="number"
                    />
                  </Grid>
                </Grid>
                {/* Submit Button  */}
                <Box textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, px: 5 }}
                  >
                    Signature
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box>
              <Stack spacing={2}>
                <Typography variant="h3">Buying Records</Typography>
                <BuyingRecords />
              </Stack>
            </Box>

          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default BuyProperty;
