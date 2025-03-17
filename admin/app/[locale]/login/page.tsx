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
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/slices/user";
import { RootState } from "@/redux/store";
import { Loading } from "@/components/ui/loading";
import { useTranslations } from "next-intl";
import LocaleSwitcherSelect from "@/components/LocaleSwitcherSelect";
import LocaleSwitcher from "@/components/LocaleSwitcher";

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
  const t = useTranslations();
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
      await dispatch(login({ email: values.email, password: values.password }));
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="w-full h-screen flex">
      <div className="w-full max-w-[1180px] h-full max-h-[400px] m-auto flex shadow-lg">
        <div className="hidden md:block bg-[#ED1F24] w-1/2"></div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-5 border">
          <span>{t("login.welcome")}</span>
          <span>{t("login.welcome_desc")}</span>
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
                    <FormLabel>{t("form.email")}</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={t("form.email_placeholder")}
                        {...field}
                      />
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
                    <FormLabel>{t("form.password")}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder={t("form.password_placeholder")}
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
              <Button type="submit" className="w-full" disabled={loading}>
                {!loading ? `${t("form.login")}` : <Loading />}
              </Button>
            </form>
          </Form>
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
}
