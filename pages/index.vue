<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <h1 class="title is-1">
          Jeff DeWitt
        </h1>
        <h2 class="subtitle is-4">
          Software engineer and consultant.
        </h2>

      </div>
    </section>
    <section class="section">
      <article>
        <header>
          <h1 class="title is-3">
            I design and build..
          </h1>
        </header>
        <div class="content is-medium">
          <ul class="no-style">
            <li>
              Landing Pages
            </li>
            <li>
              Single Page Apps
            </li>
            <li>
              Dashboards
            </li>
            <li>
              Progressive Web Apps
            </li>
            <li>
              APIs
            </li>
          </ul>
          <p>
            Need something not on this list? Let's have a conversation about it!
          </p>
        </div>
      </article>
    </section>
    <section class="section">
      <article>
        <header>
          <a class="anchor" id="about"></a>
          <h1 class="title is-3">
            About
          </h1>
        </header>
        <div class="content is-medium mt-3">
          <p>
            My name is Jeff DeWitt and I have been programming for over 12 years. I first learned to program in High School and ended up graduating college with a Bachelors 
            in Computer Science. 
          </p>
          <p>  
            Since graduating, I took some odd jobs and landed in the IT Support/Administration field. I have been in this field since 2016. Throughout the years, my
            desire to continue programming compelled me to learn new programming techniques and languages on the side. 
          </p>
          <p>
            Through my time at Cutler Real Estate, I have had the opportunity to code several scripts in Python and NodeJS to help migrate data between software vendors. 
          </p>
          <p>
            My latest adventure involves co-founding a new company called Easy Earnest. I was tasked with building a web platform to process electronic earnest money payments. 
            This product helps revolutionize the last piece of Real Estate transactions that has not caught up to modern times, writing paper 
            checks to deposit earnest money. This platform was built with NodeJS, VueJS, PostgreSQL, and AWS.
          </p>
          <p>
            The top technologies that I work in are JavaScript, CSS, HTML, NodeJS, and VueJS. 
            I am also comfortable working in any databases such as MongoDB and PostgreSQL.
          </p>
        </div>
      </article>
    </section>
    <section class="section">
      <article>
          <header>
            <a class="anchor" id="portfolio"></a>
            <h1 class="title is-3"> Portfolio </h1>
          </header>
        <section class="section">
          <header>
            <h3 class="title is-5">
              Easy Earnest
            </h3>
            <h4 class="subtitle is-6">
              Payment forms, API and Dashboard.
            </h4>
          </header>
          <div class="columns mt-2">
            <div class="column">
              <a href="https://www.easyearnest.com/">
                <div class="img-container">
                  <img class="image" src="~/assets/imgs/EE_Dashboard.png" alt="Easy Earnest">
                  <div class="overlay" :class="{'show-overlay':showOverlay}">
                    <img class="image" src="~/assets/imgs/EE_Form_crop.png" alt="Easy Earnest">
                  </div>
                </div>
              </a>
            </div>
            <div class="column">
              <div class="content">
                <p>
                  Easy Earnest is an electronic earnest money payment platform for Real Estate transactions. This product solves the headaches involved with accepting paper checks for earnest money deposits.
                  Easy Earnest hopes to modernize the Real Estate industry by providing a platform for customers to use that is Fast, Secure and Easy! I had the pleasure of designing, building and maintaining
                  the dashboard and earnest money deposit forms.
                </p>
                <TechIcon :noIcon="false" :fasIcon="['fab', 'node-js']" tooltipText="NodeJS" />
                <TechIcon :noIcon="false" :fasIcon="['fab', 'vuejs']" tooltipText="VueJS" />
                <TechIcon :noIcon="false" :fasIcon="['fab', 'html5']" tooltipText="HTML5" />
                <TechIcon :noIcon="false" :fasIcon="['fab', 'sass']" tooltipText="SASS" />
                <TechIcon :noIcon="false" :fasIcon="['fab', 'aws']" tooltipText="AWS" />
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <header>
            <h3 class="title is-5">
              Theme for a Title Company
            </h3>
            <h4 class="subtitle is-6">
              Website Theme
            </h4>
          </header>
          <div class="columns mt-2">
            <div class="column">
              <a href="#">
                <div class="img-container">
                  <img class="image" src="~/assets/imgs/Title_Website_Services.png" alt="Title Website">
                  <div class="overlay" :class="{'show-overlay':showOverlay}">
                    <img class="image" src="~/assets/imgs/Title_Website.png" alt="Title Website">
                  </div>
                </div>
              </a>
            </div>
            <div class="column">
              <div class="content">
                <p>
                  This was made as a mock up for a new site. It is currently not deployed. It was built using NodeJS, ExpressJS, PugJS, and SASS.
                  It can be deployed at any time or converted to a theme for use in other CMS like Wordpress. It is also built using the Bulma framework.
                </p>
                <TechIcon :noIcon="false" :fasIcon="['fab', 'node-js']" tooltipText="NodeJS" />
                <TechIcon :noIcon="false" :fasIcon="['fab', 'html5']" tooltipText="HTML5" />
                <TechIcon :noIcon="false" :fasIcon="['fab', 'sass']" tooltipText="SASS" />
                <TechIcon :noIcon="true" :fasIcon="['fab', 'sass']" tooltipText="PUGJS" />
              </div>
            </div>
          </div>
        </section>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return {
      showOverlay: false,
    };
  },
  mounted(){
    setInterval(()=>{
      this.showOverlay = !this.showOverlay;
    },8000);
  }
}
</script>

<style lang="scss">


ul.no-style{
  list-style: none;

}

li.block-style{
  background: transparent;
  padding: 1rem;
  color: white;
  border: 1px solid white;
  border-left: 5px solid white;
}


.overlay{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  //height: 100%;
  width: 100%;
  opacity: 0;
  transition: 1.0s ease;
}

.img-container{
  position: relative;
  overflow-y: hidden;
}

.show-overlay{
  opacity: 1;
}

.anchor{
  display: block;
  visibility: hidden;
  top: -80px;
  position: relative;
}
</style>
