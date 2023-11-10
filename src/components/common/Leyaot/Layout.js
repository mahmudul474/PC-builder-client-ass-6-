import Navbar from "../navbar/Navbar";

 
 

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
     <h1>this is Footer
     </h1>
    </div>
  );
};

export default Layout;
