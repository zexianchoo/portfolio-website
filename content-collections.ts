import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import { z } from "zod";
 
const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    year: z.string().optional(),
    order: z.number(), 
    thumbnail: z.string(),
    technologies: z.array(z.string()),
    summary: z.string(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return {
      ...document,
      html,
    };
  },
});
 
const experiences = defineCollection({
  name: "experiences",
  directory: "content/experience",
  include: "*.md",
  schema: z.object({
    year: z.string(),
    role: z.string(),
    company: z.string(),
    technologies: z.array(z.string()),
    order: z.number(), 
    content: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return { ...document, html };
  },
});

const about = defineCollection({
  name: "about",
  directory: "content/about",
  include: "*.md",
  schema: z.object({
    title: z.string(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return { ...document, html };
  },
});

const techStack = defineCollection({
  name: "techStack",
  directory: "content/techstack",
  include: "*.yml",
  parser: "yaml", 
  schema: z.object({
    icons: z.array(z.object({
      url: z.string(),
      href: z.string(),
      desc: z.string(),
      lowContrastOnDark: z.boolean().optional(),
      category: z.string().optional(), 
    })),
  }),
});

export default defineConfig({
  content: [projects, experiences, about, techStack],
});