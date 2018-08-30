<template>
    <div>
        <el-dialog 
        :title="title" 
        :visible.sync="visiable" 
        :show="show" 
        width="30%" 
        :data="dataList" 
         @close="$emit('update:show', false)"
          center>
            <!-- main body -->
            <slot name="main"></slot>
            <!-- footer 外层slot="footer" class="dialog-footer" 使用elemet样式 使得按钮居中 -->
            <span slot="footer" class="dialog-footer">
                <slot name="footer"></slot>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
  name: "CommonDialog",
  data(){
      return{
          visiable:this.show
      }
  },
  props:{
      show:{
          type: Boolean
      },
      title: {
          type:String
      },
      dataList:{
          type:Array
      }
  },
  watch:{
      show(){
          this.visiable = this.show
      }
  }
};
</script>

