import { Grid } from "@mui/material";

import { dayOfTheWeek } from "../lib/util";

export default function DayOfTheWeek() {
  return (
    <Grid
      container
      width="100%"
      textAlign="center"
      fontFamily="Inter"
      fontSize="20"
      fontWeight="600"
      m={0}
      mt={2}
      p={1}
      columns={7}
    >
      {Array.from(Array(7)).map((_, index) => (
        <Grid
          pt={1}
          item
          key={index}
          xs={1}
          sm={1}
          md={1}
          sx={{ color: index === 0 ? "red" : index === 6 ? "blue" : "" }}
        >
          {dayOfTheWeek[index]}
        </Grid>
      ))}
    </Grid>
  );
}
