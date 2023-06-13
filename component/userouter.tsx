import { useRouter } from "next/router"

const router=useRouter()
export  const useQuery=(link:string)=>{
  router.push(link)
}