import React from 'react';
import PNF from "../assets/page-not-found.jpg";

const PageNotFound = () => {
  return (
    <main className="flex items-center justify-center ">
      <img src={PNF} alt="Page Not Found"  />
      {console.log('Page Not Found image loaded successfully:', PNF)} 
    </main>
  );
}

export default PageNotFound;
