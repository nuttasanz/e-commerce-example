"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/slices/user";
import { RootState } from "@/redux/store";
import { Loading } from "@/components/ui/loading";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .refine(
      (value) => value.length >= 8 && /[!@#\$%\^\&*\)\(+=._-]/.test(value),
      {
        message:
          "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร และมีอักขระพิเศษอย่างน้อย 1 ตัว",
      }
    ),
});

export default function LoginPage() {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const { user, loading } = useSelector((state: RootState) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const body = {
        email: values.email,
        password: values.password,
      };
      await dispatch(login(body));
      if (user) {
        router.push("/");
      }
      // toast.success(response?.data?.message, {
      //   closeButton: true,
      //   position: "top-right",
      //   onAutoClose() {
      //   },
      // });
    } catch (err: any) {
      toast.error(err?.response?.data?.message, {
        closeButton: true,
        position: "top-right",
      });
    }
  }

  return (
    <div className="w-full h-screen flex">
      <div className="w-full max-w-[1180px] h-full max-h-[400px] m-auto flex shadow-lg">
        <div className="hidden md:block bg-[#ED1F24] w-1/2"></div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-5 border">
          <span>ยินดีต้อนรับกลับมา</span>
          <span>เข้าสู่ระบบเพื่อดำเนินการต่อ</span>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full max-w-[400px]"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>อีเมล</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="กรอกอีเมล" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>พาสเวิร์ด</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="กรอกพาสเวิร์ด"
                          {...field}
                        />
                        <Button
                          variant="ghost"
                          type="button"
                          className="absolute inset-y-0 right-0 flex items-center justify-center p-2 cursor-pointer hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <Eye /> : <EyeOff />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                {!loading ? "เข้าสู่ระบบ" : <Loading />}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
