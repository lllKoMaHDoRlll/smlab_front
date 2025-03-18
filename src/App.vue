<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 

const router = useRouter();

const menuItems = ref([
  {
    label: 'Articles',
    items: [
      {
        label: 'List',
        icon: 'pi pi-plus',
        command: () => {
          router.push("/articles");
        }
      },
      {
        label: 'New',
        icon: 'pi pi-plus',
        command: () => {
          router.push("/articles/new");
        }
      }
    ]
  },
  {
    label: 'Other',
    items: [
      {
        label: 'Carousel',
        icon: 'pi pi-plus',
        command: () => {
          router.push("/carousel");
        }
      },
      {
        label: 'Table',
        icon: 'pi pi-plus',
        command: () => {
          router.push("/table");
        }
      },
      {
        label: 'List',
        icon: 'pi pi-plus',
        command: () => {
          router.push("/list");
        }
      }
    ]
  }
])
</script>

<template>
  <main>
    <div class="content">
      <RouterView/>
    </div>
    <Menu :model="menuItems" class="menu"/>
  </main>
</template>

<style>
main {
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  gap: 1em;
  align-items: center;
}

.menu {
  max-width: 100px;
}

@media screen and (width >= 980px) {
  main {
    width: 100%;
    height: 100%;
    padding: 2em;
    flex-direction: row;
    justify-content: space-between;
    gap: 3em;
  }

  .content {
    width: 100%;
  }
}
</style>
