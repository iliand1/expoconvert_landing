# SOP: Segmenting the Landing Page into Separate Components

## Objective
To improve the maintainability and readability of the TNG landing page by dividing the large `app/page.tsx` file into separate component files.

## Progress
1. Created a new directory for landing page components: ✅
   ```bash
   mkdir -p app/components/landing
   ```

2. Identified main sections to separate: ✅

3. Created new files for each section: ✅
   ```bash
   touch app/components/landing/Navigation.tsx
   touch app/components/landing/Hero.tsx
   touch app/components/landing/Comparison.tsx
   touch app/components/landing/JourneyToAutonomy.tsx
   touch app/components/landing/WallOfLove.tsx
   touch app/components/landing/Features.tsx
   touch app/components/landing/AboutUs.tsx
   touch app/components/landing/Pricing.tsx
   touch app/components/landing/FAQ.tsx
   touch app/components/landing/Footer.tsx
   ```

4. For each new component file: ✅
   a. Imported necessary dependencies
   b. Created functional components
   c. Copied the relevant JSX from `app/page.tsx`
   d. Adjusted imports and moved any section-specific logic or state
   e. Exported the components

5. Combined ProblemSolution and DetailedComparison into a single Comparison component: ✅

## Next Steps
6. Update `app/page.tsx`:
   a. Import all new components
   b. Replace each section with its corresponding component
   c. Pass necessary props to components (e.g., `scrollToSection` function)

7. Create a file for shared types:
   ```bash
   touch app/types/landing.ts
   ```
   Define shared types here (e.g., `SectionRefs`)

8. Create a file for shared utilities:
   ```bash
   touch app/utils/scrollUtils.ts
   ```
   Move scroll-related functions here

9. Update `app/page.tsx`:
   a. Import types and utilities
   b. Keep main layout and state management
   c. Render imported components

10. Test the application to ensure all functionality remains intact

11. Commit changes:
    ```bash
    git add .
    git commit -m "Refactor: Divide landing page into separate components"
    ```

## Best Practices
- Keep components focused on a single responsibility
- Use consistent naming conventions
- Utilize TypeScript for prop types
- Consider creating sub-components for repeated elements within sections

## Review
After segmentation, review the code structure and performance to ensure the refactoring has improved maintainability without negatively impacting the user experience.