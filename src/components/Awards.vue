<template>
   <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div class="my-auto">
          <h2 class="mb-5">Awards &amp; Certifications</h2>
          <ul class="fa-ul mb-0">
                 
            <li v-for="(val,key) in awards" :key="key">
              <i class="fa-li fa fa-trophy text-warning"></i>
            <span v-if="val.pos">{{val.pos.num}}<sup>{{val.pos.suf}}</sup>
             {{val.pos.suf2}}</span>{{val.text}}</li>
           
          </ul>
        </div>
      </section>

</template>
<script>
export default {
    name: 'awards',
    props: ['awards']
  
}
</script>
<style scoped>

</style>
