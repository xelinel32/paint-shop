<template>
  <div class="notification">
    <transition-group name="notify">
      <div
        class="notification__content"
        v-for="message in messages"
        :key="message.id"
      >
        <p class="notification__text">
          <i class="material-icons">{{ message.icon }}</i>
          {{ message.name }}
        </p>
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: 'Notification',
    props: {
      messages: {
        type: Array,
        requited: true,
        default() {
          return []
        },
      },
      duration: {
        type: Number,
        default: 3000,
      },
    },
    watch: {
      messages() {
        this.hideNotify()
      },
    },
    methods: {
      hideNotify() {
        if (this.messages.length) {
          setTimeout(() => {
            this.messages.splice(this.messages.length - 1, 1)
          }, this.duration)
        }
      },
    },
    mounted() {
      this.hideNotify()
    },
  }
</script>

<style lang="scss" scoped>
  .notification {
    z-index: 20;
    width: 350px;
    position: fixed;
    top: 10%;
    right: 2%;
    overflow: hidden;
    &__content {
      padding: 15px 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      background-color: #4cd137;
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
    &__text {
      color: $white;
      font-size: 18px;
      display: flex;
      align-items: center;
      i {
        padding-right: 10px;
      }
    }
    .notify {
      &-enter-active {
        transition: all 0.3s ease;
      }
      &-leave-active {
        transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
      }
      &-enter,
      &-leave-to {
        transform: translateX(100%);
        opacity: 0;
      }
      &-move {
        transition: all 0.3s ease;
      }
    }
  }
</style>
