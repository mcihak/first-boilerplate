<template>

    <table>
      <caption>Sample data</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coin in coins" :key="coin.id">
          <td>{{ coin.id }}</td>
          <td>{{ coin.name }}</td>
          <td>{{ coin.price }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DataTable',
  mounted () {
    // TODO: Do we need this? (we already do this in asyncData in `src/views/Home.vue`)
    this.$store.dispatch('loadCoins')
  },
  computed: mapState([
    'coins'
  ])
}
</script>

<style lang="stylus">
table
  border: 1px solid #ccc
  border-collapse: collapse
  margin: 0
  padding: 0
  width: 100%
  table-layout: fixed

  caption
    font-size: 1.5em
    margin: .5em 0 .75em

  tr
    background-color: #f8f8f8
    border: 1px solid #ddd
    padding: .35em

  th, td
    padding: .625em
    text-align: center

  th
    letter-spacing: .1em
    text-transform: uppercase

  tbody 
    tr:nth-child(odd)
      background-color: #eee  

@media (max-width 600px)
  table
    border: 0
    
    thead
      border: none
      clip: rect(0 0 0 0)
      height: 1px
      margin: -1px
      overflow: hidden
      padding: 0
      position: absolute
      width: 100%
  
    tr 
      border-bottom: 2px solid #ddd
      display: block
      margin-bottom: .625em
  
    td
      border-bottom: 1px solid #ddd
      display: block
      text-align: right

    td::before
      content: attr(data-label)
      float: left
      font-weight: bold
      text-transform: uppercase
  
    td:last-child
      border-bottom: 0
</style>
