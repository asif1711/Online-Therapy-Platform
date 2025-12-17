# Theramint Design System

## Color Palette

### Primary Palette (Gentle Greens)

```css
/* Light Mode */
--primary: #7a9d8e          /* Soft Sage Green */
--primary-foreground: #ffffff

--secondary: #c8dad3         /* Light Mint */
--secondary-foreground: #1a3a2e

--accent: #9fc5b5            /* Gentle Teal */
--accent-foreground: #1a3a2e

--background: #f8faf9        /* Very Light Green-White */
--foreground: #1a3a2e        /* Dark Forest Green */

--muted: #e8f0ed            /* Light Green-Gray */
--muted-foreground: #5a6f64 /* Medium Gray-Green */
```

### Color Usage Guidelines

#### Primary Color (#7a9d8e)
- **Use for**:
  - Primary action buttons
  - Active navigation items
  - Important links
  - Key UI elements requiring emphasis
  - Icons representing core actions

- **Don't use for**:
  - Large background areas
  - Body text
  - Decorative elements

#### Secondary Color (#c8dad3)
- **Use for**:
  - Secondary buttons
  - Subtle highlights
  - Background tints
  - Card accents
  - Hover states on secondary actions

- **Don't use for**:
  - Primary CTAs
  - Text that needs to stand out

#### Accent Color (#9fc5b5)
- **Use for**:
  - Interactive element states
  - Badges and tags
  - Special highlights
  - Success states
  - Decorative accents

### Neutral Colors

```css
--card: #ffffff
--card-foreground: #1a3a2e

--popover: #ffffff
--popover-foreground: #1a3a2e

--border: rgba(122, 157, 142, 0.2)
--input-background: #f3f7f5

--destructive: #d4183d
--destructive-foreground: #ffffff
```

## Typography

### Font Family

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|--------|
| H1 | 2xl-3xl (32-48px) | 500 | 1.5 | Page titles, hero headlines |
| H2 | xl-2xl (24-32px) | 500 | 1.5 | Section headers |
| H3 | lg-xl (18-24px) | 500 | 1.5 | Subsection headers |
| H4 | base (16px) | 500 | 1.5 | Card titles, small headers |
| Body | base (16px) | 400 | 1.5 | Regular paragraph text |
| Small | sm (14px) | 400 | 1.5 | Captions, meta info |
| Button | base (16px) | 500 | 1.5 | Button text |
| Label | base (16px) | 500 | 1.5 | Form labels |

### Typography Best Practices

1. **Hierarchy**: Always maintain clear visual hierarchy
2. **Contrast**: Ensure sufficient contrast between text and background
3. **Line Length**: Keep body text lines between 45-75 characters
4. **Line Height**: Use 1.5 for body text, 1.2-1.3 for headings
5. **Letter Spacing**: Use default spacing; avoid excessive tracking

## Spacing System

### Base Unit: 8px

All spacing follows an 8px grid system:

```css
/* Spacing Scale */
xs:  0.5rem  (8px)
sm:  1rem    (16px)
md:  1.5rem  (24px)
lg:  2rem    (32px)
xl:  3rem    (48px)
2xl: 4rem    (64px)
3xl: 6rem    (96px)
```

### Common Spacing Patterns

#### Component Padding
- **Cards**: 1.5rem (24px)
- **Buttons**: 0.75rem 1.5rem (12px 24px)
- **Inputs**: 0.75rem (12px)
- **Sections**: 4rem-6rem (64-96px)

#### Component Gaps
- **Grid columns**: 1.5rem-2rem (24-32px)
- **Form fields**: 1.5rem (24px)
- **Icon + text**: 0.5rem (8px)
- **Button groups**: 0.75rem (12px)

## Border Radius

### Radius Scale

```css
--radius-sm: 0.5rem   (8px)   /* Small elements */
--radius-md: 0.625rem (10px)  /* Medium elements */
--radius-lg: 0.75rem  (12px)  /* Large elements */
--radius-xl: 0.875rem (14px)  /* Extra large */
```

### Usage Guidelines

- **Buttons**: radius-lg (12px)
- **Cards**: radius-lg (12px)
- **Inputs**: radius-md (10px)
- **Badges**: radius-md (10px)
- **Icons/Avatars**: radius-lg or full (50%)

## Shadows

### Elevation System

```css
/* Card Shadow */
shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07)
shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)
shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15)
```

### Shadow Usage

- **Default cards**: No shadow or shadow-sm
- **Hover cards**: shadow-lg
- **Modals/Popovers**: shadow-xl
- **Floating elements**: shadow-lg

## Icons

### Icon Library: Lucide React

All icons use Lucide React for consistency.

### Icon Sizes

