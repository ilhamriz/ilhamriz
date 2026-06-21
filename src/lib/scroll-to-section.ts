const STORAGE_KEY = "scrollToSection";

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function navigateToSection(
  id: string,
  pathname: string,
  router: { push: (href: string) => void },
) {
  if (pathname === "/") {
    scrollToSection(id);
    return;
  }

  sessionStorage.setItem(STORAGE_KEY, id);
  router.push("/");
}

export function consumePendingSectionScroll() {
  const id = sessionStorage.getItem(STORAGE_KEY);
  if (!id) return;

  sessionStorage.removeItem(STORAGE_KEY);
  requestAnimationFrame(() => scrollToSection(id));
}
