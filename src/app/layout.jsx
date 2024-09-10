import Header from "@/components/Header";
import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";


export const metadata = {
  title: {
    template: "%s | اپلیکیشن بلاگ " ,
    default: "اپلیکیشن بلاگ",
  },
  description: "develop by mohamad yaghma",
};

export default function RootLayout({ children }) {

  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <Header />
        <div className="container xl:max-w-screen-xl">
          {children}
        </div>
      </body>
    </html>
  );
}
