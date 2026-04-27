# Atomity — Cloud Cost Optimization Platform

Atomity is a high-performance FinOps platform inspired by Kubecost, designed to provide real-time visibility and automated savings recommendations for cloud infrastructure.

## Feature chosen
**Option B — Savings Estimation Dashboard (0:45–0:55)**

I chose this feature because it offers the perfect balance between data visualization and interactive storytelling. My creative interpretation adds a high-fidelity "Cluster Diagram" that visualizes infrastructure nodes, a large count-up total banner to emphasize ROI, and a responsive 2-column layout that prioritizes information density while maintaining a premium aesthetic.

## Stack
- **Next.js 14 (App Router)**: Chosen for its superior routing, performance optimizations, and native support for React Server Components.
- **TypeScript**: Used in strict mode to ensure type safety, reduce bugs, and provide a self-documenting code environment.
- **Tailwind CSS**: Leveraged for rapid, consistent styling and efficient management of the custom design token system.
- **Framer Motion**: The industry standard for complex React animations, chosen for its smooth physics-based transitions and accessibility support.
- **TanStack React Query**: Implemented for its powerful data synchronization, automatic caching, and elegant state management (loading/error/success).

## Animation approach
- **Scroll-triggered**: All sections use Framer Motion's `whileInView` with optimized viewport margins to ensure animations only play when visible.
- **Staggered Entrance**: Savings cards enter the viewport with a calculated stagger delay (0.12s) for a premium "revealing" effect.
- **Count-up Animation**: Custom `useCountUp` hook animates numbers over 1.8s with an `easeOut` curve for maximum visual impact.
- **Accessibility**: Handled via the `useReducedMotion()` hook; all animations are simplified or disabled if the user has requested reduced motion in their OS settings.
- **Pure Implementation**: No external animation plugins were used; every movement is built with pure Framer Motion logic.

## Data fetching & caching
- **Source**: Integrated with the **DummyJSON API** to simulate real-time cloud inventory data.
- **Hook**: Managed via a custom `useSavingsData` hook using TanStack Query.
- **Caching**: Configured with a `staleTime` of 5 minutes and `gcTime` of 10 minutes to prevent redundant network requests and ensure a snappy user experience.
- **States**: Explicitly handles **Loading Skeleton** (pulse animation), **Error Fallback** (with retry logic), and **Success** (with real-time number formatting).

## Token system
- **`tokens/colors.ts`**: A centralized TypeScript definition that maps semantic token names to CSS variable names.
- **`globals.css`**: Defines actual hex values per theme (Dark/Light) and establishes a consistent spacing and typography scale.
- **Zero Raw Hex**: Strict enforcement of the token system ensures no hardcoded hex values exist within any component file.
- **Theming**: Theme switching is implemented via the `data-theme` attribute on the `<html>` tag, allowing for seamless toggling and persistence.

## Tradeoffs
- **API Mapping**: Used DummyJSON products as a proxy for infrastructure nodes; product prices were multiplied by factors to create realistic enterprise-scale savings values.
- **Diagram Data**: The `ClusterDiagram` is a decorative SVG component with simulated node connections, rather than a live map of real topology data.
- **Modal Simplicity**: The Trial Modal is built from scratch for speed; a production-ready version would implement full focus trapping and accessibility testing for complex forms.

## What I'd improve with more time
- **Live Updates**: Implementation of WebSockets for real-time streaming of cluster metrics and live savings updates.
- **Deep Drill-down**: Interactive navigation from the total savings banner to a detailed per-cluster or per-node cost breakdown.
- **Hardware Acceleration**: Optimization of complex SVG animations using `will-change` CSS properties for lower-end devices.
- **E2E Testing**: Comprehensive test coverage using Playwright to ensure critical user paths (scrolling, modal interactions, API failures) remain stable.
