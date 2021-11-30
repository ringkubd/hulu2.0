import Image from 'next/image'
import HeaderItem from "./HeaderItem";
import HomeIcon from "@heroicons/react/outline/HomeIcon";
import LightningBoltIcon from "@heroicons/react/outline/LightningBoltIcon";
import {BadgeCheckIcon, CollectionIcon, SearchIcon, UserIcon} from "@heroicons/react/outline/index";

export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
           <div className="flex flex-grow justify-evenly max-w-2xl h-auto">
                <HeaderItem  title="Home" Icon={HomeIcon} />
                <HeaderItem  title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem  title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem  title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem  title="SEARCH" Icon={SearchIcon} />
                <HeaderItem  title="ACCOUNT" Icon={UserIcon} />
           </div>

            <Image
                className="object-contain"
                src="/hulu-logo.png"
                width={200}
                height={50}
            />
        </header>
    )
}