```tsx
/* Size Guidelines */
Small:  16px (w-4 h-4)
Normal: 20px (w-5 h-5)
Large:  24px (w-6 h-6)
XLarge: 32px (w-8 h-8)
```

### Icon Usage

- **Navigation**: w-5 h-5 (20px)
- **Buttons**: w-4 h-4 (16px)
- **Section headers**: w-6 h-6 (24px)
- **Feature cards**: w-6 h-6 (24px)
- **Hero sections**: w-8 h-8+ (32px+)

### Icon Color

Always use appropriate color tokens:
- Primary icons: `text-primary`
- Muted icons: `text-muted-foreground`
- Destructive: `text-destructive`

## Buttons

### Button Variants

#### Primary
```tsx
<Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
  Primary Action
</Button>
```
- Use for: Main CTAs, important actions
- Color: Primary green
- Prominence: Highest

#### Secondary
```tsx
<Button variant="secondary">
  Secondary Action
</Button>
```
- Use for: Alternative actions
- Color: Secondary green
- Prominence: Medium

#### Outline
```tsx
<Button variant="outline">
  Outline Action
</Button>
```
- Use for: Less important actions, filters
- Color: Border with transparent bg
- Prominence: Low

#### Ghost
```tsx
<Button variant="ghost">
  Ghost Action
</Button>
```
- Use for: Tertiary actions, navigation
- Color: Transparent with hover state
- Prominence: Minimal

#### Destructive
```tsx
<Button variant="destructive">
  Delete
</Button>
```
- Use for: Destructive actions (delete, cancel)
- Color: Red
- Prominence: High (warning)

### Button Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

### Button States

- **Default**: Normal state
- **Hover**: Darker/lighter shade
- **Active**: Even darker
- **Disabled**: Reduced opacity (0.5)
- **Focus**: Ring outline (--ring)

## Cards

### Card Structure

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

### Card Variants

#### Standard Card
- White background
- Border: `border-border`
- Padding: 1.5rem
- Radius: 0.75rem

#### Hover Card
- Adds: `hover:shadow-lg transition-all`
- Use for: Interactive/clickable cards

#### Accent Card
- Background: `bg-primary/5`
- Use for: Highlighted information

## Forms

### Form Field Structure

```tsx
<div className="space-y-2">
  <Label htmlFor="field">Label *</Label>
  <Input 
    id="field" 
    placeholder="Placeholder" 
    required 
    className="bg-input-background"
  />
</div>
```

### Form Spacing

- **Field gap**: 1.5rem (24px)
- **Section gap**: 2rem (32px)
- **Submit button top margin**: 2rem (32px)

### Form Validation

- **Required fields**: Asterisk (*) in label
- **Error state**: Red border + error message
- **Success state**: Green border (optional)

## Responsive Design

### Breakpoints

```css
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Small desktop */
xl:  1280px  /* Desktop */
2xl: 1536px  /* Large desktop */
```

### Mobile-First Approach

Always design for mobile first, then enhance:

```tsx
{/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Container Max Width

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

## Accessibility

### Color Contrast

All text must meet WCAG AA standards:
- **Normal text**: 4.5:1
- **Large text**: 3:1
- **UI components**: 3:1

### Focus States

All interactive elements must have visible focus:
```css
outline-ring/50
```

### ARIA Labels

Always include proper ARIA labels:
```tsx
<button aria-label="Close menu">
  <X className="w-6 h-6" />
</button>
```

### Semantic HTML

Use semantic elements:
- `<nav>` for navigation
- `<main>` for main content
- `<section>` for sections
- `<article>` for articles
- `<aside>` for sidebars

## Animation

### Transitions

Use consistent transition timing:
```css
transition-colors    /* For color changes */
transition-all       /* For multiple properties */
transition-transform /* For transforms */
```

### Duration

- **Fast**: 150ms (hover states)
- **Normal**: 200-300ms (most transitions)
- **Slow**: 500ms+ (page transitions)

### Easing

Use default cubic-bezier or:
- `ease-in-out` for most transitions
- `ease-out` for entrances
- `ease-in` for exits

## Best Practices

### Do's ✅

- Use design tokens (CSS variables) consistently
- Follow the 8px grid system
- Maintain clear visual hierarchy
- Ensure sufficient color contrast
- Use semantic HTML
- Test on mobile devices
- Include keyboard navigation
- Add loading states
- Provide error feedback

### Don'ts ❌

- Don't hardcode colors
- Don't use arbitrary spacing values
- Don't mix different green tones
- Don't compromise accessibility
- Don't create overly complex layouts
- Don't use too many font sizes
- Don't forget mobile responsiveness
- Don't omit error states

---

**Design System Version**: 1.0.0
**Last Updated**: December 2024
