import Typography from "../ui/typography/typography";
import BlogCard from "./blog-card/blog-card";

export default function Blogs() {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-5 items-center">
        <Typography variant="h4">Discover Our Latest Blog Entries</Typography>
        <input type="text" placeholder="Search..." className="input m-0" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  )
}