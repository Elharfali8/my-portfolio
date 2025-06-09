'use client'

import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null; 
    }

  return (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Providers