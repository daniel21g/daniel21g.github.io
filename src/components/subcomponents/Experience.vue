<template>
    <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{experience.job}}</h3>
              <div class="subheading mb-3">{{experience.company}}</div>
              <p>{{experience.description}}</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{experience.date}}</span>
            </div>
          </div>
</template>
<script>
export default {
  name:'experience',
  props:['experience']
}
</script>
