<template>
    <footer class="fixed left-0 bottom-0 w-full text-center">
        <p id="signature">Ryan Couchman {{lastModified}}</p>
    </footer>
</template>

<script type="module">
export default {
    data() {
        return {
            lastModified: new Date(document.lastModified).toLocaleString("en-US", {year: 'numeric', month: 'long'}),
        };
    },
}
</script>
