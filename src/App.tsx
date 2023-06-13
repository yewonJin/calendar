import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: "80px",
        padding: "30px 0px",
        backgroundColor: "white",
        aspectRatio: "3/3",
      }}
    >
      <Typography
        variant="h2"
        height={60}
        textAlign={"center"}
        fontWeight={600}
        fontSize={24}
        fontFamily="Inter"
      >
        JUN
      </Typography>
    </Container>
  );
}

export default App;
