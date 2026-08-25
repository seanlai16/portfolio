import { journey } from "@/content/journey";
import { getProject, projects } from "@/content/projects";

export function getAllWorkSlugs(): string[] {
  return [
    ...new Set([
      ...journey.map((chapter) => chapter.slug),
      ...projects.map((project) => project.slug),
    ]),
  ];
}

export function isProjectSlug(slug: string): boolean {
  return Boolean(getProject(slug));
}
