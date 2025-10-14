import { D } from "./../core/dom/document";

export class Accordion {
  public static setupAll() {
    Accordion.discardAll();
    const accordions = D.claz("accordion");
    for (let accIndex = 0; accIndex < accordions.length; ++accIndex) {
      const elem = accordions.item(accIndex);
      if (elem == null) {
        continue;
      }
      Accordion.accordions.push(new Accordion(elem));
    }

    // Setup read link listeners
    Accordion.setupReadLinks();
  }

  public static discardAll() {
    Accordion.accordions = [];
  }

  public static expandAccordionById(accordionId: string) {
    const accordion = Accordion.accordions.find(
      (acc) => acc.outer.id === accordionId
    );
    if (accordion) {
      accordion.expand();
    }
  }

  private static setupReadLinks() {
    const readLinks = document.querySelectorAll("[data-accordion]");
    readLinks.forEach((link) => {
      D.addEventListener(link, "click", (e) => {
        e.preventDefault();
        const accordionId = link.getAttribute("data-accordion");
        if (accordionId) {
          Accordion.expandAccordionById(accordionId);
          // Scroll to the accordion smoothly
          const accordionElement = document.getElementById(accordionId);
          if (accordionElement) {
            accordionElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });
  }

  private static accordions: Accordion[] = [];

  constructor(private outer: Element) {
    D.addEventListener(outer, "click", () => {
      this.toggle();
    });
  }

  private toggle() {
    /* Toggle between adding and removing the "active" class,
              to highlight the button that controls the panel */
    this.outer.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    const panel = this.outer.nextElementSibling as HTMLElement;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  }

  public expand() {
    // Only expand if not already expanded
    if (!this.outer.classList.contains("active")) {
      this.outer.classList.add("active");
      const panel = this.outer.nextElementSibling as HTMLElement;
      panel.style.display = "block";
    }
  }

  public collapse() {
    if (this.outer.classList.contains("active")) {
      this.outer.classList.remove("active");
      const panel = this.outer.nextElementSibling as HTMLElement;
      panel.style.display = "none";
    }
  }
}
