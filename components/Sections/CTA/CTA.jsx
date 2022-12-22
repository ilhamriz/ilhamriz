import { Box, Container } from "@mui/material";
import Link from "next/link";
import { Element } from "react-scroll";
import css from "./CTA.module.scss";

function Component() {
  return (
    <section id="Contact" className={css.wrapper}>
      <h2 className="hidden">Contact</h2>
      <Element name="Contact">
        <Container maxWidth="lg">
          <Box className={css.container}>
            <Box className={`header-1 ${css.title}`}>
              Interested in
              <br />
              working together?
            </Box>
            <Box className={`text-body-2 ${css.body}`}>Drop me an email:</Box>
            <Box className={`${css.email}`}>
              <Link
                href="mailto:milhamrizky7@gmail.com"
                className={`header-4 ${css.email__text}`}
              >
                milhamrizky7@gmail.com
              </Link>
              <Box className={css.email__arrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                </svg>
              </Box>
            </Box>
          </Box>
        </Container>
      </Element>
    </section>
  );
}

export default Component;
