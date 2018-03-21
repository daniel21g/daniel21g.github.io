<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>
         <experience v-for="(exp, index) in experiences" :experience="exp" :key="index"></experience>
        

        </div>

      </section>
</template>
<script>
import Experience from './subcomponents/Experience.vue'
export default {
  name: "experiences",
  props:['experiences'],
  components: {
      'experience': Experience
  }
}
</script>
<style scoped>

</style>

