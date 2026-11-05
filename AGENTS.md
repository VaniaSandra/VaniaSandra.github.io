# Coding Agent Instructions

You are building a personal portfolio website for a physics graduate with approximately three years of professional experience in medical physics who is transitioning towards environmental and sustainability-related project work.

The product, positioning, visual, and content requirements are defined in [`design.md`](./design.md). Read that file before making changes. Treat it as the source of truth unless the owner gives a newer instruction.

The owner will provide the CV and portfolio materials to the coding agent. **All supplied source files are located in the repository-root `/raw-files/` directory, including files inside its nested subfolders.** Use those materials as the evidence base for the website. Do not assume that every supplied file is approved for public display.

`/raw-files/` is the canonical input directory. It may contain many levels of subfolders, with folders such as `flyers/`, `posters/`, `presentations/`, `articles/`, `research/`, `projects/`, and other categories. Folder names are helpful clues, not a complete or authoritative classification. Inspect the entire directory recursively and classify each file based on its actual contents. Do not inspect only the top level or stop after finding a few examples.

## 1. First inspect, then implement

Before editing anything:

1. Inspect the repository structure and identify the existing framework, package manager, scripts, routing, styling system, and component conventions.
2. Read the existing `README`, `package.json`, configuration files, and relevant source files.
3. Find the supplied CV and all portfolio assets. Check common asset folders and any paths named by the owner.
4. Check whether the project already has a design system or reusable components.
5. Preserve working architecture and conventions. Do not replace the stack or rewrite the application simply because you prefer another tool.
6. If the repository is empty, choose the simplest maintainable implementation that fits the owner's stated environment. Ask only when a decision would materially change cost, hosting, or functionality.

Do not assume a particular framework, backend, CMS, database, or deployment platform unless the repository or owner has established it.

## 2. Understand the source material before writing the site

Review the CV and portfolio assets before drafting public-facing copy.

### 2.1 Source directory: `/raw-files/`

Treat `/raw-files/` at the repository root as the single source of truth for all owner-supplied materials. Search it recursively, including every nested subfolder. Do not assume that all materials sit directly inside `/raw-files/`, and do not assume that folder names accurately describe every file inside them.

At the beginning of the content review:

1. Confirm that `/raw-files/` exists. If it does not, report the missing directory rather than silently searching unrelated locations or inventing assets.
2. Enumerate every file under `/raw-files/` recursively. Include nested folders such as `flyers/`, `posters/`, `presentations/`, `articles/`, `research/`, and `projects/`, plus any other folders that are present.
3. Record each file's relative path from the repository root, filename, extension, size, and likely format. Preserve the folder path in `CONTENT_INVENTORY.md` so the owner can trace each item back to its original location.
4. Group and classify files by their actual contents, not solely by their extension or parent folder. A PDF in `posters/` may be a flyer, report, or unrelated document; inspect it before assigning a category.
5. Include supported non-PDF formats too. Do not ignore images, slide decks, text files, or other useful portfolio materials just because most files are PDFs.
6. Ignore operating-system noise such as `.DS_Store` and `Thumbs.db`, but record any other unsupported or unreadable files as requiring review.
7. Do not rename, move, overwrite, delete, compress in place, or otherwise modify anything inside `/raw-files/`. Treat all files and folder names there as read-only source material.
8. Do not copy the entire directory into `public/`, `static/`, a deployment folder, or the production build. Only create curated derivative assets or approved public copies after checking privacy and publication permission.

