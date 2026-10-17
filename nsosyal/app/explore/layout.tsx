import TabMenu from "@/components/layout/TabMenu";
import React from "react";

const exploreTabs=[
    {label:"Keşfet", href:"/explore"},
    {label:"Trendler" , href:"/explore/trends"},
    {label:"Sana Özel" , href:"/explore/for-you"},
    {label:"NSCore" , href:"/explore/nscore"},
    {label:"Haberler" , href:"/explore/news"},
    {label:"Kişi Önerileri" , href:"/explore/people"},
];

export default function ExploreLayout({children}:{children:React.ReactNode}){
    return(
        <>
            <TabMenu tabs={exploreTabs}/>
                {children}
        
        </>
    )

}