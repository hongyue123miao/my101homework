<template>
    <div>
        <slot name='hole1'></slot>
        <slot name='hole2'></slot>
        <slot name='hole3'></slot>
    </div>
  
</template>

<script>
export default {

};
</script>

<style lang='less'>
    .musicchildLi{
        display: flex;
        align-items: center;
        border-bottom: 1px solid gainsboro;
        img{
            width: 100/100rem;
            height: 100/100rem;
        }
    }
</style>

