import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";

export default function Calendar() {
  return (
    <Container>
      <Box display="flex" alignItems='center' justifyContent='center' gap="10px">
        <IconButton aria-label="prev">
          <ArrowBackIos />
        </IconButton>
        <Typography
          variant="h2"
          lineHeight="40px"
          paddingBottom="3px"
          textAlign="center"
          fontWeight={600}
          fontSize={24}
          fontFamily="Inter"
        >
          JUN
        </Typography>
        <IconButton aria-label="next">
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Container>
  );
}
