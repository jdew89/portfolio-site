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
          <h1 class="title is-3"> Experience </h1>
        </header>
        <section class="section">
          <header>
            <h3 class="title is-5">
              Easy Earnest
            </h3>
            <h4 class="subtitle is-6">
              Co-Founder and Full Stack Engineer
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
                <TechIcon :fasIcon="['fab', 'node-js']" tooltipText="NodeJS" />
                <TechIcon :fasIcon="['fab', 'vuejs']" tooltipText="VueJS" />
                <TechIcon :fasIcon="['fab', 'html5']" tooltipText="HTML5" />
                <TechIcon :fasIcon="['fab', 'sass']" tooltipText="SASS" />
                <TechIcon :fasIcon="['fab', 'aws']" tooltipText="AWS" />

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
}

.show-overlay{
  opacity: 1;
}
</style>
