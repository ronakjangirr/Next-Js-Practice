#. How to use not-found page if any route did'nt match? 
Note- By default next.js have not found page if we wants to create our own custom not-found page.

In Next.js App Router (/app directory), handling a 404 - Not Found page is built-in and very elegant.

✅ 1. How to Create a Custom not-found Page
Simply add a file named:

/app/not-found.tsx
Example:

// app/not-found.tsx
export default function NotFound() {
  return (
    <div style={{ padding: 40 }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you’re looking for does not exist.</p>
    </div>
  );
}


#. For this should I directly create a not-found.tsx page in root or should I create 1 component in components folder not-found/NotFound.tsx and then create in app not-found folder then page.tsx ?

✅ Option 1: Recommended / Best Practice
➤ Create app/not-found.tsx directly

/app
  └── not-found.tsx ✅
Why?
✅ Next.js automatically uses this for notFound() calls

✅ No need for a route like /not-found, it just works

✅ No need to manually import or use this in routes

✔️ Example:

// app/not-found.tsx
export default function NotFound() {
  return (
    <div style={{ padding: 40 }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you’re looking for does not exist.</p>
    </div>
  );
}


✅ Automatically shown when:
You call notFound() inside a page.tsx or layout.tsx

A dynamic route doesn’t match the data (if you handle it)

The user accesses an invalid route that you don't define

🚫 Option 2: Creating a Manual /not-found/page.tsx
/components/not-found/NotFound.tsx
/app/not-found/page.tsx ❌
This is not recommended for actual 404 behavior.