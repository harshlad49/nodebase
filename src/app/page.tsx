 import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utlis";
import { caller } from "@/app/trpc/server";
import { LogoutButton } from "./logout";
const Page = async ()  => {
     await requireAuth();
     const  data = await caller.getUsers();
  return (
  <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
    protected server component
    <div>
    {JSON.stringify(data, null, 2)}
    </div>  
 <LogoutButton/>
 </div>
  );
};

export default Page;