<template>
    <div id="app">
        <Sidebar/>
        <div class="main">
            <AppHeader/>
            <router-view/>
        </div>
    </div>
</template>

<script>
    // Components
    import Sidebar from "./components/static/Sidebar";
    import AppHeader from "./components/static/AppHeader";

    export default {
        name: 'App',
        components: {AppHeader, Sidebar}
    }
</script>

<style>
  @import "./assets/app.css";
</style>
