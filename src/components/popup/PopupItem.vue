<template>
  <div class="popup-item" ref="popup">
    <div class="popup-item__header">
      <span>{{ popupName }}</span>
      <span @click="closePopup"
        ><i class="material-icons">highlight_off</i></span
      >
    </div>
    <div class="popup-item__content">
      <slot name="content"></slot>
    </div>
    <div class="popup-item__footer">
      <button @click="closePopup">Close</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PopuoItem',
    props: {
      popupName: {
        type: String,
        default: 'Popup Name',
      },
    },
    methods: {
      closePopup() {
        this.$emit('closePopup')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .popup-item {
    padding: 0 15px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #636e72;
    box-shadow: 0 0 8px 0 #e0e0e0;
    border-radius: 5px;
    height: 100%;
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      span {
        font-size: 18px;
        i {
          cursor: pointer;
          color: $white;
        }
      }
    }
    &__footer {
      @extend .popup-item__header;
      button {
        cursor: pointer;
        padding: 7px 10px;
        background-color: $white;
        border-radius: 5px;
        border: none;
        outline: none;
        font-size: 17px;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      max-height: 400px;
      height: 100%;
    }
  }
</style>
