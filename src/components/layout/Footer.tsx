import React from "react";

const Footer: React.FC = () => (
  <footer className="border-t dark:border-gray-800 mt-12">
    <div className="container mx-auto px-6 py-8 text-sm text-gray-500 dark:text-gray-400 flex flex-col md:flex-row justify-between">
      <div>© {new Date().getFullYear()} ArchStudio — All rights reserved.</div>
      <div className="flex gap-4 mt-3 md:mt-0">
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">Behance</a>
      </div>
    </div>
  </footer>
);

export default Footer;
