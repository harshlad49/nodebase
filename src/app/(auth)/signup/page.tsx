import { RegisterForm } from "@/features/auth/components/register-form";
import { requireUnauth } from "@/lib/auth-utlis";
const page = async () => {
  await requireUnauth();
  return (
    <div>
      <RegisterForm />
    </div>
  )
}

export default page
