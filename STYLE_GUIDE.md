# Style Guide
## Semiconductor Education Website

---

## 1. Design Philosophy

### Overall Visual Style
Clean, minimal, and content-first. The interface steps back so the educational content can breathe. No decorative elements for their own sake — every visual component must earn its place by aiding comprehension.

The aesthetic sits between a well-designed textbook and a modern technical blog. It is closer to engineering documentation than a marketing page. Components are used sparingly and with purpose: a highlight box means something important, a diagram means something structural.

### Target Audience
Beginners with no prior knowledge of semiconductors or chip design. Readers may be students, career changers, or curious non-engineers. All explanations assume zero background. Technical terms are always introduced before being used.

### Content Approach
- Introduce one idea per section
- Use short paragraphs, never walls of text
- Lead with the simple version, then add detail
- Use analogies before definitions
- The most important sentence in any section goes in a highlight box — not every section needs one
- Diagrams replace text wherever possible; never use a diagram as decoration

---

## 2. Layout

### Container
```
max-w-2xl mx-auto px-6 py-10
```
Maximum width: `672px` (Tailwind `max-w-2xl`). Centered with horizontal padding. This narrow column enforces readable line lengths and keeps the layout focused.

### Page Spacing
| Element | Class |
|---|---|
| Page top/bottom padding | `py-10` |
| Page horizontal padding | `px-6` |
| Back button bottom margin | `mb-7` |
| Pill nav bottom margin | `mb-6` |
| H1 bottom margin | `mb-8` |
| Intro block bottom margin | `mb-8` |
| Diagram bottom margin | `mb-10` |

### Section Spacing
Sections within an article use `space-y-10` on the parent wrapper. Each `<section>` is a self-contained block. Sections are separated by a thin horizontal divider.

```jsx
<div className="space-y-10 text-base leading-[1.85] text-slate-500">
  <section>...</section>
  <section>...</section>
</div>
```

### Between Paragraphs
Paragraphs within a section use `space-y-3.5` or `mt-4` between siblings.

### Mobile Responsiveness
- H1: `text-4xl md:text-5xl` — scales up on medium screens
- Grid diagrams: `md:grid-cols-2` — single column on mobile, two columns on desktop
- Pill navigation: `flex flex-wrap` — wraps naturally on small screens
- No fixed widths on content elements

---

## 3. Typography

