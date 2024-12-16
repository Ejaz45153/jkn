import Image from "next/image";

import {Card} from "../components/ui/card"
  import user from"../app/ejaz.jpg"
export default function CardDamo(){
    return(
        <Card className="group duration-600 w-[400px] hover:[450px] hover:bg-blue-500 hover:p-9 p-6 divide-x-2 divide-slate-400 flex justify-start items-center"> 
<Image

 src={user} alt="user"width={100} height={100}  
className="w-[50px] duration-500 h-[50px] rounded-full mr-3 group-hover:opacity-30"/>
<p className="pl-3 w-full duration-500 group-hover:p-10 group-hover:text-white"> I AM EJAZ</p>
        </Card>
    )
}