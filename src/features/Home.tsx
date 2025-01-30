import { Card, CardActionArea, Grid2, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <div>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 6 }}>
          <Card>
            <CardActionArea onClick={() => handleNavigation("grammar")}>
              <Typography className="text-gray-600 p-4">Grammar</Typography>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <Card>
            <CardActionArea onClick={() => handleNavigation("reading")}>
              <Typography className="text-gray-600 p-4">Reading</Typography>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <Card>
            <CardActionArea onClick={() => handleNavigation("listening")}>
              <Typography className="text-gray-600 p-4">Listening</Typography>
            </CardActionArea>
          </Card>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Home;