Use a recursive file-discovery method (for example, Python's `Path('/raw-files').rglob('*')`) so nested folders are not missed. Use paths relative to the repository root in reports and scripts where practical, and handle spaces and non-ASCII characters in filenames safely.

### 2.2 PDF and visual-document processing

Many supplied items may be PDFs. Keep the originals unchanged in `/raw-files/` and inspect them using an appropriate workflow:

- For text-based PDFs, extract text and metadata with a PDF library such as PyMuPDF.
- For posters, flyers, presentation exports, charts, and image-heavy pages, render pages to temporary image previews and inspect the actual layout. Text extraction alone is not enough to judge visual quality.
- For scanned or image-only PDFs, identify that text extraction is incomplete. Use OCR only when needed, or visually inspect rendered pages when image understanding is available.
- For long reports or slide decks, make page thumbnails or contact sheets first, then inspect relevant pages at higher resolution. Do not assume the first page represents the whole document.
- Record page count, useful page numbers, extraction limitations, and the location of any generated preview images in `CONTENT_INVENTORY.md`.
- Store temporary renders and extracted text outside `/raw-files/`. Do not overwrite the source PDF or place unreviewed private material in a public asset directory.

If the coding agent or model cannot directly read a PDF, preprocess it locally into text and/or page images before analysis. Do not claim a document has been reviewed when only its filename or metadata was inspected. Do not upload source documents to an external service merely to make them readable.

Create a concise content inventory for the owner, preferably as `CONTENT_INVENTORY.md`, containing:

- Each supplied file and its format.
- Its likely category: project, research, presentation, poster, flyer, article, CV, or other.
- The title, date, organisation, publication, or context only when visible in the source.
- Any clearly evidenced role, contribution, methods, tools, deliverables, or outcomes.
- Whether it appears suitable for public display, requires permission, contains potentially sensitive information, or needs owner confirmation.
- A recommended portfolio treatment, such as a cover preview, PDF link, article page, or case study.

The content inventory is an internal review aid, not a public page. Do not automatically copy all CV details or source documents onto the website.

Use the CV to verify chronology, education, role titles, employers, and stated responsibilities. Use the actual portfolio item to substantiate project descriptions and capabilities. When sources differ or leave an ambiguity, flag it rather than choosing the most impressive interpretation.

Do not publish the CV itself as a download unless the owner explicitly confirms that the supplied version is approved for public access. The CV may be used privately as a source for drafting accurate website content.

- Keep the original CV outside the public web root (for example, outside `public/`, `static/`, or equivalent). Never reference the private CV from a public page or copy it into a deployable asset folder unless the owner approves a separate public CV file.
- Do not commit private source material to the repository unless the owner has explicitly asked for that. If the CV is placed in the working tree, keep it in a private input location and ensure it is excluded from version control and the production build.

If the supplied assets include documents that are hard to inspect, do not pretend their content has been reviewed. Record the limitation and use only the information that is clear.

## 3. Product priorities

Build in this order:

1. A clear and polished home page that communicates her scientific background and environmental project direction.
2. A visual Work gallery for projects, research, presentations, posters and flyers, articles and writing.
3. Reusable portfolio detail pages or detail views, with case-study structure for substantial project work.
4. An About page that connects her education and medical physics experience to environmental project work without exaggerating her experience.
5. A simple Contact page or contact section.
6. CV access, but only when the owner supplies and approves the public file.

The site should suit applications for environmental project officer, sustainability project officer, project/programme coordinator, project assistant, and appropriately scoped junior project manager roles. These are target opportunities, not assumed current credentials. Do not use “Project Manager” as her professional title unless her actual experience supports it.

Prioritise content clarity and visual quality over adding features. Do not add authentication, a database, a CMS, a blog engine, analytics, a contact form backend, or complex search unless the owner explicitly requests it.

## 4. Content integrity: strict rules

This portfolio represents a real person's professional history. Accuracy is more important than making the site appear full.

- Never invent names, employers, job titles, institutions, dates, certifications, awards, publications, project descriptions, metrics, tools, skills, responsibilities, or outcomes.
- Do not claim that she has professional environmental or sustainability experience unless the owner provides evidence.
- Distinguish employment, academic work, independent work, volunteer work, and collaborative work.
- Describe her role in team projects precisely. Do not imply sole authorship when the work was collaborative.
- Do not turn an area of interest into a demonstrated skill.
- Do not rewrite medical physics responsibilities as environmental achievements. Explain transferable relevance only where it is credible and supported.
- Do not infer project-management experience from the fact that a project exists. Identify actual evidence of planning, scheduling, coordination, documentation, communication, stakeholder engagement, reporting, or delivery before using those terms.
- Use clearly marked content placeholders only during development. Never ship fake content, lorem ipsum, invented project cards, fake testimonials, or fabricated impact metrics.
- If a required content field is missing, omit that field or show an owner-facing TODO in the development notes. Do not fill it with a guess.
- Do not assume her environmental focus areas. Themes such as conservation, waste, circular economy, climate adaptation, environmental education, monitoring, or sustainable healthcare must be confirmed by her or supported by supplied work.

The intended positioning is a science-trained professional moving towards environmental project work. The website should make this transition feel positive and credible without presenting her as an established environmental project manager or sustainability expert.

## 5. Privacy and permissions

Medical physics, university, research, and employer materials may contain confidential or sensitive information. Apply these rules to every supplied asset:

- Do not publish patient data, identifiable people in clinical contexts, medical records, private clinical images, or confidential institutional information.
- Do not publish internal employer, client, university, or research documents without permission.
- Do not assume that a file is public merely because the owner has uploaded it to the repository.
- Flag potentially sensitive content for owner review before using it.
- Do not upload source documents or assets to third-party services as part of implementation.
- Keep draft, private, or unapproved content out of the public build.
- Do not expose personal contact information beyond the channels the owner has explicitly approved.

When in doubt, do not publish the asset. Record the concern in `CONTENT_INVENTORY.md` and ask the owner to confirm.

## 6. Visual implementation

Follow the modern creative meets scientific editorial direction in `design.md`.

- Use the defined colour tokens and centralise them in the project's existing token/theme system.
- Combine an editorial grid, strong but readable typography, selected asymmetrical layouts, and prominent previews of actual work.
- Keep the design credible for environmental organisations and research teams while allowing more personality than a conventional corporate portfolio.
- Use actual portfolio images, poster previews, article covers, presentation slides, and project documentation when supplied and approved.
- Use thin rules, annotations, metadata, and restrained diagram-inspired details to create a research/editorial character.
- Do not invent data visualisations, charts, scientific diagrams, maps, or project imagery.
- Avoid generic stock photos and decorative sustainability clichés.
- Avoid template-like gradients, glassmorphism, neon effects, oversized rounded cards, excessive shadows, and unnecessary animation.
- Avoid emoji as UI icons. Use the existing icon library if one is already installed; otherwise use text or simple CSS before adding a dependency.
- Avoid adding dependencies for effects that can be achieved with the current stack.
- Do not use a large hero illustration as a substitute for the person's work.

The site should feel finished even with a small number of portfolio items. Use considered layout, typography, and whitespace rather than fake content to fill space.

## 7. Responsive behaviour

Implement mobile-first layouts and verify at least these approximate viewport widths:

- 360 px mobile
- 768 px tablet
- 1440 px desktop

Check for horizontal overflow, clipped headings, awkward line breaks, inaccessible menus, cramped metadata, and distorted media. Do not rely on hover for essential functionality.

## 8. Portfolio data and media

Keep content data separate from presentation components. Follow the existing project structure where possible; otherwise create a simple content module or data directory.

A portfolio item should be able to represent:

- Unique slug and title.
- Work type: `project`, `research`, `presentation`, `poster`, `flyer`, or `article`.
- Work context: professional, academic, independent, volunteer, or collaborative, when known.
- Short factual summary.
- Optional year, organisation, publication, and tags.
- Optional description of her role and contribution.
- Optional methods, tools, deliverables, outcomes, and relevant skills, only when evidenced.
- Optional preview image and alt text.
- Optional article content or case-study sections.
- Optional PDF or file link.
- Optional external publication or project link.
- Featured status.
- Visibility status so draft/private items cannot appear publicly.

Requirements:

- Use real asset paths supplied by the owner.
- Preserve the original aspect ratio of posters and document previews.
- Optimise large images sensibly without damaging readability.
- For PDFs, provide a robust open/download link. An embedded viewer is optional and must not be the only way to access the document.
- For articles, use HTML content only when the owner has permission to republish the text. Otherwise link to the original publication.
- Ensure every public card has a working destination or a clear, non-clickable presentation when no detail is available.
- Handle missing thumbnails gracefully without making up artwork.
- Do not expose draft/private content through public routes, page source, public data files, or static asset links.

## 9. Accessibility

Use semantic HTML and aim for WCAG 2.2 AA practices.

- Maintain a logical heading hierarchy and landmark structure.
- Provide accessible names for icon-only controls, or avoid icon-only controls.
- Ensure keyboard navigation and visible focus states.
- Ensure sufficient colour contrast.
- Use meaningful image alt text. Decorative images should have empty alt text.
- Make dialogs and mobile navigation keyboard accessible, with appropriate focus handling.
- Respect `prefers-reduced-motion`.
- Use descriptive link text and clear button labels.
- Do not rely on colour alone to distinguish categories.

## 10. SEO and metadata

Implement basic, factual metadata:

- A meaningful page title and description.
- Appropriate Open Graph title, description, and preview image when available.
- Canonical URLs only when the production domain is known.
- Descriptive slugs for portfolio items.
- Semantic page content that search engines can read.

The public-facing site should be in English. Avoid adding structured data containing unverified job titles, credentials, employers, and achievements. Do not invent a production domain.

## 11. Engineering standards

- Follow the project's existing language and formatting conventions.
- Prefer small, reusable components over one very large page component.
- Keep data, layout, and visual tokens organised.
- Use TypeScript types if the project already uses TypeScript or if starting a new TypeScript project.
- Avoid `any` unless there is a clear technical reason.
- Handle missing content and broken asset paths gracefully.
- Do not introduce a backend for a static portfolio unless requested.
- Do not expose API keys, credentials, private email addresses, or environment variables in client code.
- Do not make unrelated changes to the repository.
- Do not leave debug logging, unused dependencies, dead routes, or unfinished controls.

## 12. Build and verification workflow

After implementation:

1. Run the project's available lint, type-check, and build commands.
2. Fix errors introduced by your changes.
3. Run the app and inspect the main routes.
4. Verify navigation, portfolio filters, item links, PDF links, and contact links.
5. Test responsive layouts at the viewport widths listed above.
6. Check keyboard navigation and focus visibility.
7. Inspect the browser console for runtime errors and failed assets.
8. Confirm that no draft/private content, unapproved content, or placeholder copy is exposed.
9. Confirm that every public claim about her experience can be traced to the CV or a portfolio source.

If browser automation or Playwright is available in the project, use it for a basic smoke test. Do not spend time building a large automated test suite for this first release unless requested.

## 13. Working method

Work in small, reviewable stages:

- **Stage A: inspect.** Read the repository and recursively inspect every file in `/raw-files/`, including all nested folders. Process PDFs and visual documents as described in Section 2. Produce a complete `CONTENT_INVENTORY.md` and report any permission, privacy, or content questions. Do not begin implementation before this inventory is complete.
- **Stage B: plan.** Propose the page structure and content hierarchy based on the actual assets. Identify the best examples to feature on the home page.
- **Stage C: foundation.** Establish design tokens, global layout, navigation, and responsive shell.
- **Stage D: core pages.** Build the home page, Work gallery, portfolio details, About, and Contact using approved content only.
- **Stage E: refinement.** Test, refine spacing and typography, verify links and media, and remove development placeholders.

Do not stop after producing static mockups if the task is to build the actual website. Implement working routes and interactions.

Do not perform a broad visual or accessibility audit before the core pages exist unless the owner explicitly requests one. Once the core site is built, perform the proportionate checks in Section 12.

## 14. Completion report

When finished, provide a short report containing:

- What pages and components were implemented.
- Which real content and assets were integrated.
- Which owner-supplied details are still missing.
- Which claims or assets require owner approval.
- The commands used to verify the project and whether they passed.
- How to run the site locally.

Never report a test as passed unless it was actually run.
