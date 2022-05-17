<template>
  <div class="menu-button">
      <button type="button" :class="['hamburger', isActive ? 'active' : '']" @click="callback">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
      </button>
  </div>

</template>

<script>
export default {
    name: 'MenuButton',
    props: {
        callback: { type: Function, default: () => {} },
        clicked: { type: Boolean, default: false}
    },
    data() {
        return {
            isActive: false,
        }
    },
    watch: {
        clicked() {
            console.log('clicado');
            this.isActive = !this.isActive;

        }
    }

}
</script>

<style scoped>

.menu-button {
    margin-left: 5px;
    display: flex;
    width: 40px;
    justify-content: center;
}

.hamburger {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
}

.hamburger .line {
    display: block;
    width: 40px;
    height: 3px;
    background-color: var(--primary-font-color);
    margin-block: 10px;
    border-radius: 4px;
    transition: transform .5s;
    opacity: .25s;
}

.hamburger.active .line:nth-child(1){
    transform: translateY(13px)
    rotate(45deg);
}
.hamburger.active .line:nth-child(3){
    transform: translateY(-13px)
    rotate(-45deg);
}

</style>