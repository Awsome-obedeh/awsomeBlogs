import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog app",
  description: "The best blog app , to get the latest news, updates on sports, lifestyles,education and politics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          {/* because we don't we dont want to change our application to a server component, we 
          need to create a component to provide our theme */}
          <ThemeProvider>

            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>


            </div>

          </ThemeProvider>

          



        </ThemeContextProvider>


      </body>
    </html>
  );
}
