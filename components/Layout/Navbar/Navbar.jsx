import css from "./Navbar.module.scss";
import { Box, Container } from "@mui/material";
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonMain } from "../../Form";

function Component({ isHome }) {
  const [isMenu, setIsMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const handleResize = () => {
    const { innerWidth } = window;
    setIsTablet(innerWidth < 769 ? true : false);
    setIsMenu(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenu ? "hidden" : "auto";
  }, [isMenu]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [scrollDir, setScrollDir] = useState("down");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      const { scrollY } = window;
      setIsScroll(scrollY > 100 && scrollDir === "down" ? true : false);

      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollDir]);

  return (
    <header>
      <nav className={`${css.nav} ${isScroll ? css["nav--scrolled"] : ""}`}>
        <h2 className="hidden">Navigation</h2>
        <Container maxWidth="lg">
          <Box className={css.nav__container}>
            <Link href="/" className={css.nav__logo}>
              <Image src="/Logo.svg" alt="Logo" width={40} height={40} />
            </Link>
            <Box
              className={`${css.nav__icon} ${isMenu ? css.open__icon : ""}`}
              onClick={() => setIsMenu(!isMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Box>
            <Box className={`${css.nav__menu} ${isMenu ? css.show : ""}`}>
              <Box className={css.nav__menu__list}>
                <Link href="/about" className={css.nav__menu__item}>
                  About
                </Link>
                {isHome ? (
                  <>
                    <ComponentLinkScroll
                      target="Work"
                      isTablet={isTablet}
                      setIsMenu={setIsMenu}
                    />
                    <ComponentLinkScroll
                      target="Contact"
                      isTablet={isTablet}
                      setIsMenu={setIsMenu}
                    />
                  </>
                ) : (
                  <>
                    <Link href="/#Work" className={css.nav__menu__item}>
                      Work
                    </Link>
                    <Link href="/#Contact" className={css.nav__menu__item}>
                      Contact
                    </Link>
                  </>
                )}
                <Link href={"/"} download>
                  <ButtonMain>Resume</ButtonMain>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </nav>
    </header>
  );
}

const ComponentLinkScroll = ({ target, setIsMenu }) => {
  return (
    <LinkScroll
      spy={true}
      className={css.nav__menu__item}
      to={target}
      smooth={true}
      offset={-80}
      duration={500}
      isDynamic={true}
      onClick={() => setIsMenu(false)}
    >
      {target}
    </LinkScroll>
  );
};

export default Component;
