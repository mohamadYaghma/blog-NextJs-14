import CategoryList from "../-components/CategoryList";



export const metadata = {
  title: "بلاگ ها",
  description: "develop by mohamad yaghma",
};

export default function Layout({children}) {
  return (
    <div>
      <h1 className="text-lg font-bold mb-12">لیست بلاگ ها</h1>
      <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-500 space-y-4">
                <CategoryList />
            </div>
            <div className="col-span-12 lg:col-span-4 xl:col-span-9 text-secondary-500 space-y-4">
             {children}
            </div>
        </div>
    </div>
  )
}