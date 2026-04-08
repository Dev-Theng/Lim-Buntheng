<script setup>
import { RouterLink } from 'vue-router'
import { siteData } from '@/data/siteData'

const openTelegram = (event) => {
  if (event) {
    event.stopImmediatePropagation()
  }
  window.open('https://t.me/Ch1k0_33', '_blank')
}
</script>

<template>
  <main class="main">
    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">
      <img src="/assets/img/hero-bg.jpg" alt="" data-aos="fade-in" class="" />

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <h2>{{ siteData.profile.name }}</h2>
        <p>
          I'm
          <span class="typed" :data-typed-items="siteData.heroTypedItems.join(',')">
            {{ siteData.heroTypedItems[0] }}
          </span>
          <span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
          <span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
        </p>
      </div>
    </section>
    <!-- /Hero Section -->

    <!-- About Section -->
    <section id="about" class="about section">
      <div class="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>{{ siteData.profile.aboutIntro }}</p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4 justify-content-center">
          <div class="col-lg-4">
            <img src="/assets/img/profile-img.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8 content">
            <h2>{{ siteData.profile.title }}</h2>
            <p class="fst-italic py-3">
              {{ siteData.profile.aboutLead }}
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Name:</strong>
                    <span>{{ siteData.profile.name }}</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Title:</strong>
                    <span>{{ siteData.profile.title }}</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>
                    <span>{{ siteData.profile.phone }}</span>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Location:</strong>
                    <span>{{ siteData.profile.location }}</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong>
                    <span>{{ siteData.profile.email }}</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>University:</strong>
                    <span>{{ siteData.profile.university }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <p class="py-3">
              {{ siteData.profile.aboutBody }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- /About Section -->

    <!-- Stats Section -->
    <section id="stats" class="stats section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
          <div class="col-lg-3 col-md-6" v-for="stat in siteData.stats" :key="stat.title">
            <div class="stats-item">
              <i :class="stat.icon"></i>
              <span
                data-purecounter-start="0"
                :data-purecounter-end="stat.end"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p><strong>{{ stat.title }}</strong> <span>{{ stat.subtitle }}</span></p>
            </div>
          </div>
          <!-- End Stats Item -->
        </div>
      </div>
    </section>
    <!-- /Stats Section -->

    <!-- Skills Section -->
    <section id="skills" class="skills section light-background">
      <div class="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Core strengths in communication and research.</p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row skills-content skills-animation">
          <div class="col-lg-6" v-for="skill in siteData.skills" :key="skill.name">
            <div class="progress">
              <span class="skill">
                <span>{{ skill.name }}</span> <i class="val">{{ skill.label }}</i>
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :aria-valuenow="skill.level"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <!-- End Skills Item -->
          </div>
        </div>
      </div>
    </section>
    <!-- /Skills Section -->

    <!-- Resume Section -->
    <section id="resume" class="resume section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Education, experience, and volunteer background.</p>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Summary</h3>

            <div class="resume-item pb-0">
              <h4>{{ siteData.resume.summary.name }}</h4>
              <p><em>{{ siteData.resume.summary.intro }}</em></p>
              <ul>
                <li>{{ siteData.resume.summary.location }}</li>
                <li>{{ siteData.resume.summary.phone }}</li>
                <li>{{ siteData.resume.summary.email }}</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item" v-for="item in siteData.resume.education" :key="item.title">
              <h4>{{ item.title }}</h4>
              <h5>{{ item.date }}</h5>
              <p><em>{{ item.org }}</em></p>
            </div>

            <h3 class="resume-title">Languages</h3>
            <div class="resume-item" v-for="item in siteData.resume.languages" :key="item.name">
              <h4>{{ item.name }}</h4>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 class="resume-title">Experience</h3>
            <div class="resume-item" v-for="item in siteData.resume.experience" :key="item.title + item.date">
              <h4>{{ item.title }}</h4>
              <h5>{{ item.date }}</h5>
              <p><em>{{ item.org }}</em></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Resume Section -->

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio section light-background">
      <div class="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Selected projects that showcase my work in web development and UI/UX. Each project highlights my role, the
          tools I used, and the impact of the solution.
        </p>
      </div>

      <div class="container">
        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li
              v-for="filter in siteData.portfolioFilters"
              :key="filter.label"
              :data-filter="filter.filter"
              :class="{ 'filter-active': filter.active }"
            >
              {{ filter.label }}
            </li>
          </ul>

          <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            <div
              class="col-lg-4 col-md-6 portfolio-item isotope-item"
              v-for="item in siteData.portfolioItems"
              :key="item.title + item.image"
              :class="item.filter"
            >
              <div class="portfolio-content h-100">
                <img :src="item.image" class="img-fluid" :alt="item.title" />
                <div class="portfolio-info">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                  <a :href="item.image" :title="item.title" :data-gallery="item.gallery" class="glightbox preview-link">
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <RouterLink :to="item.details" title="More Details" class="details-link">
                    <i class="bi bi-link-45deg"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
            <!-- End Portfolio Item -->
          </div>
        </div>
      </div>
    </section>
    <!-- /Portfolio Section -->

    <!-- Services Section -->
    <section id="services" class="services section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Core areas of my technical work and learning.</p>
      </div>

      <div class="container">
        <div class="row gy-4">
          <div
            class="col-lg-6 col-md-6 service-item d-flex"
            v-for="(service, index) in siteData.services"
            :key="service.title"
            data-aos="fade-up"
            :data-aos-delay="100 + index * 100"
          >
            <div class="icon flex-shrink-0"><i :class="service.icon"></i></div>
            <div>
              <h4 class="title">
                <RouterLink :to="service.link" class="stretched-link">{{ service.title }}</RouterLink>
              </h4>
              <p class="description">{{ service.description }}</p>
            </div>
          </div>
          <!-- End Service Item -->
        </div>
      </div>
    </section>
    <!-- /Services Section -->

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials section light-background">
      <div class="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Feedback from academic, volunteer, and work environments.</p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper init-swiper">
          <div class="swiper-config d-none" v-text="JSON.stringify(siteData.swiperConfig)"></div>
          <div class="swiper-wrapper">
            <!-- <div class="swiper-slide" v-for="item in siteData.testimonials" :key="item.name">
              <div class="testimonial-item">
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>{{ item.text }}</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
                <img :src="item.image" class="testimonial-img" :alt="item.name" />
                <h3>{{ item.name }}</h3>
                <h4>{{ item.role }}</h4>
              </div>
            </div> -->
            <!-- End testimonial item -->
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
    <!-- /Testimonials Section -->

    <!-- Contact Section -->
    <section id="contact" class="contact section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Feel free to contact me through the details below.</p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
          <div class="col-lg-5">
            <div class="info-wrap">
              <div
                class="info-item d-flex"
                v-for="(item, index) in siteData.contactItems"
                :key="item.title"
                data-aos="fade-up"
                :data-aos-delay="200 + index * 100"
              >
                <i :class="item.icon + ' flex-shrink-0'"></i>
                <div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.value }}</p>
                </div>
              </div>
              <!-- End Info Item -->

              <iframe
                src="https://maps.google.com/maps?q=Phnom%20Penh%2C%20Cambodia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                style="border: 0; width: 100%; height: 270px;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div class="col-lg-7">
            <form
              action="#"
              method="post"
              class="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
              @submit.prevent="openTelegram"
            >
              <div class="row gy-4">
                <div class="col-md-6">
                  <label for="name-field" class="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" class="form-control" required="" />
                </div>

                <div class="col-md-6">
                  <label for="email-field" class="pb-2">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email-field" required="" />
                </div>

                <div class="col-md-12">
                  <label for="subject-field" class="pb-2">Subject</label>
                  <input type="text" class="form-control" name="subject" id="subject-field" required="" />
                </div>

                <div class="col-md-12">
                  <label for="message-field" class="pb-2">Message</label>
                  <textarea class="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          <!-- End Contact Form -->
        </div>
      </div>
    </section>
    <!-- /Contact Section -->
  </main>
</template>
