<template>
  <div>
    <el-button @click="open">打开弹框common table</el-button>
    <common-dialog :show.sync="dialogCommonVisible" title="我是table啊">
      <template slot="main">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </template>
      <span slot="footer">
        <el-button type="warn" @click="cancelTableDialog">取消</el-button>
        <el-button type="success" @click="saveTableDialog">保存</el-button>
      </span>
    </common-dialog>

    <el-button @click="open1">打开弹框common form</el-button>
    <common-dialog :show.sync="dialogCommonFormVisible" title="我是表格啊">
      <template slot="main">
        <el-form :data="formData">
          <el-form-item label="姓名">
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="formData.age"></el-input>
          </el-form-item>
        </el-form>
      </template>
      <span slot="footer">
        <el-button type="warn" @click="cancelFormDialog">取消</el-button>
        <el-button type="success" @click="saveFormDialog">保存</el-button>
      </span>
    </common-dialog>

    <layout-nav></layout-nav>

    <!-- <dia  :show.sync="dialogCommonVisible"></dia> -->
    <!-- <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span>这是一段信息</span>

            <el-row>
                <el-button disabled>默认按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
            </el-row>

            <el-row>
                <el-button plain disabled>朴素按钮</el-button>
                <el-button type="primary" plain disabled>主要按钮</el-button>
                <el-button type="success" plain disabled>成功按钮</el-button>
                <el-button type="info" plain disabled>信息按钮</el-button>
                <el-button type="warning" plain disabled>警告按钮</el-button>
                <el-button type="danger" plain disabled>危险按钮</el-button>
            </el-row>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog> -->

  </div>

</template>
<script>
import CommonDialog from "../dialog/commonDialog.vue";
import LayoutNav from "./layoutNav.vue"
export default {
  name: "TestEle",
  data() {
    return {
      dialogVisible: false,
      dialogCommonVisible: false,
      dialogCommonFormVisible: false,
      title: "common dialog",
      formData: {
        name: "wgy",
        age: "25"
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  components: { CommonDialog ,LayoutNav },
  methods: {
    open() {
      this.dialogCommonVisible = true;
    },
    open1() {
      this.dialogCommonFormVisible = true;
    },
    handleClose() {
      this.dialogVisible = false;
    },
    close() {
      this.dialogCommonVisible = false;
    },
    saveTableDialog() {
      this.dialogCommonVisible = false;
    },
    cancelTableDialog() {
      alert("cancel");
    },
    cancelFormDialog() {
      alert(" form  cancel");
    },
    saveFormDialog() {
      this.dialogCommonFormVisible = false;
    }
  }
};
</script>

<style>
.el-row {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>


