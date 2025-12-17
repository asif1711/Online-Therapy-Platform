# Theramint Component Library

## Navigation Components

### Navigation

**File**: `/src/app/components/Navigation.tsx`

**Description**: Main navigation header with responsive mobile menu.

**Features**:
- Sticky positioning
- Brand logo with link to home
- Desktop horizontal menu
- Mobile hamburger menu
- Auth buttons (Login/Sign Up)

**Props**: None (uses Link from react-router)

**Example**:
```tsx
import { Navigation } from './components/Navigation';

<Navigation />
```

**Responsive Behavior**:
- Desktop (md+): Shows horizontal menu
- Mobile (<md): Shows hamburger menu with slide-out

---

### Footer

**File**: `/src/app/components/Footer.tsx`

**Description**: Site footer with company info and links.

**Sections**:
- Brand and description
- Quick Links column
- Services column
- Contact Info column
- Legal links

**Props**: None

**Example**:
```tsx
import { Footer } from './components/Footer';

<Footer />
```

---

## UI Components

All UI components are in `/src/app/components/ui/`

### Button

**File**: `/src/app/components/ui/button.tsx`

**Description**: Versatile button component with multiple variants and sizes.

**Variants**:
- `default` - Primary button (green background)
- `secondary` - Secondary button (light green)
- `outline` - Outlined button
- `ghost` - Transparent button
- `destructive` - Red button for destructive actions
- `link` - Text link button

**Sizes**:
- `sm` - Small button
- `default` - Normal button
- `lg` - Large button
- `icon` - Icon-only button

**Props**:
```typescript
interface ButtonProps {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
  size?: 'sm' | 'default' | 'lg' | 'icon';
  asChild?: boolean;
  className?: string;
}
```

**Examples**:
```tsx
// Primary button
<Button>Click Me</Button>

// Secondary outline
<Button variant="outline">Cancel</Button>

// Large primary
<Button size="lg">Get Started</Button>

// With icon
<Button>
  <Plus className="w-4 h-4 mr-2" />
  Add New
</Button>

// Destructive
<Button variant="destructive">Delete</Button>
```

---

### Card

**File**: `/src/app/components/ui/card.tsx`

**Description**: Container component for grouping related content.

**Components**:
- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title text
- `CardDescription` - Subtitle/description text
- `CardContent` - Main content area
- `CardFooter` - Footer section

**Example**:
```tsx
<Card className="border-border">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>
      Card description or subtitle
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

### Input

**File**: `/src/app/components/ui/input.tsx`

**Description**: Text input field.

**Types**: text, email, tel, password, date, number, url

**Props**:
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
```

**Example**:
```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email"
    type="email" 
    placeholder="you@example.com"
    required
    className="bg-input-background"
  />
</div>
```

---

### Label

**File**: `/src/app/components/ui/label.tsx`

**Description**: Form field label.

**Example**:
```tsx
<Label htmlFor="name">Full Name *</Label>
<Input id="name" />
```

---

### Textarea

**File**: `/src/app/components/ui/textarea.tsx`

**Description**: Multi-line text input.

**Props**:
```typescript
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}
```

**Example**:
```tsx
<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea
    id="message"
    placeholder="Your message..."
    className="min-h-[120px] bg-input-background resize-none"
  />
</div>
```

---

### Select

**File**: `/src/app/components/ui/select.tsx`

**Description**: Dropdown selection component.

**Components**:
- `Select` - Wrapper
- `SelectTrigger` - Button that opens dropdown
- `SelectValue` - Selected value display
- `SelectContent` - Dropdown content
- `SelectItem` - Individual option

**Example**:
```tsx
<Select value={value} onValueChange={setValue}>
  <SelectTrigger className="bg-input-background">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

---

### Checkbox

**File**: `/src/app/components/ui/checkbox.tsx`

**Description**: Checkbox input.

**Props**:
```typescript
interface CheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
}
```

**Example**:
```tsx
<div className="flex items-center space-x-2">
  <Checkbox 
    id="terms" 
    checked={agreed}
    onCheckedChange={setAgreed}
  />
  <label htmlFor="terms" className="text-sm cursor-pointer">
    I agree to the terms
  </label>
