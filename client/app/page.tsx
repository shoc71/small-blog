import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import { TableDemo } from "./table/posts";
import { DataTableDemo } from "./table/posts";
import TestDataTable from "./table/tester";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
      <Header />
    
      <main>
        <h1 className="text-2xl font-bold">Posts</h1>
        <div className="p-4">
          <TestDataTable />
          <DataTableDemo />
        </div>
        <table className="table table-dark"></table>
      </main>

      <Footer />
    </div>
  );
}
