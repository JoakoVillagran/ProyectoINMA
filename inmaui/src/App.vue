<template>
  <router-view></router-view>
</template>

<script>
import axios from 'axios';
export default {
  created() {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  },
}

</script>

<style></style>
