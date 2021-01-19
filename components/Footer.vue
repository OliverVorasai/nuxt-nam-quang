<template>
  <v-container fluid>
    <TopCalligraphyDivider />
    <v-row justify="center" align="center" class="mt-16" no-gutters>
      <v-col cols="12" md="8">
        <v-row class="footer-text-container my-6" no-gutters>
          <v-col cols="12" md="4">
            <div>
              <h4>Title</h4>
              <p>Something</p>
              <p>Something</p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div>
              <h4>Title</h4>
              <p>Something</p>
              <p>Something</p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div>
              <h4>Title</h4>
              <p>Something</p>
              <p>Something</p>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="footer-text-container my-6" justify="end" no-gutters>
          <strong>Nam Quang Temple</strong>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.container {
  position: relative;
  background-image: linear-gradient(#292e49, #536976);
  opacity: 0.85;
}
.footer-text-container {
  position: relative;
  color: white;
  margin-left: 5%;
  margin-right: 5%;
}
.v-divider {
  border-color: rgba(0, 0, 0, 0.42);
}
</style>
