import React from "react";
import { useLoaderData } from "react-router";
import { motion } from "motion/react"
const Blog = () => {
  const data = useLoaderData();
  const blogs = data.answers;
  return (
    <motion.div
    initial={{ scale: 0 }} animate={{ scale: 1 ,transition: { duration: 1 }}}
    className="w-10/12 mx-auto py-12 mt-3">
     {
        blogs.map((blog)=> <div key={blog.id} className=" p-4 mt-4 bg-white rounded-2xl">
                     <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary">
          {blog.question}
          
        </div>
        
      </div>
      <span className="text-sm text-gray-400">Added:{blog.date_added}</span>
      <div className="chat chat-end py-4">
        <div className="chat-bubble chat-bubble-success">
          {blog.answer}
        </div>
      </div>

        </div>)
     }
      
    </motion.div>
  );
};

export default Blog;