</div>
```

---

### Badge

**File**: `/src/app/components/ui/badge.tsx`

**Description**: Small label or tag.

**Variants**:
- `default` - Primary badge
- `secondary` - Secondary badge
- `outline` - Outlined badge
- `destructive` - Red badge

**Example**:
```tsx
<Badge variant="secondary" className="bg-primary/10 text-primary">
  Anxiety
</Badge>
```

---

### Tabs

**File**: `/src/app/components/ui/tabs.tsx`

**Description**: Tabbed interface component.

**Components**:
- `Tabs` - Wrapper
- `TabsList` - Tab buttons container
- `TabsTrigger` - Individual tab button
- `TabsContent` - Tab panel content

**Example**:
```tsx
<Tabs defaultValue="tab1">
  <TabsList className="bg-muted">
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Content for tab 1</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Content for tab 2</p>
  </TabsContent>
</Tabs>
```

---

### Dialog/Modal

**File**: `/src/app/components/ui/dialog.tsx`

**Description**: Modal dialog overlay.

**Components**:
- `Dialog` - Wrapper
- `DialogTrigger` - Element that opens dialog
- `DialogContent` - Dialog content container
- `DialogHeader` - Header section
- `DialogTitle` - Dialog title
- `DialogDescription` - Dialog description
- `DialogFooter` - Footer with actions

**Example**:
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        Dialog description text
      </DialogDescription>
    </DialogHeader>
    <div>Dialog content...</div>
    <DialogFooter>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

### Separator

**File**: `/src/app/components/ui/separator.tsx`

**Description**: Visual divider line.

**Orientation**: horizontal (default) or vertical

**Example**:
```tsx
<div>
  <p>Section 1</p>
  <Separator className="my-4" />
  <p>Section 2</p>
</div>
```

---

## Page Components

### HomePage

**File**: `/src/app/pages/HomePage.tsx`

**Sections**:
1. Hero - Main headline and CTAs
2. Features - 6 benefit cards
3. Specialties - Grid of therapy areas
4. CTA - Call to action section

**Key Elements**:
- Gradient backgrounds
- Feature cards with icons
- Specialty tags
- Multiple CTAs

---

### TherapistsPage

**File**: `/src/app/pages/TherapistsPage.tsx`

**Features**:
- Therapist grid (3 columns on desktop)
- Therapist cards with:
  - Profile image
  - Name and title
  - Star rating
  - Experience
  - Specialties (badges)
  - Bio preview
  - Book button
- Bottom CTA section

---

### BookAppointmentPage

**File**: `/src/app/pages/BookAppointmentPage.tsx`

**Features**:
- Multi-section form
- Personal information fields
- Therapist selection dropdown
- Appointment type selection
- Date/time pickers
- Success confirmation state
- Form validation

**State Management**:
```typescript
const [submitted, setSubmitted] = useState(false);
const [formData, setFormData] = useState({...});
```

---

### AdminPage

**File**: `/src/app/pages/AdminPage.tsx`

**Features**:
- Security warning banner
- Tabbed interface (Manage/Add-Edit)
- Therapist grid view
- Add/Edit form
- Delete confirmation
- Local state management

**State Management**:
```typescript
const [therapists, setTherapists] = useState(initialTherapists);
const [editingId, setEditingId] = useState<string | null>(null);
const [formData, setFormData] = useState<TherapistForm>({...});
```

---

### ContactPage

**File**: `/src/app/pages/ContactPage.tsx`

**Layout**:
- 2-column on desktop
- Contact info sidebar (1/3 width)
- Contact form (2/3 width)
- FAQ section below

**Features**:
- Contact information cards
- Crisis resources
- Contact form with validation
- Success confirmation
- FAQ accordion

---

### LoginPage / RegisterPage

**Files**: 
- `/src/app/pages/LoginPage.tsx`
- `/src/app/pages/RegisterPage.tsx`

**Features**:
- Centered card layout
- Brand logo
- Form with validation
- Social login buttons (UI only)
- Toggle between login/register
- Terms checkbox (register)
- Remember me (login)

**Layout**: Standalone (no Navigation/Footer)

---

### NotFound (404)

**File**: `/src/app/pages/NotFound.tsx`

**Features**:
- Large 404 display
- Error message
- Navigation buttons
- Minimal design

---

## Common Patterns

### Form Field Pattern

```tsx
<div className="space-y-2">
  <Label htmlFor="fieldId">Field Label *</Label>
  <Input
    id="fieldId"
    type="text"
    placeholder="Placeholder text"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    required
    className="bg-input-background"
  />
