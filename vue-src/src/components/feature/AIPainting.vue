<template>
	<el-page-header @back="goBack" title="返回">
	    <template #content>
	      <span class="text-large font-600 mr-3"> AI绘画 </span>
	    </template>
	  </el-page-header>
	<el-form ref="form" :model="form" label-width="80px">
		<el-form-item label="生成AI绘画描述:">
		      <el-input v-model="form.imgTxt" type="textarea" />
		</el-form-item>
		<el-form-item label="绘画风格:">
		      <el-select v-model="form.style" placeholder="请选择绘画风格">
		        <el-option label="探索无限" value="探索无限" />
		        <el-option label="古风" value="古风" />
				<el-option label="二次元" value="二次元" />
				<el-option label="写实风格" value="写实风格" />
				<el-option label="浮世绘" value="浮世绘" />
				<el-option label="low poly" value="low poly" />
				<el-option label="未来主义" value="未来主义" />
				<el-option label="像素风格" value="像素风格" />
				<el-option label="概念艺术" value="概念艺术" />
				<el-option label="赛博朋克" value="赛博朋克" />
				<el-option label="洛丽塔风格" value="洛丽塔风格" />
				<el-option label="巴洛克风格" value="巴洛克风格" />
				<el-option label="超现实主义" value="超现实主义" />
				<el-option label="水彩画" value="水彩画" />
				<el-option label="蒸汽波艺术" value="蒸汽波艺术" />
				<el-option label="油画" value="油画" />
				<el-option label="卡通画" value="卡通画" />
		      </el-select>
		    </el-form-item>
		<el-form-item label="生成图片宽高比:"> 
		      <el-radio-group v-model="form.ratio">
		        <el-radio label="1:1" />
		        <el-radio label="3:2" />
				<el-radio label="2:3" />
		      </el-radio-group>
		</el-form-item>
		<el-form-item>
		      <el-button type="primary" @click="onCreate" :loading="butLoading">生成</el-button>
		      <el-button>重置</el-button>
		    </el-form-item>
	</el-form>
	<div>
		生成结果：
	</div>
	<div class="demo-image__placeholder">
	  <div class="block">
	    <el-image :src="src"
		:preview-src-list="imgUrls">
			<div slot="error" class="image-slot">
				<i class="el-icon-picture-outline"></i>
			</div>
	    </el-image>
	  </div>
	</div>
</template>

<script>
	import axios from 'axios'
	 export default {
	    data() {
	      return {
	        form: {
	          imgTxt: '',
	          appKey: '650b999203abd6bee56f02bf',
	          uid: '6hUpEh1695259026563eHESnmRN1g',
	          style: '',
	          ratio: ''
	        },
			src: '',
			imgUrls: [],
			butLoading: false,
	      }
	    },
	    methods: {
			goBack(){
				this.$router.go(-1)
			},
	      onCreate() {
			 this.butLoading = true;
	        axios.post("https://luckycola.com.cn/aiImg/getAiImage",this.form).then(response => {
				console.log(response);
				var req = response.data;
				if(req.code == 0) {
					if(req.data && req.data.result) {
						var tempImgUrls = req.data.result.imgUrls;
						this.src = req.data.result.img;
						tempImgUrls.forEach(img => {
							this.imgUrls = [];
							this.imgUrls.push(img.image);
						})
					}
				}else{
					alert(req.msg);
				}
				this.butLoading = false;
			})
	      }
	    }
	  }
</script>

<style>
</style>