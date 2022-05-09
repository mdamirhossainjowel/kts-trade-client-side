import React from "react";

const Contact = () => {
  return (
    <div className="w-1/3 mx-auto text-center my-12">
      <h1 className="text-4xl mb-5">Please Leave a Comment</h1>
      <form>
        <input
          className="p-2 mb-3 border-2 rounded w-1/2"
          type="text"
          name="email"
          placeholder="Enter Your Email"
        />
        <br />

        <br />
        <textarea
          className="p-2 mb-3 border-2 rounded w-1/2"
          type="text"
          name="comment"
          placeholder="Comment"
        />
        <br />
        <input
          className="p-2 mb-3 bg-red-500 rounded "
          type="submit"
          value="Comment"
        />
        <br />
      </form>
    </div>
  );
};

export default Contact;
