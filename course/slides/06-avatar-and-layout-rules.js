export default {
  id: "06-avatar-and-layout-rules",
  title: "The Layout Rules That Prevent Overlap",
  type: "code-explainer",
  content: {
    heading: "Dynamic Positioning — Never Hardcode Y Values",
    explanation: "The most common mistake beginners make is hardcoding pixel positions. If your avatar size ever changes, everything overlaps. The fix is to compute every position from the one above it.",
    code: `# Always compute positions dynamically
AV_TOP = 60          # Avatar top edge
AV_D   = 112         # Avatar diameter
AV_BOTTOM = AV_TOP + AV_D   # = 172

BADGE_Y = AV_BOTTOM + 20    # Pill starts 20px below avatar
BADGE_BOTTOM = BADGE_Y + badge_height   # badge_height from font metrics

HL_Y = BADGE_BOTTOM + 44    # Headline starts 44px below pill

# Sub-headline
SUB_Y = HL_Y + headline_height + 52   # 52px gap after headline

# Divider line
DIV_Y = SUB_BOTTOM + 55     # 55px breathing room before divider`,
    callout: "If you hardcode these numbers, one font change breaks your entire layout.",
  },
};
