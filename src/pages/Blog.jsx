import q1 from "../assets/images/q1.png";
import q2 from "../assets/images/q2.png";
import q3 from "../assets/images/q3.webp";

const Blog = () => {
  return (
    <div className="my-12 max-w-[1280px] mx-auto">
      <div className="flex flex-col gap-10">
        <div className="hero">
          <div className="hero-content flex-col-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold">
                1.What is One way data binding?
              </h1>
              <p className="py-6">
                One-way data binding is a concept commonly used in front-end web
                development and user interface frameworks like Angular, React,
                and Vue.js. It refers to the process of synchronizing data from
                the model (or source) to the view (the UI) but not in the
                reverse direction. In other words, changes to the data are
                reflected in the UI, but changes made in the UI do not directly
                affect the underlying data. One-way data binding helps create a
                predictable and maintainable application structure because it
                enforces a clear separation between the data and the UI.
                Developers can be confident that changes to the data will
                consistently update the UI, without unexpected side effects.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full">
              <form className="card-body">
                <img src={q1} className="w-1/2 mx-auto" alt="" />
              </form>
            </div>
          </div>
        </div>
        <hr />

        <div className="hero">
          <div className="hero-content flex-col-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold">
                2.What is NPM in node.js?
              </h1>
              <p className="py-6">
                NPM stands for Node Package Manager and it is the default
                package manager for Node.js. NPM is a command-line tool and an
                online repository of Node.js packages and modules that
                developers can use in their Node.js applications.NPM is an
                essential tool for Node.js developers, as it streamlines the
                process of managing dependencies and automates many common
                development tasks. It is bundled with Node.js, so when you
                install Node.js, you also get NPM.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full">
              <form className="card-body">
                <img src={q2} className="w-1/2 mx-auto" alt="" />
              </form>
            </div>
          </div>
        </div>
        <hr />

        <div className="hero">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold">
                3.Different between Mongodb database vs mySQL database?
              </h1>{" "}
            </div>
            <div className="card flex-shrink-0 w-full">
              <ol className=" space-y-3 ">
              <div className="card flex-shrink-0 w-full">
              <form className="card-body">
                <img src={q3} className="w-1/2 mx-auto" alt="" />
              </form>
            </div>
                <li className="font-bold">1.Data Model:</li>
                <p>
                  ->MongoDB is a NoSQL database, specifically a
                  document-oriented database. It stores data in flexible,
                  semi-structured documents (usually in BSON format) organized
                  into collections.
                  <br />
                  ->MySQL is a relational database management system (RDBMS)
                  that stores data in structured tables with rows and columns,
                  following a predefined schema.
                </p>
                <li className="font-bold">2.Schema:</li>
                <p>
                  ->MongoDB is schema-less, which means you can insert documents
                  with different structures into the same collection. Fields can
                  be added or removed without strict adherence to a predefined
                  schema.
                  <br />
                  ->MySQL is schema-based, where you define the structure of
                  tables, including column data types, constraints, and
                  relationships in advance. Data must adhere to this schema.
                </p>
                <li className="font-bold">3.Query Language:</li>
                <p>
                  ->MongoDB uses a JSON-like query language for querying
                  documents. It supports rich queries, including geospatial
                  queries and text search.
                  <br />
                  ->MySQL uses SQL (Structured Query Language) for querying and
                  managing relational data. SQL is a powerful and
                  well-established language for data manipulation.
                </p>

                <li className="font-bold">4.Use Cases:</li>
                <p>
                  ->MongoDB is often used in scenarios where flexibility in data
                  structure is required, such as content management systems,
                  real-time analytics, and applications with rapidly changing
                  requirements. <br /> ->MySQL is commonly used for applications that
                  require a structured, well-defined schema, such as e-commerce
                  systems, financial applications, and traditional relational
                  database use cases.
                </p>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
