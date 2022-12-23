import { Box, Container, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Wrapper } from "../../components/Layout";
import css from "./about.module.scss";

const services = ["Web Design", "Web Development", "UI Design"];
const technologies = [
  "Javascript",
  "Github",
  "React",
  "Angular",
  "Next.js",
  "Figma",
];

function Component() {
  return (
    <Wrapper>
      <Box className={css.wrapper}>
        <Container maxWidth="lg">
          <section>
            <h2 className="hidden">Greeting</h2>
            <Box className={css.greeting}>
              <Box className={`${css.greeting__title} header-1`}>
                Hi everyone!
              </Box>
              <p className={css.greeting__body}>
                My name&apos;s Muhammad Ilham Rizky. I&apos;m a Frontend
                Developer with a real passion for making neat designs and
                functional websites, also have experience as UI Designer.
              </p>
            </Box>
          </section>

          <section>
            <h2 className="hidden">About</h2>
            <Box className={css.container}>
              <Box className={css.photo}>
                <Image
                  src="/images/ilhamriz.png"
                  alt="Ilhamriz"
                  width={731}
                  height={966}
                />
              </Box>
              <Box className={css.about}>
                <p>
                  As a developer with 2 years of experience, I focus on both
                  design and development. I have a sufficient understanding of
                  user experience design principles and a proven ability to
                  develop scalable and efficient web applications.
                </p>{" "}
                <br />
                <p>
                  I&apos;m a team player and enjoy collaborating with other
                  developers and designers to create engaging and user-friendly
                  applications.
                </p>{" "}
                <br />
                <p>
                  Currently, I work at{" "}
                  <Link
                    href="https://www.weekendinc.com/"
                    className={css.about__link}
                  >
                    Weekendinc
                  </Link>
                  . My day job involves developing the website dashboard for{" "}
                  <Link href="https://hms.src.id/" className={css.about__link}>
                    HM Sampoerna
                  </Link>{" "}
                  using React and Angular.
                </p>
              </Box>
            </Box>
          </section>

          <Box className={css.info}>
            <section>
              <h2 className="hidden">Services</h2>
              <Box mb={4} className={`header-4-title ${css.info__title}`}>
                Services
              </Box>
              <Box className={css.info__content}>
                {services.map((service, index) => (
                  <Box key={index} className={css.info__item}>
                    <span className="text-body-2">{service}</span>
                    <Divider />
                  </Box>
                ))}
              </Box>
            </section>

            <section>
              <h2 className="hidden">Technologies</h2>
              <Box mb={4} className={`header-4-title ${css.info__title}`}>
                Technologies
              </Box>
              <Box className={css.info__content_2}>
                {technologies.map((technology, index) => (
                  <Box key={index} className={css.info__item}>
                    <span className="text-body-2">{technology}</span>
                    <Divider />
                  </Box>
                ))}
              </Box>
            </section>
          </Box>
        </Container>
      </Box>
    </Wrapper>
  );
}

export default Component;
