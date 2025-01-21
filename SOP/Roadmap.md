# Standard Operating Procedure (SOP)

So the idea is to show the user of our landing page of what it takes to start working with us.

## Our Process

1. **Discovery Call**
   - Understand your business and problem.

2. **Sign Contract**

3. **One Week of Setup**

4. **Setting Up LinkedIn Profiles**
   - Warm up LinkedIn presence.

5. **Creating Hypotheses for First Iterations**

6. **Leads Collection and Text**
   - Included in the first iteration.

7. **First Leads within Two to Three Weeks**

8. **Client Independence within Two Months**
   - Clients can run next hypotheses themselves.

## Creating a New Component

1. **Create Component Folder**
   - Navigate to `app/components`.
   - Check if the folder exists:
     ```bash
     ls app/components
     ```
   - If not, create a new folder:
     ```bash
     mkdir app/components/YourComponentName
     ```

2. **Create Component File**
   - Inside the folder, create the component file:
     ```bash
     touch app/components/YourComponentName/YourComponentName.tsx
     ```

3. **Implement the Component**
   - Use shadcn components from `components/ui`.
   - Apply styles from `app/globals.css`.
   - Ensure responsiveness for desktop and mobile.
   - Example structure:
     ```typescript:app/components/YourComponentName/YourComponentName.tsx
     import React from 'react';
     import { ShadcnComponent } from 'components/ui';

     const YourComponentName = () => {
       return (
         <div className="bg-background text-foreground p-4">
           <ShadcnComponent className="text-primary" />
           {/* Add your JSX here */}
         </div>
       );
     };

     export default YourComponentName;
     ```

4. **Ensure Readability and Clarity**
   - Use semantic HTML elements.
   - Keep JSX clean and well-organized.
   - Avoid unnecessary nesting.

5. **Test Responsiveness**
   - Verify the component on various screen sizes.
   - Adjust using global CSS classes as needed.

