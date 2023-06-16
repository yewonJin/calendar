import { Container, Grid } from "@mui/material";

export default function Calendar() {
  return (
    <Container disableGutters maxWidth="md">
      <Grid
        container
        width="100%"
        textAlign="center"
        m={0}
        mt={2}
        p={1}
        columns={7}
      >
        {Array.from(Array(7 * 6)).map((_, index) => (
          <Grid
            pt={1}
            item
            key={index}
            xs={1}
            sm={1}
            md={1}
            height={100}
            border="1px solid #ddd"
          >
            {index + 1}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
