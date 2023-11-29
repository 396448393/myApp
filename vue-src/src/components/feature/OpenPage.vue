<template>
	<el-page-header @back="goBack" title="返回">
	    <template #content>
	      <span class="text-large font-600 mr-3"> 打开网页 </span>
	    </template>
	  </el-page-header>
	<div class="input_class">
		<el-row :gutter="10">
		    <el-col :span="20">
				<div>
					<el-input v-model="input" placeholder="请输入网址" />
				</div>
			</el-col>
		    <el-col :span="2">
				<div>
					<el-button type="primary" @click="clickBut()">跳转</el-button>
				</div>
			</el-col>
		  </el-row>
	</div>
	<div class="input_class">
		<el-table :data="tableData" style="width: 100%">
		    <el-table-column prop="address" label="链接">
				<template #default="scope">
				  <el-link type="primary" @click="clickLink(scope.row.address)">{{scope.row.address}}</el-link>
				</template>
			</el-table-column>
			<el-table-column label="操作">
			      <template #default="scope">
			        <el-button
			          size="small"
			          type="danger"
			          @click="handleDelete(scope.$index, scope.row)"
			          >删除</el-button
			        >
			      </template>
			    </el-table-column>
		  </el-table>
	</div>
</template>

<script>
	export default {
		  data() {
			return {
			  input: '',
			  tableData : [
			    {
			      address: 'https://www.baidu.com/',
			    },
			    {
			      address: 'https://www.baidu.com/',
			    },
			    {
			      address: 'https://www.baidu.com/',
			    },
			    {
			      address: 'https://www.baidu.com/',
			    },
			  ]
			}
		  },
		  mounted() {
			  
		  },
		  methods: {
			 goBack(){
			 	this.$router.go(-1)
			 },
			 clickBut(){
				 // alert(this.input)
				 cordova.InAppBrowser.open(this.input,"_blank","location=yes");
			 },
			 handleDelete(index,row){
				 // alert(row)
			 },
			 clickLink(address) {
				 // alert(address)
				 cordova.InAppBrowser.open(address,"_blank","location=yes");
			 }
		  }
		}
</script>

<style>
	.input_class {
		margin-top: 2rem;
	}
</style>