import Footer from "../_components/layout/footer";
import Header from "../_components/layout/header";
import "../index.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "پست ملک",
  description:
    "چه به دنبال خرید یا اجاره خانه باشید و چه قصد شما فروش خانه باشد، پست ملک این امکان را برای شما فراهم کرده که این دو کار را در بستری رایگان انجام دهید و شانس خود را در پیدا کردن خانه ایده‌آل و فروش ملک و زمین افزایش دهید. در واقع، پست ملک مکانی برای یافتن و فروش ملک و زمین شماست. برخی از امکاناتی که پست ملک در اختیار کاربران خود قرار می‌دهد، عبارت‌اند از:",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
