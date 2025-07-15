import type { Metadata } from "next";

export const metadata : Metadata = {
  title: "About Us",
  description: "Hello this is about us description",
};

function page() {
  return (
    <div>About - page without creating about component </div>
  )
}

export default page