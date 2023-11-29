<template>
	<div class="index_back">
		<el-row>
		    <el-col :span="24"><div class="grid-content ep-bg-purple-dark">我的功能表</div></el-col>
		  </el-row>
		  <el-row :gutter="20">
		      <el-col :span="8">
				<el-card :body-style="cardStyle" @click="clickOpenAddressCard()">
				        <img src="../assets/img/logo.png" class="image" />
				        <div class="card-title">
				          <span>打开网址</span>
				        </div>
				      </el-card>
			  </el-col>
			  <el-col :span="8">
			  			<el-card :body-style="cardStyle" @click="clickAIPaintingCard()">
			  			        <img src="../assets/img/logo.png" class="image" />
			  			        <div class="card-title">
			  			          <span>智能AI绘画</span>
			  			        </div>
			  			      </el-card>
			  </el-col>
			  <el-col :span="8">
			  			<el-card :body-style="cardStyle" @click="clickOterCard()">
			  			        <img src="../assets/img/logo.png" class="image" />
			  			        <div class="card-title">
			  			          <span>其他2</span>
			  			        </div>
			  			      </el-card>
			  </el-col>
		    </el-row>
	</div>
		
</template>

<script>
	import axios from 'axios'
	export default {
	  data() {
		return {
		  cards: [],
		  cardStyle: { padding: '0px',height:'130px',background:'#ecf5ff' }
		}
	  },
	  mounted() {
		  // this.getCards()
	  },
	  methods: {
		  // getCards() {
			 //  axios.get("./jsondata/card_data.json")
			 //  .then((response)=>{
				//   this.cards = response.data.cards
			 //  })
		  // },
		  clickOpenAddressCard() {
			  this.$router.push('/openPage')
		  },
		  clickAIPaintingCard() {
			  this.$router.push('/aiPainting')
		  },
		  clickOterCard() {
			  alert("其他")
		  }
	  }
	}
</script>

<style>
.index_back {
	
}
.card-title {
  font-size: 12px;
  color: #000;
  margin: 2px 0px;
  text-align: center;
  
}

.grid-content {
	  border-radius: 4px;
	  min-height: 30px;
	  background-color: aquamarine;
	  text-align: center;
	  margin-bottom: 2rem;
	}

.image {
  width: 100%;
  display: block;
}
</style>

<!-- <style>
	.el-row {
	  margin-bottom: 20px;
	}
	.el-row:last-child {
	  margin-bottom: 0;
	}
	.el-col {
	  border-radius: 4px;
	}
	
	.grid-content {
	  border-radius: 4px;
	  min-height: 36px;
	  background-color: aquamarine;
	}
</style> -->