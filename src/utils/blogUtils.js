import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import { join } from "path";

export async function getSlugs() {
    const files = await readdir("./src/lib/newsroom");
    return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.slice(0, -".md".length));
}

export async function getPage(slug, locale) {
    const fileSlug = `${locale.toUpperCase()}-${slug}`;

    const text = await readFile(
        join(process.cwd(), `src/lib/policies`, `${fileSlug}.md`),
        "utf8",
    );

    const {
        content,
        data: { title, date },
    } = matter(text);
    const body = marked(content);
    return { slug: fileSlug, title, date, body };
}

export async function getPageSlugs() {
    const files = await readdir("./src/lib/policies/");
    return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.slice(0, -".md".length));
}
