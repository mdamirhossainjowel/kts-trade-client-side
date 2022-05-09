import React from "react";

const Blogs = () => {
  return (
    <div className="grid p-5 lg:grid-cols-3 gap-4 grid-cols-1 ">
      <div>
        <h1 className="text-2xl">
          Q-1: Difference between javascript and nodejs
        </h1>
        <p>
          JavaScript is a simple programming language that runs in any browser
          JavaScript Engine. Whereas Node JS is an interpreter or running
          environment for a JavaScript programming language that holds many
          excesses, it requires libraries that can easily be accessed from
          JavaScript programming for better use. <br />
          JavaScript is normally used for any client-side activity for one web
          application. An activity can be addressing business validation or
          dynamic page display in some schedule time interval or basic Ajax call
          kind of task. Those are used for a maximum time for any web
          application. Whereas Node JS mainly used for accessing or running any
          operating system for non-blocking operation. <br />
          avaScript running in any engine like Spider monkey (FireFox),
          JavaScript Core (Safari), V8 (Google Chrome). So JavaScript
          programming is very easy to write, and put any running environment
          means proper browser. Whereas Node JS only support the V8 engine,
          which googles chrome specific. But whether it supports the V8 engine,
          written JavaScript code can able to run in any environment. So there
          has no browser-specific constraint on it.
        </p>
      </div>
      <div>
        <h1 className="text-2xl">
          Q-2: When should you use nodejs and when should you use mongodb
        </h1>
        <p>
          1 Nodejs is a Javascript engine that you can write any application you
          want with (by programming in the Javascript language). It runs your
          Javascript code. Most commonly, it is used to build servers that can
          respond to web requests, though it can be used for lots of other types
          of code too. <br />
          MongoDB is a database engine. Code within some application or server
          uses MongoDB to save, query or update data in a database. There are
          many web servers built with nodejs that will then use MongoDB for
          storing data. <br />
          MongoDB offers an API library that runs within a Nodejs application to
          give you programmatic access to MongoDB so you can create databases
          and then add, query, update or delete data from the MongoDB database.
          MongoDB also has API libraries for other programming environments such
          as Python, Java, etc...
        </p>
      </div>
      <div>
        <h1 className="text-2xl">
          Q-3: Differences between sql and nosql databases.
        </h1>
        <p>
          1. SQL databases are relational, NoSQL databases are non-relational.
          <br />
          2. SQL databases use structured query language and have a predefined
          schema. NoSQL databases have dynamic schemas for unstructured data.
          <br />
          3. SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable.
          <br />
          4. SQL databases are table-based, while NoSQL databases are document,
          key-value, graph, or wide-column stores.
          <br />
          5. SQL databases are better for multi-row transactions, while NoSQL is
          better for unstructured data like documents or JSON.
          <br />
        </p>
      </div>
    </div>
  );
};

export default Blogs;
