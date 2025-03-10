import {
  IconBrandDatabricks,
  IconBrandDiscord,
  IconBrandTelegram,
  IconBrandX,
  IconLayoutBottombarInactive,
  IconLink,
  IconReceiptDollar,
} from "@tabler/icons-react";

/* eslint-disable @next/next/no-img-element */
const Details = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* primary  details ------ */}
      <div className="flex gap-5 ">
        <div>
          <img src="/assets/retro.png" alt="" className="size-44 rounded-2xl" />
          <div className="flex items-center gap-3 justify-center mt-4">
            <IconBrandTelegram className="hover:text-cyan-700 cursor-pointer duration-200" />
            <IconBrandDiscord className="hover:text-blue-700 cursor-pointer duration-200" />
            <IconBrandX className="hover:text-black cursor-pointer duration-200" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="">Retro Bridge</h2>
          {/* platform-------- */}
          <div className="flex items-center">
            <IconBrandDatabricks className="text-brand" size={20} />{" "}
            <div className="flex gap-2 items-center">
              <p> Platform :</p>
              <p>Solana</p>
            </div>
          </div>

          {/* status----------- */}
          <div className="flex items-center">
            <IconLayoutBottombarInactive className="text-brand" size={20} />{" "}
            <div className="flex gap-2 items-center">
              <p>Status :</p>
              <p className="flex gap-1 items-center">
                {/* Confirmed <IconChecks size={20} className="text-green-500" /> */}
                Unconfirmed
                <span className="font-semibold text-red-500 text-lg">X</span>
              </p>
            </div>
          </div>

          {/* funding --------- */}
          <div className="flex items-center">
            <IconReceiptDollar className="text-brand" size={20} />{" "}
            <div className="flex gap-2 items-center">
              <p>Funding :</p>
              <p className="font-semibold">
                <span className="text-lg">10</span> million
              </p>
            </div>
          </div>

          {/* join btn -------- */}
          <div>
            <button className="flex-center gap-1 group duration-200  px-6 py-2 bg-brand hover:bg-brand/90 text-white text-sm font-medium rounded-2xl select-none">
              Join Airdrop
              <IconLink
                stroke={2}
                size={20}
                className="group-hover:translate-x-1 duration-200 "
              />
            </button>
          </div>
        </div>
      </div>

      <hr className="border-brand/40 border-dashed" />

      {/* details----- */}
      <div className="space-y-5">
        <div className="flex-col flex gap-2">
          <p className="font-semibold text-xl text-black">
            Step-by-Step Guide:
          </p>
          <ul>
            <li className="flex">
              <span className="w-4">1.</span>
              <span>
                <span className="font-medium text-black">
                  Set up a compatible wallet
                </span>
                – Install MetaMask or another Ethereum-compatible wallet that
                supports Base network.
              </span>
            </li>
            <li className="flex">
              <span className="w-4">2.</span>
              <span>
                <span className="font-medium text-black">
                  Obtain ETH for gas fees
                </span>
                – Install MetaMask or another Ethereum-compatible wallet that
                supports Base network.
              </span>
            </li>
            <li className="flex">
              <span className="w-4">3.</span>
              <span>
                <span className="font-medium text-black">
                  Get USDC for trading
                </span>
                – Install MetaMask or another Ethereum-compatible wallet that
                supports Base network.
              </span>
            </li>
            <li className="flex">
              <span className="w-4">4.</span>
              <span>
                <span className="font-medium text-black">Trade regularly</span>–
                Install MetaMask or another Ethereum-compatible wallet that
                supports Base network.
              </span>
            </li>
            <li className="flex">
              <span className="w-4">5.</span>
              <span>
                <span className="font-medium text-black">
                  Set up a compatible wallet
                </span>
                – Install MetaMask or another Ethereum-compatible wallet that
                supports Base network.
              </span>
            </li>
            <li className="flex">
              <span className="w-4">6.</span>
              <span>
                <span className="font-medium text-black">
                  Obtain ETH for gas fees
                </span>
                – Install MetaMask or another Ethereum-compatible wallet that
                supports Base network.
              </span>
            </li>
            <li className="flex">
              <span className="w-4">7.</span>
              <span>
                <span className="font-medium text-black">
                  Get USDC for trading
                </span>
                – Install MetaMask or another Ethereum-compatible wallet that
                supports Base network.
              </span>
            </li>
            <li className="flex">
              <span className="w-4">8.</span>
              <span>
                <span className="font-medium text-black">Trade regularly</span>–
                Install MetaMask or another Ethereum-compatible wallet that
                supports Base network.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-semibold text-xl text-black">What is Perennial?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            laudantium nihil dolore iste laborum aliquid tenetur molestias ea
            eius et maiores architecto cum deleniti exercitationem odio, ipsa
            pariatur dignissimos nemo aperiam facere impedit dolorum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
            dolore neque delectus eius tempora incidunt reprehenderit alias
            natus quos possimus laudantium repellat quidem ipsam magnam modi
            laborum, doloribus quisquam iste.
          </p>
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-semibold text-xl text-black">
            Perennial Airdrop Details
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            laudantium nihil dolore iste laborum aliquid tenetur molestias ea
            eius et maiores architecto cum deleniti exercitationem odio, ipsa
            pariatur dignissimos nemo aperiam facere impedit dolorum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
            dolore neque delectus eius tempora incidunt reprehenderit alias
            natus quos possimus laudantium repellat quidem ipsam magnam modi
            laborum, doloribus quisquam iste.
          </p>
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-semibold text-xl text-black">Conclusion</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            laudantium nihil dolore iste laborum aliquid tenetur molestias ea
            eius et maiores architecto cum deleniti exercitationem odio, ipsa
            pariatur dignissimos nemo aperiam facere impedit dolorum.
          </p>
        </div>
      </div>

      <hr className="border-brand/40 border-dashed" />

      {/* join btn -------- */}
      <div className="flex-center">
        <button className="flex-center gap-1 group duration-200  px-6 py-2 bg-brand hover:bg-brand/90 text-white text-sm font-medium rounded-2xl select-none">
          Join Prerena: Trade To Earn
          <IconLink
            stroke={2}
            size={20}
            className="group-hover:translate-x-1 duration-200 "
          />
        </button>
      </div>
    </div>
  );
};

export default Details;
