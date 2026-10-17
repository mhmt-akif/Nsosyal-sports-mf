import TabMenu from "@/components/layout/TabMenu";
import React from "react";

const feedTabs=[
    {label:"Akış", href:"/"},
    {label:"Medya" , href:"/media"},
];

export default function FeedLayout({children}:{children:React.ReactNode}){
    return(
        <>
            <TabMenu tabs={feedTabs}/>
                {children}
        
        </>
    )

}