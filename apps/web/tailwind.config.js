/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-12-28 09:36:45
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2023-01-01 10:16:27
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
        './node_modules/flowbite/**/*.js',
        './node_modules/flowbite-react/**/*.js',
        '../../node_modules/flowbite/**/*.js',
        '../../node_modules/flowbite-react/**/*.js',
        './public/**/*.html',
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './context/**/*.{ts,tsx}',
        './styles/**/*.{ts,tsx}',
        './pages/**/*.{ts,tsx}',
        './utils/**/*.{ts,tsx}',
    ],
    plugins: [require('flowbite/plugin')],
    theme: {
        fontFamily: {
            sans: [{ fontFeatureSettings: '"Noto Sans"' }, 'sans-serif'],
        },
        colors: {
            function: {
                purple: '#FE207E',
                lightpurple: '#FFE8EE',
                link: '#306FE9',
                success: '#00B42A',
                warning: '#FF7D00',
                lighterror: '#F53F3F',
                error: '#F53F3F',
            },
            fill: {
                stress: '#4E5969',
                substress: '#C9CDD4',
                divider: '#E5E6EB',
                board: '#F7F8FA',
                normal: '#F2F3F5',
                disable: '#F7F8FA',
            },
            text: {
                bluetitle: '#1D2129',
                blacktaile: '#1D2129',
                subtaile: '#4E5969',
                subinfo: '#86909C',
                placeholder: '#C9CDD4',
                white: '#FFFFFF',
            },
            linear: {
                start: '#2A65D9',
                end: '#58C3E8',
            },
        },
        extends: {},
    },
};
