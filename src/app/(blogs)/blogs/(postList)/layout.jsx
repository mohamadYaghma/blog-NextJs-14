import Search from "@/ui/search";
import CategoryList from "../-components/CategoryList";

export const metadata = {
  title: "بلاگ ها",
  description: "develop by mohamad yaghma",
};

export default function Layout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg font-bold">لیست بلاگ ها</h1>
        <Search />
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-500 space-y-4">
          <CategoryList />
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-9 text-secondary-500 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}