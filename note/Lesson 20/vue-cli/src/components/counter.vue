<template>
  <div class="row">
    <div class="col">
      <h4>{{ $store.state.counts }}</h4>
      <button class="btn btn-primary mr-4" @click="addEvent">异步增加</button>
      <button class="btn btn-danger mr-4" @click="descEvent">减少</button>
    </div>
    <p>
      当前计数值为：{{ $store.state.counts }}，平方值为：{{
        $store.getters.powercounts
      }}
    </p>
  </div>
</template>

<script>
export default {
  name: "counter",
  methods: {
    async addEvent() {
      await this.$store.dispatch("syncaddEvent");
      console.log(`异步操作完成`)
    },
    descEvent() {
      this.$store.commit("descEvent");
    },
    mutifyEvent(num) {
      this.$store.commit({ type: "mutifyEvent", num });
    },
  },
};
</script>

<style scoped>
.row {
  margin-bottom: 30px;
}
</style>