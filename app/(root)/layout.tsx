import React from "react";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = { firstName: 'Adem' , lastname: 'Sayadi'};
    return (
        <main className="flex h-screen w-full font-inter">
            <SideBar user={loggedIn}/>
            <div className="flex sze-full flex-col">
               <div className="root-layout">
                   <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon"/>
                   <MobileNav user={loggedIn}/>
               </div>
                {children}
            </div>
        </main>
    );
}