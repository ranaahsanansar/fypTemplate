import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Profile = () => {
  const [walletConnection, setWalletConnection] = useState(false);
  return (
    <>
      <Box>
        <Container>
          <Box mt={2}>
            <Stack spacing={2}>
              <Box sx={{ backgroundColor: "red", borderRadius: 2, padding: 1 }}>
                <h1>Rana Ahsan Ansar</h1>
                {
                  walletConnection ? (<p>0x999999cf1046e68e36E1aA2E0E07105eDDD1f08E</p>) : (<p>Connect your crypto Wallet to communicate with Blockchain</p>)
                }
                
                <Box
                  onClick={() => {
                    setWalletConnection(!walletConnection);
                  }}
                >
                  <AccountBalanceWalletIcon />
                </Box>
              </Box>

              <Box>
                <Box>
                  <Grid container spacing={2} >
                    <Grid item xs={12} sm={3}>
                      <Box  sx={{display: "flex" , backgroundColor: 'gray' , border: '2px solid gray' , padding: '10px' , borderRadius: '10px' }} >
                        <Box>
                          <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="large"
                        >
                          Listed Properties
                        </Typography>
                        <br />
                        <Typography
                          variant="h3"
                          fontWeight="bold"
                          fontSize="large"
                        >
                          24
                        </Typography>
                        </Box>
                        

                      </Box>
                      
                    </Grid>

                    <Grid item xs={12} sm={3}>
                    <Box  sx={{display: "flex" , backgroundColor:'gray' , border: '2px solid gray' , padding: '10px' , borderRadius: '10px' }} >
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="large"
                        >
                          My Properties
                        </Typography>
                        <br />
                        {walletConnection ? (
                          <Typography
                            variant="h3"
                            fontWeight="bold"
                            fontSize="large"
                          >
                            24
                          </Typography>
                        ) : (
                          <Typography variant="h3"
                          fontWeight="bold"
                          fontSize="large">
                            Connect Wallet
                          </Typography>
                        )}
                      </Box>
                    </Box>
                      
                    </Grid>

                    <Grid item xs={12} sm={3}>
                    <Box  sx={{display: "flex" , backgroundColor: 'gray' , border: '2px solid gray' , padding: '10px' , borderRadius: '10px' }} >
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="large"
                        >
                          My Deals
                        </Typography>
                        <br />
                        {walletConnection ? (
                          <Typography
                            variant="h3"
                            fontWeight="bold"
                            fontSize="large"
                          >
                            10
                          </Typography>
                        ) : (
                          <Typography variant="h3"
                          fontWeight="bold"
                          fontSize="large">
                            Connect Wallet
                          </Typography>
                        )}
                      </Box>
                      </Box>
                      
                    </Grid>

                    <Grid item xs={12} sm={3}>
                    <Box  sx={{display: "flex" , backgroundColor: 'gray' , border: '2px solid gray' , padding: '10px' , borderRadius: '10px' }} >
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="large"
                        >
                          My Status
                        </Typography>
                        <br />
                        {walletConnection ? (
                          <Typography
                          variant="h3"
                          fontWeight="bold"
                          fontSize="large"
                          color='green'
                        >
                          Approved
                        </Typography>
                        ) : (
                          <Typography variant="h3"
                          fontWeight="bold"
                          fontSize="large">
                            Connect Wallet
                          </Typography>
                        )}
                      </Box>
                      </Box>
                      
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Profile;
