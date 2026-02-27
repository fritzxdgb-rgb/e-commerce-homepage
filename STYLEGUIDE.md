# VOX Mobile Design Style Guide

This document outlines the design system, color palette, typography, and component specifications for the VOX Mobile flagship smartphone store.

## 1. Color Palette

| Category | Variable | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | `--near-black` | `#050505` | Body text, deep backgrounds |
| **Secondary** | `--deep-gray` | `#1a1a1a` | Dark sections, inputs |
| **Accent** | `--accent` | `#0071e3` | Primary buttons, links, active states |
| **Surface** | `--light-gray` | `#f5f5f7` | Secondary backgrounds, cards |
| **Neutral** | `--mid-gray` | `#888888` | Muted text, borders |
| **Glass** | `--glass` | `rgba(255,255,255,0.8)` | Glassmorphism effects (Navbar) |

## 2. Typography

### Primary Font: **Inter**
- **Usage**: Body copy, navigation links, secondary buttons.
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi-Bold).

### Heading Font: **Plus Jakarta Sans**
- **Usage**: Page titles, section headings, product names.
- **Weights**: 700 (Bold), 800 (Extra-Bold).

### Hierarchy
- **H1 (Hero Title)**: `84px` (Desktop) / `40px` (Mobile), Weight 800.
- **H2 (Section Title)**: `40px` (Desktop) / `32px` (Mobile), Weight 800.
- **H3 (Product/Blog Title)**: `22px`, Weight 700.
- **Body Text**: `16px`, Weight 400, Line-height 1.5.
- **Labels/Subtitles**: `12px`, Weight 700, All-caps, Tracking 0.1em.

## 3. Spacing System

- **Base Unit**: `8px`
- **Section Padding**: `100px` (Vertical)
- **Container Max-Width**: `1280px`
- **Gap (Grid)**: `32px` (Desktop) / `16px` (Mobile)

## 4. Component Specifications

### Buttons
- **Primary**: Pill-shaped (`30px` radius), `--accent` background, White text.
- **Ghost**: Text only, `--accent` color, 4px translateX hover effect.

### Cards
- **Product Card**: `20px` border-radius, subtle border, hover translateY and shadow.
- **Collection Card (Bento)**: `24px` border-radius, scale-on-hover image, gradient overlay.

### Navbar
- Glassmorphism effect: `20px` backdrop-filter blur.
- Sticky position with transition on scroll.

## 5. Visual Principles

- **Contrast**: High contrast between background and text for accessibility.
- **White Space**: Generous margins and padding to create a "breathable" premium feel.
- **Glassmorphism**: Subtle usage to provide depth and a modern "OS" feel.
- **Alignment**: Strict grid alignment to ensure a structured, organized layout.
