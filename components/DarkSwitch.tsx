import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

type DarkSwitchProps = {};

const DarkSwitch: React.FC<DarkSwitchProps> = () => {
    const { setTheme, resolvedTheme, theme } = useTheme();

    return (
        <div
            className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:dark:bg-[#202326] dark:bg-[#202326] bg-gray-50"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
            {resolvedTheme === "dark" ? (
                <SunIcon className="h-6 w-6" />
            ) : (
                <MoonIcon className="h-6 w-6" />
            )}

            <p className="hidden text-base font-light md:inline-flex 
            lg:text-xl group-hover:text-twitter">
                {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
            </p>
        </div>
    );
};
export default DarkSwitch;