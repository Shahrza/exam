<template>
    <div class="main-content">
        <div class="search">
            <h2 class="search-header">Axtarış</h2>
            <div class="search-container">
                <div>
                    <input class="main-input" placeholder="Ad, Soyad" type="text">
                    <input class="main-input" placeholder="Struktur" type="text">
                    <input class="main-input" placeholder="Vəzifə" type="text">
                </div>

                <button class="main-btn">Axtar</button>
            </div>
        </div>

        <div class="tree">
            <div class="structure">
                <h2 class="structure-header">Struktur</h2>
                <div class="accordion" id="accordionStructure" v-for="(item, index) in 11">
                    <div class="card">
                        <div class="card-header" :id="'heading' + index" data-toggle="collapse"
                             :data-target="'#collapse' + index"
                             aria-expanded="true" :aria-controls="'collapse' + index">
                            <h2 class="card-header-text">Struktur {{2 + index}}</h2>
                            <div class="card-header-badge">
                                <span class="badger badger-purple">2222</span>
                                <span class="badger badger-primary">2222</span>
                                <span class="badger badger-success">2222</span>
                                <span class="badger badger-warning">2222</span>
                            </div>
                            <i class="icon-chevron-down"></i>
                        </div>

                        <div :id="'collapse' + index" class="collapse" :aria-labelledby="'heading' +index"
                             data-parent="#accordionStructure">
                            <div class="card-body">
                                <ul>
                                    <sl-vue-tree v-model="nodes"/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tree-chart">
                <vue-tree-chart
                    style="width: 55vw; height: 100vh;"
                    :linkStyle="'straight'"
                    :dataset="richMediaData"
                    :config="treeConfig"
                >
                    <template v-slot:node="{ node}">
                        <div class="tree-chart-box">
                            <div class="tree-chart-box-container">
                                <div class="badger-lt">3A</div>
                                <img class="tree-chart-box-container-img"
                                     :src="node.img"
                                     alt="">
                                <div class="tree-chart-box-container-header">
                                    <h2 class="tree-chart-box-container-header-name">{{node.name}}</h2>
                                    <p class="tree-chart-box-container-header-email">{{node.email}}</p>
                                    <div class="tree-chart-box-container-header-badge">
                                        <span class="badger badger-purple">2222</span>
                                        <span class="badger badger-primary">2222</span>
                                        <span class="badger badger-success">2222</span>
                                        <span class="badger badger-warning">2222</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tree-chart-box-job">
                                <div class="tree-chart-box-job-item">
                                    <h2 class="tree-chart-box-job-item-head">Struktur</h2>
                                    <p class="tree-chart-box-job-item-lead">Marketinq</p>
                                </div>
                                <div class="tree-chart-box-job-item">
                                    <h2 class="tree-chart-box-job-item-head">Vəzifə</h2>
                                    <p class="tree-chart-box-job-item-lead">Direktor</p>
                                </div>
                            </div>

                            <div class="tree-chart-box-btn">
                                <button @click="goInfo(node)" class="chart-btn"><img
                                    src="../../static/icons/document.svg">Bax
                                </button>
                                <button class="chart-btn chart-btn-light"><img src="../../static/icons/mail.svg">Mail at
                                </button>
                            </div>
                        </div>
                    </template>
                </vue-tree-chart>
            </div>
        </div>
    </div>
</template>

<script>

    // Plugins
    import VueTreeChart from '@ssthouse/vue-tree-chart'
    import SlVueTree from 'sl-vue-tree'

    export default {
        components: {VueTreeChart, SlVueTree},
        data() {
            return {
                nodes: [
                    {
                        "title": "Hüquq",
                        "isExpanded": false,
                        "children": [
                            {
                                "title": " - Strateji",
                                "isLeaf": true
                            },
                            {
                                "title": " - Strateji",
                                "isLeaf": true
                            },
                            {
                                "title": " - Strateji",
                                "isLeaf": true
                            }
                        ]
                    },
                    {
                        "title": "Marketinq",
                        "isExpanded": false,
                        "children": [
                            {
                                "title": " - Strateji",
                                "isLeaf": true
                            },
                            {
                                "title": " - Strateji",
                                "isLeaf": true
                            },
                            {
                                "title": " - Strateji",
                                "isLeaf": true
                            }
                        ]
                    },
                    {
                        "title": "İnvestisiya",
                        "isExpanded": false,
                        "children": [
                            {
                                "title": " - Strateji",
                                "isLeaf": true
                            },
                            {
                                "title": " - Strateji",
                                "isLeaf": true
                            },
                            {
                                "title": " - Strateji",
                                "isLeaf": true
                            }
                        ]
                    },
                ],
                richMediaData: {
                    name: 'James',
                    email: 'james@email.com',
                    img: '../../static/images/pexels-pixabay-220453.jpeg',
                    children: [
                        {
                            name: 'Bob',
                            email: 'bob@email.com',
                            img: '../../static/images/pexels-daniel-edeke-1370750.jpeg',
                            children: [
                                {
                                    name: 'Jane',
                                    email: 'jane@email.com',
                                    img: '../../static/images/pexels-juan-n-gomez-2589653.jpeg',
                                },
                                {
                                    name: 'Matt',
                                    email: 'matt@email.com',
                                    img: '../../static/images/pexels-kelvin-valerio-810775.jpeg',
                                },
                            ]
                        },
                        {
                            name: 'Smith',
                            email: 'smith@email.com',
                            img: '../../static/images/pexels-masha-raymers-2726111.jpeg',
                            children: [
                                {
                                    name: 'Natalie',
                                    email: 'natalie@email.com',
                                    img: '../../static/images/lights-5580916_1920.jpeg',
                                }
                            ]
                        },
                        {
                            name: 'Jackson',
                            email: 'jackson@email.com',
                            img: '../../static/images/pexels-pixabay-415829.jpeg',
                        }
                    ]
                },
                treeConfig: {nodeWidth: 250, nodeHeight: 214, levelHeight: 300}
            }
        },
        methods: {
            goInfo(node){
                this.$router.replace({name: 'info', params: {data: node}})
            }
        }
    }
</script>

