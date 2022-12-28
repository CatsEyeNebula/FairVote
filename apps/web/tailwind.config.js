/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-28 09:36:45
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-12-28 14:50:13
 * @FilePath: /FairVote-Fullstack/apps/web/tailwind.config.js
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
    content: [
        "./node_modules/flowbite/**/*.js",
        "./node_modules/flowbite-react/**/*.js",
        "../../node_modules/flowbite/**/*.js",
        "../../node_modules/flowbite-react/**/*.js",
        "./public/**/*.html",
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./context/**/*.{ts,tsx}",
        "./styles/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./utils/**/*.{ts,tsx}"
    ],
    plugins: [require("flowbite/plugin")],
    theme: {}
}
