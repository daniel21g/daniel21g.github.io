<template>
<section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
          <h2 class="mb-5">Education</h2>

           <eduaciones v-for="(item,index) in educaciones" :key="index" :educacion="item"></eduaciones>
        


        </div>
      </section>

  
</template>
<script>

import Educaciones from './subcomponents/Educaciones.vue'

export default {
    name: 'educacion',
    props: ['educaciones'],
    components:{
        'eduaciones': Educaciones
    }
  
}
</script>
<style scoped>

</style>
