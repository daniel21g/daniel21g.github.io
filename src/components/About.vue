<template>
 <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
   <div class="my-auto">
          <h1 class="mb-0">{{about.name}}
            <span class="text-primary">{{about.lastname}}</span>
          </h1>
          <div class="subheading mb-5">{{about.address}}
            <a :href="about.email"> {{about.email}}</a>
          </div>
          <p class="mb-5"> {{about.description}}</p>
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item"  v-if="about.facebook != ''">
              <a :href="about.facebook" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item"  v-if="about.twitter != ''">
              <a :href="about.twitter" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item" v-if="about.linkedin != ''">
              <a :href="about.linkedin" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item" v-if="about.github != ''">
              <a :href="about.github" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
 </section>
</template>
<script>
    export default{
        name: 'about',
        props: ['about']
    }
</script>



