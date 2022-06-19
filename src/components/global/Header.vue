<template>
  <header class="header">
    <div class="container">
      <div class="wrapper row">

        <router-link
            to="/"
            class="header__logo col-4"
            aria-label="Go to homepage"
        >
          <svg width="132" height="60" aria-hidden="true" role="img">
            <use xlink:href="#logotype"></use>
          </svg>
        </router-link>

        <nav class="header__menu col-8">
          <ul class="menu">
            <li class="menu__item">
              <router-link
                  to="/"
                  aria-label="Go to homepage"
                  class="link-button"
              >
                <svg width="24" height="24" aria-hidden="true" role="img">
                  <use xlink:href="#home-icon"></use>
                </svg>
              </router-link>
            </li>

            <li class="menu__item">
              <a
                  href="#"
                  aria-label="Go to homepage"
                  class="link-button"
              >
                <svg width="24" height="24" aria-hidden="true" role="img">
                  <use xlink:href="#add-post-icon"></use>
                </svg>
              </a>
            </li>
          </ul>
          <router-link
              to="/profile/your-profile"
              class="avatar"
          >
            <img :src="getCurrentUserData.avatar" alt="profile-photo">
          </router-link>
        </nav>

      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "HeaderComponent",

  computed: {
    ...mapGetters( [
      'getCurrentUserData'
    ] ),
  },
}
</script>