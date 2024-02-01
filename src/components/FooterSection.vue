<template>
  <div class="footer">Handcrafted by Alwyn Barnard &copy; {{ new Date().getFullYear() }}</div>
</template>

<style scoped>
.footer {
  background-color: var(--primary-button-color);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 0.625rem 0.625rem 1.25rem;
  font-weight: bold;
}
</style>
