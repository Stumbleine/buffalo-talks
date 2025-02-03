import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <div>
      <Grid2 container spacing={2} sx={{ background: "none" }}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Stack
            direction="column"
            spacing={2}
            alignContent="center"
            alignItems="center"
            justifyItems="center"
            justifyContent="center"
            sx={{ height: 1 }}
          >
            <Typography variant="h2" fontWeight="bold">
              Buffalo Buffalo Buffalo Buffalo Buffalo
            </Typography>
            <Typography variant="h5">
              You got it right away, right? Our platform challenges you to
              think, learn and improve your English grammar in a challenging and
              effective way. Start by solving exercises and learn words that
              have more meaning than you imagine.
            </Typography>
          </Stack>
        </Grid2>
        <Grid2
          size={{ xs: 6 }}
          display={{ xs: "none", md: "inherit" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            component="img"
            src="/buffalo.webp"
            width={"90%"}
            height="80%"
            sx={{ borderRadius: 2 }}
          />
        </Grid2>
      </Grid2>
      <Box sx={{ my: 5 }}>
        <Typography variant="h5" textAlign="center" fontWeight="bold" width={1}>
          Choose an area you want to improve and start practicing your English.
        </Typography>
      </Box>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 4 }}>
          <Card>
            <CardActionArea onClick={() => handleNavigation("grammar")}>
              <CardContent>
                <Typography
                  variant="h6"
                  textAlign="center"
                  fontWeight="bold"
                  className="text-gray-600 p-4"
                >
                  Grammar
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 4 }}>
          <Card>
            <CardActionArea onClick={() => handleNavigation("reading")}>
              <CardContent>
                <Typography
                  variant="h6"
                  textAlign="center"
                  fontWeight="bold"
                  className="text-gray-600 p-4"
                >
                  Reading
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 4 }}>
          <Card>
            <CardActionArea onClick={() => handleNavigation("listening")}>
              <CardContent>
                <Typography
                  variant="h6"
                  textAlign="center"
                  fontWeight="bold"
                  className="text-gray-600 p-4"
                >
                  Listening
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Home;
