<script setup lang="ts">


</script>

<template>
  <meta charset="UTF-8">
<!-- /* From Uiverse.io by Yaya12085 */  -->
    <div class="card">
          <div class="header">
            <div class="rating">5</div>
            <div>
              <div class="stars">
                <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
              </div>
              <p class="name">Club Name</p>
            </div>
          </div>

          <ul class="message">
            <p><b>Location: </b>place</p>
            <p><b>Time: </b>time</p>
            <p>Club description. Lorem ipsum!</p>
          </ul>
    </div>

</template>

<style scoped>


/* From Uiverse.io by Yaya12085 */ 
.card {
  margin: 0.5rem;
  background-color: rgba(243, 244, 246, 1);
  padding: 2rem;
  max-width: 320px;
  border-radius: 10px;
  box-shadow: 0 20px 30px -20px rgba(5, 5, 5, 0.24);
}

.header {
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  gap: 1rem;
}

.header .rating {
  height: 4rem;
  width: 4rem;
  border-radius: 9999px;
  background-color: royalblue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: larger;
  font-weight: 600;
}

.stars {
  display: flex;
  justify-content: center;
  grid-gap: 0.125rem;
  gap: 0.125rem;
  color: rgba(34, 197, 94, 1);
}

.stars svg {
  height: 1rem;
  width: 1rem;
}

.name {
  margin-top: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, 1);
}

.message {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-top: 1rem;
  color: rgba(107, 114, 128, 1);
}

</style>