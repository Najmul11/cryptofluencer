"use client";
import { useGetAllBusinessQuery } from "@/redux/api/business";
import {
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import { ReactNode } from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  const { data: businessData } = useGetAllBusinessQuery("");
  const { telegramBusiness, whatsappBusiness, email } =
    businessData?.data || {};

  return (
    <div className="pb-5 pt-32  wrapper">
      <div className="flex justify-between flex-col gap-5 sm:flex-row sm:gap-10 items-center ">
        <p className=" font-medium text-sm max-sm:text-center">
          Built with ❤️ © {year}. All rights reserved.
        </p>

        <div className="flex gap-6">
          {/* ############# twitter ######## */}

          {whatsappBusiness && (
            <Icon
              link={whatsappBusiness}
              icon={<IconBrandWhatsapp stroke={2} size={20} />}
            />
          )}

          {/* ############# telegram ######## */}
          {telegramBusiness && (
            <Icon
              link={telegramBusiness}
              icon={<IconBrandTelegram stroke={2} size={20} />}
            />
          )}

          {/* ############# telegram ######## */}
          {email && (
            <Icon
              link={`mailto:${email}`}
              icon={<IconMail stroke={2} size={20} />}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;

const Icon = ({ link, icon }: { link: string; icon: ReactNode }) => {
  return (
    <Link
      target="_blank"
      href={link}
      className="hover:-translate-y-1 duration-200  bg-brand p-2  rounded-full text-white"
    >
      {icon}
    </Link>
  );
};
