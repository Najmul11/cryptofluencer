import Link from 'next/link';
import React from 'react';

const Section1 = () => {
    return (
        <div className=''>

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold px-8 xl:px-0 flex items-center gap-3"> ---- Section-1 ---- </h1>

             {/* links of joinUs  */}

            <div className="grid grid-cols-3 gap-5 mt-8">
          <Link
            href={"/"}
            className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
          >
            <img src="/assets/binance.png" alt="" className="w-6 rounded" />
            Binance
          </Link>
          <Link
            href={"/"}
            className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
          >
            <img src="/assets/okx.jpg" alt="" className="w-6 rounded" />
            OKX
          </Link>
          <Link
            href={"/"}
            className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
          >
            <img src="/assets/bitget.png" alt="" className="w-6 rounded" />
            Bitget
          </Link>
          <Link
            href={"/airdrops/all"}
            className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
          >
            <img src="/assets/bybit.png" alt="" className="w-6 rounded" />
            ByBit
          </Link>
          <Link
            href={"/airdrops/all"}
            className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
          >
            <img src="/assets/binance.png" alt="" className="w-6 rounded" />
            Binance
          </Link>
          <Link
            href={"/airdrops/all"}
            className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
          >
            <img src="/assets/okx.jpg" alt="" className="w-6 rounded" />
            OKX
          </Link>
          <Link
            href={"/airdrops/all"}
            className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
          >
            <img src="/assets/bitget.png" alt="" className="w-6 rounded" />
            Bitget
          </Link>
          <Link
            href={"/airdrops/all"}
            className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
          >
            <img src="/assets/bybit.png" alt="" className="w-6 rounded" />
            ByBit
          </Link>
          <Link
            href={"/airdrops/all"}
            className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
          >
            <img src="/assets/binance.png" alt="" className="w-6 rounded" />
            Binance
          </Link>
          <Link
            href={"/airdrops/all"}
            className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
          >
            <img src="/assets/okx.jpg" alt="" className="w-6 rounded" />
            OKX
          </Link>
          <Link
            href={"/airdrops/all"}
            className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
          >
            <img src="/assets/bitget.png" alt="" className="w-6 rounded" />
            Bitget
          </Link>
          <Link
            href={"/airdrops/all"}
            className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
          >
            <img src="/assets/bybit.png" alt="" className="w-6 rounded" />
            ByBit
          </Link>
        </div>

            
        </div>
    );
};

export default Section1;