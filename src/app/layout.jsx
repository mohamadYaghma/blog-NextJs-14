import Header from "@/components/Header";
import vazirFont from "@/constants/localFont";
import AuthProvider from "@/context/AuthContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: {
    template: "%s | اپلیکیشن بلاگ " ,
    default: "اپلیکیشن بلاگ",
  },
  description: "develop by mohamad yaghma",
};

export default function RootLayout({ children }) {

  return (
    <html lang="fa" dir="rtl" className="dark-mode">
      <body className={`min-h-screen  ${vazirFont.variable} font-sans `}>
        <AuthProvider>
          <Toaster />
          <Header />
          <div className="container xl:max-w-screen-xl">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
