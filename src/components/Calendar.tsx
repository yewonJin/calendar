import { Container, Grid, createTheme, styled } from "@mui/material";

type Props = {
  startIndex: number;
  endIndex: number;
};

export default function Calendar(props: Props) {
  const { startIndex, endIndex } = props;

  console.log(startIndex);

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
            sx={{
              color:
                startIndex - 1 > index || endIndex - 1 <= index
                  ? "#ccc"
                  : "black",
              backgroundColor:
                startIndex - 1 > index || endIndex - 1 <= index ? "#ccc" : "",
            }}
            pt={1}
            item
            key={index}
            xs={1}
            sm={1}
            md={1}
            height={100}
            border="1px solid #ddd"
          >
            {index + 2 - startIndex}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
