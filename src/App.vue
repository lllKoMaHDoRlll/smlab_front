<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 
import { useStore } from './store';
import locale from './locales/locales';

const router = useRouter();

const store = useStore();
store.fetchArticles();

const menuItems = ref([
  {
    label: locale.menu.articles,
    items: [
      {
        label: locale.menu.list,
        icon: 'pi pi-plus',
        command: () => {
          router.push("/articles");
        }
      },
      {
        label: locale.menu.new,
        icon: 'pi pi-plus',
        command: () => {
          router.push("/articles/new");
        }
      }
    ]
  },
  {
    label: locale.menu.other,
    items: [
      {
        label: locale.menu.carousel,
        icon: 'pi pi-plus',
        command: () => {
          router.push("/carousel");
        }
      },
      {
        label: locale.menu.table,
        icon: 'pi pi-plus',
        command: () => {
          router.push("/table");
        }
      },
      {
        label: locale.menu.list,
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
    max-height: 100%;
    padding: 2em;
    flex-direction: row;
    justify-content: space-between;
    gap: 3em;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
  }
}
</style>
