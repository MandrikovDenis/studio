import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
   return (
    <div className="flex flex-col space-y-6 items-center justify-center pt-10">
       <Skeleton className="h-10 w-1/2 rounded-md" />
       <div className="w-full max-w-md space-y-4">
           <Skeleton className="h-8 w-1/4 rounded-md" />
           <Skeleton className="h-10 w-full rounded-md" />
           <Skeleton className="h-8 w-1/4 rounded-md" />
           <Skeleton className="h-10 w-full rounded-md" />
           <Skeleton className="h-10 w-full rounded-md mt-4" />
       </div>
    </div>
  )
}