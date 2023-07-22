import React from 'react'

const Footer = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    return (
        <>
            <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="mx-auto text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <a href="https://flowbite.com/" class="hover:underline">Rahmat</a>. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer