import { Box, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { ButtonMain } from "../../Form";
import css from "./Work.module.scss";

const works = [
  {
    title: "Bersamaamerta",
    label: "Design. Development.",
    body: "My friends and I run a business that provides services for making digital invitations. Currently we are still focusing on wedding invitations.",
    image: "bersamaamerta",
    url: "https://www.bersamaamerta.com/",
  },
  {
    title: "Grup Bebas Kanker Serviks",
    label: "UI Design. Project Management.",
    body: "Aims to educate women about cervical cancer, starting from the symptoms and things that can cause cervical cancer.",
    image: "GBKS",
    url: "https://play.google.com/store/apps/details?id=com.todoodev.gbks",
  },
  {
    title: "Adventure",
    label: "Design. Development.",
    body: "A personal project when my first time learn React.",
    image: "adventure",
    url: "https://ilhamriz.github.io/adventure-react",
  },
  {
    title: "Kawal Covid-19 Sumut",
    label: "Design. Development.",
    body: "Provide information about the number of covid-19 cases in the North Sumatra area, referral hospitals, and call center.",
    image: "kawalcovid",
    url: "https://www.bersamaamerta.com/",
  },
];

function Component() {
  return (
    <section id="Work" className={css.wrapper}>
      <h2 className="hidden">Work</h2>
      <Element name="Work">
        <Container maxWidth="lg">
          <Box className={`text-body-2 ${css.outer_label}`}>
            Current Projects
          </Box>
          <Box className={css.container}>
            {works.map((work, id) => (
              <article key={id} className={css.card}>
                <h3 className="hidden">{work.title}</h3>

                <Box className={css.card__container}>
                  <Box className={css.card__content}>
                    <Box className={`header-3 ${css.card__title}`}>
                      {work.title}
                    </Box>
                    <Box className={css.card__label}>{work.label}</Box>
                    <Box className={`text-body-2 ${css.card__body}`}>
                      {work.body}
                    </Box>
                  </Box>
                  <Link href={work.url} style={{ width: "fit-content" }}>
                    <ButtonMain
                      styles="secondary"
                      style={{ width: "fit-content" }}
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                      </svg>
                    </ButtonMain>
                  </Link>
                </Box>
                <Box className={css.card__image}>
                  <Image
                    src={`/images/works/${work.image}.jpg`}
                    width={1500}
                    height={1125}
                    alt={`${work.title} Cover`}
                  />
                </Box>
              </article>
            ))}
          </Box>
        </Container>
      </Element>
    </section>
  );
}

export default Component;
