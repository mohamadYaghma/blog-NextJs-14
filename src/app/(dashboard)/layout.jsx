import Header from "./profile/_/components/Header";
import SideBar from "./profile/_/components/SideBar";

export const metadata = {
  title: "پروفایل",
  description: "پروفایل",
};
function Layout({ children }) {
  return (
    <div className="bg-secondary-0">
      <div className="grid grid-cols-12 h-screen">
        <aside className="col-span-12 lg:col-span-3 xl:col-span-2 hidden lg:block">
          {/* sideBar */}
          <SideBar />
        </aside>
        <div className="col-span-12 lg:col-span-9 xl:col-span-10 h-screen flex flex-col">
          {/* header */}
          <Header />
          <main className="bg-secondary-100 p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto rounded-tr-3xl">
            <div className="xl:max-w-screen-xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
