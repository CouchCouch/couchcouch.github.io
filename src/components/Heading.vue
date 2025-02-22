<template>
    <header class="flex">
        <RouterLink to="/">
            <h3 class="text-3xl p-0 m-0 font-bold">Ryan Couchman</h3>
        </RouterLink>
        <div class="ml-auto mr-0">
            <div class="inline-flex dark:hidden">
                <RouterLink to="/resume">
                    <img
                        class="h-8"
                        src="../assets/resume_icon.svg"
                        alt="Résumé"
                    >
                </RouterLink>
                <a href="https://www.linkedin.com/in/ryan-couchman">
                    <img
                        class="h-8"
                        src="../assets/linkedin-logo.png"
                        alt="LinkedIn"
                    >
                </a>
                <a href="https://github.com/CouchCouch">
                    <img
                        class="h-8"
                        src="../assets/github-mark.svg"
                        alt="GitHub"
                    >
                </a>
                <!--button
                    onclick="toggleDarkMode()"
                    class="mode-toggle"
                >
                    <img
                        class="h-8"
                        src="../assets/dark_mode.svg"
                    >
                </button-->
            </div>

            <div class="hidden dark:inline-flex">
                <RouterLink to="/resume">
                    <img
                        class="h-8"
                        src="../assets/resume_icon_light.svg"
                        alt="Résumé"
                    >
                </RouterLink>
                <a href="https://www.linkedin.com/in/ryan-couchman">
                    <img
                        class="h-8"
                        src="../assets/linkedin-logo-white.png"
                        alt="LinkedIn"
                    >
                </a>
                <a href="https://github.com/CouchCouch">
                    <img
                        class="h-8"
                        src="../assets/github-mark-white.svg"
                        alt="GitHub"
                    >
                </a>
                <!--button
                    onclick="toggleDarkMode()"
                    class="mode-toggle"
                >
                    <img
                        class="h-8"
                        src="../assets/light_mode.svg"
                    >
                </button-->
            </div>
        </div>
    </header>
</template>
