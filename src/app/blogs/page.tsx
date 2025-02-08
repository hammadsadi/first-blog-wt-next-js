import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Sadi",
};

const BlogPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();
  return (
    <div className="w-[90%] mx-auto mt-10 md:mt-14">
      <h1 className="text-3xl text-center my-5 font-bold">
        Latest Blogs From <span className="text-teal-600">NexaBlog</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs?.map((blog: Blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
