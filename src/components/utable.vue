<template>
  <div style="display: flex;">
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search controller.."/>
    </div>
    <div class="search-filter">
      <label>Sort by (Descending): </label>
      <select v-model="sfilter" class="form-control" @change="changeFilterTitle($event)">
        <option value="" selected disabled>Choose</option>
        <option v-for="(header, index) in jHead" :value="index" :key="index">{{ header.val }}</option>
      </select>
    </div>
  </div>
  <br/>
  <div>
    <table id="uctrl">
      <tr>
        <th v-for="(j, index) in jHead" :key="index" >{{ j.val }}</th>
      </tr>
      <tr v-for="(entry,index) in filteredList" :key="index">
        <td class="item-entry">
          <div id="itext">
            <div style="float: left; position: relative" v-if="entry.img !== ''">
              <img :src="getPath(entry.img)" alt=""/>
            </div>
            <div  id="ititle">
              <h4>{{ entry.uctrl }}</h4>
              <span>{{ entry.chip }}</span>
              <br/>
              <span>[{{ entry.type }} Bit]</span>
            </div>
          </div>
        </td>
        <td>{{ entry.clk }}</td>
        <td>{{ entry.io }}</td>
        <td>{{ entry.pwm }}</td>
        <td>{{ entry.ain }}</td>
        <td>{{ entry.flsh }} [{{ entry.bootl }}]</td>
        <td>{{ entry.sram }}</td>
        <td>{{ entry.eeprom }}</td>
        <td>{{ entry.volt }}</td>
        <td>{{ entry.biled }}</td>
        <td>{{ entry.usb }}</td>
      </tr>
    </table>
  </div>
  <br/>
</template>

<script>
import jsonData from "../data/data.json"
import jsonHeader from "../data/header.json"

export default {
  components: {
  },
  data() {
    return {
      search: '',
      jDat: jsonData,
      jHead: jsonHeader,
      selectedFilter: null,
      sfilter: 0,
      selectedFilterIndex: 1
    }
  },
  methods:{
    getPath(image) {
      return require('@/assets/' + image );
    },
    changeFilterTitle (event) {
      this.selectedFilter = event.target.options[event.target.options.selectedIndex].text;
      this.selectedFilterIndex = event.target.options.selectedIndex;
    }
  },
  computed: {
    filteredList() {
      var qq = this.jDat.filter(post => {
        return post.uctrl.toLowerCase().includes(this.search.toLowerCase())
      });
      qq = qq.sort((a,b) => {
        switch (this.selectedFilterIndex) {
          case 2:
          return b.clk - a.clk
          case 3:
          return b.io - a.io
          case 4:
          return b.pwm - a.pwm
          case 5:
          return b.ain - a.ain
          case 6:
          return b.flsh - a.flsh
          case 7:
          var a7 = a.sram, b7 = b.sram;
          if(typeof a7 === "string"){
            a7=0;
          }
          if(typeof b7 === "string"){
            b7=0;
          }
          return b7 - a7
          case 8:
          var a8 = a.eeprom, b8 = b.eeprom;
          if(typeof a8 === "string"){
            a8=0;
          }
          if(typeof b8 === "string"){
            b8=0;
          }
          return b8-a8
          case 9:
          var a9 = a.volt, b9 = b.volt;
          if(typeof a9 === "string"){
            a9=0;
          }
          if(typeof b9 === "string"){
            b9=0;
          }
          return b9-a9
          case 10:
          var a10 = a.biled.toLowerCase(), b10 = b.biled.toLowerCase();
          if (b10 > a10) {
            return -1
          }
          else {
            return 1
          }
          case 11:
          var a11 = a.usb.toLowerCase(), b11 = b.usb.toLowerCase();
          if (b11 < a11) {
            return -1
          }
          else {
            return 1
          }
          default:
          return b.uctrl - a.uctrl
        }
      });
      return qq;
    }
  }
}
</script>
