<template>
  <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{educacion.instituto}}</h3>
              <div class="subheading mb-3">{{educacion.titulo}}</div>
              <div v-if="educacion.rama !=''">{{educacion.rama}}</div>
              <p>{{educacion.gpa}}</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{educacion.fecha}}</span>
            </div>
          </div> 
        
  </template>
<script>
export default {
    name: 'educaciones',
    props:['educacion']
  
}
</script>
<style scoped>

</style>
