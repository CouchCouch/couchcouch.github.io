<script setup>
import  { Github, Linkedin, FileUser, GitMerge } from "lucide-vue-next"
</script>
<template>
    <header class="flex my-2">
        <RouterLink to="/">
            <h3 class="text-2xl md:text-3xl p-0 m-0 font-bold">Ryan Couchman</h3>
        </RouterLink>
        <div class="ml-auto mr-0">
            <div class="inline-flex">
                <RouterLink to="/resume">
                    <FileUser class="header-icon" />
                </RouterLink>
                <a href="https://www.linkedin.com/in/ryan-couchman">
                    <Linkedin class="header-icon" />
                </a>
                <a href="https://github.com/CouchCouch">
                    <Github class="header-icon" />
                </a>
                <a href="https://gitea.ryancouchman.me/couch">
                    <GitMerge class="header-icon" />
                </a>
            </div>
        </div>
    </header>
</template>
