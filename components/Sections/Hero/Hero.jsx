import { Box, Container } from "@mui/material";
import css from './Hero.module.scss';

function Component() {
  return (
    <section className={css.wrapper}>
      <h2 className="hidden">I&apos;m Ilham</h2>
      <Container maxWidth="lg">
        <Box className={`${css.content} header-1`}>
          <span className={css.title}>I&apos;m Ilham, a Frontend Developer</span>{" "}
          who loves to design and develop the web
        </Box>
      </Container>
    </section>
  );
}

export default Component;
