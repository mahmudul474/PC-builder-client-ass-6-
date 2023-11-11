import Navbar from "../navbar/Navbar";

 
 

const Layout = ({ children }) => {
  return (
    <div className="    ">
      <Navbar />
      <main className="flex-1">{children}</main>
     <h1>this is Footer
     </h1>
    </div>
  );
};

export default Layout;
