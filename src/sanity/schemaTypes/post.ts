import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (rule) =>
        rule.max(200).warning("Keep it under 200 characters for best SEO"),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({ type: "image", options: { hotspot: true } }),
        defineArrayMember({
          type: "object",
          name: "code",
          title: "Code / Prompt block",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "code",
              title: "Code",
              type: "text",
              rows: 8,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "code" },
            prepare: ({ title, subtitle }) => ({
              title: title || "Code block",
              subtitle,
            }),
          },
        }),
        defineArrayMember({
          type: "object",
          name: "table",
          title: "Table",
          fields: [
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
            defineField({
              name: "rows",
              title: "Rows",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "row",
                  fields: [
                    defineField({
                      name: "cells",
                      title: "Cells",
                      type: "array",
                      of: [defineArrayMember({ type: "string" })],
                    }),
                  ],
                }),
              ],
            }),
          ],
          preview: {
            select: { title: "caption" },
            prepare: ({ title }) => ({ title: title || "Table" }),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
    },
  },
});
