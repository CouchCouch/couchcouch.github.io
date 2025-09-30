<template>
    <div class="flex">
        <h1 class="mr-0 my-[2%] border-r-4 text-[6vw] font-bold text-orange-500 font-mono border-orange-500 animate-blink-caret">
            >&nbsp;{{typeValue}}
        </h1>
    </div>
    <div>
        <h3>Hello, my name is Ryan Couchman</h3>
        <p>Welcome to my personal site. I will use this as a place to feature my projects and share what I am working on with the world</p>
        <p>I am currently a 3<sup>rd</sup> year software engineering major at RIT seeking internships for spring and summer of 2026</p>
        <div class="mt-4">
            <h3>Current Projects:</h3>
            <h4>School</h4>
            <p>Currently enrolled in Software System Requirements and Architecture (SWEN-440), Engineering Secure Software (SWEN-331), Aalysis of Algoritms (CSCI-261), Intro to Bioinformatics (BIOL-130), Maps, Mapping and Geospatial Technology (IGME-382), Introduction to Geographic Information Systems (IGME-384)</p>
            <h4>Inventory Management System</h4>
            <p>Creating a basic inventory management system that will handle basic CRUD operations and a checkout system for items using PostgreSQL, Go, React with Vite and Tailwind CSS</p>
            <p>Work in Progress</p>
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
