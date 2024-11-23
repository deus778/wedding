<template>
  <div
    class="flex min-h-screen animate-fadeIn flex-col items-center bg-orange-100 py-20 text-center"
  >
    <div>
      <h1 class="font-[Edwardian] text-5xl font-bold text-gray-800 md:text-7xl">Save The Date!</h1>
      <p class="text-xl text-gray-600">We are delighted to invite you to our wedding!</p>
    </div>

    <!-- Castle Image -->
    <div class="max-w-screen-md px-2">
      <img src="./assets/images/castle.png" alt="Wedding Venue" />
    </div>

    <!-- Wedding Information -->
    <div class="mt-8 w-full max-w-3xl rounded-lg">
      <h2 class="pb-8 font-[Edwardian] text-5xl text-gray-800 md:text-7xl">
        Irman & Graciel Angelica
      </h2>
      <h2 class="mb-4 pb-2 font-[Edwardian] text-5xl font-semibold text-gray-800">The Details</h2>
      <p class="-mt-4 text-lg text-gray-700"><strong>Date:</strong> Friday, June 26, 2026</p>
      <div class="flex items-center justify-center">
        <p class="text-lg text-gray-700">
          <strong>Location:</strong>
          <!-- Bind the dynamic link to the 'href' attribute -->
          <a :href="mapsLink" target="_blank">The Beautiful Castle of Langenburg</a>
        </p>
        <img
          class="hidden max-w-10 md:block"
          src="./assets/icons/reshot-icon-maps-2L9AVNJ3P5.svg"
        />
      </div>
    </div>

    <!-- RSVP Note -->
    <footer class="mt-8 w-full max-w-3xl">
      <p class="text-lg text-gray-600">
        Further details on RSVP will be communicated at a later point.
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'App',

  setup() {
    const mapsLink = computed(() => {
      const userAgent = navigator.userAgent

      if (/android/i.test(userAgent)) {
        return 'https://maps.app.goo.gl/B7XfYy2G8HsHRhej6'
      } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        return 'https://maps.apple.com/?address=Schlo%C3%9F%201,%2074595%20Langenburg,%20Germany&auid=13436077826222036080&ll=49.253071,9.843816&lsp=9902&q=Schloss%20Langenburg'
      } else {
        return 'https://maps.app.goo.gl/B7XfYy2G8HsHRhej6'
      }
    })

    return {
      mapsLink,
    }
  },
})
</script>

<style scoped>
/* Add your styles here */
</style>
