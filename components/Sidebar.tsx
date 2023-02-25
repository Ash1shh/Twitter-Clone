import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    ListBulletIcon,
    EllipsisHorizontalIcon,
    EnvelopeIcon,
    UserIcon,
    HomeIcon,
} from "@heroicons/react/24/outline";
import SidebarRow from './SidebarRow';
import { signIn, signOut, useSession } from 'next-auth/react'

function Sidebar() {

    const { data: session } = useSession()

    return (
        <div className="col-span-2 flex flex-col item-center px-4 md:items-start">
            <img
                className="m-3 h-10 w-10"
                src="https://i0.wp.com/edinburghuniform.org/wp-content/uploads/2019/11/twitter-logo-png-twitter-logo-vector-png-clipart-library-518.png?fit=518%2C518&ssl=1"
                alt=""
            />

            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={HashtagIcon} title="Explore" />
            <SidebarRow Icon={BellIcon} title="Notifications" />
            <SidebarRow Icon={EnvelopeIcon} title="Messages" />
            <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
            <SidebarRow Icon={ListBulletIcon} title="Lists" />
            <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session ? 'Sign Out' : 'Sign In'} />
            <SidebarRow Icon={EllipsisHorizontalIcon} title="More" />
        </div>

    )
}

export default Sidebar