import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getPost(slug, locale) {
    let fileSlug = slug;
    if (locale === "it") {
        fileSlug = `IT-${slug}`;
    } else if (locale === "de") {
        fileSlug = `DE-${slug}`;
    }

    const text = await readFile(`./src/lib/newsroom/${fileSlug}.md`, "utf8");

    const {
        content,
        data: { title, seo_title, seo_description, thumbnail },
    } = matter(text);
    const body = marked(content);
    return {
        slug: fileSlug,
        title,
        seo_title,
        seo_description,
        thumbnail,
        body,
    };
}

export async function getSlugs() {
    const files = await readdir("./src/lib/newsroom");
    return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.slice(0, -".md".length));
}

export async function getPage(slug, locale) {
    const fileSlug = `${locale.toUpperCase()}-${slug}`;

    // not good solutions
    let text = "";
    if (locale === "it") {
        text = await readFile(`./src/lib/policies/IT-${slug}.md`, "utf8");
    } else if (locale === "de") {
        text = await readFile(`./src/lib/policies/DE-${slug}.md`, "utf8");
    } else {
        text = await readFile(`./src/lib/policies/EN-${slug}.md`, "utf8");
    }

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
