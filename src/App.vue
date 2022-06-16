<template>
  <Header />
  <router-view />
  <SvgSprite />
</template>

<script>
import SvgSprite from "@/components/global/SvgSprite";
import Header from "@/components/global/Header";

export default {
  name: 'App',
  components: {
    Header,
    SvgSprite,
  },
}
</script>
