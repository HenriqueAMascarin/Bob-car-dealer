'use client';
import { redirect } from "next/navigation";
import { JSX } from "react";

type ButtonType = JSX.IntrinsicElements['button'] & { label?: string, url?: string };

export default function Button(buttonProperties: ButtonType) {

    function redirectPage(url: ButtonType['url']) {
        if (url) {
            redirect(url);
        }
    }

    return (
        <button onClick={() => redirectPage(buttonProperties.url)} {...buttonProperties} className={`tw-bg-customBlue tw-w-full tw-text-white tw-rounded-[10px] tw-font-bold tw-text-[18px] disabled:tw-cursor-not-allowed ${buttonProperties.className}`} >{buttonProperties.label}</button>
    );
}
