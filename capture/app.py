"""Capture micro itself editing the shared tiny TypeScript project."""


def prepare(c):
    c.copy(f'themes/{c.slug}.micro', f'.config/micro/colorschemes/{c.slug}.micro')
    return ['micro', '-colorscheme', c.slug, '-truecolor', 'on', c.work / 'src/FieldRenderer.ts']


def drive(c):
    c.wait_text(r'FieldRenderer|MAX_GLYPHS')
