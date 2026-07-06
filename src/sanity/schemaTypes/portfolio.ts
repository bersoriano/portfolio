import { defineArrayMember, defineField, defineType } from "sanity";

const stringList = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "array",
    of: [defineArrayMember({ type: "string" })],
  });

export const portfolio = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "profile",
      title: "Profile",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Name",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "role",
          title: "Role",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "tagline",
          title: "Tagline",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "location",
          title: "Location",
          type: "string",
        }),
        defineField({
          name: "email",
          title: "Email",
          type: "email",
        }),
        defineField({
          name: "calendlyUrl",
          title: "Calendly URL",
          type: "url",
        }),
        defineField({
          name: "socials",
          title: "Social links",
          type: "object",
          fields: [
            defineField({
              name: "github",
              title: "GitHub",
              type: "url",
            }),
            defineField({
              name: "linkedin",
              title: "LinkedIn",
              type: "url",
            }),
          ],
        }),
      ],
    }),
    stringList("about", "About paragraphs"),
    defineField({
      name: "skills",
      title: "Skill groups",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "category",
              title: "Category",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            stringList("items", "Items"),
          ],
          preview: {
            select: {
              title: "category",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
            }),
            stringList("tags", "Tags"),
            defineField({
              name: "liveUrl",
              title: "Live URL",
              type: "url",
            }),
            defineField({
              name: "repoUrl",
              title: "Repository URL",
              type: "url",
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "company",
              title: "Company",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "role",
              title: "Role",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "period",
              title: "Period",
              type: "string",
            }),
            defineField({
              name: "summary",
              title: "Summary",
              type: "text",
              rows: 4,
            }),
          ],
          preview: {
            select: {
              title: "role",
              subtitle: "company",
            },
          },
        }),
      ],
    }),
    stringList("companies", "Companies"),
    stringList("startups", "Startups"),
    defineField({
      name: "recommendations",
      title: "Recommendations",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "relation",
              title: "Relation",
              type: "string",
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "text",
              rows: 5,
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "title",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "object",
      fields: [
        defineField({
          name: "degree",
          title: "Degree",
          type: "string",
        }),
        defineField({
          name: "school",
          title: "School",
          type: "string",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "profile.name",
      subtitle: "profile.role",
    },
  },
});
