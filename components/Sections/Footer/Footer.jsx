import { Box, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import css from "./Footer.module.scss";

function Component() {
  return (
    <footer>
      <Container maxWidth="lg">
        <Box className={css.wrapper}>
          <Box className={css.content}>
            <Image
              className={css.logo}
              src="/Logo_name.png"
              alt="Logo Name"
              width={197}
              height={48}
            />
            <Box className={css.sosmed}>
              <Link
                href={"https://www.instagram.com/ilhamriz7/"}
                className={`text-link`}
              >
                Instagram
              </Link>
              <Link
                href={"https://www.linkedin.com/in/milhamrizky/"}
                className={`text-link`}
              >
                Linkedin
              </Link>
              <Link
                href={"https://github.com/ilhamriz"}
                className={`text-link`}
              >
                Github
              </Link>
              <Link
                href={"https://www.hackerrank.com/milhamrizky7"}
                className={`text-link`}
              >
                Hackerrank
              </Link>
            </Box>
          </Box>
          <Box className={css.divider} />
          <Box className={`text-body-3`}>
            ©2022 Design and Built by Ilhamriz with Next.js
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

export default Component;
