"use client";
import { useGetSingleProjectQuery } from "@/redux/api/project";
import {
  IconBrandDatabricks,
  IconBrandDiscord,
  IconBrandDribbbleFilled,
  IconBrandTelegram,
  IconBrandX,
  IconLayersIntersect,
  IconLayoutBottombarInactive,
  IconLink,
  IconReceiptDollar,
} from "@tabler/icons-react";
import Link from "next/link";
import { useParams } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
const Details = () => {
  const { slug } = useParams();
  const { data: projectData, isLoading } = useGetSingleProjectQuery(
    slug as string
  );

  const {
    name,

    description,
    highlightedText,
    logoURL,

    categories,
    platform,

    inviteCode,
    inviteURL,

    showOnHomepage,
    status,
    buttonText,

    funding,
    fundingUnit,

    discord,
    telegram,
    website,
    twitter,
  } = projectData?.data || {};

  return (
    <div className="flex flex-col gap-4">
      {/* primary  details ------ */}
      <div className="flex gap-5 ">
        <div>
          <img src={logoURL} alt="" className="size-44 rounded-2xl" />
          <div className="flex items-center gap-3 justify-center mt-4">
            {website && (
              <Link href={website} target="_blank">
                <IconBrandDribbbleFilled className="hover:text-cyan-700 cursor-pointer duration-200" />
              </Link>
            )}
            {discord && (
              <Link href={discord} target="_blank">
                <IconBrandDiscord className="hover:text-blue-700 cursor-pointer duration-200" />
              </Link>
            )}
            {telegram && (
              <Link href={telegram} target="_blank">
                <IconBrandTelegram className="hover:text-cyan-700 cursor-pointer duration-200" />
              </Link>
            )}
            {twitter && (
              <Link href={twitter} target="_blank">
                <IconBrandX className="hover:text-black cursor-pointer duration-200" />
              </Link>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="">{name}</h2>
          {/* platform-------- */}
          <div className="flex items-center gap-1">
            <IconBrandDatabricks className="text-brand" size={20} />{" "}
            <div className="flex gap-2 items-center">
              <p> Bockchain :</p>
              <p>{platform?.name || "Unconfirmed"}</p>
            </div>
          </div>

          {/* status----------- */}
          <div className="flex items-center gap-1">
            <IconLayoutBottombarInactive className="text-brand" size={20} />{" "}
            <div className="flex gap-2 items-center">
              <p>Status :</p>
              <p className="flex gap-1 items-center">
                {/* Confirmed <IconChecks size={20} className="text-green-500" /> */}
                {status}
                <span className="font-semibold text-red-500 text-lg">X</span>
              </p>
            </div>
          </div>

          {/* funding --------- */}
          <div className="flex items-center gap-1">
            <IconReceiptDollar className="text-brand" size={20} />{" "}
            <div className="flex gap-2 items-center">
              <p>Funding :</p>
              {funding ? (
                <p className="font-semibold">
                  <span className="text-lg">{funding}</span> {fundingUnit}
                </p>
              ) : (
                "N/A"
              )}
            </div>
          </div>
          {/* invite code --------- */}
          {inviteCode && (
            <div className="flex items-center gap-1">
              <IconLayersIntersect className="text-brand" size={20} />{" "}
              <div className="flex gap-2 items-center">
                <p>Invite Code :</p>
                <p className="font-semibold">
                  <span className="text-lg">{inviteCode}</span>
                </p>
              </div>
            </div>
          )}

          {/* join btn -------- */}
          <div className="flex">
            <Link
              href={inviteURL ?? "/"}
              target="_blank"
              className="flex-center gap-1 group duration-200  px-6 py-2 bg-brand hover:bg-brand/90 text-white text-sm font-medium rounded-2xl select-none capitalize"
            >
              Join Airdrop
              <IconLink
                stroke={2}
                size={20}
                className="group-hover:translate-x-1 duration-200 "
              />
            </Link>
          </div>
        </div>
      </div>

      <hr className="border-brand/40 border-dashed" />

      {/* details----- */}
      <div
        className=" text-[15px]"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>

      <hr className="border-brand/40 border-dashed" />

      {/* join btn -------- */}
      <div className="flex-center">
        <Link
          href={inviteURL ?? "/"}
          target="_blank"
          className="flex-center gap-1 group duration-200 min-w-48  px-6 py-2 bg-brand hover:bg-brand/90 text-white text-sm font-medium rounded-2xl select-none capitalize"
        >
          {buttonText ? buttonText : "Join Airdrop"}
          <IconLink
            stroke={2}
            size={20}
            className="group-hover:translate-x-1 duration-200 "
          />
        </Link>
      </div>
    </div>
  );
};

export default Details;
