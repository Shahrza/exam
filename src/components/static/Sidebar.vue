<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <div class="sidebar-header-container">
                <img class="sidebar-header-container-img" src="../../../static/images/pexels-pixabay-220453.jpeg" alt="">
                <div class="sidebar-header-container-box">
                    <h2 class="sidebar-header-container-box-name">Pasha Life</h2>
                    <p class="sidebar-header-container-box-email">pasha@email.com</p>
                </div>
            </div>

            <ul class="sidebar-list">
                <router-link
                    active-class="active"
                    tag="li"
                    :to="{path: menu.route}"
                    v-for="(menu,index) in menus"
                    :key="index"
                    class="sidebar-list-item">
                    <img class="sidebar-list-item-icon" :src="menu.icon">
                    {{menu.name}}
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    import menus from '../../router/menus'
    export default {
        name: "Sidebar",
        data() {
            return{
                menus: menus
            }
        }
    }
</script>

