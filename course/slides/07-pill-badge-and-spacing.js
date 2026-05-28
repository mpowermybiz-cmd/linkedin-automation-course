export default {
  id: '07-pill-badge-and-spacing',
  title: 'The Category Pill Badge',
  type: 'code-explainer',
  content: {
    heading: 'Pill Rules: Position, Style, and Text',
    explanation: 'The pill badge is the most nuanced element. Three rules must be followed every time.',
    rules: [
      {
        rule: 'Left-aligned at NAME_X — never centered on the canvas',
        why: 'The pill belongs inside the profile card zone, not floating in the middle of the image.',
      },
      {
        rule: 'Title Case only — never ALL CAPS',
        why: "ALL CAPS was rejected. 'AI Tools' not 'AI TOOLS'.",
      },
      {
        rule: 'Y position = max(HANDLE_Y + handle_height + 14, AV_BOTTOM + 8)',
        why: 'This guarantees the pill never overlaps the avatar regardless of how tall the handle text renders.',
      },
    ],
    code: `pill_y = max(handle_y + handle_h + 14, AV_BOTTOM + 8)

# Draw pill background
draw.rounded_rectangle(
    [NAME_X, pill_y, NAME_X + pill_w, pill_y + pill_h],
    radius=pill_h // 2,
    fill=pill_color
)

# Draw pill text — centered inside the pill, Title Case
draw.text(
    (NAME_X + pill_w // 2, pill_y + pill_h // 2),
    category.title(),
    font=pill_font,
    fill="white",
    anchor="mm"
)`,
  },
};
