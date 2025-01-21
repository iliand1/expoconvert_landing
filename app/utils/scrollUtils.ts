import { SectionRefs } from '../types/landing';

export const scrollToSection = (sectionName: keyof SectionRefs, sectionRefs: SectionRefs) => {
  if (sectionRefs[sectionName].current) {
    sectionRefs[sectionName].current.scrollIntoView({ behavior: 'smooth' });
  }
};