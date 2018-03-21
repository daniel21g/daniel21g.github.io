<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Start Bootstrap</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./assets/img/profile.jpg" alt="">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">

      <about :about="misdatos"> </about>

      <experiences :experiences="experiences"></experiences>

     <education :educaciones="educaciones"></education>

      <skills :workflow="workflow"></skills>

      <interest :intereses="intereses"></interest>
      <awards :awards="awards"></awards>
    <!--  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div class="my-auto">
          <h2 class="mb-5">Awards &amp; Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              <span>1<sup>st</sup></span>
              Place<span> - </span>University of Colorado Boulder - Emerging Tech Competition 2009</li>
            
          </ul>
        </div>
      </section>
-->
    </div>
  </div>
</template>
<!-- Bootstrap core JavaScript -->
  <script src="./assets/vendor/jquery/jquery.min.js"></script>
  <script src="./assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Plugin JavaScript -->
  <script src="./assets/vendor/jquery-easing/jquery.easing.min.js"></script> 
<!-- Custom scripts for this template -->
  <script src="./assets/js/resume.min.js"></script>

<script>

import About from './components/About.vue'
import Experiences from './components/Experiences.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import axios from 'axios'
import Interest from './components/Interest.vue'
import Awards from './components/Awards.vue'

export default {
  name: "app",
  mounted(){
console.log('componente cargado')
this.prueba()
  },
  components: {
    'about': About,
    'experiences': Experiences,
    'education': Education,
    'skills': Skills,
    'interest': Interest,
    'awards': Awards,
  },
  data(){
    return{
      misdatos: {
        name: 'Daniel A.',
        lastname: 'González A.',
        address:'San Antonio de los altos, Edo. Miranda',
        phone:'+58 4242990292',
        email:'dnlgnz21g@gmail.com',
        description:'I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
        facebook: 'https://facebook.com/Daniel206',
        twitter: 'https://twitter.com/danyel206',
        linkedin: 'https://linkedin.com/in/luisjrodriguezo',
        github: 'https://github.com/daniel21g'
   },
   experiences: [
     {job:'SENIOR WEB DEVELOPER', company:'INTELITEC SOLUTIONS', description:'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.', date:'March 2013 - Present'},
    {job:'WEB DEVELOPER', company:'INTELITEC SOLUTIONS', description:'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.', date:'December 2011 - March 2013'},
    {job:'JUNIOR WEB DESIGNER', company:'SHOUT! MEDIA PRODUCTIONS', description:'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.', date:'July 2010 - December 2011'},
    {job:'WEB DESIGN INTERN', company:'SHOUT! MEDIA PRODUCTIONS', description:'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.', date:'September 2008 - June 2010'},
       
   ],
   educaciones: [
     {instituto:'Colegio Mater dei', titulo:'Bachiller en Ciencias', rama:'',gpa:'GPA: 3.23', fecha:'Sep 2001 - Sep 2006'},
      {instituto:'Universidad Central de Venezuela', titulo:'Licenciado en Computación', rama:'Sistemas de Información',gpa:'GPA: 3.23', fecha:'Oct 2006 - Jul 2012'},
       {instituto:'Universidad Central de Venezuela', titulo:'Diplomacdo en Inteligencia de Negocios', rama:'',gpa:'GPA: 3.23', fecha:'Mar 2013 - Jul 2013'},
   ],
   workflow:[
     'Mobile-First, Responsive Design','Cross Browser Testing & Debugging','Cross Functional Teams','Agile Development & Scrum',
   ],
   intereses: [
     'Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking. ',
     'When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.'
   ],
   awards: [
     { text:'Google Analytics Certified Developer'},
     { text:'Mobile Web Specialist - Google Certification'},
    {pos:{num:'1', suf:'st',suf2:'Place - '} , text:'University of Colorado Boulder - Emerging Tech Competition 2009'},
    {pos:{num:'1', suf:'st',suf2:'Place - '} , text:'University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)'},
    {pos:{num:'2', suf:'nd',suf2:'Place - '} , text:'University of Colorado Boulder - Emerging Tech Competition 2008'},
    {pos:{num:'1', suf:'st',suf2:'Place - '} , text:'James Buchanan High School - Hackathon 2006'},
    {pos:{num:'3', suf:'rd',suf2:'Place - '} , text:'James Buchanan High School - Hackathon 2005'},
   ]

    }
 },
 methods:{
   prueba(){
     // axios.get().then().catch();
     axios.get('https://swapi.co/api/people').then(response => {
      console.log(response.data)
     }).catch(error =>{
      console.log(error)
     });
   }
 }
};
</script>

<style>

</style>
