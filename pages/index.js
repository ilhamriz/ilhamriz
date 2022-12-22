import { Wrapper } from "../components/Layout";
import { Box } from "@mui/material";
import { CTA, Hero, Work } from "../components/Sections";

export default function Home() {
  return (
    <Wrapper home>
      <Box>
        <Hero />
        <Work />
        <CTA />
      </Box>
    </Wrapper>
  );
}
