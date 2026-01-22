<script setup>
import { Link } from "lucide-vue-next";
</script>
<template>
    <div class="flex">
        <h1 class="mr-0 my-[2%] border-r-4 text-[10vw] md:text-[6vw] font-bold text-orange-500 font-mono border-orange-500 animate-blink-caret">
            >&nbsp;{{typeValue}}
        </h1>
    </div>
    <div>
        <h3>Hello, my name is Ryan Couchman</h3>
        <p>Welcome to my personal site. I will use this as a place to feature my projects and share what I am working on with the world</p>
        <p>I am currently a 3<sup>rd</sup> year software engineering major at RIT seeking internships for the summer of 2026</p>
        <div class="mt-4">
            <h3>Current Projects:</h3>
            <div class="ms-2">
                <h4><a href="https://github.com/CouchCouch/InventoryManagement">Inventory Management System<Link class="inline mx-1 size-4" /></a></h4>
                <p>Creating a basic inventory management system that will handle basic CRUD operations and a checkout system for items using PostgreSQL, Go, React with Vite and Tailwind CSS</p>
                <p>Work in Progress (Dec 2024-Present)</p>
            </div>
        </div>
        <div class="mt-4">
            <h3>Currently Reading:</h3>
            <div class="ms-2">
                <h4>The Hidden Life of Trees <p class="inline">Peter Wohlleben</p></h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "typewriter",
    data: () => {
        return {
            typeValue: "",
            typeStatus: false,
            displayTextArray: ["hello, World!"],
            typingSpeed: 100,
            erasingSpeed: 100,
            newTextDelay: 2000,
            displayTextArrayIndex: 0,
            charIndex: 0,
        };
    },
    props: {},
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    },
    methods: {
        typeText() {
            if(this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
                if(!this.typeStatus) this. typeStatus = true;
                this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
                    this.charIndex
                );
                this.charIndex += 1;
                setTimeout(this.typeText, this.typingSpeed);
            } else {
                this.typeStatus = false;
                //setTimeout(this.eraseText, this.newTextDelay);
            }
        },
        eraseText() {
            if(this.charIndex > 0) {
                if(!this.typeStatus) this.typeStatus = true;
                this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
                    0,
                    this.charIndex - 1
                );
                this.charIndex -= 1;
                setTimeout(this.eraseText, this.erasingSpeed);
            } else {
                this.typeStatus = false;
                this.displayTextArrayIndex += 1;
                if(this.displayTextArrayIndex >= this.displayTextArray.length)
                    this.displayTextArrayIndex = 0;
                //setTimeout(this.typeText, this.typingSpeed + 1000);
            }
        },
    },
};
</script>