### H1 — Page Title
```
text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8
```
- Mobile: ~36px | Desktop: ~48px
- Weight: 700 (bold)
- Color: `text-slate-900` (#0f172a)
- Line height: `leading-tight` (1.25)
- Used once per page

### H2 — Section Heading
```
text-xl font-bold text-slate-900 mb-3
```
- Size: ~20px
- Weight: 700 (bold)
- Color: `text-slate-900`
- Bottom margin: `mb-3`
- Preceded by a section divider

### Eyebrow / Category Label
```
text-xs uppercase tracking-[0.15em] text-slate-400 font-medium mb-4
```
- Size: 12px
- All caps, wide letter spacing
- Color: `text-slate-400`
- Appears above H1, never above H2

### Body Text
```
text-base leading-[1.85] text-slate-500
```
- Size: 16px
- Line height: 1.85 — generous for readability
- Color: `text-slate-500` (#64748b)
- Applied as a wrapper class on section containers

### Emphasis Within Body
```jsx
<p className="font-medium text-slate-900">That would be impossible.</p>
```
- Use sparingly — one per section at most
- Shifts color to `text-slate-900` and weight to `font-medium`
- Never use bold for inline words; apply it to the entire short sentence

### Highlight Box Text
```
text-[14.5px] leading-[1.75] text-indigo-800 font-medium
```
- Slightly smaller than body (14.5px)
- Color: `text-indigo-800` (#3730a3)
- Weight: `font-medium`

### Diagram Label (small)
```
text-[11px] uppercase tracking-[0.12em] text-indigo-500 font-semibold
```

### Diagram Block Title
```
text-sm font-bold text-indigo-800
```

### Diagram Block Subtitle
```
text-[11px] text-indigo-500 font-medium mt-0.5
```

### Next Article Link
```
text-[15px] font-semibold text-[#4338CA] hover:underline
```

---

## 4. Color System

### Background Colors
| Role | Hex | Tailwind |
|---|---|---|
| Page background | `#FCFCFC` | `bg-[#FCFCFC]` |
| White card background | `#FFFFFF` | `bg-white` |
| Blue tint card background | `#EEF2FF` | `bg-[#EEF2FF]` |
| Hover state (light) | `#E0E7FF` | `bg-[#E0E7FF]` |
| Hover state (subtle) | `#F8FAFC` | `bg-slate-50` |

### Primary Accent
| Role | Hex | Tailwind |
|---|---|---|
| Primary accent | `#4338CA` | `text-[#4338CA]` / `border-[#4338CA]` |
| Active pill background | `#EEF2FF` | `bg-[#EEF2FF]` |
| Active pill text | `#4338CA` | `text-[#4338CA]` |

### Border Colors
| Role | Hex | Tailwind |
|---|---|---|
| Blue card border | `#C7D2FE` | `border-[#C7D2FE]` |
| White card border | slate-200 | `border-slate-200` |
| Section divider | slate-200 | `border-slate-200` |

### Text Colors
| Role | Hex | Tailwind |
|---|---|---|
| Headings | `#0F172A` | `text-slate-900` |
| Body text | `#64748B` | `text-slate-500` |
| Muted / labels | `#94A3B8` | `text-slate-400` |
| Inactive pill | `#64748B` | `text-slate-500` |
| Highlight box text | `#3730A3` | `text-indigo-800` |
| Diagram subtitle | indigo-500 | `text-indigo-500` |
| Diagram operator | slate-400/500 | `text-slate-400` / `text-slate-500` |

### Hover States
| Element | Default | Hover |
|---|---|---|
| Back button | `bg-[#EEF2FF]` | `hover:bg-[#E0E7FF]` |
| Active pill | `bg-[#EEF2FF]` | `hover:bg-[#E0E7FF]` |
| Inactive pill | `bg-white` | `hover:bg-slate-50` |
| Next article link | — | `hover:underline` |

---

## 5. Components

### Back Button
Circular icon button. Always at the top-left of the page, before all other content.
```jsx
<Link
  href="/"
  className="
    inline-flex items-center justify-center
    w-11 h-11 rounded-full
    bg-[#EEF2FF] text-[#4338CA]
    hover:bg-[#E0E7FF]
    hover:shadow-md hover:-translate-y-0.5
    transition-all duration-200
    mb-7
  "
>
  <ChevronLeft className="w-5 h-5" />
</Link>
```

### Navigation Pills
Horizontal scrollable pill row showing the article series. Current page uses the active style; other pages use the inactive style.

**Active pill** (current page — not a link):
```jsx
<span className="px-4 py-2 rounded-full bg-[#EEF2FF] text-[#4338CA] text-sm font-medium">
  Current Article
</span>
```

**Inactive pill** (link to another page):
```jsx
<Link
  href="/path"
  className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-sm font-medium hover:bg-slate-50 transition"
>
  Other Article
</Link>
```

**Container:**
```jsx
<div className="flex flex-wrap gap-2.5 mb-6">
```

### Section Divider
A thin horizontal rule between major sections. Placed inside the `space-y-10` flow — not as a visual border on a card.
```jsx
<div className="border-t border-slate-200" />
```
When used inside a section before an H2, add `mb-8`:
```jsx
<div className="border-t border-slate-200 mb-8" />
```

### Highlight Box (Left Border Style)
Used once per section at most. Contains the single most important takeaway sentence from that section. Not a card — background is transparent.
```jsx
<div className="border-l-[3px] border-[#4338CA] pl-4 mt-5">
  <p className="text-[14.5px] leading-[1.75] text-indigo-800 font-medium">
    Key takeaway sentence here.
  </p>
</div>
```

### Accent Card (Blue Background)
Used for definitions, key concepts, or ON/OFF state displays. Centered content. More prominent than a highlight box — use sparingly, maximum once or twice per page.
```jsx
<div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-2xl p-5 text-center">
  <p className="text-xl font-bold text-[#4338CA]">1 = ON</p>
  <p className="text-xl font-bold text-[#4338CA] mt-2">0 = OFF</p>
</div>
```
For a larger definition card use `rounded-3xl p-8` and `text-xl font-semibold`.

### White Content Card
Used for neutral items like individual transistor states or comparison elements. Sits inside a grid.
```jsx
<div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
  <p className="text-slate-500 font-medium">Label</p>
  <p className="text-2xl my-3">↓</p>
  <p className="text-xl font-bold text-slate-900">Value</p>
</div>
```

### Chip / Architecture Diagram
An outlined container representing a chip boundary. Internal blocks use the blue tint. The outer border is heavier (`border-2`) to signal it is a system boundary, not just a card.
```jsx
<div className="bg-white border-2 border-[#C7D2FE] rounded-2xl p-6 mb-10">
  <p className="text-[11px] uppercase tracking-[0.12em] text-indigo-500 font-semibold text-center mb-4">
    Diagram Label
  </p>
  <div className="grid grid-cols-2 gap-2.5">
    <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-xl px-4 py-3.5 text-center">
      <p className="text-sm font-bold text-indigo-800">Block Name</p>
      <p className="text-[11px] text-indigo-500 font-medium mt-0.5">Short description</p>
    </div>
    {/* Full-width block: */}
    <div className="col-span-2 bg-[#EEF2FF] border border-[#C7D2FE] rounded-xl px-4 py-3.5 text-center">
      <p className="text-sm font-bold text-indigo-800">Wide Block</p>
      <p className="text-[11px] text-indigo-500 font-medium mt-0.5">Short description</p>
    </div>
  </div>
</div>
```

### Equation / Flow Diagram
An inline horizontal layout showing a simple formula or flow. Used for concepts like `transistor × billions = chip`.
```jsx
<div className="flex items-center justify-center gap-8 flex-wrap">
  <div className="text-center">
    <div className="bg-white border border-slate-200 rounded-xl px-10 py-4">
      <p className="text-base text-slate-900">ON</p>
    </div>
    <p className="text-lg font-medium text-slate-700 mt-3">One Transistor</p>
  </div>
  <div className="flex items-center gap-4">
    <p className="text-xl font-medium text-slate-500">× Billions</p>
    <p className="text-2xl text-slate-400">=</p>
  </div>
  <div className="text-center">
    {/* Result element */}
  </div>
</div>
```

### Next Article Link
Placed at the end of the closing section. Signals where the reader goes next.
```jsx
<Link
  href="/next-page"
  className="inline-flex items-center gap-1.5 mt-4 text-[15px] font-semibold text-[#4338CA] hover:underline"
>
  Next Article Title
  <ArrowRight className="w-4 h-4" />
</Link>
```

---

## 6. Visual Guidelines

### Information Hierarchy
Every page has exactly one visual anchor — the primary diagram or key concept card. This sits near the top of the content, after the intro paragraphs. Everything below it is supporting prose with lightweight highlight boxes.

Hierarchy from most to least visually prominent:
1. Architecture / chip diagram (`border-2` outer, blue tint blocks inside)
2. Accent definition card (`bg-[#EEF2FF]`, `rounded-3xl`, large text)
3. White content card grid (neutral, comparison layout)
4. Highlight box (left border only, no background fill)
5. Inline emphasis (bold sentence, no box)
6. Body prose

Never place two high-prominence elements back-to-back without prose between them.

### Diagram Style
- Diagrams use only the existing color palette (blue tint, white, indigo text)
- No icons, no illustrations, no color beyond the palette
- Labels use the small uppercase tracking style
- Block titles are short (1–3 words); subtitles are optional, 2–4 words
- Full-width blocks (`col-span-2`) are used when a component logically spans multiple roles

### No Decorative Elements
- No background patterns or textures
- No gradients
- No emoji
- No icons within body text
- No shadows except the subtle hover lift on the back button

---

## 7. Writing Style

### Tone of Voice
Calm, clear, and direct. The tone is that of a knowledgeable colleague explaining something over coffee — not a lecture, not marketing copy. Never condescending; never oversimplified to the point of inaccuracy.

### Sentence and Paragraph Length
- Sentences: short. Aim for one idea per sentence.
- Paragraphs: 2–3 sentences maximum in body prose
- Standalone short sentences are acceptable and often effective:
  > *That would be impossible.*
  > *The answer is semiconductors.*

### Introducing Technical Terms
Always define before using. The pattern is:
1. Use the plain-English description first
2. Introduce the term in the same sentence or immediately after
3. Never assume the reader knows the acronym

**Example:**
> SRAM stands for Static Random-Access Memory. Unlike the storage in your phone or laptop, SRAM is designed for speed rather than capacity.

### Use of Analogies
Analogies come before definitions. They lower the barrier to entry and give the reader a mental model to attach the technical concept to.

**Example order:**
1. Analogy: *"A good switch needs two states: ON and OFF."*
2. Bridge: *"Computers work the same way."*
3. Definition: *"Computers only understand two states: 1 and 0."*

### Beginner-Friendly Guidelines
- Never use jargon without defining it in the same paragraph
- Avoid passive voice where possible
- Use "you" and everyday objects as reference points (phone, laptop, light switch)
- Avoid quantitative claims without context ("billions of transistors" works because the scale is the point)
- End sections by connecting to the next concept — never leave a concept dangling

### Highlight Box Usage
The highlight box contains the single most important sentence in a section — the one a reader would underline. It is not a summary of the whole section; it is the sharpest version of the core idea.

Use one per section maximum. Many sections will not need one.

---

## 8. Do and Don't

### ✅ Do

**Use short, declarative sentences.**
> A chip is not one switch. It is billions of tiny switches working together.

**Introduce concepts with everyday analogies first.**
> Imagine putting billions of light switches inside a smartphone. That would be impossible.

**Use diagrams as the primary visual anchor, once per page.**
> The chip diagram (CPU / SRAM / Memory Controller / USB) explains the entire section before any prose.

**Use the highlight box for the single sharpest takeaway.**
> `border-l-[3px] border-[#4338CA]` — one sentence, `font-medium`, `text-indigo-800`.

**Keep section headings as plain questions or noun phrases.**
> "What Makes Those Tiny Switches Possible?" / "From Transistor to Chip"

**Scale visual weight to importance.**
> Chip diagram > accent card > white card grid > highlight box > inline emphasis > body text.

---

### ❌ Don't

**Don't use large blue cards for every section.**
> If every section has a `bg-[#EEF2FF]` card, nothing feels important. Use accent cards for definitions only.

**Don't use jargon before defining it.**
> ✗ "The MOSFET acts as a switch." → ✓ "Engineers build switches from a component called a MOSFET — short for Metal-Oxide-Semiconductor Field-Effect Transistor."

**Don't write long paragraphs.**
> Body text paragraphs should be 2–3 sentences. If you need more, split into two paragraphs.

**Don't add decorative elements.**
> No emoji, no icons, no gradient backgrounds, no decorative dividers.

**Don't make every sentence bold or emphasised.**
> Inline emphasis (`font-medium text-slate-900`) is reserved for one sentence per section at most.

**Don't use `max-w-4xl` or wider containers.**
> The column is intentionally narrow (`max-w-2xl`). Wider containers break reading rhythm.

**Don't stack two diagrams or two accent cards without prose between them.**
> Always separate prominent visual elements with at least one paragraph of body text.

---

## 9. Tailwind Reference

### Page Shell
```
min-h-screen bg-[#FCFCFC]
max-w-2xl mx-auto px-6 py-10
```

### Back Button
```
inline-flex items-center justify-center
w-11 h-11 rounded-full
bg-[#EEF2FF] text-[#4338CA]
hover:bg-[#E0E7FF] hover:shadow-md hover:-translate-y-0.5
transition-all duration-200 mb-7
```

### Navigation Pills — Container
```
flex flex-wrap gap-2.5 mb-6
```

### Navigation Pills — Active
```
px-4 py-2 rounded-full bg-[#EEF2FF] text-[#4338CA] text-sm font-medium
```

### Navigation Pills — Active Hover
```
hover:bg-[#E0E7FF] transition
```

### Navigation Pills — Inactive
```
px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-sm font-medium hover:bg-slate-50 transition
```

### Eyebrow Label
```
text-xs uppercase tracking-[0.15em] text-slate-400 font-medium mb-4
```

### H1
```
text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8
```

### H2
```
text-xl font-bold text-slate-900 mb-3
```

### Body Text Wrapper
```
space-y-10 text-base leading-[1.85] text-slate-500
```

### Between-Paragraph Spacing
```
space-y-3.5
```
or for manual spacing:
```
mt-4
```

### Inline Emphasis
```
font-medium text-slate-900
```

### Section Divider
```
border-t border-slate-200
```
With bottom margin when preceding an H2:
```
border-t border-slate-200 mb-8
```

### Highlight Box
```
border-l-[3px] border-[#4338CA] pl-4 mt-5
```
Text inside:
```
text-[14.5px] leading-[1.75] text-indigo-800 font-medium
```

### Accent Definition Card (small)
```
bg-[#EEF2FF] border border-[#C7D2FE] rounded-2xl p-5 text-center
```
Text inside:
```
text-xl font-bold text-[#4338CA]
```

### Accent Definition Card (large)
```
bg-[#EEF2FF] border border-[#C7D2FE] rounded-3xl p-8
```
Text inside:
```
text-xl font-semibold text-center text-[#4338CA]
```

### White Content Card
```
bg-white border border-slate-200 rounded-2xl p-6 text-center
```

### Two-Column Card Grid
```
grid md:grid-cols-2 gap-4 mt-8
```

### Chip / Architecture Diagram — Outer
```
bg-white border-2 border-[#C7D2FE] rounded-2xl p-6 mb-10
```

### Chip / Architecture Diagram — Label
```
text-[11px] uppercase tracking-[0.12em] text-indigo-500 font-semibold text-center mb-4
```

### Chip / Architecture Diagram — Inner Grid
```
grid grid-cols-2 gap-2.5
```

### Chip Block — Half Width
```
bg-[#EEF2FF] border border-[#C7D2FE] rounded-xl px-4 py-3.5 text-center
```

### Chip Block — Full Width
```
col-span-2 bg-[#EEF2FF] border border-[#C7D2FE] rounded-xl px-4 py-3.5 text-center
```

### Chip Block Title
```
text-sm font-bold text-indigo-800
```

### Chip Block Subtitle
```
text-[11px] text-indigo-500 font-medium mt-0.5
```

### Equation / Flow Diagram — Container
```
flex items-center justify-center gap-8 flex-wrap
```

### Equation / Flow Diagram — Item Box
```
bg-white border border-slate-200 rounded-xl px-10 py-4
```

### Equation / Flow Diagram — Item Label
```
text-lg font-medium text-slate-700 mt-3
```

### Equation / Flow Diagram — Operator
```
text-xl font-medium text-slate-500   /* × Billions */
text-2xl text-slate-400              /* = */
```

### Next Article Link
```
inline-flex items-center gap-1.5 mt-4 text-[15px] font-semibold text-[#4338CA] hover:underline
```
Icon: `<ArrowRight className="w-4 h-4" />`
