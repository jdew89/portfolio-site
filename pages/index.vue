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
          <h1 class="title is-3">
            About
          </h1>
        </header>
        <div class="content is-medium mt-3">
          <p>
            My name is Jeff DeWitt and I have been programming for over 12 years. I first learned to program in High School and ended up graduating college with a Bachelors 
            in Computer Science. Since graduating, I took some odd jobs and landed in the IT Support/Administration field. I have been in this field since 2016. Throughout the years, my
            desire to continue programming compelled me to learn new programming techniques and languages on the side. 
          </p>
          <p>
            Through my time at Cutler Real Estate, I have had the opportunity to code several scripts in Python and NodeJS to help migrate data between software vendors. 
            My latest adventure involves co-founding a new company called Easy Earnest. I was tasked with building a web platform to process electronic earnest money payments. 
            This products help revolutionize the last piece of Real Estate transactions that has not caught up to modern times, writing paper 
            checks to deposit earnest money. This platform was build on NodeJS, VueJS, PostgreSQL, and AWS.
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
                <img class="image" src="~/assets/imgs/EE_Dashboard.png" alt="Easy Earnest Logo">
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
export default {}
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
</style>
