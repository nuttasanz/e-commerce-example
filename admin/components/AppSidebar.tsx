"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  BadgeInfoIcon,
  BriefcaseBusinessIcon,
  ChevronDown,
  FileTextIcon,
  Handshake,
  LayoutDashboardIcon,
  LeafIcon,
  LockIcon,
  MapPin,
  MapPinnedIcon,
  PackagePlusIcon,
  PhoneCall,
  ShieldIcon,
  ShoppingBasketIcon,
  ShoppingCartIcon,
  StoreIcon,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import {
  CollapsibleTrigger,
  Collapsible,
  CollapsibleContent,
} from "./ui/collapsible";
import { useState } from "react";

export function AppSidebar() {
  const [open, setOpen] = useState<any>({
    business: false,
    products: false,
    termsOfService: false,
    aboutUs: false,
    newsAndEvents: false,
    admin: false,
  });
  const handleOpen = (section: string) => {
    setOpen((prevState: any) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const businessMenuItems = [
    { href: "/products/categories", label: "กลุ่มสินค้า" },
    { href: "/products/units", label: "หน่วยสินค้า" },
    { href: "/products/sizes", label: "ขนาดสินค้า" },
    { href: "/products/list", label: "สินค้า" },
    { href: "/products/import-prices", label: "นำเข้าราคา" },
    { href: "/products/export-prices", label: "ส่งออกราคา" },
  ];

  const productMenuItems = [
    { href: "/business/rental", label: "เช่าพื้นที่การค้า" },
    { href: "/business/flea-market", label: "ขายท้ายรถ" },
    { href: "/business/sell-product", label: "เสนอขายสินค้า" },
    { href: "/business/sourcing", label: "บริการจัดหา" },
    { href: "/business/others", label: "ธุรกิจอื่นๆ" },
  ];

  const termsOfServiceItems = [
    { href: "/terms-of-service/user-information", label: "ข้อมูลผู้ใช้ระบบ" },
    {
      href: "/terms-of-service/terms-and-conditions",
      label: "ข้อกำหนดและเงื่อนไข",
    },
    {
      href: "/terms-of-service/privacy-policy",
      label: "นโยบายความเป็นส่วนตัว",
    },
    { href: "/terms-of-service/cookie-policy", label: "นโยบายการใช้คุ้กกี้" },
  ];

  const aboutUsMenuItems = [
    { href: "/about-us/home", label: "เพจเกี่ยวกับเรา" },
    { href: "/about-us/key-events", label: "เหตุการณ์สำคัญ" },
    { href: "/about-us/business-services", label: "ธุรกิจและบริการอื่นๆ" },
    { href: "/about-us/awards-recognition", label: "รางวัลและการรองรับ" },
  ];

  const newsAndEventsMenuItems = [
    // news-and-events
    { href: "/news-and-events/video", label: "วิดีโอ" },
    { href: "/news-and-events/news", label: "ข่าวสาร" },
  ];

  const careersMenuItems = [
    // news-and-events
    { href: "/careers/groups", label: "กลุ่มงาน" },
    { href: "/careers/job-postings", label: "ประกาศรับสมัคร" },
    { href: "/careers/application", label: "การสมัครงาน" },
  ];

  const adminMenuItems = [
    // news-and-events
    { href: "/admin/access-rights", label: "สิทธิ์การเข้าถึง" },
    { href: "/admin/user-data", label: "ข้อมูลผู้ใช้งาน" },
    { href: "/admin/email-notifications", label: "จัดการอีเมลแจ้งเตือน" },
  ];

  return (
    <>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={`/`}>
                      <LayoutDashboardIcon />
                      <span>{`แดชบอร์ด`}</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuButton asChild>
                    <Link href={`/report`}>
                      <FileTextIcon />
                      <span>{`รายงาน`}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>

              <SidebarGroupLabel>เมนู</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={`/register`}>
                      <UserPlus />
                      <span>{`สมัครสมาชิก`}</span>
                    </Link>
                  </SidebarMenuButton>
                  <Collapsible
                    open={open.business}
                    onOpenChange={() => handleOpen("business")}
                    className="group/collapsible"
                  >
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link href={""}>
                          <Handshake />
                          <span>{`สมัครร่วมธุรกิจ`}</span>
                          <ChevronDown
                            className={`ml-auto transition-transform duration-300 ${
                              open.business ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </Link>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {businessMenuItems.map((item) => (
                          <SidebarMenuSubItem key={item.label}>
                            <SidebarMenuSubButton href={item.href}>
                              <span>{item.label}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenuItem>

                <Collapsible
                  open={open.products}
                  onOpenChange={() => handleOpen("products")}
                  className="group/collapsible"
                >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                      <Link href={""}>
                        <PackagePlusIcon />
                        <span>{`จัดการสินค้า`}</span>
                        <ChevronDown
                          className={`ml-auto transition-transform duration-300 ${
                            open.products ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </Link>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        {productMenuItems.map((item) => (
                          <SidebarMenuSubItem key={item.label}>
                            <SidebarMenuSubButton href={item.href}>
                              <span>{item.label}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={`/marketplace`}>
                      <StoreIcon />
                      <span>{`โซนตลาด`}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={`/shops`}>
                      <ShoppingBasketIcon />
                      <span>{`ร้านค้าในตลาด`}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={`/map`}>
                      <MapPinnedIcon />
                      <span>{`แผนที่และผังตลาด`}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <Collapsible
                  open={open.termsOfService}
                  onOpenChange={() => handleOpen("termsOfService")}
                  className="group/collapsible"
                >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                      <Link href={""}>
                        <ShieldIcon />
                        <span>{`ประกาศความเป็นส่วนตัว`}</span>
                        <ChevronDown
                          className={`ml-auto transition-transform duration-300 ${
                            open.termsOfService ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </Link>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {termsOfServiceItems.map((item) => (
                        <SidebarMenuSubItem key={item.label}>
                          <SidebarMenuSubButton href={item.href}>
                            <span>{item.label}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenu>

              <SidebarGroupLabel>เพจ</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={`/home`}>
                      <UserPlus />
                      <span>{`หน้าหลัก`}</span>
                    </Link>
                  </SidebarMenuButton>
                  <Collapsible
                    open={open.aboutUs}
                    onOpenChange={() => handleOpen("aboutUs")}
                    className="group/collapsible"
                  >
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link href={""}>
                          <BadgeInfoIcon />
                          <span>{`เกี่ยวกับเรา`}</span>
                          <ChevronDown
                            className={`ml-auto transition-transform duration-300 ${
                              open.aboutUs ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </Link>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {aboutUsMenuItems.map((item) => (
                          <SidebarMenuSubItem key={item.label}>
                            <SidebarMenuSubButton href={item.href}>
                              <span>{item.label}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                  <SidebarMenuButton asChild>
                    <Link href={`/market-trading`}>
                      <ShoppingCartIcon />
                      <span>{`การค้าขายในตลาด`}</span>
                    </Link>
                  </SidebarMenuButton>

                  <SidebarMenuButton asChild>
                    <Link href={`/sustainability`}>
                      <LeafIcon />
                      <span>{`โครงการความยั่งยืน`}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <Collapsible
                  open={open.newsAndEvents}
                  onOpenChange={() => handleOpen("newsAndEvents")}
                  className="group/collapsible"
                >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                      <Link href={""}>
                        <BadgeInfoIcon />
                        <span>{`ข่าวสารและกิจกรรม`}</span>
                        <ChevronDown
                          className={`ml-auto transition-transform duration-300 ${
                            open.newsAndEvents ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </Link>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {newsAndEventsMenuItems.map((item) => (
                        <SidebarMenuSubItem key={item.label}>
                          <SidebarMenuSubButton href={item.href}>
                            <span>{item.label}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>

                <SidebarMenuButton asChild>
                  <Link href={`/contact`}>
                    <PhoneCall />
                    <span>{`การติดต่อ`}</span>
                  </Link>
                </SidebarMenuButton>

                <Collapsible
                  open={open.careers}
                  onOpenChange={() => handleOpen("careers")}
                  className="group/collapsible"
                >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                      <Link href={""}>
                        <BriefcaseBusinessIcon />
                        <span>{`ร่วมงานกับเรา`}</span>
                        <ChevronDown
                          className={`ml-auto transition-transform duration-300 ${
                            open.careers ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </Link>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {careersMenuItems.map((item) => (
                        <SidebarMenuSubItem key={item.label}>
                          <SidebarMenuSubButton href={item.href}>
                            <span>{item.label}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenu>

              <SidebarGroupLabel>การจัดการ</SidebarGroupLabel>
              <SidebarMenu>
                <Collapsible
                  open={open.admin}
                  onOpenChange={() => handleOpen("admin")}
                  className="group/collapsible"
                >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                      <Link href={""}>
                        <LockIcon />
                        <span>{`แอดมิน`}</span>
                        <ChevronDown
                          className={`ml-auto transition-transform duration-300 ${
                            open.admin ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </Link>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {adminMenuItems.map((item) => (
                        <SidebarMenuSubItem key={item.label}>
                          <SidebarMenuSubButton href={item.href}>
                            <span>{item.label}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
