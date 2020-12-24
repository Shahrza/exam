<template>
    <div class="main-content">
        <div @click="back" class="back pointer"><span class="back-icon icon-chevron-left"></span>Geri qayıt</div>
        <div class="d-flex">
            <div class="tree-chart-box">
                <div class="tree-chart-box-container">
                    <div class="badger-lt">3A</div>
                    <img class="tree-chart-box-container-img" :src="form.img" alt="">
                    <div class="tree-chart-box-container-header">
                        <h2 class="tree-chart-box-container-header-name">{{form.name}}</h2>
                        <p class="tree-chart-box-container-header-email">{{form.email}}</p>
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
                    <button class="chart-btn chart-btn-light"><img src="../../static/icons/mail.svg">Mail at</button>
                </div>
            </div>

            <div class="info">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="pill" href="#profile" role="tab"
                           aria-controls="pills-profile" aria-selected="true">Şəxsi İnformasiya</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="pill" href="#structure" role="tab"
                           aria-controls="pills-structure" aria-selected="false">Struktur Əsasnaməsi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="pill" href="#job" role="tab" aria-controls="pills-job"
                           aria-selected="false">Vəzifə Təlimatı</a>
                    </li>
                </ul>
                <span @click="back" class="close-tab pointer">
                    <img src="../../static/icons/close.svg" alt="">
                </span>
                <div class="tab-content mt-3">
                    <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <h2 class="tab-pane-head">Şəxsi İnformasiya</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolores ducimus eum
                        labore, numquam perspiciatis quaerat quis quisquam sapiente temporibus ut vero voluptate! A
                        culpa debitis distinctio dolor dolore enim facere, fugiat illo in ipsum iste, minima nemo odit
                        officia pariatur praesentium, quasi quibusdam quidem recusandae repellendus sit veniam!
                    </div>
                    <div class="tab-pane fade" id="structure" role="tabpanel" aria-labelledby="profile-tab">
                        <h2 class="tab-pane-head">Struktur Əsasnaməsi</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ea pariatur qui. Accusamus aut,
                        deleniti earum eveniet hic labore laboriosam nihil, nostrum pariatur perferendis, quae quia quis
                        quos repellendus repudiandae similique soluta ullam. Aut, commodi consequuntur, dolorem dolorum
                        error est itaque iusto minima modi nobis placeat quia sunt veritatis? Placeat?
                    </div>
                    <div class="tab-pane fade" id="job" role="tabpanel" aria-labelledby="job-tab">
                        <h2 class="tab-pane-head">Vəzifə Təlimatı</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi consequuntur
                        dignissimos dolor dolores eius excepturi, in nobis omnis quas quis sint, ullam ut vitae? Ad
                        adipisci atque commodi distinctio enim ex, nam neque officia officiis perspiciatis quas sequi
                        sunt voluptatibus. Assumenda atque eum, facere fugit rem sint veniam!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "info",
        data() {
            return {
                form: {}
            }
        },
        methods: {
            back() {
                this.$router.replace({name: 'dashboard'})
            }
        },
        mounted() {
            this.form = this.$route.params.data
        }
    }
</script>

