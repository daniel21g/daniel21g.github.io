<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">Interests</h2>
          <p v-for="(val,key) in intereses" :key="key" >{{intereses[key]}}  <br></p>
         <!-- <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p> -->
          
        </div>
      </section>
</template>
<script>
export default {
    name: 'interest',
    props:['intereses']
  
}
</script>
<style scoped>


</style>