</div>
```

### Card with Icon Header

```tsx
<Card className="border-border hover:shadow-lg transition-shadow">
  <CardHeader>
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
</Card>
```

### Button with Icon

```tsx
<Button className="bg-primary hover:bg-primary/90">
  <Icon className="w-4 h-4 mr-2" />
  Button Text
</Button>
```

### Responsive Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <Card key={item.id}>...</Card>
  ))}
</div>
```

### Section Container

```tsx
<section className="py-16 px-4 bg-background">
  <div className="max-w-7xl mx-auto">
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2>Section Title</h2>
      <p className="text-muted-foreground">Description</p>
    </div>
    {/* Content */}
  </div>
</section>
```

---

## Icons

All icons use **Lucide React**.

### Common Icons Used

| Icon | Component | Usage |
|------|-----------|-------|
| Heart | `<Heart />` | Brand, favorites |
| Menu | `<Menu />` | Mobile menu trigger |
| X | `<X />` | Close, dismiss |
| Calendar | `<Calendar />` | Appointments, dates |
| Mail | `<Mail />` | Email, contact |
| Phone | `<Phone />` | Phone contact |
| MapPin | `<MapPin />` | Location, address |
| Clock | `<Clock />` | Time, hours |
| Users | `<Users />` | People, team |
| Shield | `<Shield />` | Security, privacy |
| Star | `<Star />` | Ratings |
| Plus | `<Plus />` | Add, create |
| Edit | `<Edit />` | Edit action |
| Trash2 | `<Trash2 />` | Delete action |
| Send | `<Send />` | Submit, send |
| CheckCircle | `<CheckCircle />` | Success, complete |
| Home | `<Home />` | Home navigation |
| ArrowLeft | `<ArrowLeft />` | Back navigation |
| MessageCircle | `<MessageCircle />` | Messaging |
| User | `<User />` | User profile |
| Lock | `<Lock />` | Security, password |

### Icon Example

```tsx
import { Calendar } from 'lucide-react';

<div className="flex items-center gap-2">
  <Calendar className="w-5 h-5 text-primary" />
  <span>Book Appointment</span>
</div>
```

---

## State Management

### Component State

Use `useState` for local component state:

```tsx
const [value, setValue] = useState('');
const [isOpen, setIsOpen] = useState(false);
```

### Form State

For forms, maintain object state:

```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});

const handleChange = (field: string, value: string) => {
  setFormData(prev => ({ ...prev, [field]: value }));
};
```

---

## Best Practices

### Component Organization

1. Imports at top
2. Type/Interface definitions
3. Component function
4. Event handlers
5. Render logic
6. Export at bottom

### Naming Conventions

- Components: PascalCase (`HomePage.tsx`)
- Files: PascalCase for components
- Props: camelCase
- CSS classes: Tailwind utilities
- Event handlers: `handle*` prefix

### Accessibility

- Always use semantic HTML
- Include ARIA labels
- Ensure keyboard navigation
- Provide focus indicators
- Test with screen readers

### Performance

- Use React.memo for expensive components
- Lazy load routes/components
- Optimize images
- Minimize re-renders

---

**Component Library Version**: 1.0.0
**Last Updated**: December 2024
