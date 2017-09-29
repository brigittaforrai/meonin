<template>
  <div id="google-map">
    <div id="map"></div>
    <!-- <footer-comp></footer-comp> -->
  </div>
</template>
<script>
import styledMapType from './../map.js';
// import FooterComp from './footer.vue';
export default {
  name: 'GoogleMap',
  // components: {FooterComp},
  props: ['name'],
  data: function () {
    return {
      map: null,
      marker: null
    }
  },
  mounted: function () {
    var latlng = new google.maps.LatLng(47.509791, 19.064469);
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: latlng,
      zoom: 14,
      mapTypeControlOptions: {
        mapTypeIds: [ 'meonin-map']
      }
    });
    this.marker = new window.google.maps.Marker({
      position: {lat: 47.509791, lng: 19.064469},
      map: this.map,
      title: 'Meonin'
    });
    this.map.mapTypes.set('meonin-map', styledMapType);
    this.map.setMapTypeId('meonin-map');
  }
};
</script>
<style scoped>
#google-map {
  #map {
    position: block;
    width: 100%;
    height: 400px;
    background: white;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
