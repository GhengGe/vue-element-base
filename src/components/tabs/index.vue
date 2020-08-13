<template>
  <div class="index">
    <h2>Index </h2>
    <table  cellspacing="0" cellpadding="10" class="tab">
      <tr>
        <td>CPU</td>
        <td>AMD</td>
      </tr>
      <tr>
        <td>主板</td>
        <td>
          <p>AMD A10-5800K</p>
        </td>
      </tr>
      <tr>
        <td>内存</td>
        <td>金士顿duDDR3 1600 4G</td>
      </tr>
      <tr>
        <td>机械硬盘</td>
        <td>希捷Barracuda 1TB 64M SATA3单碟 </td>
      </tr>
      <tr>
        <td>显卡</td>
        <td>精影HD6870 2GB至尊版zhi</td>
      </tr>
      <tr>
        <td>机箱</td>
        <td>先马刺客</td>
      </tr>
      <tr>
        <td>电源dao</td>
        <td>骨伽白牌RS450W</td>
      </tr>
      <tr>
        <td>显示器</td>
        <td>TCL E225W</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      tabledata: []
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
@import url('../../assets/css/tabs.scss');
.index {
  max-width: 1000px;
  margin: 0 auto;
  table {
    tr td:nth-child(1) {
      width: 120px;
    }
  }
}
</style>
