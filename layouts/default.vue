<template>
    <div id="layout-default">
        <AppNavBar />
        <div class="mt-24 mb-12">
            <slot />
        </div>
        <AppFooter class="fixed bottom-0 left-0 right-0 z-10" />
    </div>
</template>
